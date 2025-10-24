import SectionTitle from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check, Star, TrendingUp, Shield, Users, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$5",
    period: "one-time",
    description: "Perfect for exploring our platform",
    icon: Users,
    features: [
      "Access to job opportunities (limited)",
      "Basic trading platform access",
      "Community support",
      "Mobile app access",
      "Basic KYC verification",
      "Standard customer service",
    ],
    popular: false,
    cta: "Start Exploring",
  },
  {
    name: "Professional",
    price: "$29",
    period: "monthly",
    description: "Full access to all platform features",
    icon: TrendingUp,
    features: [
      "Unlimited job opportunities (24 categories)",
      "Full trading platform access (5 platforms)",
      "International scholarship applications",
      "Virtual card services",
      "Global e-SIM activation",
      "Priority customer support",
      "Advanced analytics & AI insights",
      "Personal success coach",
    ],
    popular: true,
    cta: "Go Professional",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "monthly",
    description: "Advanced features for businesses and institutions",
    icon: Shield,
    features: [
      "Everything in Professional",
      "Bulk job posting capabilities",
      "Custom trading integrations",
      "Dedicated account manager",
      "White-label solutions",
      "API access & custom integrations",
      "Advanced reporting & analytics",
      "24/7 priority support",
      "Custom training sessions",
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

const additionalServices = [
  {
    name: "Premium KYC Verification",
    price: "$15",
    description: "Enhanced identity verification with biometric authentication",
    icon: Shield,
  },
  {
    name: "Virtual Card Premium",
    price: "$10/month",
    description:
      "Advanced virtual card with higher limits and exclusive benefits",
    icon: TrendingUp,
  },
  {
    name: "Trading Signals Pro",
    price: "$25/month",
    description: "AI-powered trading signals with real-time alerts",
    icon: Zap,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#2A4A6F] via-[#213E63] to-[#1E3854]">
      {/* Luxurious Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C4A962]/10 rounded-full blur-[100px] animate-float"></div>
        <div
          className="absolute bottom-20 left-1/4 w-[600px] h-[600px] bg-[#4A90E2]/8 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl mb-6">
            <span className="text-sm font-semibold text-[#C4A962] tracking-luxury">
              Choose Your Plan
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Flexible{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Start with our affordable starter plan and upgrade as your needs
            grow. All plans include access to our comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.3)] transition-all duration-500 ${
                plan.popular ? "scale-105 border-[#C4A962]/40" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-2xl">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  {/* Icon with Glow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#C4A962]/20 rounded-full blur-xl group-hover:bg-[#C4A962]/30 transition-all duration-300"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-full flex items-center justify-center mx-auto border border-[#C4A962]/20 group-hover:scale-110 transition-transform duration-300">
                      <plan.icon className="w-10 h-10 text-[#C4A962]" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white group-hover:text-[#C4A962] transition-colors duration-300">
                      {plan.price}
                    </span>
                    <span className="text-lg font-normal text-white/60">
                      /{plan.period}
                    </span>
                  </div>
                  <p className="text-white/70 font-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="relative mt-0.5">
                        <div className="absolute inset-0 bg-[#C4A962]/30 rounded-full blur-sm"></div>
                        <Check className="relative w-5 h-5 text-[#C4A962] flex-shrink-0" />
                      </div>
                      <span className="text-white/80 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#C4A962] to-[#D4B972] hover:shadow-[0_0_30px_rgba(196,169,98,0.5)] text-white"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-[#C4A962]/40"
                  } font-semibold py-3 rounded-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Additional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Services
              </span>
            </h2>
            <p className="text-lg text-white/80 font-light">
              Enhance your experience with our premium add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_30px_rgba(196,169,98,0.2)] transition-all duration-300"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-[#4A90E2]/20 rounded-full blur-xl group-hover:bg-[#4A90E2]/30 transition-all duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#4A90E2]/20 to-[#4A90E2]/10 rounded-full flex items-center justify-center mx-auto border border-[#4A90E2]/20 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-[#4A90E2]" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    {service.name}
                  </h3>
                  <div className="text-3xl font-bold text-[#C4A962] mb-3">
                    {service.price}
                  </div>
                  <p className="text-sm text-white/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    size="sm"
                    className="bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-[#C4A962]/40 font-medium transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 bg-white/5 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              30-Day{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Money-Back Guarantee
              </span>
            </h2>
            <p className="text-lg text-white/80 mb-6 font-light leading-relaxed">
              Not satisfied with our platform? Get a full refund within 30 days,
              no questions asked.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-white/80 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <Check className="w-5 h-5 text-[#C4A962]" />
                <span>Full Refund</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <Check className="w-5 h-5 text-[#C4A962]" />
                <span>No Questions Asked</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <Check className="w-5 h-5 text-[#C4A962]" />
                <span>Instant Processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
