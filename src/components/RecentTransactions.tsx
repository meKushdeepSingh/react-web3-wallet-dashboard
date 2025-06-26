import React from 'react';
import { Activity, ArrowUpRight, ArrowDownLeft, ExternalLink } from 'lucide-react';

const RecentTransactions: React.FC = () => {
  const mockTransactions = [
    {
      type: 'send',
      amount: '0.5 ETH',
      value: '$1,125.50',
      to: '0x742d...4e2a',
      hash: '0xabc123...def456',
      timestamp: '2 minutes ago',
      status: 'confirmed',
    },
    {
      type: 'receive',
      amount: '250 USDC',
      value: '$250.00',
      from: '0x9f3a...8b1c',
      hash: '0x789xyz...456abc',
      timestamp: '1 hour ago',
      status: 'confirmed',
    },
    {
      type: 'swap',
      amount: '100 UNI → 0.2 ETH',
      value: '$450.00',
      hash: '0x456def...789ghi',
      timestamp: '3 hours ago',
      status: 'confirmed',
    },
    {
      type: 'send',
      amount: '1000 LINK',
      value: '$13,500.00',
      to: '0x1a2b...9c8d',
      hash: '0xdef789...abc123',
      timestamp: '1 day ago',
      status: 'confirmed',
    },
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'send':
        return <ArrowUpRight className="h-4 w-4 text-red-400" />;
      case 'receive':
        return <ArrowDownLeft className="h-4 w-4 text-green-400" />;
      default:
        return <Activity className="h-4 w-4 text-blue-400" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'send':
        return 'border-red-500/30 bg-red-500/20';
      case 'receive':
        return 'border-green-500/30 bg-green-500/20';
      default:
        return 'border-blue-500/30 bg-blue-500/20';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-xl">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
        </div>
      </div>

      <div className="space-y-4">
        {mockTransactions.map((tx, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl border ${getTransactionColor(tx.type)}`}>
                  {getTransactionIcon(tx.type)}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-white capitalize">{tx.type}</h4>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      {tx.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{tx.amount}</p>
                  <p className="text-gray-400 text-xs">{tx.timestamp}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-white">{tx.value}</p>
                <div className="flex items-center space-x-1 text-gray-400">
                  <span className="text-xs">{tx.hash}</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-white/5 border border-white/20 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-white/10 transition-all duration-200">
        View All Transactions
      </button>
    </div>
  );
};

export default RecentTransactions;