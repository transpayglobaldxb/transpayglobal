"use client";

import { Card } from "@/components/ui/Card";
import {
  CheckCircle,
  Clock,
  AlertCircle,
  CreditCard,
  TrendingUp,
  FileText,
  Briefcase,
  Building2,
  MessageSquare,
} from "lucide-react";

interface ActivityItem {
  id: string;
  type: "success" | "pending" | "warning" | "info";
  title: string;
  description: string;
  timestamp: string;
  category:
    | "loan"
    | "trading"
    | "visa"
    | "job"
    | "booking"
    | "kyc"
    | "payment"
    | "general";
}

interface ActivityTimelineProps {
  activities?: ActivityItem[];
  className?: string;
}

const defaultActivities: ActivityItem[] = [
  {
    id: "1",
    type: "success",
    title: "Loan Application Approved",
    description: "Your personal loan application has been approved for $15,000",
    timestamp: "2 hours ago",
    category: "loan",
  },
  {
    id: "2",
    type: "info",
    title: "New Trading Opportunity",
    description:
      "A new verified trading platform is now available in your area",
    timestamp: "5 hours ago",
    category: "trading",
  },
  {
    id: "3",
    type: "pending",
    title: "Visa Application Submitted",
    description:
      "Your visa application is under review. Expected response in 5-7 days",
    timestamp: "1 day ago",
    category: "visa",
  },
  {
    id: "4",
    type: "success",
    title: "KYC Verification Complete",
    description: "Your identity verification has been completed successfully",
    timestamp: "2 days ago",
    category: "kyc",
  },
  {
    id: "5",
    type: "warning",
    title: "Payment Due Soon",
    description: "Your monthly subscription payment is due in 3 days",
    timestamp: "3 days ago",
    category: "payment",
  },
  {
    id: "6",
    type: "info",
    title: "Job Interview Scheduled",
    description: "You have a job interview scheduled for tomorrow at 2:00 PM",
    timestamp: "4 days ago",
    category: "job",
  },
  {
    id: "7",
    type: "success",
    title: "Hotel Booking Confirmed",
    description: "Your hotel reservation in Dubai has been confirmed",
    timestamp: "1 week ago",
    category: "booking",
  },
];

export default function ActivityTimeline({
  activities = defaultActivities,
  className = "",
}: ActivityTimelineProps) {
  const getActivityIcon = (type: string, category: string) => {
    if (type === "success")
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    if (type === "warning")
      return <AlertCircle className="w-5 h-5 text-yellow-600" />;
    if (type === "pending") return <Clock className="w-5 h-5 text-blue-600" />;

    // Category-specific icons for info type
    switch (category) {
      case "loan":
        return <CreditCard className="w-5 h-5 text-blue-600" />;
      case "trading":
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case "visa":
        return <FileText className="w-5 h-5 text-blue-600" />;
      case "job":
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case "booking":
        return <Building2 className="w-5 h-5 text-blue-600" />;
      case "kyc":
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
      case "payment":
        return <CreditCard className="w-5 h-5 text-blue-600" />;
      default:
        return <MessageSquare className="w-5 h-5 text-blue-600" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "success":
        return "border-l-green-500 bg-green-50";
      case "warning":
        return "border-l-yellow-500 bg-yellow-50";
      case "pending":
        return "border-l-blue-500 bg-blue-50";
      case "info":
        return "border-l-blue-500 bg-blue-50";
      default:
        return "border-l-gray-500 bg-gray-50";
    }
  };

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.slice(0, 6).map((activity) => (
          <div
            key={activity.id}
            className={`flex items-start gap-4 p-4 rounded-lg border-l-4 ${getActivityColor(
              activity.type
            )}`}
          >
            <div className="flex-shrink-0 mt-0.5">
              {getActivityIcon(activity.type, activity.category)}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 mb-1">
                {activity.title}
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                {activity.description}
              </p>
              <p className="text-xs text-gray-500">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {activities.length > 6 && (
        <div className="mt-4 text-center">
          <button className="text-sm text-primary hover:text-primary/80 font-medium">
            Load More Activities
          </button>
        </div>
      )}
    </Card>
  );
}
