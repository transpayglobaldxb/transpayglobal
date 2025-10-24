"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  CreditCard,
  Shield,
  Clock,
  Globe,
  Lock,
  Bell,
  CheckCircle,
  Star,
  Zap,
  Smartphone,
  DollarSign,
  Calendar,
  FileText,
  Download,
  Eye,
  EyeOff,
  Copy,
  Settings,
  AlertCircle,
  Info,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Issuance",
    description: "Get card details in under 60 seconds",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Globe,
    title: "Global Acceptance",
    description: "Works anywhere Mastercard/Visa is supported",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Zero Physical Card",
    description: "No courier delays, no card loss risk",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Lock,
    title: "Per-Transaction Controls",
    description: "Set single-use, merchant-locked, or recurring limits",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Smartphone,
    title: "Freeze/Unfreeze Instantly",
    description: "Control your card via app instantly",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Get notified for every transaction",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
];

const cardLimits = [
  {
    title: "Daily Limit",
    value: "PKR 1,000,000",
    description: "Customizable after KYC",
    icon: DollarSign,
  },
  {
    title: "Single Transaction",
    value: "PKR 200,000",
    description: "Default limit (changeable)",
    icon: CreditCard,
  },
  {
    title: "Validity",
    value: "1 Year",
    description: "Or single-use option",
    icon: Calendar,
  },
  {
    title: "Currency Support",
    value: "Multi-Currency",
    description: "PKR, USD, EUR",
    icon: Globe,
  },
];

const fees = [
  {
    service: "Issuance",
    fee: "PKR 0",
    note: "Promotional",
    color: "text-green-600",
  },
  {
    service: "Monthly Maintenance",
    fee: "PKR 150",
    note: "Waived first 3 months",
    color: "text-gray-600",
  },
  {
    service: "FX Markup",
    fee: "1.5%",
    note: "On foreign currency transactions",
    color: "text-gray-600",
  },
  {
    service: "Cash Withdrawal",
    fee: "Not permitted",
    note: "Virtual only",
    color: "text-red-600",
  },
  {
    service: "Replacement Card",
    fee: "PKR 50",
    note: "Per re-issue",
    color: "text-gray-600",
  },
];

const securityFeatures = [
  "3D Secure verification for e-commerce",
  "Instant lock/unlock capability",
  "Set merchant whitelist or blacklist",
  "Single-use option for risky merchants",
  "Tokenized for app payments",
  "Real-time fraud monitoring",
];

const applicationSteps = [
  {
    step: 1,
    title: "Choose Virtual Card",
    description:
      "Open app/web portal → Choose &apos;InstantPay Virtual Card&apos;",
    icon: CreditCard,
  },
  {
    step: 2,
    title: "Complete KYC",
    description: "Upload CNIC/passport & selfie for verification",
    icon: FileText,
  },
  {
    step: 3,
    title: "Activate Card",
    description: "Choose currency, set limits → Card activated immediately",
    icon: CheckCircle,
  },
];

export default function VirtualCardPage() {
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
                  Virtual Card
                </h1>
              </div>
              <p className="text-primary-700/80 text-lg font-light leading-relaxed">
                Get your InstantPay Virtual Card in 60 seconds
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-white border-2 border-primary-200 rounded-xl text-primary-700 font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 inline-flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Manage Card
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-primary hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Product Overview */}
        <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                InstantPay Virtual Card
              </h2>
              <p className="text-blue-100 text-lg mb-4">
                Secure. Instant. Everywhere you shop online.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">60s issuance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm">Global acceptance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">3D Secure</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">PKR 0</div>
              <div className="text-blue-100">Issuance Fee</div>
              <div className="text-sm text-blue-200 mt-2">
                Promotional Offer
              </div>
            </div>
          </div>
        </Card>

        {/* Key Features */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${feature.bgColor}`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card Limits & Features */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Features & Limits
              </h3>
              <div className="space-y-4">
                {cardLimits.map((limit, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <limit.icon className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {limit.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {limit.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">
                        {limit.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Security Features */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Security & Controls
              </h3>
              <div className="space-y-3">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Fees & Application Process */}
          <div className="space-y-6">
            {/* Fee Structure */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Fee Structure
              </h3>
              <div className="space-y-4">
                {fees.map((fee, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {fee.service}
                      </p>
                      <p className="text-xs text-gray-500">{fee.note}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-semibold ${fee.color}`}>
                        {fee.fee}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Application Steps */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                How to Apply (3 Steps)
              </h3>
              <div className="space-y-6">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Eligibility & Documents */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Eligibility & Required Documents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                Eligibility Requirements
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Age 18+ years</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">
                    Valid CNIC or Passport
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">
                    Proof of income for higher limits
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">
                    Mobile number & email for 2FA
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                Required Documents
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">
                    CNIC or Passport copy
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">
                    Selfie for verification
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">
                    Salary slip or bank statement
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">
                    Proof of address (if required)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Promotional SMS */}
        <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <div className="flex items-start gap-4">
            <Smartphone className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Promotional SMS
              </h3>
              <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                <p className="text-sm text-gray-700 font-mono">
                  &quot;Get your InstantPay Virtual Card in 60s — secure,
                  global, and free to issue! Download the app & activate now.
                  [link]&quot;
                </p>
              </div>
              <Button variant="outline" size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Copy SMS
              </Button>
            </div>
          </div>
        </Card>

        {/* Terms & Conditions */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Important Terms & Conditions
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                Use subject to issuer&apos;s terms and conditions
              </p>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                Issuer may suspend card for suspicious activity
              </p>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                FX fees & charges as per the Fee Schedule
              </p>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                Refunds/reversals subject to merchant acquirer timelines
              </p>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Get Your Virtual Card?
            </h2>
            <p className="text-blue-100 mb-6">
              Join thousands of users who trust InstantPay for secure online
              payments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Apply for Virtual Card
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
