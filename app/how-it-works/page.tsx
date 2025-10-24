"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  Coins,
  CreditCard,
  Search,
  CheckCircle,
  User,
  Shield,
  Compass,
  TrendingUp,
  Bot,
  Globe,
  ArrowRight,
  Lock,
  Zap,
  Star,
  Building2,
  GraduationCap,
  Briefcase,
  Plane,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Register with $5",
    description: "Create your TransPay Global account in minutes.",
    icon: Coins,
    details:
      "Use your email, phone, or Google account to sign up, then complete the one-time $5 payment using card or crypto. Once registered, your dashboard is instantly created — giving you immediate access to the platform.",
    highlight:
      "💡 Your $5 activation unlocks lifetime access — no monthly or renewal fees.",
  },
  {
    step: "2",
    title: "Complete KYC Verification",
    description:
      "Upload your ID, Passport, or Driver's License to verify your identity.",
    icon: User,
    details:
      "This step ensures your profile is secure, trusted, and eligible for all opportunities on the platform — from loans to travel bookings.",
    features: [
      "Instant verification using AI & compliance checks",
      "Encrypted storage — your documents stay safe",
      "Verified users gain full platform access",
    ],
    highlight: "🔒 KYC is the key to unlocking every feature.",
  },
  {
    step: "3",
    title: "Explore Your Dashboard",
    description:
      "Once verified, your personal dashboard becomes your command center.",
    icon: Compass,
    details:
      "From here, you can explore multiple services and opportunities, all tailored to you.",
    features: [
      "💼 Job Opportunities",
      "🩺 Health Consultancy",
      "⚖️ Legal Services",
      "🤖 AI Trading Opportunities",
      "✈️ Travel & Tourism",
      "💳 Loan And Credit Card",
    ],
    highlight:
      "🧠 The more you engage, the better your credit score and offers become.",
  },
  {
    step: "4",
    title: "Build Your Credit Score & Level Up",
    description:
      "Every activity you complete — applying, booking, or trading — increases your TransPay Global Credit Score.",
    icon: TrendingUp,
    details:
      "Higher scores unlock exclusive perks, premium offers, and faster approvals.",
    features: [
      "Completing KYC ✅",
      "Applying for services 📝",
      "Staying active on the platform 💬",
      "Referring verified users 🔗",
    ],
    highlight: "🌟 Grow your level — unlock more opportunities.",
  },
  {
    step: "5",
    title: "Let the AI Assistant Guide You",
    description:
      "Meet your AI-powered assistant, built to make your journey simple and smart.",
    icon: Bot,
    details: "It helps you:",
    features: [
      "Find relevant offers faster",
      "Auto-fill applications",
      "Track progress",
      "Notify you about updates and new programs",
    ],
    highlight:
      "💬 Ask anything — your AI assistant is available 24/7 inside your dashboard.",
  },
  {
    step: "6",
    title: "Enjoy Lifetime Access & Continuous Growth",
    description: "Once registered, your TransPay Global account never expires.",
    icon: Globe,
    details:
      "You'll automatically receive access to all new features, partner offers, and opportunities as the platform grows — without paying a single extra dollar.",
    highlight: "🔁 Stay connected. Stay verified. Stay rewarded.",
  },
];

const quickSummary = [
  {
    step: "1️⃣",
    action: "Register for $5",
    result: "Account created instantly",
  },
  { step: "2️⃣", action: "Complete KYC", result: "Unlocks all features" },
  {
    step: "3️⃣",
    action: "Access Dashboard",
    result: "Jobs, Health, Legal, AI Trading, Travel, Loans",
  },
  { step: "4️⃣", action: "Build Score", result: "Earn perks & higher tiers" },
  {
    step: "5️⃣",
    action: "Use AI Assistant",
    result: "Automate and optimize your journey",
  },
  {
    step: "6️⃣",
    action: "Lifetime Access",
    result: "Continuous updates and rewards",
  },
];

