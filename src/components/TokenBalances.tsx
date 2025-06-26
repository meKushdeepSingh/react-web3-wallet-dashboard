import React from 'react';
import { Coins, ChevronRight, TrendingUp, TrendingDown } from 'lucide-react';

const TokenBalances: React.FC = () => {
  const mockTokens = [
    {
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '1.2847',
      value: '$2,847.50',
      change: '+2.5%',
      positive: true,
      icon: '🔷',
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      balance: '5,420.50',
      value: '$5,420.50',
      change: '+0.1%',
      positive: true,
      icon: '💵',
    },
    {
      symbol: 'UNI',
      name: 'Uniswap',
      balance: '125.40',
      value: '$847.80',
      change: '-1.2%',
      positive: false,
      icon: '🦄',
    },
    {
      symbol: 'LINK',
      name: 'Chainlink',
      balance: '89.25',
      value: '$1,205.38',
      change: '+3.7%',
      positive: true,
      icon: '🔗',
    },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-xl">
            <Coins className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Token Balances</h3>
        </div>
        <button className="text-gray-300 hover:text-white transition-colors">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-4">
        {mockTokens.map((token, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-white/10 rounded-full w-12 h-12 flex items-center justify-center">
                  {token.icon}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-white">{token.symbol}</h4>
                    <span className="text-gray-400 text-sm">{token.name}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{token.balance} {token.symbol}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-white">{token.value}</p>
                <div className="flex items-center space-x-1">
                  {token.positive ? (
                    <TrendingUp className="h-3 w-3 text-green-400" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-400" />
                  )}
                  <span className={`text-sm ${token.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {token.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]">
        View All Tokens
      </button>
    </div>
  );
};

export default TokenBalances;