import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import {
  CreditCard,
  Zap,
  Globe,
  Shield,
  Lock,
  Smartphone,
  Bell,
  CheckCircle,
  DollarSign,
  Calendar,
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  Eye,
  Settings,
  Download,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Issuance",
    description:
      "Get your virtual card details in under 60 seconds. No waiting, no courier delays, start using immediately.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: Globe,
    title: "Global Acceptance",
    description:
      "Works anywhere Mastercard/Visa is supported. Shop online worldwide with USD payments.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    icon: Shield,
    title: "Zero Physical Card",
    description:
      "No courier delays, no card loss risk. Completely digital and secure virtual card solution.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: Lock,
    title: "Advanced Security",
    description:
      "3D Secure verification, per-transaction controls, and instant lock/unlock capabilities.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
];

const cardLimits = [
  {
    title: "Daily Limit",
    value: "$10,000",
    description: "Customizable after KYC",
    icon: DollarSign,
    color: "from-secondary-50 to-secondary-100/50",
    iconColor: "text-secondary-700",
  },
  {
    title: "Single Transaction",
    value: "$5,000",
    description: "Default limit (changeable)",
    icon: CreditCard,
    color: "from-primary-50 to-primary-100/50",
    iconColor: "text-primary-700",
  },
  {
    title: "Validity",
    value: "1 Year",
    description: "Or single-use option",
    icon: Calendar,
    color: "from-secondary-50 to-secondary-100/50",
    iconColor: "text-secondary-700",
  },
  {
    title: "Currency Support",
    value: "USD",
    description: "International payments",
    icon: Globe,
    color: "from-primary-50 to-primary-100/50",
    iconColor: "text-primary-700",
  },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "3D Secure Verification",
    description: "Enhanced security for all e-commerce transactions",
  },
  {
    icon: Lock,
    title: "Instant Lock/Unlock",
    description: "Control your card with a single tap via app",
  },
  {
    icon: Eye,
    title: "Merchant Controls",
    description: "Set whitelist or blacklist for specific merchants",
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Get notified instantly for every transaction",
  },
  {
    icon: Settings,
    title: "Transaction Limits",
    description: "Set single-use, merchant-locked, or recurring limits",
  },
  {
    icon: Smartphone,
    title: "Tokenized Payments",
    description: "Secure tokenization for app payments",
  },
];

const useCases = [
  {
    icon: Globe,
    title: "Online Shopping",
    description: "Shop on international e-commerce platforms",
    examples: "Amazon, eBay, AliExpress",
  },
  {
    icon: Users,
    title: "Subscription Services",
    description: "Pay for Netflix, Spotify, Adobe, and more",
    examples: "Netflix, Spotify, YouTube Premium",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Fund Google Ads, Facebook Ads campaigns",
    examples: "Google Ads, Meta Business",
  },
  {
    icon: Download,
    title: "Software & Apps",
    description: "Purchase software licenses and app subscriptions",
    examples: "Microsoft, Apple, Steam",
  },
];

const applicationSteps = [
  {
    step: "1",
    title: "Choose Virtual Card",
    description: "Open app/web portal → Choose 'InstantPay Virtual Card'",
    icon: CreditCard,
  },
  {
    step: "2",
    title: "Complete KYC",
    description: "Upload CNIC/passport & selfie for verification",
    icon: CheckCircle,
  },
  {
    step: "3",
    title: "Activate Card",
    description: "Choose currency, set limits → Card activated immediately",
    icon: Zap,
  },
];

const fees = [
  {
    service: "Card Issuance",
    fee: "$0",
    note: "Free forever",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    service: "Monthly Maintenance",
    fee: "$2.99",
    note: "Waived first 3 months",
    color: "text-gray-700",
    bgColor: "bg-gray-50",
  },
  {
    service: "International Transactions",
    fee: "1.5%",
    note: "On foreign currency conversions",
    color: "text-gray-700",
    bgColor: "bg-gray-50",
  },
  {
    service: "Replacement Card",
    fee: "$1.00",
    note: "Per re-issue",
    color: "text-gray-700",
    bgColor: "bg-gray-50",
  },
];

const stats = [
  { number: "60s", label: "Card Issuance Time" },
  { number: "USD", label: "Primary Currency" },
  { number: "24/7", label: "Customer Support" },
  { number: "100%", label: "Digital & Secure" },
];

