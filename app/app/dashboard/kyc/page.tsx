"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";
import { submitKYC, getKYCStatus, isAuthenticated } from "@/lib/api";
import {
  User,
  FileText,
  Camera,
  CheckCircle,
  AlertCircle,
  Upload,
  Sparkles,
  MapPin,
  Phone,
  Calendar,
  Clock,
} from "lucide-react";

interface KYCFormData {
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  idDocument: File | null;
  proofOfAddress: File | null;
}

interface KYCStatusData {
  submitted: boolean;
  status: string;
  submittedAt?: string;
  updatedAt?: string;
}

export default function KYCPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [kycStatus, setKycStatus] = useState<KYCStatusData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const [formData, setFormData] = useState<KYCFormData>({
    dateOfBirth: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    idDocument: null,
    proofOfAddress: null,
  });

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/auth/login');
      return;
    }

    fetchKYCStatus();
  }, [router]);

  const fetchKYCStatus = async () => {
    try {
      const status = await getKYCStatus();
      setKycStatus(status);

      // If KYC is already submitted and approved, user can't resubmit
      if (status.submitted && status.status === 'approved') {
        setCurrentStep(4); // Show final review
      }
    } catch (err: any) {
      // If 404 or no KYC found, that's okay - user hasn't submitted yet
      if (!err.message?.includes('404')) {
        console.error('Error fetching KYC status:', err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: 'idDocument' | 'proofOfAddress') => {
    const file = e.target.files?.[0] || null;
    if (file) {
      // Check file size (5MB limit as per API docs)
      if (file.size > 5 * 1024 * 1024) {
        setError(`${fieldName === 'idDocument' ? 'ID Document' : 'Proof of Address'} must be under 5MB`);
        return;
      }
      setFormData(prev => ({ ...prev, [fieldName]: file }));
      setError("");
    }
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    // Validate all fields
    if (!formData.dateOfBirth || !formData.phoneNumber || !formData.address ||
        !formData.city || !formData.country || !formData.postalCode) {
      setError("Please fill in all personal information fields");
      return;
    }

    if (!formData.idDocument) {
      setError("Please upload your ID document");
      return;
    }

    if (!formData.proofOfAddress) {
      setError("Please upload proof of address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitKYC({
        dateOfBirth: formData.dateOfBirth,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        city: formData.city,
        country: formData.country,
        postalCode: formData.postalCode,
        idDocument: formData.idDocument,
        proofOfAddress: formData.proofOfAddress,
      });

      setSuccess("KYC submitted successfully! Status: " + response.status);
      setCurrentStep(4); // Move to final review
      await fetchKYCStatus(); // Refresh status
    } catch (err: any) {
      setError(err.message || "Failed to submit KYC. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const kycSteps = [
    {
      step: 1,
      title: "Personal Information",
      description: "Contact and address details",
      status: currentStep > 1 || kycStatus?.submitted ? "completed" : currentStep === 1 ? "active" : "pending",
      icon: User,
    },
    {
      step: 2,
      title: "Identity Verification",
      description: "Upload government ID",
      status: currentStep > 2 || kycStatus?.submitted ? "completed" : currentStep === 2 ? "active" : "pending",
      icon: FileText,
    },
    {
      step: 3,
      title: "Address Proof",
      description: "Upload address document",
      status: currentStep > 3 || kycStatus?.submitted ? "completed" : currentStep === 3 ? "active" : "pending",
      icon: MapPin,
    },
    {
      step: 4,
      title: "Final Review",
      description: "Pending admin approval",
      status: kycStatus?.submitted ? (kycStatus.status === 'approved' ? "completed" : "active") : "pending",
      icon: CheckCircle,
    },
  ];

  const completedSteps = kycSteps.filter(s => s.status === "completed").length;
  const progressPercentage = (completedSteps / kycSteps.length) * 100;

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading KYC status...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // If KYC is approved
  if (kycStatus?.status === 'approved') {
    return (
      <DashboardLayout>
        <div className="space-y-8">
          <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-700" />
              </div>
              <h1 className="text-4xl font-bold text-primary-900 tracking-tight mb-3">
                KYC Approved!
              </h1>
              <p className="text-primary-700/80 text-lg font-light">
                Your identity verification has been approved. You now have full access to all features.
              </p>
              {kycStatus.submittedAt && (
                <p className="text-sm text-primary-600 mt-4">
                  Approved on: {new Date(kycStatus.submittedAt).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-secondary-600 animate-glow" />
            <h1 className="text-4xl font-bold text-primary-900 tracking-tight">KYC Verification</h1>
          </div>
          <p className="text-primary-700/80 text-lg font-light leading-relaxed">
            Complete your Know Your Customer verification to access all features.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              Verification Progress
            </h2>
            <div className="text-sm font-semibold text-primary-700">
              {completedSteps} of {kycSteps.length} steps completed
            </div>
          </div>

          <div className="w-full bg-gradient-to-r from-primary-100 to-primary-200 rounded-full h-3 mb-8 shadow-soft">
            <div
              className="bg-gradient-to-r from-primary-600 to-primary-700 h-3 rounded-full transition-all duration-500 shadow-primary"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kycSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform ${
                    step.status === "completed"
                      ? "bg-gradient-to-br from-green-100 to-green-200"
                      : step.status === "active"
                      ? "bg-gradient-to-br from-secondary-100 to-secondary-200"
                      : "bg-gradient-to-br from-gray-100 to-gray-200"
                  }`}
                >
                  <step.icon className={`w-8 h-8 ${
                    step.status === "completed"
                      ? "text-green-700"
                      : step.status === "active"
                      ? "text-secondary-700"
                      : "text-gray-400"
                  }`} />
                </div>
                <h3 className="font-bold text-primary-900 text-sm mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-primary-700/70 font-light mb-2">{step.description}</p>
                {step.status === "completed" && (
                  <div className="flex items-center justify-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-green-600 font-semibold">Complete</span>
                  </div>
                )}
                {step.status === "active" && (
                  <div className="flex items-center justify-center gap-1">
                    <Clock className="w-4 h-4 text-secondary-600" />
                    <span className="text-xs text-secondary-600 font-semibold">In Progress</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {success && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-green-800">{success}</p>
          </div>
        )}

        {/* Step 1: Personal Information */}
        {currentStep === 1 && !kycStatus?.submitted && (
          <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
            <h2 className="text-2xl font-bold text-primary-900 mb-4 tracking-tight">
              Personal Information
            </h2>
            <p className="text-primary-700/80 font-light mb-6 leading-relaxed">
              Please provide your personal details for verification.
            </p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Date of Birth"
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  icon={Calendar}
                  required
                />
                <FormInput
                  label="Phone Number"
                  type="tel"
                  name="phoneNumber"
                  placeholder="+1234567890"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  icon={Phone}
                  required
                />
              </div>

              <FormInput
                label="Street Address"
                type="text"
                name="address"
                placeholder="123 Main Street"
                value={formData.address}
                onChange={handleInputChange}
                icon={MapPin}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormInput
                  label="City"
                  type="text"
                  name="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <FormInput
                  label="Country"
                  type="text"
                  name="country"
                  placeholder="USA"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
                <FormInput
                  label="Postal Code"
                  type="text"
                  name="postalCode"
                  placeholder="10001"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex justify-end">
                <Button onClick={() => setCurrentStep(2)} className="px-8">
                  Next Step
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Identity Verification */}
        {currentStep === 2 && !kycStatus?.submitted && (
          <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
            <h2 className="text-2xl font-bold text-primary-900 mb-4 tracking-tight">
              Identity Verification
            </h2>
            <p className="text-primary-700/80 font-light mb-6 leading-relaxed">
              Please upload a clear photo of your government-issued ID (passport, driver&apos;s license, or national ID card).
            </p>

            <div className="border-2 border-dashed border-primary-300 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 rounded-2xl p-12 text-center hover:border-primary-400 hover:shadow-soft transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Upload className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">
                {formData.idDocument ? formData.idDocument.name : "Upload ID Document"}
              </h3>
              <p className="text-primary-700/80 font-light mb-4">
                {formData.idDocument ? "Click to change file" : "Click to browse or drag and drop"}
              </p>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => handleFileChange(e, 'idDocument')}
                className="hidden"
                id="idDocument"
              />
              <label htmlFor="idDocument">
                <span className="cursor-pointer inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-primary transition-all duration-300">
                  Choose File
                </span>
              </label>
              <p className="text-xs text-primary-700/70 mt-4 font-light">
                Supported formats: PDF, JPG, PNG (Max 5MB)
              </p>
            </div>

            <div className="mt-6 flex gap-4">
              <Button variant="outline" onClick={() => setCurrentStep(1)} className="px-8">
                Back
              </Button>
              <Button onClick={() => setCurrentStep(3)} className="flex-1">
                Next Step
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Address Verification */}
        {currentStep === 3 && !kycStatus?.submitted && (
          <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
            <h2 className="text-2xl font-bold text-primary-900 mb-4 tracking-tight">
              Address Verification
            </h2>
            <p className="text-primary-700/80 font-light mb-6 leading-relaxed">
              Please upload a utility bill, bank statement, or government document showing your current address.
              The document must be dated within the last 3 months.
            </p>

            <div className="border-2 border-dashed border-primary-300 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 rounded-2xl p-12 text-center hover:border-primary-400 hover:shadow-soft transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Upload className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">
                {formData.proofOfAddress ? formData.proofOfAddress.name : "Upload Proof of Address"}
              </h3>
              <p className="text-primary-700/80 font-light mb-4">
                {formData.proofOfAddress ? "Click to change file" : "Click to browse or drag and drop"}
              </p>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => handleFileChange(e, 'proofOfAddress')}
                className="hidden"
                id="proofOfAddress"
              />
              <label htmlFor="proofOfAddress">
                <span className="cursor-pointer inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-primary transition-all duration-300">
                  Choose File
                </span>
              </label>
              <p className="text-xs text-primary-700/70 mt-4 font-light">
                Supported formats: PDF, JPG, PNG (Max 5MB)
              </p>
            </div>

            <div className="mt-6 flex gap-4">
              <Button variant="outline" onClick={() => setCurrentStep(2)} className="px-8">
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit for Review"}
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Final Review (Pending) */}
        {(currentStep === 4 || kycStatus?.submitted) && kycStatus?.status !== 'approved' && (
          <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-secondary-700" />
              </div>
              <h2 className="text-2xl font-bold text-primary-900 mb-4 tracking-tight">
                Under Review
              </h2>
              <p className="text-primary-700/80 font-light mb-6 leading-relaxed max-w-2xl mx-auto">
                Thank you for submitting your KYC documents. Our team is currently reviewing your information.
                You will receive a notification once the review is complete.
              </p>
              {kycStatus?.submittedAt && (
                <p className="text-sm text-primary-600">
                  Submitted on: {new Date(kycStatus.submittedAt).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Requirements */}
        {!kycStatus?.submitted && (
          <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
            <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
              Document Requirements
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-900 font-light">
                  Documents must show your full name and current address
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-900 font-light">
                  Address proof must be dated within the last 3 months
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-900 font-light">
                  Images must be clear and all text readable
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-900 font-light">
                  File size must be under 5MB per document
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
