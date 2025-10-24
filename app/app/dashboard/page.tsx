"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CreditScoreWidget from "@/components/ui/CreditScoreWidget";
import ActivityTimeline from "@/components/ui/ActivityTimeline";
import KYCStatus from "@/components/ui/KYCStatus";
import FinancialOverview from "@/components/ui/FinancialOverview";
import OpportunitiesSection from "@/components/ui/OpportunitiesSection";
import Card from "@/components/ui/Card";
import { getUserData, isAuthenticated } from "@/lib/api";
import type { User } from "@/lib/api/types";
import {
  TrendingUp,
  CreditCard,
  FileText,
  Briefcase,
  Building2,
  BarChart3,
  Settings,
  Star,
  Target,
  DollarSign,
  Calendar,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const quickActions = [
  {
    title: "Apply for Loan",
    description: "Get connected with verified lenders",
    icon: CreditCard,
    href: "/app/dashboard/loans",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    title: "Start Trading",
    description: "Access verified trading platforms",
    icon: TrendingUp,
    href: "/app/dashboard/trading",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    title: "Visa Application",
    description: "Professional visa assistance",
    icon: FileText,
    href: "/app/dashboard/visa",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    title: "Find Jobs",
    description: "Browse exclusive job opportunities",
    icon: Briefcase,
    href: "/app/dashboard/jobs",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    title: "Book Hotels",
    description: "Discounted hotel reservations",
    icon: Building2,
    href: "/app/dashboard/bookings",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    title: "Check Credit Score",
    description: "Monitor and improve your credit",
    icon: Star,
    href: "/app/dashboard/credit-score",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
];

export default function DashboardPage() {
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
            <p className="text-gray-600">Loading your dashboard...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const firstName = user.fullName.split(" ")[0];
  const initials = user.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  const memberSince = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-secondary-600 animate-glow" />
                <h1 className="text-4xl font-bold text-primary-900 tracking-tight">
                  Welcome back, {firstName}!
                </h1>
              </div>
              <p className="text-primary-700/80 text-lg font-light">
                Here&apos;s your financial overview and available opportunities.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-primary-600 font-medium">
                  Member since
                </p>
                <p className="text-sm font-bold text-primary-900">
                  {memberSince}
                </p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center shadow-elegant">
                <span className="text-primary-700 font-bold text-2xl">
                  {initials}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Row - Credit Score and KYC Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CreditScoreWidget
            score={750}
            status="good"
            trend="up"
            lastUpdated="Last updated 2 days ago"
          />
          <KYCStatus overallStatus="in-progress" progress={60} />
        </div>

        {/* Financial Overview */}
        <FinancialOverview />

        {/* Quick Actions */}
        <div>
          <h2 className="text-3xl font-bold text-primary-900 mb-8 tracking-tight">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-elegant border border-gray-100/50 p-6 hover:shadow-luxury hover:-translate-y-2 hover:border-secondary-200 transition-all duration-500 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${action.gradient} rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform`}
                  >
                    <action.icon className={`w-7 h-7 ${action.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-900 text-lg mb-2 group-hover:text-secondary-700 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-primary-700/80 font-light mb-3">
                      {action.description}
                    </p>
                    <button className="text-secondary-700 hover:text-secondary-900 text-sm font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities Section */}
        <OpportunitiesSection />

        {/* Bottom Row - Activity Timeline and Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActivityTimeline />

          <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
            <h3 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
              Upcoming Deadlines
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-5 bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-2xl border-l-4 border-secondary-500 hover:shadow-secondary transition-all duration-300">
                <div>
                  <p className="text-sm font-bold text-primary-900 mb-1">
                    Visa Interview
                  </p>
                  <p className="text-xs text-primary-700/70 font-light">
                    Tomorrow at 2:00 PM
                  </p>
                </div>
                <div className="text-secondary-700 text-sm font-bold bg-white px-3 py-1 rounded-full">
                  1 day
                </div>
              </div>
              <div className="flex items-center justify-between p-5 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl border-l-4 border-primary-500 hover:shadow-primary transition-all duration-300">
                <div>
                  <p className="text-sm font-bold text-primary-900 mb-1">
                    Loan Documentation
                  </p>
                  <p className="text-xs text-primary-700/70 font-light">
                    Due in 3 days
                  </p>
                </div>
                <div className="text-primary-700 text-sm font-bold bg-white px-3 py-1 rounded-full">
                  3 days
                </div>
              </div>
              <div className="flex items-center justify-between p-5 bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-2xl border-l-4 border-secondary-500 hover:shadow-secondary transition-all duration-300">
                <div>
                  <p className="text-sm font-bold text-primary-900 mb-1">
                    Job Interview
                  </p>
                  <p className="text-xs text-primary-700/70 font-light">
                    Next week
                  </p>
                </div>
                <div className="text-secondary-700 text-sm font-bold bg-white px-3 py-1 rounded-full">
                  7 days
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-br from-secondary-50 to-secondary-100/50 border-2 border-secondary-200/50 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-secondary-700" />
                </div>
                <h4 className="text-sm font-bold text-primary-900">Pro Tip</h4>
              </div>
              <p className="text-sm text-primary-700/80 font-light leading-relaxed">
                Complete your KYC verification to unlock premium opportunities
                and better rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
