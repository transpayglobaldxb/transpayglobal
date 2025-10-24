import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import {
  TrendingUp,
  CreditCard,
  Briefcase,
  Stethoscope,
  Scale,
  Plane,
  Globe,
  Shield,
  Building2,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "Job Opportunities",
    description:
      "Exclusive job listings and career advancement opportunities worldwide across 24 categories with verified employers.",
    icon: Briefcase,
    href: "/features/jobs",
    color: "from-secondary to-secondary-400",
    stats: "2000+ Jobs",
    bgColor: "bg-secondary-50",
    iconColor: "text-secondary-700",
  },
  {
    title: "Health Consultancy",
    description:
      "Connect with certified healthcare professionals for medical consultations, health insurance, and wellness programs globally.",
    icon: Stethoscope,
    href: "/features/health",
    color: "from-primary to-primary-400",
    stats: "Expert Care",
    bgColor: "bg-primary-50",
    iconColor: "text-primary-700",
  },
  {
    title: "Legal Services",
    description:
      "Professional legal consultation and documentation support for immigration, business, and personal legal matters worldwide.",
    icon: Scale,
    href: "/features/legal",
    color: "from-secondary to-secondary-400",
    stats: "Trusted Advisors",
    bgColor: "bg-secondary-50",
    iconColor: "text-secondary-700",
  },
  {
    title: "AI Trading Opportunities",
    description:
      "Access AI-powered trading platforms with smart insights, automated strategies, and expert guidance for informed investments.",
    icon: TrendingUp,
    href: "/features/trading",
    color: "from-primary to-primary-400",
    stats: "AI Powered",
    bgColor: "bg-primary-50",
    iconColor: "text-primary-700",
  },
  {
    title: "Travel & Tourism",
    description:
      "Comprehensive travel solutions including flight bookings, hotel reservations, tour packages, and visa assistance worldwide.",
    icon: Plane,
    href: "/features/travel",
    color: "from-secondary to-secondary-400",
    stats: "Best Deals",
    bgColor: "bg-secondary-50",
    iconColor: "text-secondary-700",
  },
  {
    title: "Loan And Credit Card",
    description:
      "Get instant access to personal loans, business financing, and premium credit cards with competitive rates and flexible terms.",
    icon: CreditCard,
    href: "/features/loans",
    color: "from-primary to-primary-400",
    stats: "Fast Approval",
    bgColor: "bg-primary-50",
    iconColor: "text-primary-700",
  },
];

export default function Features() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#213E63] via-[#2A4A6F] to-[#1E3854]">
      {/* Luxurious Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C4A962]/10 rounded-full blur-[100px] animate-float"></div>
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4A90E2]/8 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#C4A962]/8 rounded-full blur-[90px] animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Light Beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#C4A962]/10 to-transparent animate-pulse"></div>
        <div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#C4A962]/8 to-transparent animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl mb-6">
            <span className="text-sm font-semibold text-[#C4A962] tracking-luxury">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Complete Financial{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              Ecosystem
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Access a comprehensive suite of verified financial services, trading
            platforms, career opportunities, and educational resources designed
            to accelerate your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Glass Morphism Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-[#C4A962]/50 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon with Glow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#C4A962]/20 rounded-xl blur-xl group-hover:bg-[#C4A962]/30 transition-all duration-500"></div>
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 backdrop-blur-sm flex items-center justify-center border border-[#C4A962]/20 group-hover:scale-110 group-hover:border-[#C4A962]/40 transition-all duration-500">
                      <feature.icon className="w-8 h-8 text-[#C4A962]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed mb-6 font-light">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href={feature.href}
                    className="inline-flex items-center text-[#C4A962] font-semibold hover:text-[#D4B972] transition-colors group-hover:translate-x-2 duration-300"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#C4A962] to-[#D4B972] border-2 border-white/20 rounded-full px-4 py-2 shadow-2xl backdrop-blur-sm">
                <span className="text-xs font-bold text-white">
                  {feature.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Highlights */}
        <div className="mt-20 bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                  TransPay Global?
                </span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                We&apos;ve built the most comprehensive financial services
                platform that combines trading, career development, education,
                and financial solutions in one secure ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-[#C4A962]/20 rounded-2xl blur-xl group-hover:bg-[#C4A962]/30 transition-all duration-300"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-2xl flex items-center justify-center mx-auto border border-[#C4A962]/20 group-hover:scale-110 group-hover:border-[#C4A962]/40 transition-all duration-300">
                    <Building2 className="w-10 h-10 text-[#C4A962]" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  Verified Partners
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  All services are backed by verified, trusted partners and
                  institutions.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-[#4A90E2]/20 rounded-2xl blur-xl group-hover:bg-[#4A90E2]/30 transition-all duration-300"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#4A90E2]/20 to-[#4A90E2]/10 rounded-2xl flex items-center justify-center mx-auto border border-[#4A90E2]/20 group-hover:scale-110 group-hover:border-[#4A90E2]/40 transition-all duration-300">
                    <Globe className="w-10 h-10 text-[#4A90E2]" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  Global Reach
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  Services available across 8 countries with multi-currency
                  support.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-[#C4A962]/20 rounded-2xl blur-xl group-hover:bg-[#C4A962]/30 transition-all duration-300"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-2xl flex items-center justify-center mx-auto border border-[#C4A962]/20 group-hover:scale-110 group-hover:border-[#C4A962]/40 transition-all duration-300">
                    <BarChart3 className="w-10 h-10 text-[#C4A962]" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  AI-Powered
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  Advanced AI insights and recommendations for better decision
                  making.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-[#4A90E2]/20 rounded-2xl blur-xl group-hover:bg-[#4A90E2]/30 transition-all duration-300"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#4A90E2]/20 to-[#4A90E2]/10 rounded-2xl flex items-center justify-center mx-auto border border-[#4A90E2]/20 group-hover:scale-110 group-hover:border-[#4A90E2]/40 transition-all duration-300">
                    <Shield className="w-10 h-10 text-[#4A90E2]" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  Secure & Compliant
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  Bank-level security with full compliance and data protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
