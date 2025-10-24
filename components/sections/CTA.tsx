import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#2A4A6F] via-[#213E63] to-[#1E3854]">
      {/* Luxurious Ambient Background */}
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-luxury mb-6">
              <Sparkles className="w-4 h-4 text-secondary-300 animate-glow" />
              <span className="text-sm font-semibold text-white tracking-luxury">
                Limited Time Offer - Join for Just $5
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
                Financial Future
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Join 50,000+ visionary members who have unlocked unprecedented
              opportunities through our elite platform
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] text-lg px-12 py-6 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Begin Your Journey - $5
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/40 text-white hover:bg-white hover:text-[#213E63] text-lg px-12 py-6 rounded-2xl font-bold backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Platform
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/90 text-sm mb-16">
              {[
                { icon: Shield, text: "Bank-Level Security" },
                { icon: Zap, text: "Instant Access" },
                { icon: Sparkles, text: "Lifetime Membership" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <item.icon className="w-4 h-4 text-[#C4A962]" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            {[
              {
                icon: TrendingUp,
                label: "AI Trading",
                value: "5 Platforms",
                gradient: "from-[#C4A962] to-[#D4B972]",
              },
              {
                icon: Briefcase,
                label: "Job Opportunities",
                value: "1M+",
                gradient: "from-[#4A90E2] to-[#5A9FE2]",
              },
              {
                icon: GraduationCap,
                label: "Scholarships",
                value: "2000+ Unis",
                gradient: "from-[#C4A962] to-[#B8945F]",
              },
              {
                icon: Globe,
                label: "Global Services",
                value: "8 Countries",
                gradient: "from-[#4A90E2] to-[#6AAAE2]",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-luxury transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-elegant group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-white font-bold text-lg mb-1">
                  {item.label}
                </div>
                <div className="text-white/70 text-sm font-medium">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Success Metrics */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              {
                value: "95%",
                label: "Success Rate",
                desc: "Member satisfaction",
              },
              {
                value: "50K+",
                label: "Active Members",
                desc: "Global community",
              },
              {
                value: "24/7",
                label: "Expert Support",
                desc: "Always available",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group relative text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-secondary-300/50 transition-all duration-500 hover:shadow-luxury hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold text-lg mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white/60 text-sm">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div
            className="text-center mt-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-white/70 text-sm font-medium">
              One-time payment • No hidden fees • Lifetime access
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C4A962] to-transparent opacity-50"></div>
    </section>
  );
}
