"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import { getUserData, isAuthenticated } from "@/lib/api";
import type { User } from "@/lib/api/types";
import {
  GraduationCap,
  MapPin,
  DollarSign,
  Calendar,
  Star,
  Globe,
  BookOpen,
  Users,
  Award,
  Search,
  Filter,
  Sparkles,
  CheckCircle,
  FileText,
  TrendingUp,
  Brain,
  Building2,
  ArrowRight,
  Upload,
  Shield,
} from "lucide-react";

interface Scholarship {
  id: string;
  university: string;
  country: string;
  program: string;
  amount: string;
  deadline: string;
  type: "Merit" | "Need-Based" | "International" | "Research";
  level: "Undergraduate" | "Graduate" | "PhD" | "All Levels";
  rating: number;
  applications: number;
  description: string;
}

const scholarships: Scholarship[] = [
  {
    id: "sch-001",
    university: "Harvard University",
    country: "United States",
    program: "Undergraduate Financial Aid",
    amount: "Up to $75,000/year",
    deadline: "2024-12-01",
    type: "Need-Based",
    level: "Undergraduate",
    rating: 5,
    applications: 1247,
    description:
      "Need-based financial aid covering full demonstrated need for international students.",
  },
  {
    id: "sch-002",
    university: "Stanford University",
    country: "United States",
    program: "Knight-Hennessy Scholars",
    amount: "Full Tuition + Living",
    deadline: "2024-10-10",
    type: "Merit",
    level: "Graduate",
    rating: 5,
    applications: 893,
    description:
      "Graduate program for emerging leaders with full funding for up to 3 years.",
  },
  {
    id: "sch-003",
    university: "MIT",
    country: "United States",
    program: "International Student Aid",
    amount: "Up to $65,000/year",
    deadline: "2024-11-15",
    type: "Need-Based",
    level: "All Levels",
    rating: 5,
    applications: 1563,
    description:
      "Comprehensive financial aid program for international students at all levels.",
  },
  {
    id: "sch-004",
    university: "University of Cambridge",
    country: "United Kingdom",
    program: "Gates Cambridge",
    amount: "Full Tuition + Living",
    deadline: "2024-10-11",
    type: "Merit",
    level: "Graduate",
    rating: 5,
    applications: 2876,
    description:
      "Full-cost scholarships for outstanding international graduate students.",
  },
  {
    id: "sch-005",
    university: "University of Toronto",
    country: "Canada",
    program: "Lester B. Pearson International",
    amount: "Full Tuition + Living",
    deadline: "2024-11-30",
    type: "Merit",
    level: "Undergraduate",
    rating: 5,
    applications: 2156,
    description:
      "Full scholarship for exceptional international students at the University of Toronto.",
  },
];

const countries = [
  "All Countries",
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Netherlands",
  "China",
  "Japan",
  "Malaysia",
  "Singapore",
  "Australia",
  "New Zealand",
  "UAE",
  "Turkey",
  "Saudi Arabia",
];

const scholarshipTypes = [
  "All Types",
  "Merit",
  "Need-Based",
  "International",
  "Research",
];

const studyLevels = ["All Levels", "Undergraduate", "Graduate", "PhD"];

const courseCategories = [
  {
    name: "Medical & Health Sciences",
    icon: "🏥",
    courses: ["MBBS", "Dentistry", "Nursing", "Pharmacy"],
    color: "from-red-50 to-red-100/50",
    borderColor: "border-red-500",
  },
  {
    name: "Engineering Disciplines",
    icon: "⚙️",
    courses: ["Civil", "Electrical", "Mechanical", "Software", "Petroleum"],
    color: "from-blue-50 to-blue-100/50",
    borderColor: "border-blue-500",
  },
  {
    name: "Cybersecurity & AI",
    icon: "🤖",
    courses: ["Ethical Hacking", "Machine Learning", "Robotics"],
    color: "from-purple-50 to-purple-100/50",
    borderColor: "border-purple-500",
  },
  {
    name: "Business & Finance",
    icon: "💼",
    courses: ["MBA", "Accounting", "Fintech", "International Trade"],
    color: "from-green-50 to-green-100/50",
    borderColor: "border-green-500",
  },
  {
    name: "Computer Science & IT",
    icon: "💻",
    courses: ["Data Science", "Cloud Computing", "App Development"],
    color: "from-indigo-50 to-indigo-100/50",
    borderColor: "border-indigo-500",
  },
  {
    name: "Law, Arts & Humanities",
    icon: "⚖️",
    courses: ["LLB", "Psychology", "Media Studies", "International Relations"],
    color: "from-amber-50 to-amber-100/50",
    borderColor: "border-amber-500",
  },
];

