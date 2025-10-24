"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  Check,
  Star,
  CreditCard,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Building2,
  GraduationCap,
  Bot,
  Lock,
  ArrowRight,
  DollarSign,
  Sparkles,
  Briefcase,
  Stethoscope,
  Scale,
  Plane,
} from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Job Opportunities",
    description:
      "Exclusive job listings and career advancement opportunities worldwide across 24 categories with verified employers.",
  },
  {
    icon: Stethoscope,
    title: "Health Consultancy",
    description:
      "Connect with certified healthcare professionals for medical consultations, health insurance, and wellness programs globally.",
  },
  {
    icon: Scale,
    title: "Legal Services",
    description:
      "Professional legal consultation and documentation support for immigration, business, and personal legal matters worldwide.",
  },
  {
    icon: Bot,
    title: "AI Trading Opportunities",
    description:
      "Access AI-powered trading platforms with smart insights, automated strategies, and expert guidance for informed investments.",
  },
  {
    icon: Plane,
    title: "Travel & Tourism",
    description:
      "Comprehensive travel solutions including flight bookings, hotel reservations, tour packages, and visa assistance worldwide.",
  },
  {
    icon: CreditCard,
    title: "Loan And Credit Card",
    description:
      "Get instant access to personal loans, business financing, and premium credit cards with competitive rates and flexible terms.",
  },
];

const steps = [
  {
    step: "1",
    title: "Register with $5",
    description:
      "Create your TransPay Global account in minutes using your email, phone, or Google account.",
    details:
      "Complete the one-time $5 payment using card or crypto. Your dashboard is instantly created.",
  },
  {
    step: "2",
    title: "Complete KYC Verification",
    description:
      "Upload your ID, Passport, or Driver's License to verify your identity.",
    details:
      "Instant verification using AI & compliance checks. Encrypted storage keeps your documents safe.",
  },
  {
    step: "3",
    title: "Explore Your Dashboard",
    description:
      "Access multiple services and opportunities, all tailored to you.",
    details:
      "Loans, visas, jobs, trading, travel discounts, scholarships, and AI assistant guidance.",
  },
  {
    step: "4",
    title: "Build Your Credit Score",
    description: "Every activity increases your TransPay Global Credit Score.",
    details:
      "Higher scores unlock exclusive perks, premium offers, and faster approvals.",
  },
];

const paymentMethods = [
  { name: "Credit/Debit Cards", icon: CreditCard },
  { name: "Crypto (USDT, ETH, BTC)", icon: Shield },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#213E63] via-[#2A4A6F] to-[#1E3854]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        {/* Luxurious Ambient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#C4A962]/10 rounded-full blur-[100px] animate-float"></div>
          <div
            className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#4A90E2]/8 rounded-full blur-[120px] animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl mb-8">
            <Star className="w-4 h-4 text-[#C4A962] animate-glow" />
            <span className="text-sm font-semibold text-white tracking-luxury">
              One-Time Payment • Lifetime Access
            </span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            One $5 registration —<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              unlock every opportunity.
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-4 max-w-4xl mx-auto leading-relaxed font-light">
            For just $5, get lifetime access to the TransPay Global platform —
            your gateway to global opportunities in finance, travel, jobs,
            trading, and more.
          </p>
          <p className="text-xl text-white mb-10 max-w-4xl mx-auto font-semibold">
            No hidden fees. No subscriptions. Just one verified account that
            opens every door.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-12 py-6 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group text-xl"
          >
            Activate My Account — $5
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 w-[400px] h-[400px] bg-[#C4A962]/8 rounded-full blur-[90px] animate-float"></div>
          <div
            className="absolute bottom-40 right-20 w-[400px] h-[400px] bg-[#4A90E2]/8 rounded-full blur-[90px] animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl mb-6">
              <span className="text-sm font-semibold text-[#C4A962] tracking-luxury">
                Included in Your One-Time Registration
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              What You Get for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
                $5
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              TransPay Global is constantly growing — new opportunities and
              partner services are added regularly to your dashboard at no extra
              cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div
                      className={`absolute inset-0 ${
                        index % 2 === 0 ? "bg-[#C4A962]/20" : "bg-[#4A90E2]/20"
                      } rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                    ></div>
                    <div
                      className={`relative w-14 h-14 rounded-xl ${
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
                        className={`w-7 h-7 ${
                          index % 2 === 0 ? "text-[#C4A962]" : "text-[#4A90E2]"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl max-w-4xl mx-auto hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500 relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  And more...
                </h3>
                <p className="text-xl text-white/80 font-light leading-relaxed">
                  TransPay Global is constantly growing — new opportunities and
                  partner services are added regularly to your dashboard at no
                  extra cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One Fee Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl max-w-4xl mx-auto hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#C4A962]/30 rounded-2xl blur-xl"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-2xl flex items-center justify-center border border-[#C4A962]/20">
                    <DollarSign className="w-10 h-10 text-[#C4A962]" />
                  </div>
                </div>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
                One Fee,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                  Full Access — Forever
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-4 font-light leading-relaxed">
                Your $5 payment is a one-time registration that unlocks the
                entire ecosystem.
              </p>
              <p className="text-xl text-white/80 mb-10 font-light leading-relaxed">
                No monthly subscriptions. No renewal charges. Just lifetime
                access to all services.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-12 py-6 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group text-xl"
              >
                Join TransPay Global — $5 Only
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#C4A962]/8 rounded-full blur-[90px] animate-float"></div>
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
              Get started in just 4 simple steps and unlock a world of financial
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {steps.map((step, index) => (
              <div key={index} className="relative pt-6">
                <div className="group bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 text-center hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] hover:-translate-y-2 transition-all duration-500 h-full relative overflow-visible">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-2xl">
                      {step.step}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 mt-4">
                      {step.title}
                    </h3>
                    <p className="text-white/70 mb-4 font-light leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-sm text-white/60 font-light leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Payment Methods
            </h2>
            <p className="text-lg text-white/70 mb-8">We accept:</p>

            <div className="flex justify-center gap-8 mb-8 flex-wrap">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 hover:border-[#C4A962]/40 transition-all duration-300"
                >
                  <method.icon className="w-6 h-6 text-[#C4A962]" />
                  <span className="font-medium text-white">{method.name}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-white/60">
              All payments are securely encrypted and activate your account
              instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Refund Policy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Refund Policy
              </h2>
              <p className="text-white/70 mb-4 leading-relaxed">
                Registration fees are non-refundable once the dashboard is
                activated and KYC access granted.
              </p>
              <p className="text-white/70 leading-relaxed">
                However, our support team is available 24/7 to assist in case of
                payment issues or activation errors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C4A962]/10 rounded-full blur-[130px] animate-float"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Your $5 can unlock a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
                world of opportunities.
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-4 font-light leading-relaxed">
              Loans, visas, trading, scholarships, and travel — all in one
              verified platform.
            </p>
            <p className="text-xl text-white mb-10 font-semibold">
              Start once. Access forever.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-12 py-6 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group text-xl"
            >
              Activate My Account — $5
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
