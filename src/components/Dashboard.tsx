import React from 'react';
import { useAccount } from 'wagmi';
import Header from './Header';
import WalletOverview from './WalletOverview';
import TokenBalances from './TokenBalances';
import NFTGallery from './NFTGallery';
import RecentTransactions from './RecentTransactions';
import ConnectWallet from './ConnectWallet';

const Dashboard: React.FC = () => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return <ConnectWallet />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        {/* Background Pattern */}
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40`}></div>
        
        <div className="relative z-10">
          <Header />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="space-y-8">
              <WalletOverview />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <TokenBalances />
                <RecentTransactions />
              </div>
              
              <NFTGallery />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;