export default function ScholarshipsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated()) {
      router.push("/auth/login");
      return;
    }

    // Get user data
    const userData = getUserData();
    setUser(userData);
    setIsLoading(false);
  }, [router]);

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.program.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry =
      selectedCountry === "All Countries" ||
      scholarship.country === selectedCountry;
    const matchesType =
      selectedType === "All Types" || scholarship.type === selectedType;
    const matchesLevel =
      selectedLevel === "All Levels" || scholarship.level === selectedLevel;

    return matchesSearch && matchesCountry && matchesType && matchesLevel;
  });

  const getDeadlineStatus = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const daysLeft = Math.ceil(
      (deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysLeft < 0)
      return { status: "expired", text: "Expired", color: "text-red-600" };
    if (daysLeft <= 7)
      return {
        status: "urgent",
        text: `${daysLeft} days left`,
        color: "text-red-600",
      };
    if (daysLeft <= 30)
      return {
        status: "soon",
        text: `${daysLeft} days left`,
        color: "text-orange-600",
      };
    return {
      status: "normal",
      text: `${daysLeft} days left`,
      color: "text-green-600",
    };
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  if (isLoading || !user) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <GraduationCap className="w-6 h-6 text-secondary-700" />
            </div>
            <h1 className="text-4xl font-bold text-primary-900 tracking-tight">
              TransPay Global – Education Hub
            </h1>
          </div>
          <p className="text-primary-700/80 text-2xl font-semibold mb-2">
            &quot;Your Global Gateway to Scholarships, Admissions, and Career
            Excellence.&quot;
          </p>
          <p className="text-primary-700/80 text-lg font-light leading-relaxed">
            Connect with top-ranked international universities to secure
            admissions, scholarships, and online certifications in the most
            in-demand fields of the modern world.
          </p>
          <div className="mt-4 p-4 bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-xl border-l-4 border-secondary-500">
            <p className="text-sm font-semibold text-primary-900">
              &quot;Study Smart. Study Global. Study with TransPay Global.&quot;
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Partner Universities
                </p>
                <p className="text-3xl font-bold text-primary-900">10,000+</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Countries
                </p>
                <p className="text-3xl font-bold text-primary-900">60+</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-green-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Programs
                </p>
                <p className="text-3xl font-bold text-primary-900">500+</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Success Rate
                </p>
                <p className="text-3xl font-bold text-primary-900">87%</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Global University Access */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft">
              <Globe className="w-6 h-6 text-primary-700" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              Global University Access
            </h2>
          </div>
          <p className="text-primary-700/80 mb-6">
            Apply to medical, engineering, AI, cybersecurity, and technology
            programs in over 60+ countries — all from one platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl p-4 border-l-4 border-primary-500">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-primary-700 font-bold">1.</span>
                <div>
                  <h3 className="font-bold text-primary-900">
                    USA, Canada, and UK
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    World-class universities with global recognition
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-xl p-4 border-l-4 border-secondary-500">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-secondary-700 font-bold">2.</span>
                <div>
                  <h3 className="font-bold text-primary-900">Europe</h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Germany, France, Italy, Netherlands for engineering & AI
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl p-4 border-l-4 border-primary-500">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-primary-700 font-bold">3.</span>
                <div>
                  <h3 className="font-bold text-primary-900">Asia</h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    China, Japan, Malaysia, Singapore for medical & technology
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-xl p-4 border-l-4 border-secondary-500">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-secondary-700 font-bold">4.</span>
                <div>
                  <h3 className="font-bold text-primary-900">
                    Australia & New Zealand
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Top destinations for scholarships and research programs
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl p-4 border-l-4 border-primary-500">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-primary-700 font-bold">5.</span>
                <div>
                  <h3 className="font-bold text-primary-900">Middle East</h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Affordable and accredited institutions in UAE, Turkey, Saudi
                    Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 text-lg">
              <Globe className="w-5 h-5" />
              Explore Universities
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Courses and Programs */}
        <div>
          <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
            Courses and Programs Offered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${category.color} rounded-2xl p-6 border-l-4 ${category.borderColor} hover:shadow-luxury hover:-translate-y-2 transition-all duration-500`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-primary-900">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.courses.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/80 text-primary-700 rounded-lg text-xs font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-primary-700/80 font-light mt-4 text-center">
            All programs are available through verified universities recognized
            by global accreditation councils.
          </p>
        </div>

        {/* Scholarships and Financial Assistance */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <DollarSign className="w-6 h-6 text-secondary-700" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              Scholarships and Financial Assistance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Up to 100% tuition fee coverage
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  For merit-based students with outstanding academic records
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Country-specific scholarships
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  For UAE, UK, Canada, and Australia destinations
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  TransPay Global Talent Program
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  Exclusive funding for AI & Cybersecurity students
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Special discount for Platinum Members
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  Extra benefits for TransPay Global Platinum users
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-primary-700/70 italic">
            Scholarships depend on academic merit, nationality, and course
            selection.
          </p>

          {/* CTA */}
          <div className="mt-6 flex justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-xl font-semibold hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 text-lg">
              <Award className="w-5 h-5" />
              Find Scholarships
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-8 border-l-4 border-primary-500">
          <div className="flex items-start gap-3 mb-6">
            <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <FileText className="w-3 h-3 text-white" />
            </div>
            <h2 className="text-xl font-bold text-primary-900">
              Application Process
            </h2>
          </div>
          <div className="ml-9 grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">
                Create Profile
              </h4>
              <p className="text-sm text-primary-700/80 font-light">
                Register in the TransPay Global App
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">
                Upload Documents
              </h4>
              <p className="text-sm text-primary-700/80 font-light">
                Submit your academic transcripts and certificates
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">
                Choose Course
              </h4>
              <p className="text-sm text-primary-700/80 font-light">
                Select preferred universities and programs
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">
                Apply for Scholarship
              </h4>
              <p className="text-sm text-primary-700/80 font-light">
                System automatically checks your eligibility
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">5</span>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">
                Get Confirmation
              </h4>
              <p className="text-sm text-primary-700/80 font-light">
                Receive offer letters directly from universities
              </p>
            </div>
          </div>
          <p className="text-sm text-primary-700/80 font-light mt-6 text-center">
            Complete your admission and visa process through verified TransPay
            Global partners.
          </p>
        </div>

        {/* Key Features */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft">
              <Sparkles className="w-6 h-6 text-primary-700" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              Key Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Building2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-primary-900 mb-1">
                  Global University Network
                </h3>
                <p className="text-sm text-primary-700/80 font-light">
                  10,000+ verified universities and institutes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Brain className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-primary-900 mb-1">
                  AI-Based Matching
                </h3>
                <p className="text-sm text-primary-700/80 font-light">
                  Smart suggestions for your academic background and goals
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-primary-900 mb-1">
                  No Hidden Charges
                </h3>
                <p className="text-sm text-primary-700/80 font-light">
                  Transparent application and processing
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-primary-900 mb-1">
                  Fast Response
                </h3>
                <p className="text-sm text-primary-700/80 font-light">
                  Receive university replies within 2–4 weeks
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-primary-900 mb-1">
                  Scholarship Tracking
                </h3>
                <p className="text-sm text-primary-700/80 font-light">
                  Real-time status updates within the app
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-primary-900 mb-1">
                  Integrated Visa Assistance
                </h3>
                <p className="text-sm text-primary-700/80 font-light">
                  Optional add-on service for student visas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits for Students */}
        <div className="bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-2xl p-6 border-l-4 border-secondary-500">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-6 h-6 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Award className="w-3 h-3 text-white" />
            </div>
            <h2 className="text-xl font-bold text-primary-900">
              Benefits for Students
            </h2>
          </div>
          <div className="ml-9 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                One global platform for admissions, scholarships, and guidance
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Direct university applications—no third-party agents needed
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Official digital verification of transcripts
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Personalized career counseling via AI advisor
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Free access to TransPay Global&apos;s Job & Internship Portal
                post-graduation
              </p>
            </div>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="text-center">
            <Sparkles className="w-12 h-12 text-secondary-600 mx-auto mb-4 animate-glow" />
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Ready to Start Your Global Education Journey?
            </h2>
            <p className="text-primary-700/80 text-lg font-light mb-8 max-w-2xl mx-auto">
              Apply for admissions, find scholarships, and upload your documents
              all in one place. Get started today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg">
                <GraduationCap className="w-5 h-5" />
                Apply for Admission
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-xl font-semibold hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg">
                <Upload className="w-5 h-5" />
                Upload Documents
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-primary-700/60 font-light mt-6">
              📚 10,000+ Universities • 🌍 60+ Countries • ⚡ Fast Processing •
              🎓 100% Tuition Coverage Available
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search universities or programs..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {scholarshipTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {studyLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>

        {/* Featured Scholarships */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              Featured Scholarships ({filteredScholarships.length})
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Filter className="w-4 h-4" />
              <span>
                Filtered by: {selectedCountry}, {selectedType}, {selectedLevel}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredScholarships.map((scholarship) => {
              const deadlineStatus = getDeadlineStatus(scholarship.deadline);
              return (
                <Card
                  key={scholarship.id}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {scholarship.program}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {scholarship.university}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{scholarship.country}</span>
                        <span>•</span>
                        <BookOpen className="w-4 h-4" />
                        <span>{scholarship.level}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(scholarship.rating)}
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {scholarship.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {scholarship.amount}
                        </p>
                        <p className="text-xs text-gray-500">Funding</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <div>
                        <p
                          className={`text-sm font-medium ${deadlineStatus.color}`}
                        >
                          {deadlineStatus.text}
                        </p>
                        <p className="text-xs text-gray-500">Deadline</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{scholarship.applications} applicants</span>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          scholarship.type === "Merit"
                            ? "bg-blue-100 text-blue-800"
                            : scholarship.type === "Need-Based"
                            ? "bg-green-100 text-green-800"
                            : scholarship.type === "International"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {scholarship.type}
                      </span>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:shadow-primary hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-1">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>

          {filteredScholarships.length === 0 && (
            <Card className="p-12 text-center">
              <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No scholarships found
              </h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search criteria or filters to find more
                opportunities.
              </p>
              <button className="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:shadow-primary hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-1">
                Clear Filters
                <ArrowRight className="w-4 h-4" />
              </button>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
