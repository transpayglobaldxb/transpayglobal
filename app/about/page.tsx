import { Button } from "@/components/ui/Button";
import {
  Target,
  Users,
  Award,
  Heart,
  ArrowRight,
  Sparkles,
  Plane,
  CreditCard,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Scale,
  Stethoscope,
  Shield,
  Globe,
  Zap,
  Lock,
  Brain,
  Building2,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Travel & Lifestyle",
    features: [
      "Hotel booking with up to 50% member discounts",
      "Flight booking with real-time fares and instant e-tickets",
      "VVIP airport lounge access through global partners",
      "24/7 concierge support and multi-currency payments",
      "Optional travel insurance and visa processing",
    ],
    color: "from-blue-50 to-blue-100/50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-500",
  },
  {
    icon: CreditCard,
    title: "Financial Ecosystem",
    features: [
      "TransPay Global Credit Card with tier-based benefits",
      "Trading loans for crypto and digital investments",
      "Multi-currency wallet supporting fiat and crypto",
      "AI-based spending analytics and fraud detection",
      "3D-Secure payments and OTP verification",
    ],
    color: "from-green-50 to-green-100/50",
    iconColor: "text-green-600",
    borderColor: "border-green-500",
  },
  {
    icon: TrendingUp,
    title: "Cryptocurrency & Investment",
    features: [
      "Secure crypto wallet to buy, hold, and convert",
      "AI trading assistant for portfolio management",
      "Copy trading with verified top traders",
      "Blockchain-grade encryption and AML/KYC compliance",
    ],
    color: "from-purple-50 to-purple-100/50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-500",
  },
  {
    icon: Briefcase,
    title: "Global Employment",
    features: [
      "AI-powered CV matching with 100,000+ verified companies",
      "Access to employers across 50+ countries",
      "Direct recruitment, no intermediaries",
      "Job categories: IT, Engineering, Health, Finance, Education",
    ],
    color: "from-orange-50 to-orange-100/50",
    iconColor: "text-orange-600",
    borderColor: "border-orange-500",
  },
  {
    icon: GraduationCap,
    title: "Education Hub",
    features: [
      "Apply to top universities worldwide",
      "Scholarships with up to 100% tuition coverage",
      "AI-powered course recommendation engine",
      "Support for student visa processing",
      "Exclusive TransPay Talent Fund for AI & Cybersecurity",
    ],
    color: "from-indigo-50 to-indigo-100/50",
    iconColor: "text-indigo-600",
    borderColor: "border-indigo-500",
  },
  {
    icon: Stethoscope,
    title: "Health & Legal Assistance",
    features: [
      "24/7 doctor access via video consultation",
      "Encrypted medical record storage",
      "Access to verified lawyers for consultation",
      "Transparent fixed-fee pricing",
    ],
    color: "from-red-50 to-red-100/50",
    iconColor: "text-red-600",
    borderColor: "border-red-500",
  },
];

const membershipTiers = [
  {
    name: "Silver",
    features: "Basic services and essential features",
    rewards: "1% Cashback",
    color: "from-gray-50 to-gray-100/50",
    borderColor: "border-gray-400",
    iconColor: "text-gray-600",
  },
  {
    name: "Gold",
    features: "Advanced travel & finance perks, 2 lounge visits per year",
    rewards: "2% Cashback",
    color: "from-yellow-50 to-yellow-100/50",
    borderColor: "border-yellow-500",
    iconColor: "text-yellow-600",
  },
  {
    name: "Platinum",
    features: "Premium access, 50% hotel discount, unlimited lounges",
    rewards: "5% Cashback",
    color: "from-purple-50 to-purple-100/50",
    borderColor: "border-purple-500",
    iconColor: "text-purple-600",
  },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "KYC & AML Verification",
    description: "Full verification for all users",
  },
  {
    icon: Lock,
    title: "Advanced Encryption",
    description: "Data protection in transit and at rest",
  },
  {
    icon: Brain,
    title: "AI Fraud Detection",
    description: "Real-time transaction monitoring",
  },
  {
    icon: Globe,
    title: "GDPR Compliant",
    description: "Blockchain-level data protection",
  },
];

const partnerships = [
  { category: "Travel", partners: "Airlines, hotels, and lounge providers" },
  {
    category: "Education",
    partners: "Top universities and scholarship councils",
  },
  {
    category: "Recruitment",
    partners: "International HR companies and agencies",
  },
  {
    category: "Legal & Health",
    partners: "Licensed professionals and verified networks",
  },
  { category: "Finance", partners: "Global payment and blockchain partners" },
];

const stats = [
  { number: "100K+", label: "Active Members", icon: Users },
  { number: "10K+", label: "Partner Universities", icon: Building2 },
  { number: "50+", label: "Countries", icon: Globe },
  { number: "24/7", label: "Support Available", icon: Heart },
];

