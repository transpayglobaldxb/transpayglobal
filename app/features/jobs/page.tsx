"use client";

import {
  Briefcase,
  Users,
  Target,
  TrendingUp,
  Globe,
  Award,
  ArrowRight,
  Building2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const jobFeatures = [
  {
    icon: Briefcase,
    title: "Exclusive Listings",
    description:
      "Access to 2000+ job opportunities not available on public job boards across 24 categories.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: Users,
    title: "Network Access",
    description:
      "Connect with industry professionals and hiring managers directly through our verified network.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    icon: Target,
    title: "Career Guidance",
    description:
      "Personalized career advice and interview preparation support from experienced professionals.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Find positions that offer real career advancement and growth in leading companies.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
];

const categories = [
  { name: "IT & Technology", icon: Globe, count: "500+" },
  { name: "Healthcare", icon: Award, count: "300+" },
  { name: "Engineering", icon: Building2, count: "400+" },
  { name: "Business & Admin", icon: Briefcase, count: "800+" },
];

export default function JobsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#213E63] via-[#2A4A6F] to-[#1E3854]">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#C4A962]/10 rounded-full blur-[100px] animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#4A90E2]/8 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#C4A962]/8 rounded-full blur-[90px] animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl mb-6">
            <Briefcase className="w-4 h-4 text-[#C4A962]" />
            <span className="text-sm font-semibold text-[#C4A962] tracking-luxury">
              Career Opportunities
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Global Job{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              Opportunities
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Access premium job opportunities and career advancement resources
            worldwide with personalized support and expert guidance. Find your
            dream job with exclusive listings from top companies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {jobFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#C4A962]/50 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center mb-4 border border-[#C4A962]/20">
                  <Icon className="w-7 h-7 text-[#C4A962]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Job Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Explore{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Job Categories
              </span>
            </h2>
            <p className="text-lg text-white/80 font-light">
              2000+ verified job opportunities across 24 professional categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#C4A962]/50 hover:-translate-y-2 transition-all duration-500 group text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#C4A962]/20">
                    <Icon className="w-7 h-7 text-[#C4A962]" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-sm text-white/70 font-light">
                    {category.count} Jobs
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Find Your Next Job?
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Browse our exclusive job listings and take the next step in your
              career with personalized support and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <button className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-12 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group inline-flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Browse Jobs
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 px-12 py-4 rounded-2xl font-bold transition-all duration-300 inline-flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Learn More
                </button>
              </Link>
            </div>
            <p className="text-white/60 text-sm mt-6">
              2000+ Jobs • Verified Employers • Career Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
