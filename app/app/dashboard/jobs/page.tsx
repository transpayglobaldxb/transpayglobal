"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { getUserData, isAuthenticated } from "@/lib/api";
import type { User } from "@/lib/api/types";
import JobApplicationForm from "@/components/ui/JobApplicationForm";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Search,
  Filter,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  TrendingUp,
  Award,
  Building2,
} from "lucide-react";

const jobApplications = [
  {
    id: "JOB-001",
    title: "Senior Software Engineer",
    company: "TechCorp Inc",
    location: "San Francisco, CA",
    status: "Interview Scheduled",
    date: "2024-01-15",
    salary: "$120,000 - $150,000",
  },
  {
    id: "JOB-002",
    title: "Product Manager",
    company: "StartupXYZ",
    location: "New York, NY",
    status: "Under Review",
    date: "2024-01-20",
    salary: "$100,000 - $130,000",
  },
];

const jobCategories = [
  {
    category: "Administration & Office Support",
    positions: [
      "Administrative Assistant",
      "Executive Secretary",
      "Office Manager",
      "Receptionist",
      "Data Entry Operator",
    ],
    icon: "📋",
    color: "bg-blue-50 border-blue-200",
    textColor: "text-blue-700",
    count: 156,
  },
  {
    category: "Accounting, Finance & Audit",
    positions: [
      "Accountant",
      "Finance Manager",
      "Auditor",
      "Tax Consultant",
      "Payroll Officer",
    ],
    icon: "💰",
    color: "bg-green-50 border-green-200",
    textColor: "text-green-700",
    count: 89,
  },
  {
    category: "Human Resources (HR) & Recruitment",
    positions: [
      "HR Officer",
      "Recruiter",
      "Training & Development Officer",
      "Compensation Analyst",
    ],
    icon: "👥",
    color: "bg-purple-50 border-purple-200",
    textColor: "text-purple-700",
    count: 67,
  },
  {
    category: "Information Technology (IT) & Software",
    positions: [
      "Software Engineer",
      "Network Admin",
      "IT Support",
      "Cybersecurity Analyst",
      "Web Developer",
    ],
    icon: "💻",
    color: "bg-indigo-50 border-indigo-200",
    textColor: "text-indigo-700",
    count: 234,
  },
  {
    category: "Engineering & Technical",
    positions: [
      "Civil Engineer",
      "Electrical Engineer",
      "Mechanical Engineer",
      "Project Engineer",
      "Site Supervisor",
    ],
    icon: "⚙️",
    color: "bg-gray-50 border-gray-200",
    textColor: "text-gray-700",
    count: 178,
  },
  {
    category: "Construction & Architecture",
    positions: [
      "Architect",
      "Quantity Surveyor",
      "Construction Manager",
      "Draftsman",
      "Safety Officer",
    ],
    icon: "🏗️",
    color: "bg-orange-50 border-orange-200",
    textColor: "text-orange-700",
    count: 123,
  },
  {
    category: "Sales, Marketing & Business Development",
    positions: [
      "Sales Executive",
      "Marketing Coordinator",
      "Brand Manager",
      "Business Development Officer",
    ],
    icon: "📈",
    color: "bg-red-50 border-red-200",
    textColor: "text-red-700",
    count: 145,
  },
  {
    category: "Retail, FMCG & Merchandising",
    positions: [
      "Store Manager",
      "Sales Representative",
      "Merchandiser",
      "Retail Associate",
      "Inventory Controller",
    ],
    icon: "🛍️",
    color: "bg-pink-50 border-pink-200",
    textColor: "text-pink-700",
    count: 98,
  },
  {
    category: "Hospitality, Travel & Tourism",
    positions: [
      "Hotel Manager",
      "Front Desk Agent",
      "Waiter",
      "Tour Guide",
      "Travel Consultant",
    ],
    icon: "🏨",
    color: "bg-yellow-50 border-yellow-200",
    textColor: "text-yellow-700",
    count: 112,
  },
  {
    category: "Food & Beverage (F&B)",
    positions: [
      "Chef",
      "Kitchen Assistant",
      "Restaurant Manager",
      "Barista",
      "Catering Supervisor",
    ],
    icon: "🍽️",
    color: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
    count: 76,
  },
  {
    category: "Healthcare & Medical",
    positions: [
      "Doctor",
      "Nurse",
      "Pharmacist",
      "Lab Technician",
      "Medical Receptionist",
    ],
    icon: "🏥",
    color: "bg-emerald-50 border-emerald-200",
    textColor: "text-emerald-700",
    count: 203,
  },
  {
    category: "Education & Training",
    positions: [
      "Teacher",
      "Lecturer",
      "Academic Coordinator",
      "Trainer",
      "Instructor",
    ],
    icon: "🎓",
    color: "bg-cyan-50 border-cyan-200",
    textColor: "text-cyan-700",
    count: 134,
  },
  {
    category: "Logistics, Supply Chain & Procurement",
    positions: [
      "Logistics Coordinator",
      "Procurement Officer",
      "Warehouse Supervisor",
      "Supply Chain Analyst",
    ],
    icon: "🚚",
    color: "bg-teal-50 border-teal-200",
    textColor: "text-teal-700",
    count: 87,
  },
  {
    category: "Real Estate & Property",
    positions: [
      "Property Consultant",
      "Real Estate Agent",
      "Facility Manager",
      "Leasing Officer",
    ],
    icon: "🏠",
    color: "bg-slate-50 border-slate-200",
    textColor: "text-slate-700",
    count: 65,
  },
  {
    category: "Banking & Financial Services",
    positions: [
      "Relationship Manager",
      "Loan Officer",
      "Credit Analyst",
      "Branch Operations Officer",
    ],
    icon: "🏦",
    color: "bg-violet-50 border-violet-200",
    textColor: "text-violet-700",
    count: 92,
  },
  {
    category: "Legal & Compliance",
    positions: [
      "Legal Advisor",
      "Corporate Lawyer",
      "Compliance Officer",
      "Paralegal",
    ],
    icon: "⚖️",
    color: "bg-stone-50 border-stone-200",
    textColor: "text-stone-700",
    count: 43,
  },
  {
    category: "Media, Advertising & Communications",
    positions: [
      "Content Writer",
      "Graphic Designer",
      "Social Media Executive",
      "PR Officer",
      "Photographer",
    ],
    icon: "📺",
    color: "bg-rose-50 border-rose-200",
    textColor: "text-rose-700",
    count: 78,
  },
  {
    category: "Manufacturing & Production",
    positions: [
      "Production Supervisor",
      "Quality Control Officer",
      "Machine Operator",
      "Maintenance Technician",
    ],
    icon: "🏭",
    color: "bg-zinc-50 border-zinc-200",
    textColor: "text-zinc-700",
    count: 156,
  },
  {
    category: "Environment, Safety & Sustainability",
    positions: [
      "Environmental Engineer",
      "HSE Officer",
      "Sustainability Consultant",
    ],
    icon: "🌱",
    color: "bg-lime-50 border-lime-200",
    textColor: "text-lime-700",
    count: 34,
  },
  {
    category: "Agriculture & Livestock",
    positions: [
      "Farm Manager",
      "Agricultural Engineer",
      "Veterinary Technician",
    ],
    icon: "🚜",
    color: "bg-green-50 border-green-200",
    textColor: "text-green-700",
    count: 28,
  },
  {
    category: "Oil, Gas & Energy",
    positions: [
      "Petroleum Engineer",
      "Drilling Supervisor",
      "Instrument Technician",
      "Solar Energy Specialist",
    ],
    icon: "⛽",
    color: "bg-yellow-50 border-yellow-200",
    textColor: "text-yellow-700",
    count: 67,
  },
  {
    category: "Customer Service & Call Center",
    positions: [
      "Call Center Agent",
      "Customer Support Executive",
      "Technical Support Officer",
    ],
    icon: "📞",
    color: "bg-sky-50 border-sky-200",
    textColor: "text-sky-700",
    count: 89,
  },
  {
    category: "Security & Defence",
    positions: [
      "Security Guard",
      "CCTV Operator",
      "Safety Supervisor",
      "Ex-Servicemen Jobs",
    ],
    icon: "🛡️",
    color: "bg-neutral-50 border-neutral-200",
    textColor: "text-neutral-700",
    count: 45,
  },
  {
    category: "Domestic & Maintenance",
    positions: ["Cleaner", "Electrician", "Plumber", "Carpenter", "Driver"],
    icon: "🔧",
    color: "bg-slate-50 border-slate-200",
    textColor: "text-slate-700",
    count: 123,
  },
];

