"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { getUserData, isAuthenticated } from "@/lib/api";
import type { User } from "@/lib/api/types";
import {
  Scale,
  Shield,
  CheckCircle,
  Users,
  FileText,
  Lock,
  Globe,
  Award,
  BookOpen,
  MessageSquare,
} from "lucide-react";

export default function LegalServicesPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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

  const legalServicesCategories = [
    {
      category: "Civil & Criminal",
      description: "FIR, bail, litigation, appeals",
    },
    {
      category: "Corporate Law",
      description: "Company registration, contracts, compliance",
    },
    {
      category: "Family Law",
      description: "Divorce, custody, inheritance",
    },
    {
      category: "Property Law",
      description: "Land disputes, registry, ownership transfers",
    },
    {
      category: "Taxation",
      description: "FBR/IRS representation, audits, refund claims",
    },
    {
      category: "Cyber & IT Law",
      description: "Digital fraud, privacy breaches, defamation",
    },
    {
      category: "Immigration & Visa",
      description: "Legalized documentation, visa appeals",
    },
    {
      category: "Consumer Protection",
      description: "Complaint filing and compensation cases",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <Scale className="w-6 h-6 text-secondary-700" />
            </div>
            <h1 className="text-4xl font-bold text-primary-900 tracking-tight">
              Legal Services Enrollment and Solutions
            </h1>
          </div>
          <p className="text-primary-700/80 text-lg font-light">
            Connect with verified lawyers and access professional legal
            assistance worldwide.
          </p>
        </div>

        {/* Overview Section */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-6 border-l-4 border-primary-500">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-bold">■</span>
            </div>
            <h2 className="text-xl font-bold text-primary-900">Overview</h2>
          </div>
          <p className="text-sm text-primary-700/80 font-light leading-relaxed ml-9">
            Our Legal Services Division provides a secure, efficient, and
            affordable way for individuals and organizations to access
            professional legal assistance worldwide. We connect users with
            verified lawyers and law firms specializing in all major fields —
            ensuring every client receives the right legal help at the right
            time.
          </p>
        </div>

        {/* Lawyer Enrollment Program */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <Users className="w-6 h-6 text-secondary-700" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              Lawyer Enrollment Program
            </h2>
          </div>

          <p className="text-sm text-primary-700/80 font-light leading-relaxed mb-6">
            We invite licensed lawyers, law firms, and legal consultants to
            enroll on our platform. Once registered, they gain access to a
            global client base seeking:
          </p>

          <div className="ml-6 space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-secondary-700 font-bold flex-shrink-0">
                1.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                Legal representation and advisory services
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-secondary-700 font-bold flex-shrink-0">
                2.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                Drafting of contracts, agreements, and petitions
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-secondary-700 font-bold flex-shrink-0">
                3.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                Case management and documentation review
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-secondary-700 font-bold flex-shrink-0">
                4.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                Mediation, arbitration, and dispute resolution
              </p>
            </div>
          </div>

          {/* Enrollment Requirements */}
          <div className="bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-2xl p-6 border-l-4 border-secondary-500 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <FileText className="w-3 h-3 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary-900">
                Enrollment Requirements
              </h3>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-secondary-700 font-bold flex-shrink-0">
                  1.
                </span>
                <p className="text-sm text-primary-700/80 font-light">
                  Valid Bar Council license or registration certificate
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary-700 font-bold flex-shrink-0">
                  2.
                </span>
                <p className="text-sm text-primary-700/80 font-light">
                  National ID / Passport verification
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary-700 font-bold flex-shrink-0">
                  3.
                </span>
                <p className="text-sm text-primary-700/80 font-light">
                  Area of specialization (Civil, Criminal, Corporate, Family,
                  Property, Tax, etc.)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary-700 font-bold flex-shrink-0">
                  4.
                </span>
                <p className="text-sm text-primary-700/80 font-light">
                  Office address and contact details
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary-700 font-bold flex-shrink-0">
                  5.
                </span>
                <p className="text-sm text-primary-700/80 font-light">
                  Digital signature or seal for authenticity
                </p>
              </div>
            </div>
          </div>

          {/* Benefits for Lawyers */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 border-2 border-primary-200/50 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Award className="w-3 h-3 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary-900">
                Benefits for Lawyers
              </h3>
            </div>
            <div className="ml-9 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-700/80 font-light">
                  Verified listing on an international platform
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-700/80 font-light">
                  Global client referrals
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-700/80 font-light">
                  Access to document exchange and case tracking tools
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-700/80 font-light">
                  Secure payment and billing through the app
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Services for the Public */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <BookOpen className="w-6 h-6 text-secondary-700" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              Legal Services for the Public
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-secondary-300">
                  <th className="text-left py-3 px-4 font-bold text-primary-900 bg-secondary-100/50">
                    Category
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-primary-900 bg-secondary-100/50">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-200">
                {legalServicesCategories.map((service, index) => (
                  <tr
                    key={index}
                    className="hover:bg-secondary-50 transition-colors"
                  >
                    <td className="py-3 px-4 font-medium text-primary-900">
                      {service.category}
                    </td>
                    <td className="py-3 px-4 text-primary-700/80">
                      {service.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-6 border-l-4 border-primary-500">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <MessageSquare className="w-3 h-3 text-white" />
            </div>
            <h2 className="text-xl font-bold text-primary-900">How It Works</h2>
          </div>
          <div className="ml-9 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                1.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                User submits a case via the app or website.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                2.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                System matches the case with a relevant lawyer.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                3.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                Lawyer reviews and provides consultation or quote.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                4.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                User accepts and begins secure consultation.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                5.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                All communications remain encrypted and transparent.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance & Security */}
        <div className="bg-gradient-to-br from-secondary-50 to-secondary-100/50 border-2 border-secondary-200/50 rounded-2xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-6 h-6 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Shield className="w-3 h-3 text-white" />
            </div>
            <h2 className="text-xl font-bold text-primary-900">
              Compliance & Security
            </h2>
          </div>
          <div className="ml-9 space-y-3">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                All lawyers are verified for identity and license authenticity.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Payments are processed through secure, compliant gateways.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Data privacy is ensured under GDPR and UAE Cybersecurity Law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
