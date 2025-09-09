// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract MusicMarketplace is Ownable, ReentrancyGuard {
    
    struct Listing {
        address nftContract;
        uint256 tokenId;
        address seller;
        uint256 price; // Price in ETH
        bool isActive;
    }
    
    mapping(bytes32 => Listing) public listings;
    mapping(address => mapping(uint256 => bytes32)) public nftToListing;
    
    uint256 public platformFee = 250; // 2.5% in basis points
    address public platformWallet;
    
    event NFTListed(
        bytes32 indexed listingId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        uint256 price
    );
    
    event NFTPurchased(
        bytes32 indexed listingId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address buyer,
        address seller,
        uint256 price
    );
    
    event ListingCancelled(
        bytes32 indexed listingId,
        address indexed nftContract,
        uint256 indexed tokenId
    );
    
    constructor() {
        platformWallet = msg.sender;
    }
    
    function listNFT(
        address _nftContract,
        uint256 _tokenId,
        uint256 _price
    ) external {
        require(_price > 0, "Price must be greater than 0");
        require(IERC721(_nftContract).ownerOf(_tokenId) == msg.sender, "Not the owner");
        require(IERC721(_nftContract).getApproved(_tokenId) == address(this) || 
                IERC721(_nftContract).isApprovedForAll(msg.sender, address(this)), 
                "Contract not approved");
        
        bytes32 listingId = keccak256(abi.encodePacked(_nftContract, _tokenId, msg.sender));
        
        listings[listingId] = Listing({
            nftContract: _nftContract,
            tokenId: _tokenId,
            seller: msg.sender,
            price: _price,
            isActive: true
        });
        
        nftToListing[_nftContract][_tokenId] = listingId;
        
        emit NFTListed(listingId, _nftContract, _tokenId, msg.sender, _price);
    }
    
    function purchaseNFT(
        address _nftContract,
        uint256 _tokenId
    ) external payable nonReentrant {
        bytes32 listingId = nftToListing[_nftContract][_tokenId];
        Listing storage listing = listings[listingId];
        
        require(listing.isActive, "Listing not active");
        require(msg.value >= listing.price, "Insufficient ETH payment");
        require(listing.seller != msg.sender, "Cannot buy your own NFT");
        
        // Calculate platform fee
        uint256 platformFeeAmount = (listing.price * platformFee) / 10000;
        uint256 sellerAmount = listing.price - platformFeeAmount;
        
        // Transfer NFT
        IERC721(_nftContract).safeTransferFrom(listing.seller, msg.sender, _tokenId);
        
        // Distribute ETH payments
        if (platformFeeAmount > 0) {
            payable(platformWallet).transfer(platformFeeAmount);
        }
        
        if (sellerAmount > 0) {
            payable(listing.seller).transfer(sellerAmount);
        }
        
        // Refund excess payment
        if (msg.value > listing.price) {
            payable(msg.sender).transfer(msg.value - listing.price);
        }
        
        // Deactivate listing
        listing.isActive = false;
        delete nftToListing[_nftContract][_tokenId];
        
        emit NFTPurchased(listingId, _nftContract, _tokenId, msg.sender, listing.seller, listing.price);
    }
    
    function cancelListing(address _nftContract, uint256 _tokenId) external {
        bytes32 listingId = nftToListing[_nftContract][_tokenId];
        Listing storage listing = listings[listingId];
        
        require(listing.isActive, "Listing not active");
        require(listing.seller == msg.sender, "Not the seller");
        
        listing.isActive = false;
        delete nftToListing[_nftContract][_tokenId];
        
        emit ListingCancelled(listingId, _nftContract, _tokenId);
    }
    
    function updateListingPrice(
        address _nftContract,
        uint256 _tokenId,
        uint256 _newPrice
    ) external {
        bytes32 listingId = nftToListing[_nftContract][_tokenId];
        Listing storage listing = listings[listingId];
        
        require(listing.isActive, "Listing not active");
        require(listing.seller == msg.sender, "Not the seller");
        require(_newPrice > 0, "Price must be greater than 0");
        
        listing.price = _newPrice;
    }
    
    function getListing(address _nftContract, uint256 _tokenId) external view returns (Listing memory) {
        bytes32 listingId = nftToListing[_nftContract][_tokenId];
        return listings[listingId];
    }
    
    function updatePlatformFee(uint256 _newFee) external onlyOwner {
        require(_newFee <= 1000, "Fee cannot exceed 10%");
        platformFee = _newFee;
    }
    
    function updatePlatformWallet(address _newWallet) external onlyOwner {
        require(_newWallet != address(0), "Invalid wallet address");
        platformWallet = _newWallet;
    }
    
    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
