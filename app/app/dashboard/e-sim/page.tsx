"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Smartphone,
  Globe,
  MapPin,
  DollarSign,
  Clock,
  CheckCircle,
  Upload,
  CreditCard,
  QrCode,
  Wifi,
  Phone,
  Calendar,
  MessageSquare,
  Settings,
  Download,
  Search,
  Filter,
  Star,
  Shield,
  Zap,
  Users,
  TrendingUp,
  AlertCircle,
  Info,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const countries = [
  {
    code: "+971",
    name: "UAE",
    providers: ["Etisalat", "Du"],
    package: "10GB + 500 Min",
    validity: "30 Days",
    price: "$25",
    flag: "🇦🇪",
    popularity: 95,
  },
  {
    code: "+966",
    name: "Saudi Arabia",
    providers: ["STC", "Mobily"],
    package: "15GB + 1000 Min",
    validity: "30 Days",
    price: "$28",
    flag: "🇸🇦",
    popularity: 88,
  },
  {
    code: "+1",
    name: "USA",
    providers: ["T-Mobile", "AT&T"],
    package: "20GB + Unlimited Calls",
    validity: "30 Days",
    price: "$30",
    flag: "🇺🇸",
    popularity: 92,
  },
  {
    code: "+44",
    name: "UK",
    providers: ["Vodafone", "O2"],
    package: "12GB + 500 Min",
    validity: "30 Days",
    price: "$20",
    flag: "🇬🇧",
    popularity: 85,
  },
  {
    code: "+91",
    name: "India",
    providers: ["Jio", "Airtel"],
    package: "10GB + 1000 Min",
    validity: "30 Days",
    price: "$10",
    flag: "🇮🇳",
    popularity: 98,
  },
  {
    code: "+90",
    name: "Turkey",
    providers: ["Turkcell", "Vodafone"],
    package: "15GB + 1000 Min",
    validity: "30 Days",
    price: "$18",
    flag: "🇹🇷",
    popularity: 82,
  },
  {
    code: "+86",
    name: "China",
    providers: ["China Mobile", "Unicom"],
    package: "10GB + 500 Min",
    validity: "30 Days",
    price: "$22",
    flag: "🇨🇳",
    popularity: 78,
  },
  {
    code: "+61",
    name: "Australia",
    providers: ["Telstra", "Optus"],
    package: "20GB + 1000 Min",
    validity: "30 Days",
    price: "$27",
    flag: "🇦🇺",
    popularity: 90,
  },
];

const processSteps = [
  {
    step: 1,
    title: "Country Selection",
    description:
      "Select your destination country and choose from available eSIM providers with data/voice packages",
    icon: MapPin,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    step: 2,
    title: "KYC & Document Upload",
    description:
      "Upload passport and selfie for verification through integrated APIs (SumSub, Veriff, Trulioo)",
    icon: Upload,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    step: 3,
    title: "Payment Integration",
    description:
      "Pay via app wallet, debit/credit card, or cryptocurrency with multi-currency support",
    icon: CreditCard,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    step: 4,
    title: "eSIM Activation",
    description:
      "Receive eSIM QR code or installation link via email and dashboard within minutes",
    icon: QrCode,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    step: 5,
    title: "Post-Activation Management",
    description:
      "View usage, top-up data/minutes, extend validity, and manage eSIM from dashboard",
    icon: Settings,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    step: 6,
    title: "Customer Support",
    description:
      "24/7 live chat and email support for activation issues, refunds, and configuration help",
    icon: MessageSquare,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Get connected within minutes of purchase",
    color: "text-yellow-600",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Available in 190+ countries worldwide",
    color: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Secure & Verified",
    description: "KYC verified with integrated security APIs",
    color: "text-green-600",
  },
  {
    icon: Wifi,
    title: "High-Speed Data",
    description: "5G/4G LTE connectivity with fast speeds",
    color: "text-purple-600",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Best rates compared to roaming charges",
    color: "text-orange-600",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock customer assistance",
    color: "text-red-600",
  },
];

const currencies = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "AED", name: "UAE Dirham", symbol: "د.إ" },
  { code: "PKR", name: "Pakistani Rupee", symbol: "₨" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "EUR", name: "Euro", symbol: "€" },
];

