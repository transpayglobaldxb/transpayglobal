import SectionTitle from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import {
  UserPlus,
  CreditCard,
  Search,
  CheckCircle,
  Shield,
  TrendingUp,
  Globe,
  Users,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Sign Up & KYC",
    description:
      "Create your account and complete secure identity verification",
    icon: UserPlus,
    details:
      "Registration takes less than 2 minutes. Complete KYC verification with 2FA authentication for secure access to all services.",
  },
  {
    step: "02",
    title: "Choose Your Plan",
    description: "Select from our flexible membership options",
    icon: CreditCard,
    details:
      "Choose from Basic, Premium, or Enterprise plans. All plans include access to core services with different levels of features and support.",
  },
  {
    step: "03",
    title: "Access Your Dashboard",
    description:
      "Explore our comprehensive platform with all services in one place",
    icon: Search,
    details:
      "Access trading platforms, job opportunities, scholarships, virtual cards, e-SIM services, loans, and visa assistance from your personalized dashboard.",
  },
  {
    step: "04",
    title: "Start Your Journey",
    description:
      "Connect with verified partners and begin your financial success story",
    icon: CheckCircle,
    details:
      "Our AI-powered recommendations and expert support team guide you through every opportunity for maximum success.",
  },
];

const platformStats = [
  {
    icon: TrendingUp,
    number: "5",
    label: "Trading Platforms",
    description: "Multi-asset trading with AI insights",
  },
  {
    icon: Users,
    number: "2000+",
    label: "Job Opportunities",
    description: "Across 24 professional categories",
  },
  {
    icon: Globe,
    number: "19",
    label: "Partner Universities",
    description: "International scholarship programs",
  },
  {
    icon: Shield,
    number: "100%",
    label: "Secure Platform",
    description: "Bank-level security & compliance",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#1E3854] via-[#213E63] to-[#2A4A6F]">
      {/* Luxurious Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#C4A962]/10 rounded-full blur-[100px] animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#4A90E2]/8 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#C4A962]/8 rounded-full blur-[90px] animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl mb-6">
            <span className="text-sm font-semibold text-[#C4A962] tracking-luxury">
              Simple Process
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              Works
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Join thousands of successful members who have transformed their
            financial future through our comprehensive platform.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col lg:flex-row items-center gap-8"
            >
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-r from-[#C4A962] to-[#D4B972] rounded-full flex items-center justify-center text-lg font-bold shadow-2xl z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">{step.step}</span>
                  </div>

                  {/* Icon Container */}
                  <div className="relative w-32 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/10 group-hover:border-[#C4A962]/40 group-hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[#C4A962]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <step.icon className="w-16 h-16 text-[#C4A962] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xl text-white/80 mb-4 font-light leading-relaxed">
                  {step.description}
                </p>
                <p className="text-white/60 leading-relaxed">{step.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Statistics */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Platform{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Statistics
              </span>
            </h2>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Real numbers from our growing community of successful members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformStats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 text-center hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon with Glow */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 ${
                        index % 2 === 0 ? "bg-[#C4A962]/20" : "bg-[#4A90E2]/20"
                      } rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                    ></div>
                    <div
                      className={`relative w-20 h-20 rounded-2xl ${
                        index % 2 === 0
                          ? "bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10"
                          : "bg-gradient-to-br from-[#4A90E2]/20 to-[#4A90E2]/10"
                      } backdrop-blur-sm flex items-center justify-center mx-auto border ${
                        index % 2 === 0
                          ? "border-[#C4A962]/20"
                          : "border-[#4A90E2]/20"
                      } group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon
                        className={`w-10 h-10 ${
                          index % 2 === 0 ? "text-[#C4A962]" : "text-[#4A90E2]"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/60 font-light leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="mt-20 bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                Success{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                  Stories
                </span>
              </h2>
              <p className="text-lg text-white/80 font-light">
                See how our members have transformed their lives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#C4A962]/30 hover:bg-white/10 transition-all duration-300">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-[#4A90E2]/30 rounded-full blur-xl"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#4A90E2] to-[#5A9FE2] rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-white text-2xl font-bold">A</span>
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2">Ahmed, Dubai</h3>
                <p className="text-sm text-white/70 mb-3 leading-relaxed">
                  &quot;Landed a $120K software engineering job through the
                  platform&apos;s job opportunities section.&quot;
                </p>
                <div className="text-xs text-[#C4A962] font-medium">
                  Software Engineer
                </div>
              </div>

              <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#C4A962]/30 hover:bg-white/10 transition-all duration-300">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-[#C4A962]/30 rounded-full blur-xl"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#C4A962] to-[#D4B972] rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-white text-2xl font-bold">S</span>
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2">Sarah, London</h3>
                <p className="text-sm text-white/70 mb-3 leading-relaxed">
                  &quot;Got a full scholarship to Oxford University worth
                  £50,000 through the platform.&quot;
                </p>
                <div className="text-xs text-[#C4A962] font-medium">
                  Graduate Student
                </div>
              </div>

              <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#C4A962]/30 hover:bg-white/10 transition-all duration-300">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-[#4A90E2]/30 rounded-full blur-xl"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#4A90E2] to-[#6AAAE2] rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-white text-2xl font-bold">M</span>
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2">
                  Mohammed, Karachi
                </h3>
                <p className="text-sm text-white/70 mb-3 leading-relaxed">
                  &quot;Increased my trading portfolio by 300% using the
                  AI-powered trading platform.&quot;
                </p>
                <div className="text-xs text-[#C4A962] font-medium">Trader</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