const advantages = [
  {
    icon: Globe,
    title: "Unified Global Access",
    description:
      "Access travel, finance, education, and health services in one place",
  },
  {
    icon: Brain,
    title: "AI-Assisted Operations",
    description: "Personalized experience powered by artificial intelligence",
  },
  {
    icon: Shield,
    title: "Trusted Ecosystem",
    description: "Verified partners and full regulatory compliance",
  },
  {
    icon: Zap,
    title: "All-in-One Platform",
    description: "Travel, trading, payments, and professional growth unified",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#213E63] via-[#2A4A6F] to-[#1E3854]">
      {/* Luxurious Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#C4A962]/10 rounded-full blur-[100px] animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#4A90E2]/8 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#C4A962]/8 rounded-full blur-[90px] animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl mb-6">
            <span className="text-sm font-semibold text-[#C4A962] tracking-luxury">
              A Revolutionary Global Super-Application
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              TransPay Global
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            A global super-application combining financial, travel, education,
            employment, legal, and health services into one secure and
            intelligent ecosystem.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mt-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-10 mb-16 max-w-6xl mx-auto hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#C4A962]/30 rounded-xl blur-xl"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center border border-[#C4A962]/20">
                    <Sparkles className="w-7 h-7 text-[#C4A962]" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white">Our Story</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed font-light">
                  TransPay Global is a revolutionary global platform that merges
                  financial innovation, lifestyle services, and digital
                  empowerment into one application. We enable users to live,
                  work, study, and invest internationally with full confidence
                  and convenience.
                </p>
                <p className="text-lg text-white/80 leading-relaxed font-light">
                  Our platform was created to redefine the meaning of global
                  connectivity and opportunity. We recognized that people needed
                  a unified solution that could handle their financial needs,
                  travel plans, educational aspirations, career goals, and
                  health requirements — all in one secure environment.
                </p>
                <p className="text-lg text-white/80 leading-relaxed font-light">
                  Today, we&apos;re proud to serve hundreds of thousands of
                  members worldwide, providing access to verified services
                  across travel, finance, education, employment, legal
                  assistance, and healthcare through our network of trusted
                  global partners.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 text-center hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-[#C4A962]/20 rounded-xl blur-xl group-hover:bg-[#C4A962]/30 transition-all duration-300"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center mx-auto border border-[#C4A962]/20 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-7 h-7 text-[#C4A962]" />
                    </div>
                  </div>
                  <div className="text-5xl font-bold text-white mb-2 group-hover:text-[#C4A962] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                  Services
                </span>
              </h3>
              <p className="text-white/70 text-lg max-w-3xl mx-auto">
                Comprehensive solutions for every aspect of your global
                lifestyle
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[#C4A962]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 flex items-center justify-center border border-[#C4A962]/20 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-[#C4A962]" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-white/70 text-sm font-light flex items-start gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-[#C4A962] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Membership Tiers */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                Membership{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                  Tiers
                </span>
              </h3>
              <p className="text-white/70 text-lg">
                Choose the tier that fits your lifestyle
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipTiers.map((tier, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 text-center hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[#C4A962]/20 rounded-full blur-xl"></div>
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 flex items-center justify-center mx-auto border-2 border-[#C4A962]/20 group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-10 h-10 text-[#C4A962]" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {tier.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 min-h-[40px]">
                      {tier.features}
                    </p>
                    <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#C4A962]/20 to-[#D4B972]/20 rounded-full border border-[#C4A962]/30">
                      <p className="text-[#C4A962] font-bold">{tier.rewards}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                Security &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                  Compliance
                </span>
              </h3>
              <p className="text-white/70 text-lg">
                Your security is our top priority
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 text-center hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-[#C4A962]/20 rounded-xl blur-xl"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center mx-auto border border-[#C4A962]/20 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-[#C4A962]" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-white/70 text-sm font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Backbone */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-10 mb-16 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Technology{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                    Backbone
                  </span>
                  </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C4A962]/20">
                    <Globe className="w-6 h-6 text-[#C4A962]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Cloud-Based Architecture
                    </h4>
                    <p className="text-white/70 text-sm font-light">
                      Ensuring global uptime and speed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C4A962]/20">
                    <Zap className="w-6 h-6 text-[#C4A962]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      API-Driven Integration
                    </h4>
                    <p className="text-white/70 text-sm font-light">
                      Third-party collaboration model
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C4A962]/20">
                    <Brain className="w-6 h-6 text-[#C4A962]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      AI Modules
                    </h4>
                    <p className="text-white/70 text-sm font-light">
                      Personalization, fraud detection, and recommendation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#C4A962]/20">
                    <Lock className="w-6 h-6 text-[#C4A962]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Blockchain Ledger
                    </h4>
                    <p className="text-white/70 text-sm font-light">
                      Financial transparency and security
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The TransPay Global Advantage */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                The TransPay Global{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                  Advantage
                </span>
              </h3>
              <p className="text-white/70 text-lg">
                Why choose TransPay Global for your global needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 text-center hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[#C4A962]/20 rounded-2xl blur-xl"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-2xl flex items-center justify-center mx-auto border border-[#C4A962]/20 group-hover:scale-110 transition-transform duration-300">
                        <advantage.icon className="w-8 h-8 text-[#C4A962]" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {advantage.title}
                    </h4>
                    <p className="text-white/70 text-sm font-light leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Partnerships */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-10 mb-16 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Global{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                    Partnerships
                  </span>
                </h3>
                <p className="text-white/70 text-lg">
                  Working with the best in every industry
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnerships.map((partnership, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-[#C4A962] mb-2">
                      {partnership.category}
                    </h4>
                    <p className="text-white/70 text-sm font-light">
                      {partnership.partners}
                    </p>
              </div>
            ))}
              </div>
            </div>
          </div>

          {/* Summary CTA */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

            <div className="relative z-10">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#C4A962]/30 rounded-2xl blur-2xl"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-2xl flex items-center justify-center mx-auto border-2 border-[#C4A962]/20">
                  <Sparkles className="w-10 h-10 text-[#C4A962]" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                  Transform Your Life?
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-6 max-w-3xl mx-auto font-light leading-relaxed">
                TransPay Global is more than an app — it&apos;s your gateway to
                global opportunities, financial freedom, and limitless
                possibilities.
              </p>
              <p className="text-lg text-white/70 mb-8 italic">
                &quot;Live, work, study, and invest internationally with full
                confidence and convenience — truly redefining the meaning of
                global connectivity and opportunity.&quot;
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-12 py-6 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
              >
                Join TransPay Global Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