export default function ESIMPage() {
  const getPopularityColor = (popularity: number) => {
    if (popularity >= 95) return "text-green-600 bg-green-50";
    if (popularity >= 85) return "text-blue-600 bg-blue-50";
    if (popularity >= 75) return "text-yellow-600 bg-yellow-50";
    return "text-gray-600 bg-gray-50";
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
                  E-SIM Activation
                </h1>
              </div>
              <p className="text-primary-700/80 text-lg font-light leading-relaxed">
                Instant global connectivity with secure, verified eSIM
                activation
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-white border-2 border-primary-200 rounded-xl text-primary-700 font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 inline-flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-primary hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search Countries
              </button>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Available Countries
                </p>
                <p className="text-3xl font-bold text-primary-900">190+</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Active eSIMs
                </p>
                <p className="text-3xl font-bold text-primary-900">12</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7 text-green-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Total Savings
                </p>
                <p className="text-3xl font-bold text-primary-900">$450</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <DollarSign className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Support Rating
                </p>
                <p className="text-3xl font-bold text-primary-900">4.9/5</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Star className="w-7 h-7 text-secondary-700 fill-secondary-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Our eSIM?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gray-50`}>
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

        {/* Country Selection */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Available Countries & Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {country.name}
                      </h3>
                      <p className="text-sm text-gray-500">{country.code}</p>
                    </div>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getPopularityColor(
                      country.popularity
                    )}`}
                  >
                    {country.popularity}% popular
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Providers
                    </p>
                    <p className="text-sm text-gray-600">
                      {country.providers.join(", ")}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900">Package</p>
                    <p className="text-sm text-gray-600">{country.package}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Validity
                    </p>
                    <p className="text-sm text-gray-600">{country.validity}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    {country.price}
                  </div>
                  <Button
                    size="sm"
                    className="group-hover:bg-primary/90 transition-colors"
                  >
                    Select
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 relative">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${step.bgColor}`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-gray-500">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Methods */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Payment Methods
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <CreditCard className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Debit/Credit Card
                  </h4>
                  <p className="text-xs text-gray-500">
                    Visa, Mastercard, American Express
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Smartphone className="w-8 h-8 text-green-600" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    App Wallet
                  </h4>
                  <p className="text-xs text-gray-500">
                    Pay directly from your TransPay Global wallet
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <DollarSign className="w-8 h-8 text-purple-600" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Cryptocurrency
                  </h4>
                  <p className="text-xs text-gray-500">
                    Bitcoin, Ethereum, and other major cryptos
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                Supported Currencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {currencies.map((currency, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {currency.symbol} {currency.code}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Customer Support */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              24/7 Customer Support
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MessageSquare className="w-8 h-8 text-green-600" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Live Chat
                  </h4>
                  <p className="text-xs text-gray-500">
                    Instant support for activation issues
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Settings className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    APN Configuration
                  </h4>
                  <p className="text-xs text-gray-500">
                    Help with device setup and configuration
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-purple-600" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Refund Support
                  </h4>
                  <p className="text-xs text-gray-500">
                    Quick resolution for refund requests
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">
                  4.9/5 Support Rating
                </span>
              </div>
              <p className="text-xs text-green-700">
                &quot;Amazing support! Got my eSIM activated in 5 minutes with
                their help.&quot; - Sarah K.
              </p>
            </div>
          </Card>
        </div>

        {/* Benefits Summary */}
        <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Instant Global Connectivity
            </h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Join thousands of travelers and business users who trust our
              secure, verified, and eco-friendly eSIM activation service for
              seamless connectivity worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Browse Countries
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
            </div>
          </div>
        </Card>

        {/* Important Information */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Important Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Device Compatibility
                  </h4>
                  <p className="text-xs text-gray-600">
                    eSIM requires a compatible device. Check your device&apos;s
                    eSIM support before purchase.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Activation Time
                  </h4>
                  <p className="text-xs text-gray-600">
                    Most eSIMs activate within 5-15 minutes. Some may take up to
                    2 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Refund Policy
                  </h4>
                  <p className="text-xs text-gray-600">
                    Full refund available within 24 hours if eSIM fails to
                    activate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Security
                  </h4>
                  <p className="text-xs text-gray-600">
                    All transactions are encrypted and KYC verified for maximum
                    security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
