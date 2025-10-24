"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Calendar,
  Wallet,
  PieChart,
  Activity,
  Bell,
  Target,
  Users,
  Trophy,
  BookOpen,
  MessageCircle,
  Shield,
  Smartphone,
  CreditCard,
  Zap,
  Brain,
  LineChart,
  TrendingDown,
  Plus,
  Minus,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  Eye,
  Settings,
  Download,
  Upload,
  RefreshCw,
  Lock,
  CheckCircle,
  AlertTriangle,
  Bot,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface PortfolioAsset {
  symbol: string;
  name: string;
  amount: number;
  price: number;
  change: number;
  changePercent: number;
  value: number;
  type: "stock" | "crypto" | "forex" | "commodity";
}

interface TradingPlatform {
  name: string;
  description: string;
  status: "Active" | "Available" | "Coming Soon";
  rating: number;
  features: string[];
  type: "stocks" | "crypto" | "forex" | "commodities" | "all";
  integration: string[];
}

const portfolioAssets: PortfolioAsset[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    amount: 10,
    price: 175.43,
    change: 2.34,
    changePercent: 1.35,
    value: 1754.3,
    type: "stock",
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    amount: 0.5,
    price: 43250.0,
    change: -1250.0,
    changePercent: -2.81,
    value: 21625.0,
    type: "crypto",
  },
  {
    symbol: "EUR/USD",
    name: "Euro/US Dollar",
    amount: 10000,
    price: 1.0856,
    change: 0.0023,
    changePercent: 0.21,
    value: 10856.0,
    type: "forex",
  },
  {
    symbol: "GOLD",
    name: "Gold",
    amount: 5,
    price: 2034.5,
    change: 12.75,
    changePercent: 0.63,
    value: 10172.5,
    type: "commodity",
  },
];

const tradingPlatforms: TradingPlatform[] = [
  {
    name: "TradePro Elite",
    description:
      "Advanced trading platform with real-time data and professional tools",
    status: "Active",
    rating: 4.9,
    type: "all",
    features: ["Real-time data", "Advanced charts", "Mobile app", "API access"],
    integration: ["MetaTrader 5", "TradingView", "Bloomberg"],
  },
  {
    name: "CryptoMax Pro",
    description: "Cryptocurrency trading with DeFi integration and staking",
    status: "Active",
    rating: 4.8,
    type: "crypto",
    features: [
      "Crypto trading",
      "DeFi access",
      "Staking rewards",
      "NFT support",
    ],
    integration: ["Binance", "Coinbase", "Uniswap"],
  },
  {
    name: "ForexMaster",
    description: "Professional forex trading with advanced analytics",
    status: "Available",
    rating: 4.7,
    type: "forex",
    features: [
      "Forex pairs",
      "Leverage trading",
      "Economic calendar",
      "Risk management",
    ],
    integration: ["OANDA", "FXCM", "IG Markets"],
  },
  {
    name: "CommodityTrader",
    description: "Commodities trading with futures and options",
    status: "Available",
    rating: 4.6,
    type: "commodities",
    features: ["Gold/Silver", "Oil/Gas", "Agricultural", "Futures trading"],
    integration: ["CME Group", "NYMEX", "CBOT"],
  },
  {
    name: "AI TradeBot",
    description: "AI-powered automated trading with machine learning",
    status: "Coming Soon",
    rating: 4.9,
    type: "all",
    features: [
      "Auto trading",
      "ML predictions",
      "Risk management",
      "Backtesting",
    ],
    integration: ["Custom API", "Third-party bots", "Signal providers"],
  },
];

const marketNews = [
  {
    title: "Federal Reserve Hints at Rate Cut",
    time: "2 hours ago",
    impact: "high",
    category: "Economic",
  },
  {
    title: "Bitcoin Reaches New Monthly High",
    time: "4 hours ago",
    impact: "medium",
    category: "Crypto",
  },
  {
    title: "Tech Stocks Rally on AI Optimism",
    time: "6 hours ago",
    impact: "high",
    category: "Stocks",
  },
  {
    title: "Oil Prices Rise on Supply Concerns",
    time: "8 hours ago",
    impact: "medium",
    category: "Commodities",
  },
];

