import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import {
  FileText,
  Globe,
  Clock,
  CheckCircle,
  Plane,
  MapPin,
  ArrowRight,
  Building2,
} from "lucide-react";

const visaFeatures = [
  {
    icon: FileText,
    title: "Documentation Support",
    description:
      "Complete assistance with visa application forms and required documents with expert guidance.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: Globe,
    title: "Multiple Countries",
    description:
      "Visa services for USA, UK, Canada, Australia, and many more countries worldwide.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description:
      "Expedited visa processing with our network of trusted partners and streamlined procedures.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: CheckCircle,
    title: "High Success Rate",
    description:
      "95% success rate with our professional visa application services and expert support.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
];

const destinations = [
  { country: "United States", icon: Plane, flag: "🇺🇸" },
  { country: "United Kingdom", icon: MapPin, flag: "🇬🇧" },
  { country: "Canada", icon: Globe, flag: "🇨🇦" },
  { country: "Australia", icon: Building2, flag: "🇦🇺" },
];

export default function VisaPage() {
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
          title="Visa Services"
          subtitle="Professional Visa Assistance for Your Global Dreams"
          description="Get expert help with visa applications and documentation for various countries worldwide with streamlined processing and high success rates."
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {visaFeatures.map((feature, index) => (
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

        {/* Popular Destinations */}
        <div className="mt-20 card-luxury p-12 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Popular Destinations
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Apply for visas to top destinations with our expert assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 text-center hover:shadow-primary hover:scale-105 transition-all duration-300 border border-primary-200/50"
              >
                <div className="text-5xl mb-4">{dest.flag}</div>
                <h3 className="font-bold text-primary-900 mb-2">
                  {dest.country}
                </h3>
                <p className="text-sm text-primary-700 font-medium">
                  Expert Assistance
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
                <Plane className="w-10 h-10 text-primary-700" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Ready to Apply for Visa?
            </h2>
            <p className="text-xl text-primary-700/80 mb-8 font-light leading-relaxed">
              Let our experts guide you through the entire visa application
              process with professional support and high success rates.
            </p>
            <Button size="lg" className="btn-primary group">
              Start Visa Application
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
