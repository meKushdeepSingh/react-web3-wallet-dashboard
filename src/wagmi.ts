import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Web3 Wallet Dashboard',
  projectId: '924659268c5d4cd2a6e0898fd2b8bf8d', // Get from WalletConnect Cloud
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: false,
  // Add metadata for better compatibility
  metadata: {
    name: 'Web3 Wallet Dashboard',
    description: 'A decentralized wallet dashboard',
    url: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }
});