import SectionTitle from "@/components/ui/SectionTitle";
import {
  CreditCard,
  TrendingUp,
  FileText,
  Briefcase,
  Building2,
  ArrowRight,
  Sparkles,
  Stethoscope,
  Scale,
  Bot,
  Plane,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Job Opportunities",
    description:
      "Exclusive job listings and career advancement opportunities worldwide across 24 categories with verified employers.",
    icon: Briefcase,
    href: "/features/jobs",
    badge: "2000+ Jobs",
  },
  {
    title: "Health Consultancy",
    description:
      "Connect with certified healthcare professionals for medical consultations, health insurance, and wellness programs globally.",
    icon: Stethoscope,
    href: "/features/health",
    badge: "Expert Care",
  },
  {
    title: "Legal Services",
    description:
      "Professional legal consultation and documentation support for immigration, business, and personal legal matters worldwide.",
    icon: Scale,
    href: "/features/legal",
    badge: "Trusted Advisors",
  },
  {
    title: "AI Trading Opportunities",
    description:
      "Access AI-powered trading platforms with smart insights, automated strategies, and expert guidance for informed investments.",
    icon: Bot,
    href: "/features/trading",
    badge: "AI Powered",
  },
  {
    title: "Travel & Tourism",
    description:
      "Comprehensive travel solutions including flight bookings, hotel reservations, tour packages, and visa assistance worldwide.",
    icon: Plane,
    href: "/features/travel",
    badge: "Best Deals",
  },
  {
    title: "Loan And Credit Card",
    description:
      "Get instant access to personal loans, business financing, and premium credit cards with competitive rates and flexible terms.",
    icon: CreditCard,
    href: "/features/loans",
    badge: "Fast Approval",
  },
];

export default function FeaturesPage() {
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
              Complete Financial Ecosystem
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              Features
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Discover our comprehensive suite of services designed to help you
            achieve your financial goals and unlock global opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <Link key={index} href={feature.href}>
              <div className="relative group h-full">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] hover:-translate-y-2 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon with Glow */}
                    <div className="relative mb-6">
                      <div
                        className={`absolute inset-0 ${
                          index % 2 === 0
                            ? "bg-[#C4A962]/20"
                            : "bg-[#4A90E2]/20"
                        } rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                      ></div>
                      <div
                        className={`relative w-16 h-16 rounded-2xl ${
                          index % 2 === 0
                            ? "bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10"
                            : "bg-gradient-to-br from-[#4A90E2]/20 to-[#4A90E2]/10"
                        } flex items-center justify-center border ${
                          index % 2 === 0
                            ? "border-[#C4A962]/20"
                            : "border-[#4A90E2]/20"
                        } group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon
                          className={`w-8 h-8 ${
                            index % 2 === 0
                              ? "text-[#C4A962]"
                              : "text-[#4A90E2]"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-6 font-light flex-grow">
                      {feature.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="inline-flex items-center text-[#C4A962] font-semibold hover:text-[#D4B972] transition-colors group-hover:translate-x-2 duration-300">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#C4A962] to-[#D4B972] border-2 border-white/20 rounded-full px-4 py-2 shadow-2xl">
                  <span className="text-xs font-bold text-white">
                    {feature.badge}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl text-center relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Everything You Need in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                One Platform
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              TransPay Global brings together the best financial services,
              career opportunities, and global mobility solutions—all verified,
              secure, and designed for your success.
            </p>
            <Link href="/pricing">
              <button className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-12 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group inline-flex items-center">
                Get Started with Only $5
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
