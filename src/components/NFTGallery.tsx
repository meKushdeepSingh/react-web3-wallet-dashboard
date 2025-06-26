import React from 'react';
import { Image, ExternalLink, Heart } from 'lucide-react';

const NFTGallery: React.FC = () => {
  const mockNFTs = [
    {
      name: 'Bored Ape #1234',
      collection: 'Bored Ape Yacht Club',
      image: 'https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      floorPrice: '15.2 ETH',
      value: '$34,200',
    },
    {
      name: 'CryptoPunk #5678',
      collection: 'CryptoPunks',
      image: 'https://images.pexels.com/photos/7104312/pexels-photo-7104312.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      floorPrice: '65.8 ETH',
      value: '$148,200',
    },
    {
      name: 'Azuki #9876',
      collection: 'Azuki',
      image: 'https://images.pexels.com/photos/8566528/pexels-photo-8566528.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      floorPrice: '8.9 ETH',
      value: '$20,025',
    },
    {
      name: 'Doodle #3456',
      collection: 'Doodles',
      image: 'https://images.pexels.com/photos/7104313/pexels-photo-7104313.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      floorPrice: '2.1 ETH',
      value: '$4,725',
    },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
            <Image className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">NFT Collection</h3>
        </div>
        <span className="text-gray-300 text-sm">4 items</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockNFTs.map((nft, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-black/50 backdrop-blur-sm p-2 rounded-lg text-white hover:text-red-400 transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="mb-3">
                <h4 className="font-semibold text-white text-sm mb-1">{nft.name}</h4>
                <p className="text-gray-400 text-xs">{nft.collection}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-xs">Floor Price</p>
                  <p className="font-semibold text-white text-sm">{nft.floorPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-300 text-xs">Est. Value</p>
                  <p className="font-semibold text-green-400 text-sm">{nft.value}</p>
                </div>
              </div>
              
              <button className="w-full mt-3 bg-white/5 border border-white/20 text-white text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-1 opacity-0 group-hover:opacity-100">
                <span>View Details</span>
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-[1.02]">
        View Full Collection
      </button>
    </div>
  );
};

export default NFTGallery;