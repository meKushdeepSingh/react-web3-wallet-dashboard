import React from 'react';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';
import { Wallet, TrendingUp, DollarSign, Activity } from 'lucide-react';

const WalletOverview: React.FC = () => {
  const { address } = useAccount();
  const { data: balance } = useBalance({
    address,
  });

  const formatBalance = (value: bigint | undefined) => {
    if (!value) return '0.00';
    const formatted = formatEther(value);
    return parseFloat(formatted).toFixed(4);
  };

  const formatAddress = (address: `0x${string}` | undefined) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Wallet Overview</h2>
        <p className="text-gray-300">Connected: {formatAddress(address)}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-500/20 p-3 rounded-xl">
              <Wallet className="h-6 w-6 text-blue-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+2.5%</span>
          </div>
          <div>
            <p className="text-gray-300 text-sm mb-1">ETH Balance</p>
            <p className="text-2xl font-bold text-white">{formatBalance(balance?.value)}</p>
            <p className="text-gray-400 text-sm">≈ $2,847.50</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-500/20 p-3 rounded-xl">
              <DollarSign className="h-6 w-6 text-green-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+5.2%</span>
          </div>
          <div>
            <p className="text-gray-300 text-sm mb-1">Portfolio Value</p>
            <p className="text-2xl font-bold text-white">$12,847.50</p>
            <p className="text-gray-400 text-sm">24h change</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-500/20 p-3 rounded-xl">
              <TrendingUp className="h-6 w-6 text-purple-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">+12</span>
          </div>
          <div>
            <p className="text-gray-300 text-sm mb-1">Total Tokens</p>
            <p className="text-2xl font-bold text-white">24</p>
            <p className="text-gray-400 text-sm">Across 5 chains</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-500/20 p-3 rounded-xl">
              <Activity className="h-6 w-6 text-orange-400" />
            </div>
            <span className="text-green-400 text-sm font-medium">New</span>
          </div>
          <div>
            <p className="text-gray-300 text-sm mb-1">Recent Activity</p>
            <p className="text-2xl font-bold text-white">15</p>
            <p className="text-gray-400 text-sm">Last 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletOverview;