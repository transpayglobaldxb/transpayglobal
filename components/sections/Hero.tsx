import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Sparkles,
  Shield,
  TrendingUp,
  Globe2,
  Users,
  Clock,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Luxurious Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#213E63] via-[#2C5282] to-[#1a2f4a]">
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#C4A962]/20 via-transparent to-[#C4A962]/10"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#213E63]/50 to-[#1a2f4a]/80"></div>
        </div>

        {/* Radial Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#C4A962]/15 rounded-full blur-[120px] animate-float"></div>
          <div
            className="absolute top-40 right-20 w-[500px] h-[500px] bg-[#4A90E2]/10 rounded-full blur-[100px] animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-[700px] h-[700px] bg-[#C4A962]/10 rounded-full blur-[130px] animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Ambient Light Beams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#C4A962]/20 to-transparent animate-pulse"></div>
          <div
            className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#C4A962]/15 to-transparent animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#C4A962]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl">
              <Sparkles className="w-4 h-4 text-[#C4A962] animate-glow" />
              <span className="text-sm font-semibold text-white tracking-luxury">
                Trusted by 50,000+ Global Members
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              Your Gateway to
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962] animate-gradient">
                Global Prosperity
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light max-w-2xl drop-shadow-lg">
              Experience the fusion of cutting-edge financial technology and
              personalized service. Access elite opportunities in trading,
              education, and global mobility.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
              <Button size="lg" className="btn-primary shadow-primary group">
                Begin Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="btn-outline group">
                Explore Features
                <Globe2 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#C4A962]" />
                <span className="text-sm text-white/90 font-medium">
                  Bank-Level Security
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#C4A962]" />
                <span className="text-sm text-white/90 font-medium">
                  95% Success Rate
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Showcase */}
          <div
            className="relative animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Main Card */}
            <div className="relative">
              {/* Luxury Card */}
              <div className="card-luxury p-10 relative overflow-hidden group hover:shadow-luxury transition-all duration-500">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse"></div>
                      <span className="text-sm font-semibold text-secondary-700 tracking-wider uppercase">
                        Premium Platform
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-primary-900 mb-2">
                      All-in-One Financial Suite
                    </h3>
                    <p className="text-primary-600/80">
                      Everything you need for global success
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="relative group/stat">
                      <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover/stat:opacity-10 rounded-2xl transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-secondary-50 to-secondary-100/50 rounded-2xl p-6 border border-secondary-200/50 shadow-elegant hover:shadow-secondary transition-all duration-300">
                        <div className="text-4xl font-bold text-primary-900 mb-1">
                          1 Million+
                        </div>
                        <div className="text-sm text-primary-700 font-medium">
                          Job Opportunities
                        </div>
                      </div>
                    </div>
                    <div className="relative group/stat">
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover/stat:opacity-10 rounded-2xl transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 border border-primary-200/50 shadow-elegant hover:shadow-primary transition-all duration-300">
                        <div className="text-4xl font-bold text-primary-900 mb-1">
                          5000+
                        </div>
                        <div className="text-sm text-primary-700 font-medium">
                          Partner Universities
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Pills */}
                  <div className="space-y-3">
                    {[
                      {
                        icon: TrendingUp,
                        label: "AI Trading Platform & Investment Opportunities",
                        gradient: "from-secondary-100 to-secondary-200",
                        iconColor: "text-secondary-700",
                      },
                      {
                        icon: Globe2,
                        label: "VVIP Airport Lounge Access",
                        gradient: "from-primary-100 to-primary-200",
                        iconColor: "text-primary-700",
                      },
                      {
                        icon: Sparkles,
                        label:
                          "TransPay Global Credit Card with 1000$ to 50,000$ Limit",
                        gradient: "from-secondary-100 to-secondary-200",
                        iconColor: "text-secondary-700",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-[#2C5282] to-[#1a2f4a] rounded-xl border border-[#C4A962]/30 hover:border-[#C4A962]/60 hover:shadow-[0_0_30px_rgba(196,169,98,0.3)] transition-all duration-300 group/item cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#C4A962]/30 to-[#C4A962]/20 flex items-center justify-center shadow-soft group-hover/item:shadow-[0_0_20px_rgba(196,169,98,0.4)] transition-all duration-300 border border-[#C4A962]/20`}
                          >
                            <item.icon className="w-6 h-6 text-[#C4A962]" />
                          </div>
                          <span className="font-semibold text-[#C4A962]">
                            {item.label}
                          </span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#C4A962] animate-pulse"></div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Stats - Redesigned */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {/* 5 Million Users */}
                    <div className="relative group/stat">
                      <div className="absolute inset-0 bg-[#C4A962]/20 rounded-xl blur-lg opacity-0 group-hover/stat:opacity-100 transition-all duration-300"></div>
                      <div className="relative bg-gradient-to-br from-[#C4A962]/15 to-[#C4A962]/5 border border-[#C4A962]/30 rounded-xl p-4 hover:border-[#C4A962]/50 transition-all duration-300">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#C4A962]/30 to-[#C4A962]/20 rounded-lg flex items-center justify-center border border-[#C4A962]/20">
                            <Users className="w-5 h-5 text-[#C4A962]" />
                          </div>
                          <div className="text-3xl font-bold text-[##2D3F5F] tracking-tight">
                            5M+
                          </div>
                          <div className="text-xs text-[#2D3F5F] font-medium">
                            Active Users
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 8 Countries */}
                    <div className="relative group/stat">
                      <div className="absolute inset-0 bg-[#C4A962]/20 rounded-xl blur-lg opacity-0 group-hover/stat:opacity-100 transition-all duration-300"></div>
                      <div className="relative bg-gradient-to-br from-[#C4A962]/15 to-[#C4A962]/5 border border-[#C4A962]/30 rounded-xl p-4 hover:border-[#C4A962]/50 transition-all duration-300">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#C4A962]/30 to-[#C4A962]/20 rounded-lg flex items-center justify-center border border-[#C4A962]/20">
                            <Clock className="w-5 h-5 text-[#C4A962]" />
                          </div>
                          <div className="text-3xl font-bold text-[#2D3F5F] tracking-tight">
                            50+
                          </div>
                          <div className="text-xs text-[#2D3F5F] font-medium">
                            Countries
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 24/7 Support */}
                    <div className="relative group/stat">
                      <div className="absolute inset-0 bg-[#C4A962]/20 rounded-xl blur-lg opacity-0 group-hover/stat:opacity-100 transition-all duration-300"></div>
                      <div className="relative bg-gradient-to-br from-[#C4A962]/15 to-[#C4A962]/5 border border-[#C4A962]/30 rounded-xl p-4 hover:border-[#C4A962]/50 transition-all duration-300">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#C4A962]/30 to-[#C4A962]/20 rounded-lg flex items-center justify-center border border-[#C4A962]/20">
                            <Clock className="w-5 h-5 text-[#C4A962]" />
                          </div>
                          <div className="text-3xl font-bold text-[#2D3F5F] tracking-tight">
                            24/7
                          </div>
                          <div className="text-xs text-[##2D3F5F] font-medium">
                            Support
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#C4A962]/20 rounded-2xl opacity-20 blur-2xl animate-float"></div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#4A90E2]/20 rounded-2xl opacity-20 blur-2xl animate-float"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C4A962] to-transparent opacity-50"></div>
    </section>
  );
}
