import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { FileText, Clock, CheckCircle, Globe, Sparkles, ArrowRight } from "lucide-react";

const visaApplications = [
  {
    id: "VISA-001",
    country: "United States",
    type: "Tourist Visa",
    status: "Under Review",
    date: "2024-01-15",
    expectedDate: "2024-02-15",
  },
  {
    id: "VISA-002",
    country: "Canada",
    type: "Work Visa",
    status: "Approved",
    date: "2024-01-10",
    expectedDate: "2024-01-25",
  },
];

const availableServices = [
  {
    name: "Tourist Visa Service",
    countries: ["USA", "UK", "Canada", "Australia"],
    price: "$299",
    duration: "2-4 weeks",
    features: [
      "Document preparation",
      "Application submission",
      "Status tracking",
    ],
  },
  {
    name: "Work Visa Service",
    countries: ["USA", "Canada", "Germany", "Netherlands"],
    price: "$499",
    duration: "4-8 weeks",
    features: ["Job offer assistance", "Documentation", "Interview prep"],
  },
  {
    name: "Student Visa Service",
    countries: ["USA", "UK", "Canada", "Australia"],
    price: "$399",
    duration: "3-6 weeks",
    features: ["University guidance", "Documentation", "Financial proof"],
  },
];

export default function VisaPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-secondary-600 animate-glow" />
            <h1 className="text-4xl font-bold text-primary-900 tracking-tight">Visa Services</h1>
          </div>
          <p className="text-primary-700/80 text-lg font-light leading-relaxed">
            Professional visa assistance for your travel and work needs.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Active Applications
                </p>
                <p className="text-3xl font-bold text-primary-900">2</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">Approved</p>
                <p className="text-3xl font-bold text-primary-900">1</p>
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
                  Success Rate
                </p>
                <p className="text-3xl font-bold text-primary-900">95%</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Avg. Processing
                </p>
                <p className="text-3xl font-bold text-primary-900">3 weeks</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Available Services */}
        <div>
          <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
            Available Visa Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availableServices.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-elegant border border-gray-100/50 p-6 hover:shadow-luxury hover:-translate-y-2 hover:border-secondary-200 transition-all duration-500 group">
                <h3 className="font-bold text-primary-900 text-xl mb-4 group-hover:text-secondary-700 transition-colors">
                  {service.name}
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between p-3 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl">
                    <span className="text-sm font-semibold text-primary-700">Price:</span>
                    <span className="text-sm font-bold text-primary-900">{service.price}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-xl">
                    <span className="text-sm font-semibold text-secondary-700">Duration:</span>
                    <span className="text-sm font-bold text-secondary-900">
                      {service.duration}
                    </span>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl">
                    <span className="text-sm font-semibold text-primary-700 block mb-2">Countries:</span>
                    <span className="text-sm font-bold text-primary-900">
                      {service.countries.join(", ")}
                    </span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-primary-700/80 font-light"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-primary hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Application History */}
        <div>
          <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
            Application History
          </h2>
          <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
            <div className="space-y-4">
              {visaApplications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-gradient-to-r from-primary-50/30 to-secondary-50/30 rounded-2xl border-2 border-transparent hover:border-primary-200 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                      <Globe className="w-7 h-7 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900">
                        {application.country} - {application.type}
                      </h3>
                      <p className="text-sm text-primary-700/80 font-light">
                        Application ID: {application.id}
                      </p>
                      <p className="text-sm text-primary-700/70 font-light">
                        Applied: {application.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        application.status === "Approved"
                          ? "bg-gradient-to-r from-green-100 to-green-200 text-green-800"
                          : application.status === "Under Review"
                          ? "bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-800"
                          : "bg-gradient-to-r from-red-100 to-red-200 text-red-800"
                      }`}
                    >
                      {application.status}
                    </span>
                    <p className="text-sm text-primary-700/70 mt-1 font-light">
                      Expected: {application.expectedDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
