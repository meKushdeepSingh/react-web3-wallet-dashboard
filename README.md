# 🚀 Web3 Wallet Dashboard

A beautiful, production-ready decentralized wallet dashboard built with React, TypeScript, and modern Web3 technologies. This application provides users with a unified interface to manage their crypto assets, view NFT collections, and track transaction history across multiple blockchain networks.

![Dashboard Preview](https://github.com/meKushdeepSingh/react-web3-wallet-dashboard/blob/main/src/assets/screenshots/Screenshot%202025-07-01%20at%205.12.00%E2%80%AFPM.png?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## ✨ Features

### 🔐 **Wallet Integration**

- **Secure Connection**: Seamless wallet connectivity via RainbowKit
- **Multi-Wallet Support**: Compatible with MetaMask, WalletConnect, and other popular wallets
- **Real-time Balance**: Live ETH balance fetching from connected wallet
- **Multi-Chain Ready**: Supports Ethereum, Polygon, Optimism, Arbitrum, Base, and Sepolia

### 📊 **Portfolio Management**

- **Portfolio Overview**: Comprehensive dashboard with key metrics and statistics
- **Token Balances**: Visual display of all token holdings with price changes
- **Real-time Updates**: Live balance and portfolio value tracking
- **Performance Metrics**: 24h changes and portfolio growth indicators

### 🖼️ **NFT Gallery**

- **Visual Collection**: Beautiful grid layout for NFT display
- **Collection Details**: Floor prices, estimated values, and metadata
- **Interactive Cards**: Hover effects and detailed view options
- **Collection Management**: Organized by collections with filtering capabilities

### 📈 **Transaction History**

- **Recent Activity**: Chronological transaction feed with visual indicators
- **Transaction Types**: Send, receive, and swap transactions with distinct styling
- **Status Tracking**: Real-time transaction status updates
- **External Links**: Direct links to blockchain explorers

### 🎨 **Modern UI/UX**

- **Glassmorphism Design**: Modern glass-like effects with backdrop blur
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark Theme**: Elegant dark theme with purple/blue gradients
- **Micro-interactions**: Smooth animations and hover states
- **Accessibility**: WCAG compliant with proper contrast ratios

## 🛠️ Tech Stack

### **Frontend**

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development with full IntelliSense
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

### **Web3 Integration**

- **wagmi** - React hooks for Ethereum development
- **RainbowKit** - Beautiful wallet connection UI and management
- **viem** - TypeScript interface for Ethereum interaction

### **Development Tools**

- **ESLint** - Code linting with React and TypeScript rules
- **PostCSS** - CSS processing with Tailwind and Autoprefixer
- **Yarn** - Fast, reliable package management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager
- A Web3 wallet (MetaMask recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd web3-wallet-dashboard
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Configure WalletConnect (Optional)**

   - Get a project ID from [WalletConnect Cloud](https://cloud.walletconnect.com)
   - Update `src/wagmi.ts` with your project ID:

   ```typescript
   projectId: "YOUR_PROJECT_ID";
   ```

4. **Start the development server**

   ```bash
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ConnectWallet.tsx    # Wallet connection landing page
│   ├── Dashboard.tsx        # Main dashboard layout
│   ├── Header.tsx          # Navigation header
│   ├── WalletOverview.tsx  # Portfolio summary cards
│   ├── TokenBalances.tsx   # Token holdings display
│   ├── RecentTransactions.tsx # Transaction history
│   └── NFTGallery.tsx      # NFT collection display
├── App.tsx              # Main app component with providers
├── main.tsx            # Application entry point
├── wagmi.ts            # Web3 configuration
├── index.css           # Global styles
└── vite-env.d.ts       # Vite type definitions
```

## 🎯 Component Overview

### **ConnectWallet**

Beautiful landing page that appears when no wallet is connected. Features:

- Compelling hero section with gradient backgrounds
- Feature highlights with icons and descriptions
- Prominent wallet connection button
- Responsive design with mobile optimization

### **Dashboard**

Main application interface with modular layout:

- Conditional rendering based on wallet connection status
- Glassmorphism background with subtle patterns
- Responsive grid system for optimal viewing
- Organized component hierarchy

### **WalletOverview**

Portfolio summary with key metrics:

- Real ETH balance from connected wallet
- Portfolio value calculations
- Token count and activity metrics
- Color-coded performance indicators

### **TokenBalances**

Token holdings management:

- Visual token list with icons and metadata
- Balance display with USD values
- Price change indicators with trend arrows
- Interactive hover states

### **RecentTransactions**

Transaction history display:

- Categorized transaction types (send/receive/swap)
- Visual status indicators
- Timestamp and value information
- Links to blockchain explorers

### **NFTGallery**

NFT collection showcase:

- Grid layout with responsive breakpoints
- Image optimization and loading states
- Collection metadata and floor prices
- Interactive cards with hover effects

## 🔧 Configuration

### **Supported Networks**

The application is configured to work with:

- **Ethereum Mainnet** - Primary network
- **Polygon** - Layer 2 scaling solution
- **Optimism** - Optimistic rollup
- **Arbitrum** - Arbitrum rollup
- **Base** - Coinbase's L2 network
- **Sepolia** - Ethereum testnet

### **Wallet Configuration**

RainbowKit is configured with:

- Custom app name and branding
- Multiple wallet connectors
- Chain switching capabilities
- Connection persistence

## 🎨 Design System

### **Color Palette**

- **Primary**: Blue to purple gradients
- **Secondary**: Green for positive values, red for negative
- **Neutral**: Slate grays for backgrounds and text
- **Accent**: Various colors for different token types

### **Typography**

- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with good readability
- **Captions**: Lighter weight for secondary information

### **Spacing**

- **Grid System**: 8px base unit for consistent spacing
- **Component Padding**: Generous padding for touch targets
- **Margins**: Consistent vertical rhythm

## 🚀 Deployment

### **Build for Production**

```bash
yarn build
```

### **Preview Production Build**

```bash
yarn preview
```

### **Deployment Platforms**

This application can be deployed to:

- **Vercel** - Recommended for React applications
- **Netlify** - Great for static site deployment
- **GitHub Pages** - Free hosting for open source projects
- **AWS S3** - Scalable cloud hosting

## 🔮 Future Enhancements

### **Planned Features**

- [ ] Real token price integration (CoinGecko API)
- [ ] Multi-chain portfolio aggregation
- [ ] Token transfer functionality
- [ ] Real NFT metadata fetching
- [ ] Push notifications for transactions
- [ ] Portfolio analytics and charts
- [ ] DeFi protocol integration
- [ ] Staking rewards tracking

### **Technical Improvements**

- [ ] Unit and integration testing
- [ ] Performance optimization
- [ ] PWA capabilities
- [ ] Offline functionality
- [ ] Advanced error handling
- [ ] Internationalization (i18n)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Development Guidelines**

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Write descriptive commit messages
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **RainbowKit** - For excellent wallet connection UX
- **wagmi** - For powerful React Web3 hooks
- **Tailwind CSS** - For rapid UI development
- **Lucide React** - For beautiful, consistent icons
- **Vite** - For blazing fast development experience

## 📞 Support

If you have any questions or need help:

- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Built with ❤️ for the Web3 community**
