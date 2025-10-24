"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { getUserData, isAuthenticated } from "@/lib/api";
import type { User } from "@/lib/api/types";
import {
  Heart,
  Stethoscope,
  Shield,
  CheckCircle,
  Users,
  Clock,
  Lock,
  Globe,
  Award,
  Activity,
  MessageSquare,
  FileText,
} from "lucide-react";

export default function HealthServicesPage() {
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

  const healthServicesCategories = [
    {
      category: "General Health",
      description: "Cough, fever, pain, infections, and routine check-ups",
    },
    {
      category: "Specialist Consultation",
      description:
        "Cardiologists, Dermatologists, Gynecologists, Dentists, etc.",
    },
    {
      category: "Mental Health",
      description: "Psychologists and psychiatrists for stress and therapy",
    },
    {
      category: "Emergency Care",
      description: "24/7 response and referral to nearest hospital",
    },
    {
      category: "Lab & Tests",
      description: "Online lab test booking and digital reports",
    },
    {
      category: "Pharmacy Delivery",
      description: "E-prescription and home delivery of medicines",
    },
    {
      category: "Fitness & Diet",
      description: "Nutrition and exercise consultation",
    },
    {
      category: "Chronic Disease Management",
      description: "Diabetes, blood pressure, asthma, etc.",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <Heart className="w-6 h-6 text-secondary-700" />
            </div>
            <h1 className="text-4xl font-bold text-primary-900 tracking-tight">
              Health Services Enrollment & 24/7 Patient Solutions
            </h1>
          </div>
          <p className="text-primary-700/80 text-lg font-light">
            Connect with licensed doctors and healthcare professionals from
            around the world — anytime, anywhere.
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
            Our Health Services Division connects patients directly with
            licensed doctors and healthcare professionals from around the world
            — anytime, anywhere. Through our mobile app and website, users can
            access medical consultations, get prescriptions, and receive
            real-time support for emergencies, all within a secure digital
            healthcare environment.
          </p>
        </div>

        {/* Doctor Enrollment Program */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <Stethoscope className="w-6 h-6 text-secondary-700" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              Doctor Enrollment Program
            </h2>
          </div>

          <p className="text-sm text-primary-700/80 font-light leading-relaxed mb-6">
            We welcome qualified doctors, specialists, clinics, and hospitals to
            join our network. Once enrolled, they gain access to a growing
            community of patients seeking instant and reliable healthcare
            solutions.
          </p>

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
                  Valid medical license (PMC, DHA, MOH, HAAD, or equivalent
                  authority)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary-700 font-bold flex-shrink-0">
                  2.
                </span>
                <p className="text-sm text-primary-700/80 font-light">
                  National ID / Passport and professional verification
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary-700 font-bold flex-shrink-0">
                  3.
                </span>
                <p className="text-sm text-primary-700/80 font-light">
                  Medical specialty (General Physician, Cardiologist, Dentist,
                  Pediatrician, etc.)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary-700 font-bold flex-shrink-0">
                  4.
                </span>
                <p className="text-sm text-primary-700/80 font-light">
                  Consultation schedule and available hours
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary-700 font-bold flex-shrink-0">
                  5.
                </span>
                <p className="text-sm text-primary-700/80 font-light">
                  Verified bank or payment details for fee settlement
                </p>
              </div>
            </div>
          </div>

          {/* Benefits for Doctors */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 border-2 border-primary-200/50 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Award className="w-3 h-3 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary-900">
                Benefits for Doctors
              </h3>
            </div>
            <div className="ml-9 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-700/80 font-light">
                  Verified listing on an international healthcare platform
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-700/80 font-light">
                  Direct online consultations (voice, video, and text)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-700/80 font-light">
                  Appointment management and digital medical record system
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-700/80 font-light">
                  Secure digital payments and automated billing
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-700/80 font-light">
                  24/7 support for doctors and patients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 24/7 Patient Health Solutions */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <Clock className="w-6 h-6 text-secondary-700" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              24/7 Patient Health Solutions
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
                {healthServicesCategories.map((service, index) => (
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
                User registers and selects health issue.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                2.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                System matches with an available doctor based on specialty and
                language.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                3.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                Instant video or chat consultation begins.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                4.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                Doctor diagnoses and issues a digital prescription or lab order.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                5.
              </span>
              <p className="text-sm text-primary-700/80 font-light">
                Follow-up scheduled automatically if needed.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance & Privacy */}
        <div className="bg-gradient-to-br from-secondary-50 to-secondary-100/50 border-2 border-secondary-200/50 rounded-2xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-6 h-6 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Shield className="w-3 h-3 text-white" />
            </div>
            <h2 className="text-xl font-bold text-primary-900">
              Compliance & Privacy
            </h2>
          </div>
          <div className="ml-9 space-y-3">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                All healthcare professionals undergo license and identity
                verification.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                All data transmissions are encrypted and stored under medical
                privacy standards.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Activity className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                24/7 technical support ensures smooth communication between
                patients and doctors.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-700/80 font-light">
                Platform operates under telemedicine guidelines of UAE,
                Pakistan, EU, and WHO standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
