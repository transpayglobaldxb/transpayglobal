"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { getUserData, isAuthenticated } from "@/lib/api";
import type { User } from "@/lib/api/types";
import {
  CreditCard,
  Clock,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ArrowRight,
  DollarSign,
  Shield,
  Award,
  TrendingUp,
  Wallet,
  Globe,
  Lock,
  AlertTriangle,
} from "lucide-react";

const loanApplications = [
  {
    id: "LOAN-001",
    amount: "$15,000",
    type: "Trading Loan",
    status: "Approved",
    date: "2024-01-15",
    lender: "TransPay Global",
  },
  {
    id: "LOAN-002",
    amount: "$5,000",
    type: "Investment Loan",
    status: "Under Review",
    date: "2024-01-20",
    lender: "TransPay Global",
  },
];

export default function LoansPage() {
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
              <CreditCard className="w-6 h-6 text-secondary-700" />
            </div>
            <h1 className="text-4xl font-bold text-primary-900 tracking-tight">
              Loan & Credit Card Services
            </h1>
          </div>
          <p className="text-primary-700/80 text-2xl font-semibold mb-2">
            Empowering Financial Freedom Worldwide
          </p>
          <p className="text-primary-700/80 text-lg font-light">
            Next-generation Loan and Credit Card Services designed exclusively
            for TransPay Global platform users.
          </p>
          <div className="mt-4 p-4 bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-xl border-l-4 border-secondary-500">
            <p className="text-sm font-semibold text-primary-900">
              One Card. One Platform. Infinite Possibilities.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Active Applications
                </p>
                <p className="text-3xl font-bold text-primary-900">2</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <CreditCard className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Total Approved
                </p>
                <p className="text-3xl font-bold text-primary-900">$15,000</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <CheckCircle className="w-7 h-7 text-green-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Credit Available
                </p>
                <p className="text-3xl font-bold text-primary-900">$5,000</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Wallet className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>
        </div>

        {/* TransPay Global Credit Card */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <CreditCard className="w-6 h-6 text-secondary-700" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              TransPay Global Credit Card
            </h2>
          </div>
          <p className="text-lg font-semibold text-secondary-700 mb-6">
            &quot;Spend Smart. Earn Access.&quot;
          </p>
          <p className="text-sm text-primary-700/80 font-light leading-relaxed mb-6">
            The TransPay Global Credit Card is not just a payment tool —
            it&apos;s your membership identity within the TransPay Global
            ecosystem.
          </p>

          {/* Key Features */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-6 border-l-4 border-primary-500 mb-6">
            <h3 className="text-lg font-bold text-primary-900 mb-4">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Eligibility
                  </p>
                  <p className="text-sm text-primary-700/80 font-light">
                    Automatically issued to verified users based on platform
                    activity
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Credit Limit
                  </p>
                  <p className="text-sm text-primary-700/80 font-light">
                    Dynamic, based on transaction volume and member tier
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Global Acceptance
                  </p>
                  <p className="text-sm text-primary-700/80 font-light">
                    Usable worldwide where Mastercard/Visa is accepted
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <DollarSign className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Multi-Currency
                  </p>
                  <p className="text-sm text-primary-700/80 font-light">
                    AED, USD, EUR, GBP, and digital currencies supported
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Security
                  </p>
                  <p className="text-sm text-primary-700/80 font-light">
                    Chip protection and OTP verification for each transaction
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
        <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Rewards & Lounge Access
                  </p>
                  <p className="text-sm text-primary-700/80 font-light">
                    Earn loyalty points and enjoy VVIP airport privileges
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Credit Card Tiers */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-secondary-300">
                  <th className="text-left py-3 px-4 font-bold text-primary-900 bg-secondary-100/50">
                    Tier
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-primary-900 bg-secondary-100/50">
                    Limit (USD)
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-primary-900 bg-secondary-100/50">
                    Lounge Access
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-primary-900 bg-secondary-100/50">
                    Rewards %
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-primary-900">
                    Silver
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">
                    Up to $1,000
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">Pay-per-use</td>
                  <td className="py-3 px-4 text-primary-700/80">1% Cashback</td>
                </tr>
                <tr className="hover:bg-yellow-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-primary-900">
                    Gold
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">
                    Up to $5,000
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">
                    2 Visits/Year
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">2% Cashback</td>
                </tr>
                <tr className="hover:bg-purple-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-primary-900">
                    Platinum
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">
                    Up to $25,000
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">Unlimited</td>
                  <td className="py-3 px-4 text-primary-700/80">5% Cashback</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Credit Card CTA */}
          <div className="mt-6 flex justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-xl font-semibold hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 text-lg">
              <CreditCard className="w-5 h-5" />
              Apply for TransPay Global Credit Card
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TransPay Global Loan Facility */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft">
              <TrendingUp className="w-6 h-6 text-primary-700" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              TransPay Global Loan Facility
          </h2>
          </div>
          <p className="text-lg font-semibold text-primary-700 mb-6">
            &quot;Trade Today, Pay Later.&quot;
          </p>
          <p className="text-sm text-primary-700/80 font-light leading-relaxed mb-6">
            Our loan service empowers users participating in crypto trading and
            investment on the TransPay Global platform.
          </p>

          {/* Key Features */}
          <div className="bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-2xl p-6 border-l-4 border-secondary-500 mb-6">
            <h3 className="text-lg font-bold text-primary-900 mb-4">
              Key Features
                </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Purpose
                  </p>
                  <p className="text-sm text-primary-700/80 font-light">
                    Only for trading and investment within TransPay Global
                    ecosystem
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Instant Approval
                  </p>
                  <p className="text-sm text-primary-700/80 font-light">
                    Based on verification and trading activity
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Flexible Repayment
                  </p>
                  <p className="text-sm text-primary-700/80 font-light">
                    Pay weekly, monthly, or quarterly via TransPay Wallet
                  </p>
                </div>
                  </div>
              <div className="flex items-start gap-2">
                <DollarSign className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Loan Range
                  </p>
                  <p className="text-sm text-primary-700/80 font-light">
                    $100 to $100,000 depending on tier
                  </p>
                  </div>
                  </div>
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Collateral
                  </p>
                  <p className="text-sm text-primary-700/80 font-light">
                    No physical collateral; crypto portfolio serves as security
                  </p>
                </div>
                    </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Profit Sharing Option
                  </p>
                  <p className="text-sm text-primary-700/80 font-light">
                    Choose to share profits instead of paying fixed interest
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Loan Tiers */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary-300">
                  <th className="text-left py-3 px-4 font-bold text-primary-900 bg-primary-100/50">
                    Member Tier
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-primary-900 bg-primary-100/50">
                    Loan Range (USD)
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-primary-900 bg-primary-100/50">
                    Repayment Term
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-primary-900 bg-primary-100/50">
                    Interest / Profit Share
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-primary-900">
                    Silver
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">
                    $100 – $1,000
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">1–3 months</td>
                  <td className="py-3 px-4 text-primary-700/80">
                    3%/month or 5% share
                  </td>
                </tr>
                <tr className="hover:bg-yellow-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-primary-900">
                    Gold
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">
                    $1,000 – $10,000
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">3–6 months</td>
                  <td className="py-3 px-4 text-primary-700/80">
                    2%/month or 4% share
                  </td>
                </tr>
                <tr className="hover:bg-purple-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-primary-900">
                    Platinum
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">
                    $10,000 – $100,000
                  </td>
                  <td className="py-3 px-4 text-primary-700/80">6–12 months</td>
                  <td className="py-3 px-4 text-primary-700/80">
                    1%/month or 3% share
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Loan Application CTA */}
          <div className="mt-6 flex justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 text-lg">
              <DollarSign className="w-5 h-5" />
              Apply for Trading & Investment Loan
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Benefits for Users */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-6 border-l-4 border-primary-500">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Award className="w-3 h-3 text-white" />
            </div>
            <h2 className="text-xl font-bold text-primary-900">
              Benefits for Users
            </h2>
          </div>
          <div className="ml-9 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Access financial flexibility for trading and investments
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Build your credit score within the TransPay Global system
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Enjoy integrated services — credit, travel, legal, and health in
                one wallet
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Secure and transparent loan tracking with instant notifications
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Rewards and bonuses for timely repayment
              </p>
            </div>
          </div>
        </div>

        {/* Quick Apply Section */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="text-center">
            <Sparkles className="w-12 h-12 text-secondary-600 mx-auto mb-4 animate-glow" />
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-700/80 text-lg font-light mb-8 max-w-2xl mx-auto">
              Apply for your TransPay Global Credit Card or Loan in minutes. Get
              instant approval and start trading today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-xl font-semibold hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg">
                <CreditCard className="w-5 h-5" />
                Apply for Credit Card
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg">
                <DollarSign className="w-5 h-5" />
                Apply for Loan
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-primary-700/60 font-light mt-6">
              📋 KYC verification required • ⚡ Instant approval • 🔒 100%
              secure
            </p>
          </div>
        </div>

        {/* Application History */}
        <div>
          <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
            Application History
          </h2>
          <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary-200">
                    <th className="text-left py-4 px-4 font-bold text-primary-900">
                      Application ID
                    </th>
                    <th className="text-left py-4 px-4 font-bold text-primary-900">
                      Amount
                    </th>
                    <th className="text-left py-4 px-4 font-bold text-primary-900">
                      Type
                    </th>
                    <th className="text-left py-4 px-4 font-bold text-primary-900">
                      Lender
                    </th>
                    <th className="text-left py-4 px-4 font-bold text-primary-900">
                      Status
                    </th>
                    <th className="text-left py-4 px-4 font-bold text-primary-900">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loanApplications.map((application, index) => (
                    <tr
                      key={index}
                      className="border-b border-primary-100 hover:bg-gradient-to-r hover:from-primary-50/30 hover:to-secondary-50/30 transition-all duration-300"
                    >
                      <td className="py-4 px-4 text-sm font-bold text-primary-900">
                        {application.id}
                      </td>
                      <td className="py-4 px-4 text-sm font-semibold text-primary-700">
                        {application.amount}
                      </td>
                      <td className="py-4 px-4 text-sm font-light text-primary-700/80">
                        {application.type}
                      </td>
                      <td className="py-4 px-4 text-sm font-light text-primary-700/80">
                        {application.lender}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            application.status === "Approved"
                              ? "bg-gradient-to-r from-green-100 to-green-200 text-green-800"
                              : application.status === "Under Review"
                              ? "bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-800"
                              : "bg-gradient-to-r from-red-100 to-red-200 text-red-800"
                          }`}
                        >
                          {application.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm font-light text-primary-700/80">
                        {application.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Terms & Compliance */}
        <div className="bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200/50 rounded-2xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-3 h-3 text-white" />
            </div>
            <h2 className="text-xl font-bold text-primary-900">
              Terms & Compliance
            </h2>
          </div>
          <div className="ml-9 space-y-2">
            <div className="flex items-start gap-2">
              <Lock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Loans and credit cards are available to KYC-verified users only
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Lock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Funds can be used solely within TransPay Global-approved
                platforms
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Misuse may lead to account suspension or service restriction
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                TransPay Global reserves rights to modify credit limits or
                eligibility
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Globe className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                All operations comply with international AML and KYC standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
