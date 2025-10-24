"use client";

import {
  Scale,
  Shield,
  FileText,
  Users,
  CheckCircle,
  Globe,
  Award,
  ArrowRight,
  Briefcase,
  Home,
  Building2,
  Gavel,
  UserCheck,
  MessageSquare,
  Clock,
  Lock,
} from "lucide-react";
import Link from "next/link";

const legalServices = [
  {
    icon: Gavel,
    title: "Civil & Criminal",
    description: "Civil disputes, criminal defense, and court representation",
  },
  {
    icon: Briefcase,
    title: "Corporate & Business",
    description: "Company registration, contracts, and commercial law",
  },
  {
    icon: Home,
    title: "Family Law",
    description: "Divorce, custody, inheritance, and estate planning",
  },
  {
    icon: Globe,
    title: "Immigration",
    description: "Visa applications, work permits, and citizenship services",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property transactions, leases, and property disputes",
  },
  {
    icon: FileText,
    title: "Intellectual Property",
    description: "Trademarks, patents, copyrights, and IP protection",
  },
  {
    icon: Users,
    title: "Labor & Employment",
    description: "Employment contracts, disputes, and labor law",
  },
  {
    icon: UserCheck,
    title: "Consumer Protection",
    description: "Complaint filing and compensation cases",
  },
];

const features = [
  {
    icon: Shield,
    title: "Verified Lawyers",
    description: "All lawyers are licensed and verified professionals",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access to lawyers in 50+ countries worldwide",
  },
  {
    icon: Lock,
    title: "Confidential",
    description: "Attorney-client privilege and secure communication",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock legal assistance when you need it",
  },
];

const benefits = [
  {
    title: "For Clients",
    points: [
      "Access to verified lawyers worldwide",
      "Transparent fixed-fee pricing",
      "Secure document sharing",
      "Real-time case tracking",
      "Multiple consultation options",
      "Affordable legal advice",
    ],
  },
  {
    title: "For Lawyers",
    points: [
      "Expand your client base globally",
      "Flexible practice management",
      "Secure payment processing",
      "Professional networking",
      "Marketing support",
      "Growing legal community",
    ],
  },
];

const stats = [
  { number: "5,000+", label: "Verified Lawyers" },
  { number: "50+", label: "Countries" },
  { number: "24/7", label: "Legal Support" },
  { number: "50K+", label: "Cases Handled" },
];

const processSteps = [
  {
    step: "1",
    title: "Choose Legal Service",
    description: "Select the type of legal assistance you need",
  },
  {
    step: "2",
    title: "Find a Lawyer",
    description: "Browse verified lawyers by specialization and location",
  },
  {
    step: "3",
    title: "Book Consultation",
    description: "Schedule a consultation at your convenience",
  },
  {
    step: "4",
    title: "Get Legal Advice",
    description: "Receive professional legal guidance and documentation",
  },
];

export default function LegalPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#213E63] via-[#2A4A6F] to-[#1E3854]">
      {/* Ambient Background */}
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl mb-6">
            <Scale className="w-4 h-4 text-[#C4A962]" />
            <span className="text-sm font-semibold text-[#C4A962] tracking-luxury">
              Trusted Advisors
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Legal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              Services
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Professional legal consultation and documentation support for
            immigration, business, and personal legal matters worldwide. Connect
            with verified lawyers and access professional legal assistance
            globally.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#C4A962] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/70 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Why Choose Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Legal Services
              </span>
            </h2>
            <p className="text-lg text-white/80 font-light">
              Professional legal support you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
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
        </div>

        {/* Legal Services Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Legal Solutions
              </span>
            </h2>
            <p className="text-lg text-white/80 font-light">
              Expert legal services for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#C4A962]/50 hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-[#C4A962]/20 rounded-xl blur-xl group-hover:bg-[#C4A962]/30 transition-all duration-500"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center border border-[#C4A962]/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-[#C4A962]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Works
              </span>
            </h2>
            <p className="text-lg text-white/80 font-light">
              Get legal help in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#C4A962] to-[#D4B972] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-2xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Benefits for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Everyone
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {benefit.title}
                </h3>
                <ul className="space-y-4">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C4A962] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 font-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Need Legal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Assistance?
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Connect with verified lawyers and get professional legal advice
              for your personal, business, or immigration matters today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <button className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-12 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group inline-flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Consult a Lawyer Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 px-12 py-4 rounded-2xl font-bold transition-all duration-300 inline-flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Learn More
                </button>
              </Link>
            </div>
            <p className="text-white/60 text-sm mt-6">
              Verified Lawyers • Transparent Pricing • Confidential
              Consultations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