export default function HowItWorksPage() {
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        {/* Additional Ambient Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 w-[400px] h-[400px] bg-[#C4A962]/8 rounded-full blur-[90px] animate-float"></div>
          <div
            className="absolute bottom-40 right-20 w-[400px] h-[400px] bg-[#4A90E2]/8 rounded-full blur-[90px] animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_0_30px_rgba(196,169,98,0.2)] mb-8">
            <Sparkles className="w-4 h-4 text-[#C4A962] animate-glow" />
            <span className="text-sm font-semibold text-white tracking-luxury">
              Simple, Secure & Smart
            </span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            How It{" "}
            <span className="bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962] bg-clip-text text-transparent animate-gradient">
              Works
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            With TransPay Global, everything starts with a $5 registration — and
            from there, your verified profile unlocks every opportunity
            available on our global platform.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-12 py-6 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group text-xl"
          >
            Get Started for $5
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
              Step-by-Step{" "}
              <span className="bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962] bg-clip-text text-transparent animate-gradient">
                Process
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Follow these simple steps to unlock your financial potential with
              TransPay Global.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/8 hover:border-white/20 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  <div className="flex flex-col lg:flex-row items-start gap-8 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* Glow Effect */}
                        <div
                          className={`absolute inset-0 ${
                            index % 2 === 0
                              ? "bg-[#C4A962]/20"
                              : "bg-[#4A90E2]/20"
                          } rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                        ></div>

                        <div
                          className={`relative w-32 h-32 rounded-2xl ${
                            index % 2 === 0
                              ? "bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10"
                              : "bg-gradient-to-br from-[#4A90E2]/20 to-[#4A90E2]/10"
                          } flex items-center justify-center border ${
                            index % 2 === 0
                              ? "border-[#C4A962]/20"
                              : "border-[#4A90E2]/20"
                          } group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon
                            className={`w-16 h-16 ${
                              index % 2 === 0
                                ? "text-[#C4A962]"
                                : "text-[#4A90E2]"
                            }`}
                          />
                        </div>

                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white rounded-full flex items-center justify-center text-lg font-bold shadow-2xl">
                          {step.step}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">
                        Step {step.step} — {step.title}
                      </h3>
                      <p className="text-xl text-white/80 mb-4 font-light">
                        {step.description}
                      </p>
                      <p className="text-white/70 mb-6 leading-relaxed font-light">
                        {step.details}
                      </p>

                      {step.features && (
                        <div className="space-y-3 mb-6">
                          {step.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-3 text-white/80"
                            >
                              <div className="w-2 h-2 bg-[#C4A962] rounded-full animate-pulse"></div>
                              <span className="font-light">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 border border-[#C4A962]/30 rounded-2xl p-6 backdrop-blur-sm">
                        <p className="text-[#C4A962] font-semibold text-lg">
                          {step.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl max-w-4xl mx-auto p-12 text-center hover:bg-white/8 hover:border-white/20 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500 group">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50 rounded-3xl"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#4A90E2]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#4A90E2]/20 to-[#4A90E2]/10 rounded-2xl flex items-center justify-center border border-[#4A90E2]/20 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-[#4A90E2]" />
                  </div>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
                Security &{" "}
                <span className="bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962] bg-clip-text text-transparent animate-gradient">
                  Compliance
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-6 font-light leading-relaxed">
                Your data is protected with enterprise-grade encryption and
                stored securely under global compliance standards.
              </p>
              <p className="text-xl text-white/80 mb-8 font-light leading-relaxed">
                We never share your personal information with unverified third
                parties.
              </p>
              <div className="bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 border border-[#C4A962]/30 rounded-2xl p-6 backdrop-blur-sm">
                <span className="text-[#C4A962] font-bold text-xl">
                  Your trust and security are our top priority.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
              Quick{" "}
              <span className="bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962] bg-clip-text text-transparent animate-gradient">
                Summary
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Everything you need to know about the TransPay Global process.
            </p>
          </div>

          <div className="mt-16">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/8 hover:border-white/20 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-white/20">
                      <th className="text-left py-6 px-6 font-bold text-white text-lg">
                        Step
                      </th>
                      <th className="text-left py-6 px-6 font-bold text-white text-lg">
                        Action
                      </th>
                      <th className="text-left py-6 px-6 font-bold text-white text-lg">
                        Result
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {quickSummary.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-5 px-6 text-3xl">{item.step}</td>
                        <td className="py-5 px-6 font-semibold text-white">
                          {item.action}
                        </td>
                        <td className="py-5 px-6 text-white/80 font-light">
                          {item.result}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C4A962]/15 rounded-full blur-[100px] animate-float"></div>
          <div
            className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#C4A962]/10 rounded-full blur-[120px] animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#4A90E2]/8 rounded-full blur-[130px] animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Start once.{" "}
              <span className="bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962] bg-clip-text text-transparent animate-gradient">
                Access forever.
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light leading-relaxed">
              TransPay Global connects you to real opportunities — all starting
              with a single $5 registration.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-12 py-6 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group text-xl"
            >
              Join TransPay Global Now — $5 Only
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C4A962]/50 to-transparent"></div>
      </section>
    </div>
  );
}
