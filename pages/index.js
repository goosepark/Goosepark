import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Play, Pause, Music, Wallet, ExternalLink, Heart, Share2, ArrowRight, Disc3 } from 'lucide-react'
import toast from 'react-hot-toast'

// Your music NFT collections - replace with your actual collection data
const musicCollections = [
  {
    id: 1,
    name: "Digital Dreams Collection",
    description: "An ethereal journey through digital landscapes and electronic soundscapes",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    openseaUrl: "https://opensea.io/collection/your-digital-dreams-collection",
    contractAddress: "0x...", // Your contract address
    totalSupply: 100,
    floorPrice: "0.05",
    currency: "ETH",
    genre: "Electronic",
    year: "2024",
    featured: true
  },
  {
    id: 2,
    name: "Neon Nights Series",
    description: "Synthetic beats and retro-futuristic vibes for the urban explorer",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop",
    openseaUrl: "https://opensea.io/collection/your-neon-nights-series",
    contractAddress: "0x...", // Your contract address
    totalSupply: 50,
    floorPrice: "0.08",
    currency: "ETH",
    genre: "Synthwave",
    year: "2024",
    featured: true
  },
  {
    id: 3,
    name: "Cosmic Waves",
    description: "Ambient soundscapes from the depths of space and beyond",
    cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    openseaUrl: "https://opensea.io/collection/your-cosmic-waves",
    contractAddress: "0x...", // Your contract address
    totalSupply: 25,
    floorPrice: "0.12",
    currency: "ETH",
    genre: "Ambient",
    year: "2024",
    featured: false
  },
  {
    id: 4,
    name: "Underground Beats",
    description: "Raw, experimental sounds from the underground music scene",
    cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop",
    openseaUrl: "https://opensea.io/collection/your-underground-beats",
    contractAddress: "0x...", // Your contract address
    totalSupply: 75,
    floorPrice: "0.03",
    currency: "ETH",
    genre: "Experimental",
    year: "2024",
    featured: false
  }
]

export default function Home() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const [selectedCollection, setSelectedCollection] = useState(null)

  const openCollection = (collection) => {
    window.open(collection.openseaUrl, '_blank')
  }

  const copyContractAddress = (address) => {
    navigator.clipboard.writeText(address)
    toast.success('Contract address copied to clipboard!')
  }

  const formatPrice = (price, currency) => {
    return `${price} ${currency}`
  }

  const featuredCollections = musicCollections.filter(collection => collection.featured)
  const allCollections = musicCollections

  return (
    <>
      <Head>
        <title>Goosepark Music - NFT Collections</title>
        <meta name="description" content="Explore Goosepark's music NFT collections on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        {/* Header */}
        <header className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white font-display">Goosepark Music</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {isConnected ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-300">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </span>
                  <button
                    onClick={() => disconnect()}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => connect({ connector: connectors[0] })}
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  <Wallet className="h-4 w-4" />
                  <span>Connect Wallet</span>
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
              <span className="gradient-text">Music NFT</span>
              <br />
              <span className="gradient-text">Collections</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore my exclusive music NFT collections. Each piece is a unique digital 
              artwork paired with original music, available on the blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('collections').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors"
              >
                View Collections
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-xl font-semibold transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-12 text-center font-display">
              Featured Collections
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {featuredCollections.map((collection) => (
                <div key={collection.id} className="music-card rounded-2xl p-6 group">
                  <div className="relative mb-4">
                    <img
                      src={collection.cover}
                      alt={collection.name}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">{collection.name}</h4>
                      <p className="text-gray-300">{collection.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Disc3 className="h-4 w-4" />
                        <span>{collection.totalSupply} NFTs</span>
                      </span>
                      <span>{collection.genre}</span>
                      <span>{collection.year}</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="text-2xl font-bold text-purple-400">
                        Floor: {formatPrice(collection.floorPrice, collection.currency)}
                      </div>
                      
                      <button
                        onClick={() => openCollection(collection)}
                        className="flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                      >
                        <span>View on OpenSea</span>
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Collections */}
        <section id="collections" className="py-16 px-6 bg-gray-900 bg-opacity-50">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-12 text-center font-display">
              All Collections
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCollections.map((collection) => (
                <div key={collection.id} className="music-card rounded-2xl p-6 group">
                  <div className="relative mb-4">
                    <img
                      src={collection.cover}
                      alt={collection.name}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    {collection.featured && (
                      <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white">{collection.name}</h4>
                      <p className="text-gray-400 text-sm">{collection.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{collection.genre}</span>
                      <span>{collection.totalSupply} NFTs</span>
                      <span>{collection.year}</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="text-lg font-bold text-purple-400">
                        {formatPrice(collection.floorPrice, collection.currency)}
                      </div>
                      
                      <div className="flex space-x-2">
                        <button
                          onClick={() => copyContractAddress(collection.contractAddress)}
                          className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
                        >
                          Copy Contract
                        </button>
                        <button
                          onClick={() => openCollection(collection)}
                          className="flex items-center space-x-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                        >
                          <span>View</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="py-12 px-6 bg-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Music className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold text-white font-display">Goosepark Music</span>
            </div>
            <p className="text-gray-400 mb-4">
              Explore music NFT collections on the blockchain
            </p>
            <div className="flex justify-center space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
