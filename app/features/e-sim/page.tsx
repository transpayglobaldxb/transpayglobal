import SectionTitle from "@/components/ui/SectionTitle";
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
  Settings,
  MessageSquare,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Star,
  Download,
  Phone,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Activation",
    description:
      "Get connected within minutes of purchase. No physical SIM cards, no waiting for delivery.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Available in 190+ countries worldwide with top local carriers for best connectivity.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    icon: Shield,
    title: "Secure & Verified",
    description:
      "KYC verified with integrated security APIs. Your data is protected with bank-level security.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: Wifi,
    title: "High-Speed Data",
    description:
      "5G/4G LTE connectivity with fast speeds. Stream, browse, and work without interruption.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
];

const popularDestinations = [
  {
    code: "+971",
    name: "UAE",
    providers: "Etisalat, Du",
    package: "10GB + 500 Min",
    validity: "30 Days",
    price: "$25",
    flag: "🇦🇪",
    popularity: "Most Popular",
    color: "from-secondary-50 to-secondary-100/50",
  },
  {
    code: "+1",
    name: "USA",
    providers: "T-Mobile, AT&T",
    package: "20GB + Unlimited",
    validity: "30 Days",
    price: "$30",
    flag: "🇺🇸",
    popularity: "Trending",
    color: "from-primary-50 to-primary-100/50",
  },
  {
    code: "+44",
    name: "UK",
    providers: "Vodafone, O2",
    package: "12GB + 500 Min",
    validity: "30 Days",
    price: "$20",
    flag: "🇬🇧",
    popularity: "Popular",
    color: "from-secondary-50 to-secondary-100/50",
  },
  {
    code: "+966",
    name: "Saudi Arabia",
    providers: "STC, Mobily",
    package: "15GB + 1000 Min",
    validity: "30 Days",
    price: "$28",
    flag: "🇸🇦",
    popularity: "Popular",
    color: "from-primary-50 to-primary-100/50",
  },
  {
    code: "+91",
    name: "India",
    providers: "Jio, Airtel",
    package: "10GB + 1000 Min",
    validity: "30 Days",
    price: "$10",
    flag: "🇮🇳",
    popularity: "Best Value",
    color: "from-secondary-50 to-secondary-100/50",
  },
  {
    code: "+61",
    name: "Australia",
    providers: "Telstra, Optus",
    package: "20GB + 1000 Min",
    validity: "30 Days",
    price: "$27",
    flag: "🇦🇺",
    popularity: "Trending",
    color: "from-primary-50 to-primary-100/50",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Select Destination",
    description:
      "Choose your destination country and browse available eSIM packages",
    icon: MapPin,
  },
  {
    step: "2",
    title: "Verify Identity",
    description: "Complete quick KYC verification with passport and selfie",
    icon: Upload,
  },
  {
    step: "3",
    title: "Make Payment",
    description: "Pay securely with card, wallet, or cryptocurrency",
    icon: CreditCard,
  },
  {
    step: "4",
    title: "Get QR Code",
    description: "Receive eSIM QR code instantly via email and dashboard",
    icon: QrCode,
  },
  {
    step: "5",
    title: "Activate eSIM",
    description: "Scan QR code on your device to activate connectivity",
    icon: Smartphone,
  },
  {
    step: "6",
    title: "Stay Connected",
    description: "Manage usage, top-up data, and extend validity anytime",
    icon: Settings,
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Save up to 90% on international roaming charges",
  },
  {
    icon: Clock,
    title: "Instant Delivery",
    description: "Activate within minutes, no physical SIM delivery wait",
  },
  {
    icon: Phone,
    title: "Keep Your Number",
    description: "Use dual SIM functionality to maintain your home number",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock customer assistance via chat and email",
  },
  {
    icon: TrendingUp,
    title: "Flexible Plans",
    description: "Data-only, voice+data, and unlimited options available",
  },
  {
    icon: Download,
    title: "Easy Top-Up",
    description: "Add more data or extend validity with one click",
  },
];

const stats = [
  { number: "190+", label: "Countries Covered" },
  { number: "5G/4G", label: "High-Speed Data" },
  { number: "24/7", label: "Customer Support" },
  { number: "100K+", label: "Active Users" },
];

const pricingTiers = [
  {
    name: "Data Starter",
    data: "5GB",
    calls: "No Calls",
    validity: "7 Days",
    price: "$8",
    features: [
      "Perfect for short trips",
      "4G/5G speed",
      "Popular destinations",
    ],
  },
  {
    name: "Travel Essentials",
    data: "10GB",
    calls: "500 Minutes",
    validity: "15 Days",
    price: "$15",
    features: ["Most popular choice", "Voice + Data", "190+ countries"],
    popular: true,
  },
  {
    name: "Business Pro",
    data: "20GB",
    calls: "Unlimited",
    validity: "30 Days",
    price: "$30",
    features: ["Best for business", "Unlimited calls", "Priority support"],
  },
];