export default function JobsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<{
    title: string;
    company: string;
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleApplyNow = (job: { title: string; company: string }) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleCloseForm = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  const handleSubmitApplication = (applicationData: any) => {
    console.log("Application submitted:", applicationData);
    alert("Application submitted successfully!");
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  const filteredCategories = jobCategories.filter(
    (category) =>
      category.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.positions.some((position) =>
        position.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const totalJobs = jobCategories.reduce((acc, cat) => acc + cat.count, 0);

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
        {/* Page Header */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <Briefcase className="w-6 h-6 text-secondary-700" />
            </div>
            <h1 className="text-4xl font-bold text-primary-900 tracking-tight">
              Global Job Opportunities
            </h1>
          </div>
          <p className="text-primary-700/80 text-2xl font-semibold mb-2">
            Your Gateway to Worldwide Career Success
          </p>
          <p className="text-primary-700/80 text-lg font-light leading-relaxed">
            Connect with verified employers across {jobCategories.length}+
            industries. Find your next career opportunity with TransPay
            Global&apos;s exclusive job marketplace featuring {totalJobs}+
            active positions.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Total Jobs
                </p>
                <p className="text-3xl font-bold text-primary-900">
                  {totalJobs}+
                </p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Your Applications
                </p>
                <p className="text-3xl font-bold text-primary-900">2</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <CheckCircle className="w-7 h-7 text-green-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Industries
                </p>
                <p className="text-3xl font-bold text-primary-900">
                  {jobCategories.length}
                </p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Success Rate
                </p>
                <p className="text-3xl font-bold text-primary-900">78%</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-6 border-l-4 border-primary-500">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <h2 className="text-xl font-bold text-primary-900">
              How TransPay Global Jobs Work
            </h2>
          </div>
          <div className="ml-9 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0 text-lg">
                1.
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Browse & Search
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  Explore thousands of verified job listings across 24+
                  industries
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0 text-lg">
                2.
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Apply Instantly
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  One-click applications with your TransPay Global profile
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0 text-lg">
                3.
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Get Matched
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  AI-powered matching connects you with the right employers
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0 text-lg">
                4.
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Start Working
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  Secure offers and begin your new career journey
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <Award className="w-6 h-6 text-secondary-700" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              Why Choose TransPay Global Jobs?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-6 border-l-4 border-primary-500">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Verified Employers Only
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Every company is KYC-verified to ensure authenticity and
                    prevent fraud
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-2xl p-6 border-l-4 border-secondary-500">
              <div className="flex items-start gap-3 mb-3">
                <Globe className="w-6 h-6 text-secondary-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Global Opportunities
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Access jobs worldwide with visa sponsorship and relocation
                    support
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-6 border-l-4 border-primary-500">
              <div className="flex items-start gap-3 mb-3">
                <Building2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Top Companies
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Connect with Fortune 500 companies and leading startups
                    globally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="card-luxury p-6 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search job categories or positions..."
                  className="w-full pl-10 pr-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-primary-900 placeholder-primary-400 font-light"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-700 font-semibold">
              <Filter className="w-4 h-4" />
              <span>{filteredCategories.length} categories found</span>
            </div>
          </div>
        </div>

        {/* Quick Apply CTA */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-2">
                Ready to Find Your Dream Job?
              </h3>
              <p className="text-primary-700/80 font-light">
                Browse all categories or upload your resume to get matched
                instantly
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-xl font-semibold hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Upload Resume
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                <Search className="w-5 h-5" />
                Browse All Jobs
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Job Categories */}
        <div>
          <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
            Explore Job Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-elegant border border-gray-100/50 p-6 hover:shadow-luxury hover:-translate-y-2 hover:border-secondary-200 transition-all duration-500 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center text-2xl shadow-soft group-hover:scale-110 transition-transform`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-900 mb-1 group-hover:text-secondary-700 transition-colors">
                        {category.category}
                      </h3>
                      <p className="text-sm text-primary-700/70 font-light">
                        {category.count} positions available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-bold text-primary-900 mb-2">
                    Available Positions:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.positions
                      .slice(0, 3)
                      .map((position, posIndex) => (
                        <span
                          key={posIndex}
                          className="px-3 py-1 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 rounded-lg text-xs font-medium"
                        >
                          {position}
                        </span>
                      ))}
                    {category.positions.length > 3 && (
                      <span className="px-3 py-1 bg-gradient-to-r from-secondary-50 to-secondary-100 text-secondary-700 rounded-lg text-xs font-bold">
                        +{category.positions.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-primary-700/70 font-light">
                    <Briefcase className="w-4 h-4" />
                    <span>{category.positions.length} roles</span>
                  </div>
                  <button
                    className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg text-sm font-semibold hover:shadow-primary hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-1"
                    onClick={() =>
                      handleApplyNow({
                        title: category.category,
                        company: "Multiple Companies",
                      })
                    }
                  >
                    Browse Jobs
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="card-luxury p-12 text-center hover:shadow-luxury transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Briefcase className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                No job categories found
              </h3>
              <p className="text-primary-700/80 font-light">
                Try adjusting your search terms to find more opportunities.
              </p>
            </div>
          )}
        </div>

        {/* For Employers CTA */}
        <div className="bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-2xl p-8 border-l-4 border-secondary-500">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-2">
                Are You an Employer?
              </h3>
              <p className="text-primary-700/80 font-light text-lg">
                Post jobs, find talent, and grow your team with TransPay
                Global&apos;s verified candidate network
              </p>
              <div className="flex gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary-600" />
                  <span className="text-sm text-primary-700/80 font-light">
                    Access 50,000+ candidates
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary-600" />
                  <span className="text-sm text-primary-700/80 font-light">
                    AI-powered matching
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary-600" />
                  <span className="text-sm text-primary-700/80 font-light">
                    Fast hiring process
                  </span>
                </div>
              </div>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-xl font-semibold hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 text-lg whitespace-nowrap">
              <Building2 className="w-5 h-5" />
              Post a Job
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Application History */}
        <div>
          <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
            Your Applications
          </h2>
          <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
            <div className="space-y-4">
              {jobApplications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-gradient-to-r from-primary-50/30 to-secondary-50/30 rounded-2xl border-2 border-transparent hover:border-primary-200 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft">
                      <Briefcase className="w-7 h-7 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 text-lg">
                        {application.title}
                      </h3>
                      <p className="text-sm text-primary-700/80 font-light">
                        {application.company} • {application.location}
                      </p>
                      <p className="text-sm text-primary-700/70 font-light">
                        Applied: {application.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        application.status === "Interview Scheduled"
                          ? "bg-gradient-to-r from-green-100 to-green-200 text-green-800"
                          : application.status === "Under Review"
                          ? "bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-800"
                          : "bg-gradient-to-r from-red-100 to-red-200 text-red-800"
                      }`}
                    >
                      {application.status}
                    </span>
                    <p className="text-sm text-primary-700/70 font-semibold mt-2">
                      {application.salary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Applications CTA */}
            <div className="mt-6 flex justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                View All Applications
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Job Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <JobApplicationForm
          jobTitle={selectedJob.title}
          company={selectedJob.company}
          onClose={handleCloseForm}
          onSubmit={handleSubmitApplication}
        />
      )}
    </DashboardLayout>
  );
}
