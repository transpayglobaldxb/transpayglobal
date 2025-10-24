"use client";

import {
  CreditCard,
  Clock,
  Shield,
  CheckCircle,
  DollarSign,
  Users,
  ArrowRight,
  Award,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const loanFeatures = [
  {
    icon: CreditCard,
    title: "Personal Loans",
    description:
      "Quick approval personal loans with competitive interest rates and flexible repayment terms.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description:
      "Get loan approval within 24-48 hours with minimal documentation and hassle-free process.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: Shield,
    title: "Secure Process",
    description:
      "Your data is protected with bank-level security and encryption throughout the entire process.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    icon: CheckCircle,
    title: "No Hidden Fees",
    description:
      "Transparent pricing with no hidden charges or surprise costs. Know exactly what you'll pay.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
];

const loanTypes = [
  { name: "Personal Loans", icon: DollarSign, amount: "$1K - $50K" },
  { name: "Business Loans", icon: Award, amount: "$5K - $500K" },
  { name: "Education Loans", icon: Users, amount: "$2K - $100K" },
  { name: "Home Loans", icon: CreditCard, amount: "$10K - $1M" },
];

export default function LoansPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#213E63] via-[#2A4A6F] to-[#1E3854]">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#C4A962]/10 rounded-full blur-[100px] animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#4A90E2]/8 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#C4A962]/8 rounded-full blur-[90px] animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl mb-6">
            <CreditCard className="w-4 h-4 text-[#C4A962]" />
            <span className="text-sm font-semibold text-[#C4A962] tracking-luxury">
              Financial Solutions
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Loan & Credit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              Services
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Connect with trusted lenders offering competitive rates and flexible
            terms for all your financial needs with professional guidance. Get
            the funding you need, when you need it.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {loanFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#C4A962]/50 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center mb-4 border border-[#C4A962]/20">
                  <Icon className="w-7 h-7 text-[#C4A962]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Loan Types */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Multiple{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Loan Products
              </span>
            </h2>
            <p className="text-lg text-white/80 font-light">
              Choose from various loan options tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanTypes.map((loan, index) => {
              const Icon = loan.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#C4A962]/50 hover:-translate-y-2 transition-all duration-500 group text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#C4A962]/20">
                    <Icon className="w-7 h-7 text-[#C4A962]" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{loan.name}</h3>
                  <p className="text-sm text-white/70 font-light">
                    {loan.amount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Need a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Loan?
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Apply now and get connected with verified lenders in minutes. Fast
              approval with competitive rates and flexible terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <button className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-12 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group inline-flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Apply for Loan
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 px-12 py-4 rounded-2xl font-bold transition-all duration-300 inline-flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Learn More
                </button>
              </Link>
            </div>
            <p className="text-white/60 text-sm mt-6">
              Fast Approval • Competitive Rates • Flexible Terms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
