"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import {
  X,
  Plus,
  Trash2,
  Upload,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface JobApplicationFormProps {
  jobTitle: string;
  company: string;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

interface EducationalBackground {
  qualification: string;
  institute: string;
  yearOfPassing: string;
  major: string;
  grade: string;
}

interface ProfessionalExperience {
  organization: string;
  designation: string;
  durationFrom: string;
  durationTo: string;
  country: string;
  responsibilities: string;
}

interface TravelHistory {
  country: string;
  purpose: string;
  duration: string;
  visaType: string;
  remarks: string;
}

interface Reference {
  name: string;
  designation: string;
  organization: string;
  country: string;
  contact: string;
}

export default function JobApplicationForm({
  jobTitle,
  company,
  onClose,
  onSubmit,
}: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    fathersName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    cnicPassport: "",
    passportExpiryDate: "",
    maritalStatus: "",
    contactNumber: "",
    email: "",
    currentAddress: "",
    permanentAddress: "",

    // Job Preference
    desiredPosition: jobTitle,
    preferredCountries: "",
    expectedSalary: "",
    preferredIndustry: "",
    employmentType: "",
    willingToRelocate: "",
    readyToJoinWithin: "",

    // Skills
    skills: "",

    // Language Proficiency
    englishSpeak: false,
    englishRead: false,
    englishWrite: false,
    arabicSpeak: false,
    arabicRead: false,
    arabicWrite: false,
    chineseSpeak: false,
    chineseRead: false,
    chineseWrite: false,
    otherLanguage: "",
    otherSpeak: false,
    otherRead: false,
    otherWrite: false,

    // Declaration
    signature: "",
    date: "",
  });

  const [educationalBackground, setEducationalBackground] = useState<
    EducationalBackground[]
  >([
    {
      qualification: "",
      institute: "",
      yearOfPassing: "",
      major: "",
      grade: "",
    },
  ]);

  const [professionalExperience, setProfessionalExperience] = useState<
    ProfessionalExperience[]
  >([
    {
      organization: "",
      designation: "",
      durationFrom: "",
      durationTo: "",
      country: "",
      responsibilities: "",
    },
  ]);

  const [travelHistory, setTravelHistory] = useState<TravelHistory[]>([
    { country: "", purpose: "", duration: "", visaType: "", remarks: "" },
  ]);

  const [references, setReferences] = useState<Reference[]>([
    { name: "", designation: "", organization: "", country: "", contact: "" },
  ]);

  const addEducationalEntry = () => {
    setEducationalBackground([
      ...educationalBackground,
      {
        qualification: "",
        institute: "",
        yearOfPassing: "",
        major: "",
        grade: "",
      },
    ]);
  };

  const removeEducationalEntry = (index: number) => {
    setEducationalBackground(
      educationalBackground.filter((_, i) => i !== index)
    );
  };

  const addProfessionalEntry = () => {
    setProfessionalExperience([
      ...professionalExperience,
      {
        organization: "",
        designation: "",
        durationFrom: "",
        durationTo: "",
        country: "",
        responsibilities: "",
      },
    ]);
  };

  const removeProfessionalEntry = (index: number) => {
    setProfessionalExperience(
      professionalExperience.filter((_, i) => i !== index)
    );
  };

  const addTravelEntry = () => {
    setTravelHistory([
      ...travelHistory,
      { country: "", purpose: "", duration: "", visaType: "", remarks: "" },
    ]);
  };

  const removeTravelEntry = (index: number) => {
    setTravelHistory(travelHistory.filter((_, i) => i !== index));
  };

  const addReferenceEntry = () => {
    setReferences([
      ...references,
      { name: "", designation: "", organization: "", country: "", contact: "" },
    ]);
  };

  const removeReferenceEntry = (index: number) => {
    setReferences(references.filter((_, i) => i !== index));
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleEducationalChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...educationalBackground];
    updated[index] = { ...updated[index], [field]: value };
    setEducationalBackground(updated);
  };

  const handleProfessionalChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...professionalExperience];
    updated[index] = { ...updated[index], [field]: value };
    setProfessionalExperience(updated);
  };

  const handleTravelChange = (index: number, field: string, value: string) => {
    const updated = [...travelHistory];
    updated[index] = { ...updated[index], [field]: value };
    setTravelHistory(updated);
  };

  const handleReferenceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...references];
    updated[index] = { ...updated[index], [field]: value };
    setReferences(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const applicationData = {
      jobTitle,
      company,
      personalInfo: formData,
      educationalBackground,
      professionalExperience,
      travelHistory,
      references,
    };
    onSubmit(applicationData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Job Application Form
            </h2>
            <p className="text-gray-600">
              {jobTitle} at {company}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* 1. Personal Information */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              1. Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Father&apos;s Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.fathersName}
                  onChange={(e) =>
                    handleInputChange("fathersName", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    handleInputChange("dateOfBirth", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={(e) =>
                        handleInputChange("gender", e.target.value)
                      }
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={(e) =>
                        handleInputChange("gender", e.target.value)
                      }
                      className="mr-2"
                    />
                    Female
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nationality *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.nationality}
                  onChange={(e) =>
                    handleInputChange("nationality", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CNIC / Passport No. *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.cnicPassport}
                  onChange={(e) =>
                    handleInputChange("cnicPassport", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Passport Expiry Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.passportExpiryDate}
                  onChange={(e) =>
                    handleInputChange("passportExpiryDate", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Marital Status *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="maritalStatus"
                      value="Single"
                      checked={formData.maritalStatus === "Single"}
                      onChange={(e) =>
                        handleInputChange("maritalStatus", e.target.value)
                      }
                      className="mr-2"
                    />
                    Single
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="maritalStatus"
                      value="Married"
                      checked={formData.maritalStatus === "Married"}
                      onChange={(e) =>
                        handleInputChange("maritalStatus", e.target.value)
                      }
                      className="mr-2"
                    />
                    Married
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.contactNumber}
                  onChange={(e) =>
                    handleInputChange("contactNumber", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Address *
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.currentAddress}
                  onChange={(e) =>
                    handleInputChange("currentAddress", e.target.value)
                  }
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Permanent Address *
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.permanentAddress}
                  onChange={(e) =>
                    handleInputChange("permanentAddress", e.target.value)
                  }
                />
              </div>
            </div>
          </Card>

          {/* 2. Educational Background */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                2. Educational Background
              </h3>
              <Button
                type="button"
                onClick={addEducationalEntry}
                variant="outline"
                size="sm"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Education
              </Button>
            </div>
            <div className="space-y-6">
              {educationalBackground.map((edu, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">
                      Education #{index + 1}
                    </h4>
                    {educationalBackground.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeEducationalEntry(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Qualification
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={edu.qualification}
                        onChange={(e) =>
                          handleEducationalChange(
                            index,
                            "qualification",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Institute / University
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={edu.institute}
                        onChange={(e) =>
                          handleEducationalChange(
                            index,
                            "institute",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Year of Passing
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={edu.yearOfPassing}
                        onChange={(e) =>
                          handleEducationalChange(
                            index,
                            "yearOfPassing",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Major / Subject
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={edu.major}
                        onChange={(e) =>
                          handleEducationalChange(
                            index,
                            "major",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Grade / CGPA
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={edu.grade}
                        onChange={(e) =>
                          handleEducationalChange(
                            index,
                            "grade",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* 3. Professional Experience */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                3. Professional Experience
              </h3>
              <Button
                type="button"
                onClick={addProfessionalEntry}
                variant="outline"
                size="sm"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Experience
              </Button>
            </div>
            <div className="space-y-6">
              {professionalExperience.map((exp, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">
                      Experience #{index + 1}
                    </h4>
                    {professionalExperience.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProfessionalEntry(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={exp.organization}
                        onChange={(e) =>
                          handleProfessionalChange(
                            index,
                            "organization",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Designation
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={exp.designation}
                        onChange={(e) =>
                          handleProfessionalChange(
                            index,
                            "designation",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration (From)
                      </label>
                      <input
                        type="month"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={exp.durationFrom}
                        onChange={(e) =>
                          handleProfessionalChange(
                            index,
                            "durationFrom",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration (To)
                      </label>
                      <input
                        type="month"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={exp.durationTo}
                        onChange={(e) =>
                          handleProfessionalChange(
                            index,
                            "durationTo",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={exp.country}
                        onChange={(e) =>
                          handleProfessionalChange(
                            index,
                            "country",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Responsibilities
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={exp.responsibilities}
                        onChange={(e) =>
                          handleProfessionalChange(
                            index,
                            "responsibilities",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* 4. International Work & Travel History */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                4. International Work & Travel History
              </h3>
              <Button
                type="button"
                onClick={addTravelEntry}
                variant="outline"
                size="sm"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Travel History
              </Button>
            </div>
            <div className="space-y-6">
              {travelHistory.map((travel, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">
                      Travel #{index + 1}
                    </h4>
                    {travelHistory.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeTravelEntry(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country Visited
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={travel.country}
                        onChange={(e) =>
                          handleTravelChange(index, "country", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Purpose
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={travel.purpose}
                        onChange={(e) =>
                          handleTravelChange(index, "purpose", e.target.value)
                        }
                      >
                        <option value="">Select Purpose</option>
                        <option value="Job">Job</option>
                        <option value="Visit">Visit</option>
                        <option value="Study">Study</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={travel.duration}
                        onChange={(e) =>
                          handleTravelChange(index, "duration", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Visa Type
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={travel.visaType}
                        onChange={(e) =>
                          handleTravelChange(index, "visaType", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Remarks
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={travel.remarks}
                        onChange={(e) =>
                          handleTravelChange(index, "remarks", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* 5. Job Preference */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              5. Job Preference
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Position
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.desiredPosition}
                  onChange={(e) =>
                    handleInputChange("desiredPosition", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Countries
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.preferredCountries}
                  onChange={(e) =>
                    handleInputChange("preferredCountries", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Salary
                </label>
                <input
                  type="text"
                  placeholder="e.g., $5000-7000 USD"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.expectedSalary}
                  onChange={(e) =>
                    handleInputChange("expectedSalary", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Industry / Sector
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.preferredIndustry}
                  onChange={(e) =>
                    handleInputChange("preferredIndustry", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Type
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="employmentType"
                      value="Full-Time"
                      checked={formData.employmentType === "Full-Time"}
                      onChange={(e) =>
                        handleInputChange("employmentType", e.target.value)
                      }
                      className="mr-2"
                    />
                    Full-Time
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="employmentType"
                      value="Contract"
                      checked={formData.employmentType === "Contract"}
                      onChange={(e) =>
                        handleInputChange("employmentType", e.target.value)
                      }
                      className="mr-2"
                    />
                    Contract
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="employmentType"
                      value="Project-Based"
                      checked={formData.employmentType === "Project-Based"}
                      onChange={(e) =>
                        handleInputChange("employmentType", e.target.value)
                      }
                      className="mr-2"
                    />
                    Project-Based
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Willing to Relocate?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="willingToRelocate"
                      value="Yes"
                      checked={formData.willingToRelocate === "Yes"}
                      onChange={(e) =>
                        handleInputChange("willingToRelocate", e.target.value)
                      }
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="willingToRelocate"
                      value="No"
                      checked={formData.willingToRelocate === "No"}
                      onChange={(e) =>
                        handleInputChange("willingToRelocate", e.target.value)
                      }
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ready to Join Within (Days)
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.readyToJoinWithin}
                  onChange={(e) =>
                    handleInputChange("readyToJoinWithin", e.target.value)
                  }
                />
              </div>
            </div>
          </Card>

          {/* 6. Skills and Competencies */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              6. Skills and Competencies
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills and Competencies
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
                placeholder="List your technical skills, soft skills, certifications, etc."
              />
            </div>
          </Card>

          {/* 7. Language Proficiency */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              7. Language Proficiency
            </h3>
            <div className="space-y-4">
              {/* English */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  English
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.englishSpeak}
                      onChange={(e) =>
                        handleInputChange("englishSpeak", e.target.checked)
                      }
                      className="mr-2"
                    />
                    Speak
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.englishRead}
                      onChange={(e) =>
                        handleInputChange("englishRead", e.target.checked)
                      }
                      className="mr-2"
                    />
                    Read
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.englishWrite}
                      onChange={(e) =>
                        handleInputChange("englishWrite", e.target.checked)
                      }
                      className="mr-2"
                    />
                    Write
                  </label>
                </div>
              </div>

              {/* Arabic */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Arabic
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.arabicSpeak}
                      onChange={(e) =>
                        handleInputChange("arabicSpeak", e.target.checked)
                      }
                      className="mr-2"
                    />
                    Speak
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.arabicRead}
                      onChange={(e) =>
                        handleInputChange("arabicRead", e.target.checked)
                      }
                      className="mr-2"
                    />
                    Read
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.arabicWrite}
                      onChange={(e) =>
                        handleInputChange("arabicWrite", e.target.checked)
                      }
                      className="mr-2"
                    />
                    Write
                  </label>
                </div>
              </div>

              {/* Chinese */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chinese
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.chineseSpeak}
                      onChange={(e) =>
                        handleInputChange("chineseSpeak", e.target.checked)
                      }
                      className="mr-2"
                    />
                    Speak
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.chineseRead}
                      onChange={(e) =>
                        handleInputChange("chineseRead", e.target.checked)
                      }
                      className="mr-2"
                    />
                    Read
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.chineseWrite}
                      onChange={(e) =>
                        handleInputChange("chineseWrite", e.target.checked)
                      }
                      className="mr-2"
                    />
                    Write
                  </label>
                </div>
              </div>

              {/* Other Language */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Other Language
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Language name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.otherLanguage}
                      onChange={(e) =>
                        handleInputChange("otherLanguage", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.otherSpeak}
                        onChange={(e) =>
                          handleInputChange("otherSpeak", e.target.checked)
                        }
                        className="mr-2"
                      />
                      Speak
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.otherRead}
                        onChange={(e) =>
                          handleInputChange("otherRead", e.target.checked)
                        }
                        className="mr-2"
                      />
                      Read
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.otherWrite}
                        onChange={(e) =>
                          handleInputChange("otherWrite", e.target.checked)
                        }
                        className="mr-2"
                      />
                      Write
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* 8. References */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                8. References (if any)
              </h3>
              <Button
                type="button"
                onClick={addReferenceEntry}
                variant="outline"
                size="sm"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Reference
              </Button>
            </div>
            <div className="space-y-6">
              {references.map((ref, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">
                      Reference #{index + 1}
                    </h4>
                    {references.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeReferenceEntry(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={ref.name}
                        onChange={(e) =>
                          handleReferenceChange(index, "name", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Designation
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={ref.designation}
                        onChange={(e) =>
                          handleReferenceChange(
                            index,
                            "designation",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={ref.organization}
                        onChange={(e) =>
                          handleReferenceChange(
                            index,
                            "organization",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={ref.country}
                        onChange={(e) =>
                          handleReferenceChange(
                            index,
                            "country",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={ref.contact}
                        onChange={(e) =>
                          handleReferenceChange(
                            index,
                            "contact",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* 9. Declaration */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              9. Declaration
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-4">
                  I hereby declare that the information provided above is true
                  and correct to the best of my knowledge. I understand that any
                  false information may lead to rejection of my application.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Signature *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.signature}
                    onChange={(e) =>
                      handleInputChange("signature", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-6 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              <CheckCircle className="w-4 h-4 mr-2" />
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
