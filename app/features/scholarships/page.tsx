import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import {
  GraduationCap,
  Globe,
  BookOpen,
  Award,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Target,
  Briefcase,
} from "lucide-react";

const scholarshipFeatures = [
  {
    icon: Globe,
    title: "Global Universities",
    description:
      "Access to 10,000+ partner universities across 60+ countries offering world-class education programs.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    icon: DollarSign,
    title: "Financial Assistance",
    description:
      "Up to 100% scholarship coverage, merit-based awards, and need-based financial aid available.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: BookOpen,
    title: "Diverse Programs",
    description:
      "Choose from undergraduate, postgraduate, PhD programs, and online certifications in all fields.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    icon: Shield,
    title: "Verified Partners",
    description:
      "All universities and programs are verified, accredited, and recognized globally for quality education.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
];

const popularPrograms = [
  {
    icon: TrendingUp,
    name: "Business & Management",
    universities: "2,500+ Programs",
    gradient: "from-blue-50 to-blue-100/50",
    iconBg: "from-blue-100 to-blue-200",
    iconColor: "text-blue-700",
  },
  {
    icon: Target,
    name: "Engineering & Technology",
    universities: "3,200+ Programs",
    gradient: "from-purple-50 to-purple-100/50",
    iconBg: "from-purple-100 to-purple-200",
    iconColor: "text-purple-700",
  },
  {
    icon: Users,
    name: "Medical & Health Sciences",
    universities: "1,800+ Programs",
    gradient: "from-green-50 to-green-100/50",
    iconBg: "from-green-100 to-green-200",
    iconColor: "text-green-700",
  },
  {
    icon: BookOpen,
    name: "Arts & Humanities",
    universities: "1,500+ Programs",
    gradient: "from-orange-50 to-orange-100/50",
    iconBg: "from-orange-100 to-orange-200",
    iconColor: "text-orange-700",
  },
];

const regions = [
  {
    name: "North America",
    countries: "USA, Canada",
    universities: "1,200+",
  },
  {
    name: "Europe",
    countries: "UK, Germany, France, Italy",
    universities: "3,500+",
  },
  {
    name: "Asia Pacific",
    countries: "Australia, Singapore, Japan",
    universities: "2,800+",
  },
  {
    name: "Middle East",
    countries: "UAE, Qatar, Saudi Arabia",
    universities: "800+",
  },
];

const benefits = [
  {
    icon: Award,
    title: "Merit-Based Scholarships",
    description: "Up to 100% tuition coverage for high-performing students",
  },
  {
    icon: DollarSign,
    title: "Need-Based Aid",
    description:
      "Financial assistance programs for students with financial need",
  },
  {
    icon: CheckCircle,
    title: "Application Support",
    description: "Expert guidance for visa, SOP, and admission documentation",
  },
  {
    icon: Briefcase,
    title: "Career Services",
    description:
      "Job placement support and internship opportunities post-graduation",
  },
];

const stats = [
  { number: "10,000+", label: "Partner Universities" },
  { number: "60+", label: "Countries" },
  { number: "50,000+", label: "Programs" },
  { number: "95%", label: "Success Rate" },
];

export default function ScholarshipsPage() {
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
          title="TransPay Global – Education Hub"
          subtitle="Your Global Gateway to Scholarships, Admissions, and Career Excellence"
          description="Connect with top-ranked international universities to secure admissions, scholarships, and online certifications in the most in-demand fields of the modern world."
        />

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-luxury p-6 text-center hover:shadow-luxury transition-all duration-500"
            >
              <div className="text-4xl font-bold text-secondary-700 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-primary-700/80 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-12 card-luxury p-6 bg-gradient-to-r from-secondary-50 to-secondary-100/50 border-l-4 border-secondary-500 max-w-4xl mx-auto">
          <p className="text-center text-lg font-semibold text-primary-900">
            &quot;Study Smart. Study Global. Study with TransPay Global.&quot;
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {scholarshipFeatures.map((feature, index) => (
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

        {/* Global University Access */}
        <div className="mt-20 card-luxury p-12 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-secondary-700" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Global University Access
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Study in world-renowned institutions across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 hover:shadow-primary hover:scale-105 transition-all duration-300 border border-primary-200/50"
              >
                <h3 className="font-bold text-primary-900 text-lg mb-2">
                  {region.name}
                </h3>
                <p className="text-sm text-primary-700/80 mb-3 font-light">
                  {region.countries}
                </p>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-secondary-700" />
                  <span className="text-sm font-semibold text-secondary-700">
                    {region.universities} Universities
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Programs */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Courses and Programs Offered
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Explore high-demand fields with excellent career prospects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPrograms.map((program, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${program.gradient} rounded-2xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200/50`}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${program.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-soft`}
                >
                  <program.icon className={`w-7 h-7 ${program.iconColor}`} />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">
                  {program.name}
                </h3>
                <p className="text-sm text-primary-700/80 font-light">
                  {program.universities}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 card-luxury p-12 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Scholarships and Financial Assistance
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Make your dream education affordable with our financial support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary-50 to-secondary-100/50 rounded-2xl p-6 border-l-4 border-secondary-500 hover:shadow-secondary transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                    <benefit.icon className="w-6 h-6 text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-primary-700/80 font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mt-20 card-luxury p-12 max-w-6xl mx-auto bg-gradient-to-br from-primary-50 to-primary-100/50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              How to Apply
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Simple 5-step process to secure your admission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Create Profile",
                desc: "Sign up and complete your academic profile",
              },
              {
                step: "2",
                title: "Browse Programs",
                desc: "Search universities and programs worldwide",
              },
              {
                step: "3",
                title: "Apply Online",
                desc: "Submit applications with required documents",
              },
              {
                step: "4",
                title: "Track Status",
                desc: "Monitor your application progress in real-time",
              },
              {
                step: "5",
                title: "Get Admitted",
                desc: "Receive acceptance and secure your scholarship",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-primary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-primary-700/80 font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card-luxury max-w-4xl mx-auto p-12 hover:shadow-luxury transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-secondary-700" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Ready to Start Your Global Education Journey?
            </h2>
            <p className="text-xl text-primary-700/80 mb-8 font-light leading-relaxed">
              Apply now for admissions and scholarships at top universities
              worldwide. Our expert team will guide you through every step of
              the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-secondary group">
                Apply for Admission
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-white border-2 border-secondary-600 text-secondary-700 hover:bg-secondary-50 transition-all duration-300 font-semibold px-8 py-4 rounded-xl shadow-soft hover:shadow-lg"
              >
                Find Scholarships
              </Button>
            </div>
            <p className="text-sm text-primary-700/60 mt-6">
              No application fee • Free counseling • 95% success rate
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Why Choose TransPay Global Education Hub?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-luxury p-6 hover:shadow-luxury transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-primary-900">
                  Verified Universities
                </h3>
              </div>
              <p className="text-sm text-primary-700/80 font-light">
                All partner institutions are accredited and globally recognized
              </p>
            </div>

            <div className="card-luxury p-6 hover:shadow-luxury transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-primary-900">Expert Guidance</h3>
              </div>
              <p className="text-sm text-primary-700/80 font-light">
                Professional counselors to assist with applications and visas
              </p>
            </div>

            <div className="card-luxury p-6 hover:shadow-luxury transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-primary-900">Career Support</h3>
              </div>
              <p className="text-sm text-primary-700/80 font-light">
                Job placement and internship opportunities after graduation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
