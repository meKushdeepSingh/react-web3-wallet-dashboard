import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Wallet, BarChart3 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Web3 Dashboard</h1>
              <p className="text-sm text-gray-300">Your digital assets at a glance</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
              <BarChart3 className="h-5 w-5" />
            </button>
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;