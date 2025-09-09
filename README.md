# 🎵 Goosepark Music - NFT Collection Showcase

A clean, simple platform to showcase your existing music NFT collections on both Ethereum and Solana blockchains. Built with Next.js and Web3 technologies.

## ✨ Features

- 🎵 **Collection Showcase**: Beautiful, responsive interface to display your music NFT collections
- 💰 **Multi-Blockchain Support**: Purchase with ETH (MetaMask) or SOL (Phantom)
- 🔗 **Easy Navigation**: Direct links to OpenSea and Magic Eden marketplaces
- 🏆 **Existing NFTs**: Showcase your already minted music NFT collections
- 💎 **Simple Pricing**: Clear ETH/SOL pricing for each collection
- 🔒 **Wallet Integration**: MetaMask and Phantom wallet support
- 📱 **Mobile Responsive**: Works perfectly on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn
- MetaMask or compatible Web3 wallet
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/goosepark/goosepark-music-marketplace.git
   cd goosepark-music-marketplace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   - Get a WalletConnect Project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com/)
   - Add your Infura/Alchemy RPC URLs
   - Add your private key for deployment (optional)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development

### Smart Contract Development

1. **Compile contracts**
   ```bash
   npm run compile
   ```

2. **Run tests**
   ```bash
   npm run test
   ```

3. **Deploy to local network**
   ```bash
   npx hardhat node
   npm run deploy
   ```

4. **Deploy to testnet**
   ```bash
   npm run deploy:testnet
   ```

### Frontend Development

The frontend is built with Next.js and includes:
- Web3 wallet integration (MetaMask, Phantom)
- Collection showcase with pricing
- Modern UI with Tailwind CSS
- Direct marketplace integration

## 🎵 Adding Your Collections

1. **Update collection data**: Edit the `musicCollections` array in `pages/index.js`
2. **Add your contract addresses**: Update Ethereum and Solana addresses
3. **Set pricing**: Add ETH and SOL prices for each collection
4. **Update marketplace links**: Add your OpenSea and Magic Eden URLs

### Collection Data Structure

```javascript
{
  id: 1,
  name: "Your Collection Name",
  description: "Your collection description",
  cover: "https://your-cover-image-url.com",
  openseaUrl: "https://opensea.io/collection/your-collection",
  magicEdenUrl: "https://magiceden.io/collections/your-collection",
  contractAddress: "0x...", // Your Ethereum contract address
  solanaAddress: "...", // Your Solana collection address
  totalSupply: 100,
  prices: {
    ETH: "0.05",
    SOL: "0.15"
  },
  genre: "Electronic",
  year: "2024",
  featured: true
}
```

## 🔧 Smart Contract Features

### MusicMarketplace Contract

- **NFT Listing**: List existing NFTs for sale
- **Purchase System**: Buy NFTs with ETH
- **Platform Fees**: Configurable platform fees
- **Ownership Transfer**: Transfer NFT ownership after purchase
- **Multi-Token Support**: Support for any ERC721 NFT

### Key Functions

- `listNFT()`: List an existing NFT for sale
- `purchaseNFT()`: Buy an NFT with ETH
- `updateListingPrice()`: Change listing price
- `cancelListing()`: Remove NFT from sale

## 🌐 Deployment

### Frontend (Vercel)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Smart Contract

1. **Testnet Deployment**
   ```bash
   npm run deploy:testnet
   ```

2. **Mainnet Deployment**
   ```bash
   npm run deploy:mainnet
   ```

## 📱 Supported Wallets

- **MetaMask** - Ethereum blockchain
- **Phantom** - Solana blockchain

## 🎨 Customization

### Styling
- Edit `tailwind.config.js` for theme customization
- Modify `styles/globals.css` for global styles
- Update colors, fonts, and animations

### Collection Display
- Customize collection cards in `pages/index.js`
- Add more collection metadata
- Implement filtering and sorting

### Smart Contract
- Adjust royalty percentages
- Modify platform fees
- Add new features like auctions or subscriptions

## 🔒 Security

- ReentrancyGuard protection
- Input validation
- Access control with Ownable
- Safe math operations

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

- Create an issue on GitHub
- Contact: [support@goosepark.org](mailto:support@goosepark.org)
- Twitter: [@goosepark](https://twitter.com/goosepark)

## 🎯 Roadmap

- [ ] Collection filtering and search
- [ ] Social features (likes, comments, follows)
- [ ] Advanced collection analytics
- [ ] Mobile app (React Native)
- [ ] Multi-chain support (Polygon, BSC)
- [ ] Collection rarity rankings
- [ ] Artist dashboard
- [ ] Collection discovery algorithms

---

**Built with ❤️ by Goosepark**

*Empowering artists through blockchain technology*
