"use client";

import { Card } from "@/components/ui/Card";
import {
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

interface CreditScoreWidgetProps {
  score?: number;
  maxScore?: number;
  lastUpdated?: string;
  trend?: "up" | "down" | "stable";
  status?: "excellent" | "good" | "fair" | "poor";
  className?: string;
}

export default function CreditScoreWidget({
  score = 750,
  maxScore = 850,
  lastUpdated = "Last updated 2 days ago",
  trend = "up",
  status = "good",
  className = "",
}: CreditScoreWidgetProps) {
  const getScoreColor = (score: number) => {
    if (score >= 750) return "text-green-600";
    if (score >= 700) return "text-blue-600";
    if (score >= 650) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 750) return "bg-green-50";
    if (score >= 700) return "bg-blue-50";
    if (score >= 650) return "bg-yellow-50";
    return "bg-red-50";
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "excellent":
        return "Excellent";
      case "good":
        return "Good";
      case "fair":
        return "Fair";
      case "poor":
        return "Needs Improvement";
      default:
        return "Good";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
      case "good":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "fair":
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case "poor":
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
  };

  const percentage = (score / maxScore) * 100;

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Credit Score</h3>
        <div className="flex items-center gap-2">
          {getStatusIcon(status)}
          <span className="text-sm font-medium text-gray-600">
            {getStatusText(status)}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6 mb-4">
        <div className="relative">
          <div className="w-24 h-24 relative">
            <svg
              className="w-24 h-24 transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-200"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${
                  2 * Math.PI * 40 * (1 - percentage / 100)
                }`}
                className={getScoreColor(score)}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
                {score}
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-600">Trend</span>
            {trend === "up" ? (
              <TrendingUp className="w-4 h-4 text-green-600" />
            ) : trend === "down" ? (
              <TrendingDown className="w-4 h-4 text-red-600" />
            ) : (
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            )}
            <span
              className={`text-sm font-medium ${
                trend === "up"
                  ? "text-green-600"
                  : trend === "down"
                  ? "text-red-600"
                  : "text-gray-600"
              }`}
            >
              {trend === "up" ? "+12" : trend === "down" ? "-5" : "0"} points
            </span>
          </div>
          <p className="text-xs text-gray-500">{lastUpdated}</p>
        </div>
      </div>

      <div className={`p-3 rounded-lg ${getScoreBgColor(score)}`}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Score Range: 300-850
          </span>
          <span className="text-sm text-gray-600">
            {Math.round(percentage)}% of max
          </span>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">
          Quick Tips to Improve:
        </h4>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Pay bills on time consistently</li>
          <li>• Keep credit utilization below 30%</li>
          <li>• Avoid opening too many new accounts</li>
        </ul>
      </div>
    </Card>
  );
}