export default function ESimPage() {
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
          title="Global E-SIM Services"
          subtitle="Instant Connectivity in 190+ Countries"
          description="Stay connected worldwide with our instant e-SIM activation. No physical SIM cards, no roaming charges, just seamless global connectivity."
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

        {/* Key Features */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Why Choose Our E-SIM?
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Experience hassle-free global connectivity
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

        {/* Popular Destinations */}
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Popular Destinations
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Pre-configured packages for the most traveled countries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((destination, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${destination.color} rounded-2xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200/50`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{destination.flag}</span>
                    <div>
                      <h3 className="font-bold text-primary-900 text-lg">
                        {destination.name}
                      </h3>
                      <p className="text-xs text-primary-700/70 font-light">
                        {destination.code}
                      </p>
                    </div>
                  </div>
                  <div className="bg-secondary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {destination.popularity}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-700/70 font-light">
                      Package:
                    </span>
                    <span className="font-semibold text-primary-900">
                      {destination.package}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-700/70 font-light">
                      Validity:
                    </span>
                    <span className="font-semibold text-primary-900">
                      {destination.validity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-700/70 font-light">
                      Providers:
                    </span>
                    <span className="font-semibold text-primary-900 text-xs">
                      {destination.providers}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-xs text-primary-700/70 font-light">
                      Starting from
                    </div>
                    <div className="text-2xl font-bold text-secondary-700">
                      {destination.price}
                    </div>
                  </div>
                  <Button className="btn-secondary">Select Plan</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Get connected in 6 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="card-luxury p-6 hover:shadow-luxury transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-primary-900">
                    {step.title}
                  </h3>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-secondary-700" />
                  </div>
                  <p className="text-sm text-primary-700/80 font-light leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Choose the perfect plan for your travel needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`card-luxury p-8 hover:shadow-luxury transition-all duration-500 ${
                  tier.popular
                    ? "ring-4 ring-secondary-600 ring-opacity-50 scale-105"
                    : ""
                }`}
              >
                {tier.popular && (
                  <div className="bg-secondary-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4" fill="currentColor" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold text-secondary-700 mb-6">
                  {tier.price}
                  <span className="text-lg text-primary-700/60 font-light">
                    /{tier.validity}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-primary-700/80 font-light">Data</span>
                    <span className="font-bold text-primary-900">
                      {tier.data}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-primary-700/80 font-light">
                      Calls
                    </span>
                    <span className="font-bold text-primary-900">
                      {tier.calls}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-primary-700/80 font-light">
                      Validity
                    </span>
                    <span className="font-bold text-primary-900">
                      {tier.validity}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-primary-700/80"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    tier.popular
                      ? "w-full btn-secondary"
                      : "w-full bg-white border-2 border-secondary-600 text-secondary-700 hover:bg-secondary-50 transition-all duration-300 font-semibold px-6 py-3 rounded-xl shadow-soft hover:shadow-lg"
                  }
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Why Travelers Choose Us
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Experience the benefits of modern connectivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card-luxury p-6 hover:shadow-luxury transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                    <benefit.icon className="w-6 h-6 text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-primary-700/80 font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card-luxury max-w-4xl mx-auto p-12 hover:shadow-luxury transition-all duration-500 bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center">
                <Smartphone className="w-10 h-10 text-primary-900" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Ready to Stay Connected?
            </h2>
            <p className="text-xl text-white/80 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Get your e-SIM in minutes and enjoy seamless connectivity in 190+
              countries. No physical SIM, no roaming charges, just instant
              global access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary-900 hover:bg-gray-100 transition-all duration-300 font-bold px-10 py-5 rounded-xl shadow-lg hover:shadow-2xl group"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Browse Destinations
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 font-bold px-10 py-5 rounded-xl"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-6">
              Instant activation • 190+ countries • 24/7 support • USD pricing
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-luxury p-6 text-center hover:shadow-luxury transition-all duration-300">
              <Shield className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="font-bold text-primary-900 mb-2">
                Secure Activation
              </h3>
              <p className="text-sm text-primary-700/80 font-light">
                KYC verified with bank-level security protocols
              </p>
            </div>

            <div className="card-luxury p-6 text-center hover:shadow-luxury transition-all duration-300">
              <Zap className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="font-bold text-primary-900 mb-2">
                Instant Delivery
              </h3>
              <p className="text-sm text-primary-700/80 font-light">
                QR code delivered to your email within minutes
              </p>
            </div>

            <div className="card-luxury p-6 text-center hover:shadow-luxury transition-all duration-300">
              <Users className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="font-bold text-primary-900 mb-2">
                Expert Support
              </h3>
              <p className="text-sm text-primary-700/80 font-light">
                24/7 customer assistance for any activation issues
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
