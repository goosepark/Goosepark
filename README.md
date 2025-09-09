# 🎵 Goosepark Music - Blockchain Music Marketplace

A decentralized music marketplace built on Ethereum that allows artists to showcase and sell their music directly to fans using cryptocurrency. Built with Next.js, Solidity, and Web3 technologies.

## ✨ Features

- 🎵 **Music Showcase**: Beautiful, responsive interface to display your music
- 💰 **Blockchain Payments**: Purchase music with ETH using MetaMask, WalletConnect, or Coinbase Wallet
- 🎧 **Built-in Player**: Stream music directly in the browser
- 🏆 **NFT Ownership**: Each track is minted as an NFT for true ownership
- 💎 **Royalty System**: Automatic royalty distribution to artists
- 🔒 **Decentralized**: No middleman, direct artist-to-fan transactions
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
- Web3 wallet integration (MetaMask, WalletConnect, Coinbase)
- Responsive music player
- Modern UI with Tailwind CSS
- Real-time blockchain interactions

## 🎵 Adding Your Music

1. **Upload to IPFS**: Store your music files on IPFS for decentralization
2. **Update music data**: Edit the `musicData` array in `pages/index.js`
3. **Deploy smart contract**: Deploy the MusicMarketplace contract
4. **Mint tracks**: Use the contract to mint your tracks as NFTs

### Music Data Structure

```javascript
{
  id: 1,
  title: "Your Track Title",
  artist: "Your Artist Name",
  duration: "3:45",
  price: "0.05", // Price in ETH
  currency: "ETH",
  cover: "https://your-cover-image-url.com",
  audio: "/music/your-track.mp3", // or IPFS URL
  description: "Track description",
  genre: "Electronic",
  year: "2024"
}
```

## 🔧 Smart Contract Features

### MusicMarketplace Contract

- **Track Creation**: Mint music as NFTs with metadata
- **Purchase System**: Buy tracks with ETH
- **Royalty Distribution**: Automatic royalty payments to creators
- **Platform Fees**: Configurable platform fees
- **Ownership Transfer**: Transfer NFT ownership after purchase

### Key Functions

- `createTrack()`: Mint a new music NFT
- `purchaseTrack()`: Buy a track with ETH
- `updateTrackPrice()`: Change track price
- `toggleTrackSale()`: Enable/disable track sales

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

- MetaMask
- WalletConnect
- Coinbase Wallet
- Any WalletConnect-compatible wallet

## 🎨 Customization

### Styling
- Edit `tailwind.config.js` for theme customization
- Modify `styles/globals.css` for global styles
- Update colors, fonts, and animations

### Music Player
- Customize player controls in `pages/index.js`
- Add more audio formats support
- Implement playlist functionality

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
- Contact: [your-email@example.com](mailto:your-email@example.com)
- Twitter: [@goosepark](https://twitter.com/goosepark)

## 🎯 Roadmap

- [ ] Playlist creation and sharing
- [ ] Social features (likes, comments, follows)
- [ ] Advanced audio analytics
- [ ] Mobile app (React Native)
- [ ] Multi-chain support (Polygon, BSC)
- [ ] Streaming subscriptions
- [ ] Artist dashboard
- [ ] Music discovery algorithms

---

**Built with ❤️ by Goosepark**

*Empowering artists through blockchain technology*