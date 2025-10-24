"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { getUserData, isAuthenticated } from "@/lib/api";
import type { User } from "@/lib/api/types";
import {
  TrendingUp,
  Bell,
  AlertTriangle,
  Shield,
  CheckCircle,
  XCircle,
  ArrowRight,
  Users,
  DollarSign,
  Eye,
  Target,
  Play,
  Settings,
  Activity,
  Globe,
  Lock,
  BookOpen,
} from "lucide-react";

export default function CopyTradingPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated()) {
      router.push("/auth/login");
      return;
    }

    // Get user data
    const userData = getUserData();
    setUser(userData);
    setIsLoading(false);
  }, [router]);

  if (isLoading || !user) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <TrendingUp className="w-6 h-6 text-secondary-700" />
            </div>
            <h1 className="text-4xl font-bold text-primary-900 tracking-tight">
              Copy Trading in Cryptocurrency
            </h1>
          </div>
          <p className="text-primary-700/80 text-xl font-semibold mb-2">
            Replicate Expert Trades Automatically
          </p>
          <p className="text-primary-700/80 text-lg font-light leading-relaxed">
            Copy trading in cryptocurrency is an investment strategy that allows users to automatically replicate
            the trades of experienced or professional traders. It&apos;s a form of social trading where investors don&apos;t
            need to analyze the market themselves — instead, they &apos;copy&apos; the trading strategies of others in
            real time.
          </p>
        </div>

        {/* Quick CTA */}
        <div className="card-luxury p-6 bg-gradient-to-br from-secondary-50 to-secondary-100/50 border-2 border-secondary-200/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                Ready to Start Copy Trading?
              </h3>
              <p className="text-primary-700/80 font-light">
                Connect with expert traders and start earning passively today
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold flex items-center gap-2">
                <Users className="w-5 h-5" />
                View Expert Traders
              </button>
              <button className="bg-white border-2 border-secondary-600 text-secondary-700 px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="card-luxury p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary-700" />
            </div>
            <h2 className="text-3xl font-bold text-primary-900">How It Works</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary-300 bg-gradient-to-r from-primary-50 to-primary-100/50">
                  <th className="py-4 px-6 font-bold text-primary-900 text-lg">
                    Step
                  </th>
                  <th className="py-4 px-6 font-bold text-primary-900 text-lg">
                    Action
                  </th>
                  <th className="py-4 px-6 font-bold text-primary-900 text-lg">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-primary-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center">
                      <span className="text-secondary-700 font-bold">1</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-primary-900">
                    Select a Platform
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Choose a crypto exchange or app that offers copy trading (e.g., Binance, eToro, Bitget)
                  </td>
                </tr>
                <tr className="hover:bg-primary-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center">
                      <span className="text-secondary-700 font-bold">2</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-primary-900">
                    Choose a Trader
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Browse expert trader profiles showing ROI, risk level, and performance
                  </td>
                </tr>
                <tr className="hover:bg-primary-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center">
                      <span className="text-secondary-700 font-bold">3</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-primary-900">
                    Allocate Funds
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Decide how much to invest in copying a trader
                  </td>
                </tr>
                <tr className="hover:bg-primary-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center">
                      <span className="text-secondary-700 font-bold">4</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-primary-900">
                    Automatic Copying
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Trades made by the expert are automatically replicated in your account
                  </td>
                </tr>
                <tr className="hover:bg-primary-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center">
                      <span className="text-secondary-700 font-bold">5</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-primary-900">
                    Monitor & Adjust
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    You can stop copying or adjust your funds anytime
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="card-luxury p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-700" />
            </div>
            <h2 className="text-3xl font-bold text-primary-900">Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Easy for Beginners
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    No need for deep market analysis or trading expertise
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Passive Income
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Earn profits by following professional traders automatically
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Transparency
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Traders&apos; records and stats are visible for informed decisions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Diversification
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Follow multiple traders to spread risk across strategies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risks Section */}
        <div className="card-luxury p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-700" />
            </div>
            <h2 className="text-3xl font-bold text-primary-900">Risks to Consider</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <XCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Market Volatility
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Sudden price changes can cause significant losses regardless of strategy
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Dependence on Trader
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Your results directly depend on the trader&apos;s skill and decisions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Platform Fees
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Some platforms charge commissions that can reduce your profits
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Security Risks
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Unverified platforms may risk your funds through hacks or fraud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Warning */}
        <div className="bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200/50 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-red-700" />
            </div>
            <h2 className="text-xl font-bold text-primary-900">
              Important: No Investment is 100% Risk-Free
            </h2>
          </div>
          <p className="text-sm text-primary-700/80 font-light leading-relaxed">
            Even if platforms or influencers claim &quot;guaranteed profits&quot; or &quot;zero loss,&quot; it&apos;s not possible in
            legitimate finance. Crypto and forex markets are highly volatile. Copy trading inherits the trader&apos;s risk — 
            if they lose, you lose too. Always verify licenses, understand volatility, and avoid unrealistic promises.
          </p>
        </div>

        {/* Key Platforms Offering Copy Trading */}
        <div className="card-luxury p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-purple-700" />
            </div>
            <h2 className="text-3xl font-bold text-primary-900">Key Platforms Offering Copy Trading</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-purple-300 bg-gradient-to-r from-purple-50 to-purple-100/50">
                  <th className="py-4 px-6 font-bold text-primary-900 text-lg">
                    Platform
                  </th>
                  <th className="py-4 px-6 font-bold text-primary-900 text-lg">
                    Features
                  </th>
                  <th className="py-4 px-6 font-bold text-primary-900 text-lg">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-primary-900">
                    Binance
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Integrated with Binance Futures
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Requires Binance account
                  </td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-primary-900">
                    eToro
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Leading social trading platform
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Supports crypto & stocks
                  </td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-primary-900">
                    Bitget
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Large copy trading base
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Transparent trader rankings
                  </td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-primary-900">
                    Bybit
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Profit-sharing model
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Fast-growing exchange
                  </td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-primary-900">
                    OKX
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Portfolio copy tools
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    User-friendly app
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA for Platforms */}
          <div className="mt-6 bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-xl p-6 border-l-4 border-purple-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">
                  Connect Your Exchange Account
                </h3>
                <p className="text-sm text-primary-700/80 font-light">
                  Link your trading account and start copying experts in minutes
                </p>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold flex items-center gap-2 whitespace-nowrap">
                <Play className="w-5 h-5" />
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Regulations and Compliance */}
        <div className="card-luxury p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-blue-700" />
            </div>
            <h2 className="text-3xl font-bold text-primary-900">Regulations and Compliance</h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border-l-4 border-blue-500">
            <p className="text-primary-700/80 font-light leading-relaxed mb-4">
              Copy trading is legal in most countries but regulated differently. Users should verify platform
              licenses, use KYC-compliant exchanges, and avoid unregistered platforms. Reputable exchanges
              follow anti-money laundering and investor protection laws.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-primary-900">Verify Licenses</span>
                </div>
                <p className="text-sm text-primary-700/80 font-light">
                  Always check platform regulatory status
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-primary-900">KYC Compliance</span>
                </div>
                <p className="text-sm text-primary-700/80 font-light">
                  Use only verified, compliant exchanges
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-primary-900">AML Protection</span>
                </div>
                <p className="text-sm text-primary-700/80 font-light">
                  Ensure anti-money laundering measures
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Red Flag Checklist */}
        <div className="card-luxury p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-700" />
            </div>
            <h2 className="text-3xl font-bold text-primary-900">Red Flag Checklist</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-red-300 bg-gradient-to-r from-red-50 to-red-100/50">
                  <th className="text-left py-4 px-6 font-bold text-primary-900 text-lg">
                    Claim
                  </th>
                  <th className="text-left py-4 px-6 font-bold text-primary-900 text-lg">
                    What It Really Means
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-200">
                <tr className="hover:bg-red-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-primary-900">
                    Guaranteed profit
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Scam – No market guarantees exist
                  </td>
                </tr>
                <tr className="hover:bg-red-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-primary-900">
                    No loss risk / Zero loss
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    False – Even stablecoins can fail
                  </td>
                </tr>
                <tr className="hover:bg-red-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-primary-900">
                    AI bot that always wins
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Fake algorithm or Ponzi scheme
                  </td>
                </tr>
                <tr className="hover:bg-red-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-primary-900">
                    Send crypto to join investment pool
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Classic fraud tactic
                  </td>
                </tr>
                <tr className="hover:bg-red-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-primary-900">
                    Withdraw anytime – 100% insured
                  </td>
                  <td className="py-4 px-6 text-primary-700/80 font-light">
                    Usually untrue or misleading
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Conclusion */}
        <div className="card-luxury p-8 bg-gradient-to-br from-secondary-50 to-secondary-100/50 border-2 border-secondary-200/50">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                Conclusion
              </h2>
              <p className="text-primary-700/80 font-light leading-relaxed mb-4">
                Copy trading simplifies cryptocurrency investment for beginners, providing an opportunity to learn
                and profit by observing experienced traders. However, it still involves financial risk — wise investors
                diversify and choose regulated, transparent platforms.
              </p>
              <div className="bg-white rounded-xl p-4 border-l-4 border-secondary-600">
                <p className="text-sm font-semibold text-primary-900 mb-2">
                  ⚠️ Important Reminder
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  No crypto or copy-trading method can eliminate loss risk. Always verify licenses, understand 
                  volatility, start with small amounts, and never invest more than you can afford to lose.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="card-luxury p-8 bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Copy Trading Journey?
            </h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of traders who are earning passively through copy trading. 
              Start with a demo account and learn from the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-900 px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold flex items-center gap-2 justify-center">
                <Users className="w-5 h-5" />
                Browse Expert Traders
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold flex items-center gap-2 justify-center border-2 border-white/20">
                <Play className="w-5 h-5" />
                Start Demo Account
              </button>
            </div>
            <p className="text-white/60 text-sm mt-6">
              No credit card required • 100% Free Demo • Learn Risk-Free
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
