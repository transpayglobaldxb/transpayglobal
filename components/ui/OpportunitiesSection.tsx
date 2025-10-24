"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  TrendingUp,
  CreditCard,
  FileText,
  Briefcase,
  Building2,
  Star,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface Opportunity {
  id: string;
  title: string;
  description: string;
  category: "loan" | "trading" | "visa" | "job" | "booking" | "credit";
  icon: React.ComponentType<{ className?: string }>;
  status: "available" | "applied" | "approved" | "expired";
  rating: number;
  applicants: number;
  deadline?: string;
  requirements: string[];
  benefits: string[];
  color: string;
  bgColor: string;
}

interface OpportunitiesSectionProps {
  className?: string;
}

const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Premium Personal Loan",
    description: "Get up to $50,000 with competitive rates and flexible terms",
    category: "loan",
    icon: CreditCard,
    status: "available",
    rating: 4.8,
    applicants: 1247,
    deadline: "Ends in 5 days",
    requirements: ["KYC Verified", "Credit Score 650+", "Income Proof"],
    benefits: ["Low Interest Rate", "Quick Approval", "No Hidden Fees"],
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "2",
    title: "Verified Trading Platform",
    description:
      "Access to exclusive trading opportunities with expert guidance",
    category: "trading",
    icon: TrendingUp,
    status: "available",
    rating: 4.9,
    applicants: 892,
    deadline: "Always Available",
    requirements: ["KYC Verified", "Trading Experience", "Risk Assessment"],
    benefits: ["Expert Mentorship", "Real-time Alerts", "Profit Sharing"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "3",
    title: "Express Visa Service",
    description: "Fast-track visa processing for multiple countries",
    category: "visa",
    icon: FileText,
    status: "applied",
    rating: 4.7,
    applicants: 634,
    deadline: "Ends in 12 days",
    requirements: ["Passport Valid", "Travel History", "Financial Proof"],
    benefits: ["Fast Processing", "Documentation Help", "Interview Prep"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "4",
    title: "Senior Developer Position",
    description: "Remote software engineering role at a leading tech company",
    category: "job",
    icon: Briefcase,
    status: "available",
    rating: 4.6,
    applicants: 234,
    deadline: "Ends in 8 days",
    requirements: ["5+ Years Experience", "Portfolio", "Technical Interview"],
    benefits: ["$120k+ Salary", "Remote Work", "Stock Options"],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    id: "5",
    title: "Luxury Hotel Collection",
    description: "Exclusive access to premium hotels with up to 40% discount",
    category: "booking",
    icon: Building2,
    status: "available",
    rating: 4.5,
    applicants: 1567,
    deadline: "Always Available",
    requirements: ["Account Verified", "Payment Method"],
    benefits: ["Best Price Guarantee", "Free Cancellation", "Loyalty Points"],
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    id: "6",
    title: "Credit Score Improvement",
    description: "Personalized plan to boost your credit score by 50+ points",
    category: "credit",
    icon: Star,
    status: "available",
    rating: 4.8,
    applicants: 2103,
    deadline: "Always Available",
    requirements: ["Credit Report Access", "Financial Goals"],
    benefits: ["Personalized Plan", "Monthly Monitoring", "Expert Support"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

export default function OpportunitiesSection({
  className = "",
}: OpportunitiesSectionProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return (
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            Available
          </span>
        );
      case "applied":
        return (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            Applied
          </span>
        );
      case "approved":
        return (
          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
            Approved
          </span>
        );
      case "expired":
        return (
          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
            Expired
          </span>
        );
      default:
        return null;
    }
  };

  const getCategoryStats = () => {
    const stats = opportunities.reduce((acc, opp) => {
      acc[opp.category] = (acc[opp.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return [
      {
        category: "Loans",
        count: stats.loan || 0,
        icon: CreditCard,
        color: "text-green-600",
      },
      {
        category: "Trading",
        count: stats.trading || 0,
        icon: TrendingUp,
        color: "text-blue-600",
      },
      {
        category: "Visa",
        count: stats.visa || 0,
        icon: FileText,
        color: "text-purple-600",
      },
      {
        category: "Jobs",
        count: stats.job || 0,
        icon: Briefcase,
        color: "text-orange-600",
      },
      {
        category: "Hotels",
        count: stats.booking || 0,
        icon: Building2,
        color: "text-teal-600",
      },
    ];
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Available Opportunities
          </h2>
          <p className="text-gray-600 mt-1">
            Discover verified opportunities tailored to your profile
          </p>
        </div>
        <Button variant="outline">
          View All Opportunities
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Category Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {getCategoryStats().map((stat, index) => (
          <Card key={index} className="p-4 text-center">
            <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
            <div className="text-2xl font-bold text-gray-900">{stat.count}</div>
            <div className="text-sm text-gray-600">{stat.category}</div>
          </Card>
        ))}
      </div>

      {/* Featured Opportunities */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Featured Opportunities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.slice(0, 6).map((opportunity) => (
            <Card
              key={opportunity.id}
              className="p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${opportunity.bgColor}`}>
                  <opportunity.icon
                    className={`w-6 h-6 ${opportunity.color}`}
                  />
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(opportunity.status)}
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {opportunity.title}
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                {opportunity.description}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-900">
                    {opportunity.rating}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {opportunity.applicants} applicants
                  </span>
                </div>
                {opportunity.deadline && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {opportunity.deadline}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <h5 className="text-sm font-medium text-gray-900 mb-2">
                    Requirements:
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {opportunity.requirements.map((req, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-900 mb-2">
                    Benefits:
                  </h5>
                  <div className="space-y-1">
                    {opportunity.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1">
                  {opportunity.status === "applied"
                    ? "View Status"
                    : "Apply Now"}
                </Button>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Access */}
      <Card className="p-6 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Need Help Finding Opportunities?
            </h3>
            <p className="text-blue-100">
              Our AI-powered recommendation engine can suggest the best
              opportunities for you.
            </p>
          </div>
          <Button
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Get Recommendations
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