const leaderboard = [
  { rank: 1, name: "TraderPro99", profit: "+$12,450", trades: 156 },
  { rank: 2, name: "CryptoKing", profit: "+$9,230", trades: 89 },
  { rank: 3, name: "ForexMaster", profit: "+$7,890", trades: 134 },
  { rank: 4, name: "StockGuru", profit: "+$6,540", trades: 98 },
  { rank: 5, name: "MarketWiz", profit: "+$5,210", trades: 76 },
];

export default function TradingPage() {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [selectedAsset, setSelectedAsset] = useState<PortfolioAsset | null>(
    null
  );
  const [showOrderForm, setShowOrderForm] = useState(false);

  const totalPortfolioValue = portfolioAssets.reduce(
    (sum, asset) => sum + asset.value,
    0
  );
  const totalGainLoss = portfolioAssets.reduce(
    (sum, asset) => sum + asset.change * asset.amount,
    0
  );

  const handleQuickTrade = (action: "buy" | "sell") => {
    setShowOrderForm(true);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-secondary-600 animate-glow" />
                <h1 className="text-4xl font-bold text-primary-900 tracking-tight">
                  Trading Dashboard
                </h1>
              </div>
              <p className="text-primary-700/80 text-lg font-light leading-relaxed">
                Professional trading platform with AI-powered insights and
                multi-asset support.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="inline-flex items-center px-6 py-3 bg-white border-2 border-primary-200 rounded-xl text-primary-700 font-semibold hover:bg-primary-50 hover:border-primary-300 hover:-translate-y-1 transition-all duration-300 shadow-soft">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-primary hover:-translate-y-1 transition-all duration-300 shadow-soft">
                <Plus className="w-4 h-4 mr-2" />
                New Trade
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Total Portfolio Value
                </p>
                <p className="text-3xl font-bold text-primary-900 mb-1">
                  ${totalPortfolioValue.toLocaleString()}
                </p>
                <p
                  className={`text-sm font-medium ${
                    totalGainLoss >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {totalGainLoss >= 0 ? "+" : ""}${totalGainLoss.toFixed(2)}{" "}
                  today
                </p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <DollarSign className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Active Positions
                </p>
                <p className="text-3xl font-bold text-primary-900 mb-1">
                  {portfolioAssets.length}
                </p>
                <p className="text-sm font-light text-primary-700/70">Across 4 asset classes</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <PieChart className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Success Rate
                </p>
                <p className="text-3xl font-bold text-primary-900 mb-1">87%</p>
                <p className="text-sm font-medium text-green-600">+5% this month</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  AI Recommendations
                </p>
                <p className="text-3xl font-bold text-primary-900 mb-1">12</p>
                <p className="text-sm font-medium text-primary-600">3 new today</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="card-luxury p-2">
          <nav className="flex space-x-2">
            {[
              { id: "portfolio", label: "Portfolio", icon: PieChart },
              { id: "trading", label: "Trading Platforms", icon: TrendingUp },
              { id: "analytics", label: "Analytics", icon: BarChart3 },
              { id: "community", label: "Community", icon: Users },
              { id: "education", label: "Education", icon: BookOpen },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-primary"
                    : "text-primary-700 hover:bg-primary-50 hover:text-primary-900"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Portfolio Tab */}
        {activeTab === "portfolio" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
                    Portfolio Overview
                  </h2>
                  <div className="flex gap-2">
                    <button className="inline-flex items-center px-4 py-2 bg-white border-2 border-primary-200 rounded-xl text-primary-700 text-sm font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all duration-300">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Refresh
                    </button>
                    <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl text-sm font-semibold hover:shadow-primary transition-all duration-300">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Asset
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {portfolioAssets.map((asset, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-5 bg-gradient-to-r from-primary-50/30 to-secondary-50/30 border-2 border-transparent rounded-2xl hover:border-primary-200 hover:shadow-soft transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            asset.type === "stock"
                              ? "bg-gradient-to-br from-primary-100 to-primary-200"
                              : asset.type === "crypto"
                              ? "bg-gradient-to-br from-secondary-100 to-secondary-200"
                              : asset.type === "forex"
                              ? "bg-gradient-to-br from-primary-100 to-primary-200"
                              : "bg-gradient-to-br from-secondary-100 to-secondary-200"
                          }`}
                        >
                          <span className="text-lg font-bold">
                            {asset.type === "stock"
                              ? "📈"
                              : asset.type === "crypto"
                              ? "₿"
                              : asset.type === "forex"
                              ? "💱"
                              : "🥇"}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-primary-900">
                            {asset.symbol}
                          </h3>
                          <p className="text-sm text-primary-700/70 font-light">{asset.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary-900 text-lg">
                          ${asset.value.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-1 justify-end">
                          {asset.change >= 0 ? (
                            <ArrowUpRight className="w-4 h-4 text-green-600" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 text-red-600" />
                          )}
                          <span
                            className={`text-sm font-semibold ${
                              asset.change >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {asset.change >= 0 ? "+" : ""}
                            {asset.changePercent.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="p-2 bg-white border-2 border-red-200 text-red-600 rounded-lg hover:bg-red-50 hover:border-red-300 transition-all duration-300"
                          onClick={() => handleQuickTrade("sell")}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                          onClick={() => handleQuickTrade("buy")}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-luxury p-6 hover:shadow-luxury transition-all duration-500">
                <h3 className="text-xl font-bold text-primary-900 mb-4 tracking-tight">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary-50 to-primary-100/50 border-2 border-primary-200/50 text-primary-700 rounded-xl font-semibold hover:from-primary-100 hover:to-primary-200/50 hover:border-primary-300 hover:-translate-y-1 transition-all duration-300">
                    <Wallet className="w-5 h-5" />
                    Manage Wallet
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-secondary-50 to-secondary-100/50 border-2 border-secondary-200/50 text-secondary-700 rounded-xl font-semibold hover:from-secondary-100 hover:to-secondary-200/50 hover:border-secondary-300 hover:-translate-y-1 transition-all duration-300">
                    <Activity className="w-5 h-5" />
                    View Activity
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary-50 to-primary-100/50 border-2 border-primary-200/50 text-primary-700 rounded-xl font-semibold hover:from-primary-100 hover:to-primary-200/50 hover:border-primary-300 hover:-translate-y-1 transition-all duration-300">
                    <Bell className="w-5 h-5" />
                    Set Alerts
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-secondary-50 to-secondary-100/50 border-2 border-secondary-200/50 text-secondary-700 rounded-xl font-semibold hover:from-secondary-100 hover:to-secondary-200/50 hover:border-secondary-300 hover:-translate-y-1 transition-all duration-300">
                    <Download className="w-5 h-5" />
                    Export Reports
                  </button>
                </div>
              </div>

              <div className="card-luxury p-6 hover:shadow-luxury transition-all duration-500">
                <h3 className="text-xl font-bold text-primary-900 mb-4 tracking-tight">
                  Security Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl border-l-4 border-green-500">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold text-primary-900">2FA Enabled</span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl border-l-4 border-green-500">
                    <div className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold text-primary-900">KYC Verified</span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-xl border-l-4 border-orange-500">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-orange-600" />
                      <span className="text-sm font-semibold text-primary-900">Biometric Auth</span>
                    </div>
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trading Platforms Tab */}
        {activeTab === "trading" && (
          <div>
            <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
              <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
                Trading Platforms & Integrations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tradingPlatforms.map((platform, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-elegant border border-gray-100/50 p-6 hover:shadow-luxury hover:-translate-y-2 hover:border-secondary-200 transition-all duration-500 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-primary-900 mb-2 text-lg group-hover:text-secondary-700 transition-colors">
                          {platform.name}
                        </h3>
                        <p className="text-sm text-primary-700/80 font-light mb-3 leading-relaxed">
                          {platform.description}
                        </p>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(platform.rating)
                                    ? "text-secondary-500 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-semibold text-primary-900">
                            {platform.rating}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          platform.status === "Active"
                            ? "bg-gradient-to-r from-green-100 to-green-200 text-green-800"
                            : platform.status === "Available"
                            ? "bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {platform.status}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-bold text-primary-900">
                        Features:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-3 py-1 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 rounded-lg text-xs font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        {platform.features.length > 3 && (
                          <span className="px-3 py-1 bg-gradient-to-r from-secondary-50 to-secondary-100 text-secondary-700 rounded-lg text-xs font-bold">
                            +{platform.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-bold text-primary-900">
                        Integrations:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.integration.map(
                          (integration, integrationIndex) => (
                            <span
                              key={integrationIndex}
                              className="px-3 py-1 bg-gradient-to-r from-secondary-50 to-secondary-100 text-secondary-700 rounded-lg text-xs font-medium"
                            >
                              {integration}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <button
                      className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        platform.status === "Coming Soon"
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-primary hover:-translate-y-1"
                      }`}
                      disabled={platform.status === "Coming Soon"}
                    >
                      {platform.status === "Active"
                        ? "Open Platform"
                        : platform.status === "Available"
                        ? "Get Access"
                        : "Coming Soon"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
              <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
                Performance Analytics
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-green-100/50 rounded-2xl border-l-4 border-green-500 hover:shadow-soft transition-all duration-300">
                  <div>
                    <p className="text-sm font-bold text-primary-900 mb-1">
                      Total Return
                    </p>
                    <p className="text-3xl font-bold text-green-600">
                      +$3,245.50
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                    <LineChart className="w-7 h-7 text-green-600" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl border-l-4 border-primary-500 hover:shadow-soft transition-all duration-300">
                  <div>
                    <p className="text-sm font-bold text-primary-900 mb-1">
                      Win Rate
                    </p>
                    <p className="text-3xl font-bold text-primary-600">87%</p>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary-600" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-2xl border-l-4 border-secondary-500 hover:shadow-soft transition-all duration-300">
                  <div>
                    <p className="text-sm font-bold text-primary-900 mb-1">
                      Avg Trade Size
                    </p>
                    <p className="text-3xl font-bold text-secondary-600">$1,245</p>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-7 h-7 text-secondary-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
              <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
                AI Recommendations
              </h2>
              <div className="space-y-4">
                <div className="p-5 border-2 border-primary-200 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl hover:shadow-soft transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-900 mb-1">
                        Strong Buy Signal
                      </h4>
                      <p className="text-sm text-primary-700/80 font-light">
                        AAPL showing bullish momentum with 85% confidence
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 border-2 border-green-200 bg-gradient-to-r from-green-50 to-green-100/50 rounded-2xl hover:shadow-soft transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-900 mb-1">
                        Portfolio Rebalance
                      </h4>
                      <p className="text-sm text-green-700/80 font-light">
                        Consider reducing crypto allocation by 10%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl hover:shadow-soft transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-orange-900 mb-1">
                        Risk Alert
                      </h4>
                      <p className="text-sm text-orange-700/80 font-light">
                        High volatility expected in EUR/USD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Community Tab */}
        {activeTab === "community" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
                <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
                  Trader Leaderboard
                </h2>
                <div className="space-y-4">
                  {leaderboard.map((trader, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-5 bg-gradient-to-r from-primary-50/30 to-secondary-50/30 rounded-2xl border-2 border-transparent hover:border-primary-200 hover:shadow-soft transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                            index === 0
                              ? "bg-gradient-to-br from-secondary-100 to-secondary-200 text-secondary-800"
                              : index === 1
                              ? "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800"
                              : index === 2
                              ? "bg-gradient-to-br from-orange-100 to-orange-200 text-orange-800"
                              : "bg-gradient-to-br from-primary-100 to-primary-200 text-primary-800"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-primary-900">
                            {trader.name}
                          </h3>
                          <p className="text-sm text-primary-700/70 font-light">
                            {trader.trades} trades
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600 text-lg">
                          {trader.profit}
                        </p>
                        {index < 3 && (
                          <Trophy className="w-5 h-5 text-secondary-600 mx-auto mt-1" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-luxury p-6 hover:shadow-luxury transition-all duration-500">
                <h3 className="text-xl font-bold text-primary-900 mb-4 tracking-tight">
                  Community Features
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary-50 to-primary-100/50 border-2 border-primary-200/50 text-primary-700 rounded-xl font-semibold hover:from-primary-100 hover:to-primary-200/50 hover:border-primary-300 hover:-translate-y-1 transition-all duration-300">
                    <MessageCircle className="w-5 h-5" />
                    Chat Rooms
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-secondary-50 to-secondary-100/50 border-2 border-secondary-200/50 text-secondary-700 rounded-xl font-semibold hover:from-secondary-100 hover:to-secondary-200/50 hover:border-secondary-300 hover:-translate-y-1 transition-all duration-300">
                    <Users className="w-5 h-5" />
                    Trading Groups
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary-50 to-primary-100/50 border-2 border-primary-200/50 text-primary-700 rounded-xl font-semibold hover:from-primary-100 hover:to-primary-200/50 hover:border-primary-300 hover:-translate-y-1 transition-all duration-300">
                    <Trophy className="w-5 h-5" />
                    Challenges
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-secondary-50 to-secondary-100/50 border-2 border-secondary-200/50 text-secondary-700 rounded-xl font-semibold hover:from-secondary-100 hover:to-secondary-200/50 hover:border-secondary-300 hover:-translate-y-1 transition-all duration-300">
                    <Bot className="w-5 h-5" />
                    Demo Trading
                  </button>
                </div>
              </div>

              <div className="card-luxury p-6 hover:shadow-luxury transition-all duration-500">
                <h3 className="text-xl font-bold text-primary-900 mb-4 tracking-tight">
                  Referral Program
                </h3>
                <div className="text-center">
                  <p className="text-sm text-primary-700/80 font-light mb-4">
                    Invite friends and earn 10% of their trading fees
                  </p>
                  <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-primary transition-all duration-300">
                    <Users className="w-5 h-5" />
                    Invite Friends
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
              <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
                Learning Hub
              </h2>
              <div className="space-y-4">
                <div className="p-5 border-2 border-primary-200 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl hover:shadow-soft transition-all duration-300">
                  <h3 className="font-bold text-primary-900 mb-2">
                    Beginner&apos;s Guide to Trading
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light mb-3">
                    Learn the fundamentals of trading and investment
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-700/70">
                      45 min • Beginner
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg text-sm font-semibold hover:shadow-primary transition-all duration-300">
                      Start Course
                    </button>
                  </div>
                </div>
                <div className="p-5 border-2 border-secondary-200 bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-2xl hover:shadow-soft transition-all duration-300">
                  <h3 className="font-bold text-primary-900 mb-2">
                    Technical Analysis Masterclass
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light mb-3">
                    Advanced charting and technical indicators
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-700/70">
                      2 hours • Advanced
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-lg text-sm font-semibold hover:shadow-secondary transition-all duration-300">
                      Start Course
                    </button>
                  </div>
                </div>
                <div className="p-5 border-2 border-primary-200 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl hover:shadow-soft transition-all duration-300">
                  <h3 className="font-bold text-primary-900 mb-2">
                    Risk Management Strategies
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light mb-3">
                    Protect your capital with proper risk management
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-700/70">
                      1.5 hours • Intermediate
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg text-sm font-semibold hover:shadow-primary transition-all duration-300">
                      Start Course
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
              <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
                Live Market News
              </h2>
              <div className="space-y-4">
                {marketNews.map((news, index) => (
                  <div key={index} className="p-5 bg-gradient-to-r from-primary-50/30 to-secondary-50/30 rounded-2xl border-2 border-transparent hover:border-primary-200 hover:shadow-soft transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-primary-900 text-sm flex-1">
                        {news.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ml-2 ${
                          news.impact === "high"
                            ? "bg-gradient-to-r from-red-100 to-red-200 text-red-800"
                            : news.impact === "medium"
                            ? "bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-800"
                            : "bg-gradient-to-r from-green-100 to-green-200 text-green-800"
                        }`}
                      >
                        {news.impact}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-primary-700/70">
                      <span>{news.category}</span>
                      <span>{news.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Section - Payment & Integration Info */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
            Payment & Integration Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-soft">
                <CreditCard className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">
                Payment Gateways
              </h3>
              <p className="text-sm text-primary-700/80 font-light">
                PayPal, Stripe, Binance Pay, Local Banks
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-soft">
                <Globe className="w-8 h-8 text-secondary-700" />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">Multi-Currency</h3>
              <p className="text-sm text-primary-700/80 font-light">
                USD, AED, PKR, BTC, ETH Support
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-soft">
                <Zap className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">
                API Integrations
              </h3>
              <p className="text-sm text-primary-700/80 font-light">
                Binance, Coinbase, MetaTrader
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-soft">
                <Download className="w-8 h-8 text-secondary-700" />
              </div>
              <h3 className="font-bold text-primary-900 mb-2">Tax Reports</h3>
              <p className="text-sm text-primary-700/80 font-light">
                Compliance & Tax Summary Downloads
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
