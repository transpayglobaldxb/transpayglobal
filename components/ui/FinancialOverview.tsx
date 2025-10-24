"use client";

import { Card } from "@/components/ui/Card";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Target,
  Award,
  Calendar,
  BarChart3,
  FileText,
} from "lucide-react";

interface FinancialMetric {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

interface FinancialOverviewProps {
  className?: string;
}

const financialMetrics: FinancialMetric[] = [
  {
    title: "Total Applications",
    value: "12",
    change: "+3 this month",
    changeType: "positive",
    icon: FileText,
    description: "Active applications across all services",
  },
  {
    title: "Success Rate",
    value: "85%",
    change: "+12% this quarter",
    changeType: "positive",
    icon: Target,
    description: "Approval rate for your applications",
  },
  {
    title: "Total Savings",
    value: "$2,450",
    change: "+$320 this month",
    changeType: "positive",
    icon: DollarSign,
    description: "Money saved through our services",
  },
  {
    title: "Active Opportunities",
    value: "8",
    change: "2 new this week",
    changeType: "positive",
    icon: TrendingUp,
    description: "Currently available opportunities",
  },
  {
    title: "Credit Score",
    value: "750",
    change: "+15 points",
    changeType: "positive",
    icon: BarChart3,
    description: "Current credit score rating",
  },
  {
    title: "Upcoming Deadlines",
    value: "3",
    change: "Next in 2 days",
    changeType: "neutral",
    icon: Calendar,
    description: "Important dates to remember",
  },
];

const recentTransactions = [
  {
    id: "1",
    type: "loan",
    title: "Personal Loan Approved",
    amount: "+$15,000",
    status: "completed",
    date: "2 hours ago",
  },
  {
    id: "2",
    type: "trading",
    title: "Trading Platform Access",
    amount: "-$50",
    status: "completed",
    date: "1 day ago",
  },
  {
    id: "3",
    type: "visa",
    title: "Visa Application Fee",
    amount: "-$200",
    status: "pending",
    date: "2 days ago",
  },
  {
    id: "4",
    type: "booking",
    title: "Hotel Booking Refund",
    amount: "+$300",
    status: "completed",
    date: "1 week ago",
  },
];

export default function FinancialOverview({
  className = "",
}: FinancialOverviewProps) {
  const getChangeIcon = (changeType: string) => {
    switch (changeType) {
      case "positive":
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case "negative":
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
    }
  };

  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case "positive":
        return "text-green-600";
      case "negative":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "loan":
        return <CreditCard className="w-5 h-5 text-green-600" />;
      case "trading":
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case "visa":
        return <FileText className="w-5 h-5 text-purple-600" />;
      case "booking":
        return <Calendar className="w-5 h-5 text-teal-600" />;
      default:
        return <DollarSign className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTransactionStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50";
      case "pending":
        return "text-yellow-600 bg-yellow-50";
      case "failed":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Financial Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {financialMetrics.map((metric, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gray-50`}>
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500">{metric.title}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              {getChangeIcon(metric.changeType)}
              <span
                className={`text-sm font-medium ${getChangeColor(
                  metric.changeType
                )}`}
              >
                {metric.change}
              </span>
            </div>

            {metric.description && (
              <p className="text-xs text-gray-600">{metric.description}</p>
            )}
          </Card>
        ))}
      </div>

      {/* Recent Transactions */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Transactions
          </h3>
          <button className="text-sm text-primary hover:text-primary/80 font-medium">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0">
                {getTransactionIcon(transaction.type)}
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900">
                  {transaction.title}
                </h4>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getTransactionStatusColor(
                    transaction.status
                  )}`}
                >
                  {transaction.status}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    transaction.amount.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Achievements
              </h4>
              <p className="text-sm text-gray-600">Your recent milestones</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">First Loan Approved</span>
              <span className="text-sm font-medium text-green-600">✓</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">KYC Verification</span>
              <span className="text-sm font-medium text-green-600">✓</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Trading Access</span>
              <span className="text-sm font-medium text-yellow-600">
                In Progress
              </span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Performance
              </h4>
              <p className="text-sm text-gray-600">
                This month&apos;s activity
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Applications Submitted
              </span>
              <span className="text-sm font-medium text-gray-900">5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Success Rate</span>
              <span className="text-sm font-medium text-green-600">85%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Time Saved</span>
              <span className="text-sm font-medium text-blue-600">
                12 hours
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
