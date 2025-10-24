"use client";

import { Card } from "@/components/ui/Card";
import {
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  FileText,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface KYCStep {
  id: string;
  title: string;
  description: string;
  status: "completed" | "pending" | "in-progress" | "failed";
  icon: React.ComponentType<{ className?: string }>;
}

interface KYCStatusProps {
  overallStatus?: "completed" | "pending" | "in-progress" | "failed";
  progress?: number;
  className?: string;
}

const kycSteps: KYCStep[] = [
  {
    id: "personal-info",
    title: "Personal Information",
    description: "Basic personal details and contact information",
    status: "completed",
    icon: User,
  },
  {
    id: "identity-verification",
    title: "Identity Verification",
    description: "Upload government-issued ID for verification",
    status: "completed",
    icon: FileText,
  },
  {
    id: "photo-verification",
    title: "Photo Verification",
    description: "Take a selfie for identity confirmation",
    status: "in-progress",
    icon: Camera,
  },
  {
    id: "address-proof",
    title: "Address Proof",
    description: "Upload utility bill or bank statement",
    status: "pending",
    icon: FileText,
  },
  {
    id: "final-review",
    title: "Final Review",
    description: "Our team will review all submitted documents",
    status: "pending",
    icon: CheckCircle,
  },
];

export default function KYCStatus({
  overallStatus = "in-progress",
  progress = 60,
  className = "",
}: KYCStatusProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-blue-600" />;
      case "failed":
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50";
      case "in-progress":
        return "text-blue-600 bg-blue-50";
      case "failed":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getOverallStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Verification Complete";
      case "in-progress":
        return "Verification In Progress";
      case "failed":
        return "Verification Failed";
      default:
        return "Verification Pending";
    }
  };

  const getOverallStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "in-progress":
        return "text-blue-600";
      case "failed":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            KYC Verification
          </h3>
          <p
            className={`text-sm font-medium ${getOverallStatusColor(
              overallStatus
            )}`}
          >
            {getOverallStatusText(overallStatus)}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">{progress}%</div>
          <div className="text-sm text-gray-500">Complete</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {kycSteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center gap-4 p-3 rounded-lg ${getStatusColor(
              step.status
            )}`}
          >
            <div className="flex-shrink-0">{getStatusIcon(step.status)}</div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">{step.title}</h4>
              <p className="text-xs text-gray-600">{step.description}</p>
            </div>
            <div className="flex-shrink-0">
              <step.icon className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="mt-6">
        {overallStatus === "completed" ? (
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-green-800">
              Your KYC verification is complete! You now have full access to all
              features.
            </p>
          </div>
        ) : (
          <Button className="w-full">
            {overallStatus === "in-progress"
              ? "Continue Verification"
              : "Start Verification"}
          </Button>
        )}
      </div>

      {/* Benefits */}
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <h4 className="text-sm font-medium text-blue-900 mb-2">
          Benefits of KYC Verification:
        </h4>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>• Access to premium loan opportunities</li>
          <li>• Higher credit limits and better rates</li>
          <li>• Priority support and faster processing</li>
          <li>• Exclusive trading and investment options</li>
        </ul>
      </div>
    </Card>
  );
}
