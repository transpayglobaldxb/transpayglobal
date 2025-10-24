"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  MessageSquare,
  Send,
  Search,
  Filter,
  MoreVertical,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";

const messages = [
  {
    id: "1",
    sender: "Loan Support Team",
    subject: "Your loan application has been approved",
    preview:
      "Congratulations! Your personal loan application for $15,000 has been approved. Please check your email for next steps.",
    time: "2 hours ago",
    status: "unread",
    type: "success",
  },
  {
    id: "2",
    sender: "Trading Platform",
    subject: "New trading opportunity available",
    preview:
      "A new verified trading platform is now available in your area. Check out the exclusive offers.",
    time: "5 hours ago",
    status: "read",
    type: "info",
  },
  {
    id: "3",
    sender: "Visa Services",
    subject: "Visa application status update",
    preview:
      "Your visa application is currently under review. We'll notify you once we have an update.",
    time: "1 day ago",
    status: "read",
    type: "pending",
  },
  {
    id: "4",
    sender: "Job Opportunities",
    subject: "Interview scheduled for tomorrow",
    preview:
      "Your job interview has been scheduled for tomorrow at 2:00 PM. Please prepare your portfolio.",
    time: "2 days ago",
    status: "read",
    type: "info",
  },
  {
    id: "5",
    sender: "Hotel Bookings",
    subject: "Booking confirmation",
    preview:
      "Your hotel reservation in Dubai has been confirmed. Check-in details have been sent to your email.",
    time: "1 week ago",
    status: "read",
    type: "success",
  },
];

export default function MessagesPage() {
  const getStatusIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case "info":
        return <AlertCircle className="w-4 h-4 text-blue-600" />;
      default:
        return <MessageSquare className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    return status === "unread" ? "bg-blue-50 border-l-blue-500" : "bg-white";
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
                  Messages
                </h1>
              </div>
              <p className="text-primary-700/80 text-lg font-light leading-relaxed">
                Stay updated with your applications and opportunities
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-white border-2 border-primary-200 rounded-xl text-primary-700 font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 inline-flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-primary hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Total Messages
                </p>
                <p className="text-3xl font-bold text-primary-900">24</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Unread
                </p>
                <p className="text-3xl font-bold text-primary-900">3</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <AlertCircle className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Important
                </p>
                <p className="text-3xl font-bold text-primary-900">8</p>
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
                  This Week
                </p>
                <p className="text-3xl font-bold text-primary-900">12</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
                  All Messages
                </h2>
                <button className="px-4 py-2 bg-white border-2 border-primary-200 rounded-xl text-primary-700 text-sm font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all duration-300">
                  Mark All Read
                </button>
              </div>

              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-5 rounded-2xl border-l-4 cursor-pointer hover:shadow-soft transition-all duration-300 ${
                      message.status === "unread"
                        ? "bg-gradient-to-r from-primary-50/30 to-primary-50/10 border-l-primary-500"
                        : "bg-white border-l-gray-300"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {getStatusIcon(message.type)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-bold text-primary-900 truncate">
                            {message.sender}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-primary-700/70 font-light">
                              {message.time}
                            </span>
                            <button className="text-primary-400 hover:text-primary-600 transition-colors">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <h4 className="text-sm font-semibold text-primary-900 mb-1">
                          {message.subject}
                        </h4>

                        <p className="text-sm text-primary-700/80 font-light line-clamp-2">
                          {message.preview}
                        </p>
                      </div>

                      {message.status === "unread" && (
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-secondary-600 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Contact */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button className="w-full justify-start">
                  <Send className="w-4 h-4 mr-2" />
                  Compose Message
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Support
                </Button>
              </div>
            </Card>

            {/* Contact Support */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Need Help?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Live Chat
                    </p>
                    <p className="text-xs text-gray-500">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Phone Support
                    </p>
                    <p className="text-xs text-gray-500">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Email Support
                    </p>
                    <p className="text-xs text-gray-500">
                      support@transpayglobal.com
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