export default function VirtualCardPage() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-secondary-200/15 to-transparent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-200/15 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <SectionTitle
          title="InstantPay Virtual Card"
          subtitle="Get Your Virtual Card in 60 Seconds"
          description="Shop online globally with our instant virtual card. Multi-currency support, advanced security features, and zero physical card hassles."
        />

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-luxury p-6 text-center hover:shadow-luxury transition-all duration-500"
            >
              <div className="text-4xl font-bold text-secondary-700 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-primary-700/80 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Hero Card Display */}
        <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative">
            <div className="card-luxury p-12 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700 text-white hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                  <span className="text-2xl font-bold">InstantPay</span>
                </div>
                <CreditCard className="w-12 h-12 opacity-50" />
              </div>

              <div className="space-y-4 mb-8">
                <div className="font-mono text-2xl tracking-widest">
                  •••• •••• •••• 8472
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs opacity-70 mb-1">Card Holder</div>
                    <div className="font-semibold">Your Name Here</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-70 mb-1">Valid Thru</div>
                    <div className="font-semibold">12/26</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Secure by Design</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">VIRTUAL</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-secondary-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Instant Delivery
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              100% Digital
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Why Choose InstantPay Virtual Card?
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Experience the future of digital payments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-elegant border border-gray-100/50 p-8 text-center hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-700/80 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Card Limits */}
        <div className="mt-20 card-luxury p-12 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Card Limits & Features
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Flexible limits designed for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardLimits.map((limit, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${limit.color} rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border ${index % 2 === 0 ? 'border-secondary-200/50' : 'border-primary-200/50'}`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${index % 2 === 0 ? 'from-secondary-100 to-secondary-200' : 'from-primary-100 to-primary-200'} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft`}>
                  <limit.icon className={`w-7 h-7 ${limit.iconColor}`} />
                </div>
                <h3 className="font-bold text-primary-900 text-lg mb-2">
                  {limit.title}
                </h3>
                <div className={`text-2xl font-bold mb-2 ${index % 2 === 0 ? 'text-secondary-700' : 'text-primary-700'}`}>
                  {limit.value}
                </div>
                <p className="text-sm text-primary-700/80 font-light">
                  {limit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-secondary-700" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Advanced Security Features
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Your transactions are protected with bank-level security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="card-luxury p-6 hover:shadow-luxury transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <feature.icon className="w-6 h-6 text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-primary-700/80 font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-20 card-luxury p-12 max-w-6xl mx-auto bg-gradient-to-br from-secondary-50 to-secondary-100/50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Perfect For Every Need
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Use your virtual card for various online services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center mb-4 shadow-soft">
                  <useCase.icon className="w-7 h-7 text-secondary-700" />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-primary-700/80 mb-3 font-light">
                  {useCase.description}
                </p>
                <div className="text-xs text-secondary-700 font-semibold bg-secondary-50 rounded-lg px-3 py-2">
                  {useCase.examples}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Get Your Card in 3 Simple Steps
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Start using your virtual card in under 60 seconds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applicationSteps.map((step, index) => (
              <div
                key={index}
                className="card-luxury p-8 text-center hover:shadow-luxury transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-secondary-700" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-primary-700/80 font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fees & Charges */}
        <div className="mt-20 card-luxury p-12 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Transparent Pricing
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              No hidden charges, know exactly what you pay
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary-300 bg-gradient-to-r from-primary-50 to-primary-100/50">
                  <th className="py-4 px-6 font-bold text-primary-900 text-lg">
                    Service
                  </th>
                  <th className="py-4 px-6 font-bold text-primary-900 text-lg">
                    Fee
                  </th>
                  <th className="py-4 px-6 font-bold text-primary-900 text-lg">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fees.map((fee, index) => (
                  <tr
                    key={index}
                    className={`hover:${fee.bgColor} transition-colors`}
                  >
                    <td className="py-4 px-6 font-semibold text-primary-900">
                      {fee.service}
                    </td>
                    <td className={`py-4 px-6 font-bold ${fee.color}`}>
                      {fee.fee}
                    </td>
                    <td className="py-4 px-6 text-primary-700/80 font-light text-sm">
                      {fee.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card-luxury max-w-4xl mx-auto p-12 hover:shadow-luxury transition-all duration-500 bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center">
                <CreditCard className="w-10 h-10 text-primary-900" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Ready to Go Digital?
            </h2>
            <p className="text-xl text-white/80 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Get your InstantPay Virtual Card now and start shopping online
              globally. Instant issuance, zero physical card hassles, maximum
              security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary-900 hover:bg-gray-100 transition-all duration-300 font-bold px-10 py-5 rounded-xl shadow-lg hover:shadow-2xl group"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 font-bold px-10 py-5 rounded-xl"
              >
                <Clock className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-6">
              Free issuance • 60-second delivery • USD payments worldwide
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-luxury p-6 text-center hover:shadow-luxury transition-all duration-300">
              <Clock className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="font-bold text-primary-900 mb-2">
                Instant Activation
              </h3>
              <p className="text-sm text-primary-700/80 font-light">
                Card ready in 60 seconds, no waiting period
              </p>
            </div>

            <div className="card-luxury p-6 text-center hover:shadow-luxury transition-all duration-300">
              <Globe className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="font-bold text-primary-900 mb-2">
                Shop Worldwide
              </h3>
              <p className="text-sm text-primary-700/80 font-light">
                Accepted on all major e-commerce platforms globally
              </p>
            </div>

            <div className="card-luxury p-6 text-center hover:shadow-luxury transition-all duration-300">
              <Shield className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="font-bold text-primary-900 mb-2">
                Maximum Security
              </h3>
              <p className="text-sm text-primary-700/80 font-light">
                Protected by advanced fraud detection and 3D Secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


