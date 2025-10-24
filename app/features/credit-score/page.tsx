import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import {
  CreditCard,
  TrendingUp,
  Shield,
  CheckCircle,
  BarChart3,
  Bell,
  ArrowRight,
  Award,
} from "lucide-react";

const creditFeatures = [
  {
    icon: CreditCard,
    title: "Credit Monitoring",
    description:
      "Real-time monitoring of your credit score across all major bureaus with instant alerts and updates.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: TrendingUp,
    title: "Score Improvement",
    description:
      "Personalized strategies to improve your credit score effectively with expert guidance and tools.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    icon: Shield,
    title: "Identity Protection",
    description:
      "Advanced identity theft protection and fraud alerts to keep your credit safe and secure.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: CheckCircle,
    title: "Expert Guidance",
    description:
      "Professional credit counseling and debt management advice from experienced advisors.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
];

const benefits = [
  { title: "Free Credit Reports", icon: BarChart3, desc: "Annual reports" },
  { title: "Real-time Alerts", icon: Bell, desc: "Instant notifications" },
  { title: "Score Tracking", icon: TrendingUp, desc: "Monthly updates" },
  { title: "Expert Support", icon: Award, desc: "24/7 available" },
];

export default function CreditScorePage() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-secondary-200/15 to-transparent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-200/15 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <SectionTitle
          title="Credit Score Services"
          subtitle="Take Control of Your Financial Future"
          description="Monitor, understand, and improve your credit score with our comprehensive services and personalized guidance."
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {creditFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-elegant border border-gray-100/50 p-8 text-center hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft`}
              >
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-700/80 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 card-luxury p-12 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              What You Get
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Comprehensive credit monitoring and improvement tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary-50 to-secondary-100/50 rounded-2xl p-6 text-center hover:shadow-secondary hover:scale-105 transition-all duration-300 border border-secondary-200/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <benefit.icon className="w-7 h-7 text-secondary-700" />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-secondary-700 font-semibold">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card-luxury max-w-4xl mx-auto p-12 hover:shadow-luxury transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-primary-700" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Ready to Check Your Credit Score?
            </h2>
            <p className="text-xl text-primary-700/80 mb-8 font-light leading-relaxed">
              Get your free credit report and start improving your financial
              health today with personalized recommendations.
            </p>
            <Button size="lg" className="btn-primary group">
              Check Credit Score
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
