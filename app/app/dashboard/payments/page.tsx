"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  Calendar,
  Download,
  Plus,
  Filter,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  Receipt,
  Wallet,
  Sparkles,
} from "lucide-react";

const transactions = [
  {
    id: "1",
    type: "income",
    title: "Loan Disbursement",
    description: "Personal loan approved and disbursed",
    amount: "+$15,000.00",
    date: "2024-01-15",
    status: "completed",
    category: "loan",
  },
  {
    id: "2",
    type: "expense",
    title: "Trading Platform Access",
    description: "Monthly subscription fee",
    amount: "-$50.00",
    date: "2024-01-10",
    status: "completed",
    category: "trading",
  },
  {
    id: "3",
    type: "expense",
    title: "Visa Application Fee",
    description: "Express visa processing service",
    amount: "-$200.00",
    date: "2024-01-08",
    status: "pending",
    category: "visa",
  },
  {
    id: "4",
    type: "income",
    title: "Hotel Booking Refund",
    description: "Cancellation refund for Dubai hotel",
    amount: "+$300.00",
    date: "2024-01-05",
    status: "completed",
    category: "booking",
  },
  {
    id: "5",
    type: "expense",
    title: "Job Application Fee",
    description: "Premium job application service",
    amount: "-$75.00",
    date: "2024-01-03",
    status: "completed",
    category: "job",
  },
];

const upcomingPayments = [
  {
    id: "1",
    title: "Monthly Subscription",
    amount: "$50.00",
    dueDate: "2024-02-10",
    status: "upcoming",
  },
  {
    id: "2",
    title: "Loan EMI",
    amount: "$450.00",
    dueDate: "2024-02-15",
    status: "upcoming",
  },
];

export default function PaymentsPage() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case "failed":
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getAmountColor = (type: string) => {
    return type === "income" ? "text-green-600" : "text-red-600";
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "loan":
        return <CreditCard className="w-5 h-5 text-blue-600" />;
      case "trading":
        return <TrendingUp className="w-5 h-5 text-green-600" />;
      case "visa":
        return <Receipt className="w-5 h-5 text-purple-600" />;
      case "booking":
        return <Calendar className="w-5 h-5 text-teal-600" />;
      case "job":
        return <Wallet className="w-5 h-5 text-orange-600" />;
      default:
        return <DollarSign className="w-5 h-5 text-gray-600" />;
    }
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
                <h1 className="text-4xl font-bold text-primary-900 tracking-tight">Payments</h1>
              </div>
              <p className="text-primary-700/80 text-lg font-light leading-relaxed">
                Manage your payments, transactions, and financial activity
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-white border-2 border-primary-200 rounded-xl text-primary-700 font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 inline-flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-primary hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Payment
              </button>
            </div>
          </div>
        </div>

        {/* Financial Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Total Balance
                </p>
                <p className="text-3xl font-bold text-primary-900">$14,525.00</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Wallet className="w-7 h-7 text-green-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">This Month</p>
                <p className="text-3xl font-bold text-green-700">+$15,300.00</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-green-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">Expenses</p>
                <p className="text-3xl font-bold text-red-700">-$775.00</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <CreditCard className="w-7 h-7 text-red-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">Pending</p>
                <p className="text-3xl font-bold text-secondary-700">$200.00</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
                  Recent Transactions
                </h2>
                <button className="px-4 py-2 bg-white border-2 border-primary-200 rounded-xl text-primary-700 text-sm font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 inline-flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>

              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center gap-4 p-5 bg-gradient-to-r from-primary-50/30 to-secondary-50/30 rounded-2xl border-2 border-transparent hover:border-primary-200 hover:shadow-soft transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      {getCategoryIcon(transaction.category)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-primary-900">
                        {transaction.title}
                      </h3>
                      <p className="text-sm text-primary-700/80 font-light">
                        {transaction.description}
                      </p>
                      <p className="text-xs text-primary-700/70 font-light">
                        {transaction.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`text-sm font-bold ${getAmountColor(
                          transaction.type
                        )}`}
                      >
                        {transaction.amount}
                      </span>
                      {getStatusIcon(transaction.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Payments & Quick Actions */}
          <div className="space-y-6">
            {/* Upcoming Payments */}
            <div className="card-luxury p-6 hover:shadow-luxury transition-all duration-500">
              <h3 className="text-lg font-bold text-primary-900 mb-4 tracking-tight">
                Upcoming Payments
              </h3>
              <div className="space-y-4">
                {upcomingPayments.map((payment) => (
                  <div
                    key={payment.id}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-secondary-50/30 to-secondary-50/10 rounded-xl border-2 border-transparent hover:border-secondary-200 hover:shadow-soft transition-all duration-300"
                  >
                    <div>
                      <p className="text-sm font-bold text-primary-900">
                        {payment.title}
                      </p>
                      <p className="text-xs text-primary-700/70 font-light">
                        Due: {payment.dueDate}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-secondary-700">
                        {payment.amount}
                      </p>
                      <button className="mt-2 px-3 py-1 bg-white border-2 border-primary-200 rounded-lg text-primary-700 text-xs font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all duration-300">
                        Pay Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Payment Method
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download Statement
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Receipt className="w-4 h-4 mr-2" />
                  View Receipts
                </Button>
              </div>
            </Card>

            {/* Payment Methods */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Payment Methods
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        **** 1234
                      </p>
                      <p className="text-xs text-gray-500">Expires 12/25</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Wallet className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Bank Account
                      </p>
                      <p className="text-xs text-gray-500">**** 5678</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
