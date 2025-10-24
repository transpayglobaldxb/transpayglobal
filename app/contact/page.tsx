"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import FormInput from "@/components/ui/FormInput";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    value: "support@transpayglobal.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our support team",
    value: "+1 (555) 123-4567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our office",
    value: "123 Business St, City, State 12345",
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "We're here to help",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#213E63] via-[#2A4A6F] to-[#1E3854]">
      {/* Luxurious Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#C4A962]/10 rounded-full blur-[100px] animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#4A90E2]/8 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl mb-6">
            <span className="text-sm font-semibold text-[#C4A962] tracking-luxury">
              We&apos;re Here to Help You Succeed
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              Touch
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Have questions or need assistance? Our support team is ready to help
            you make the most of your TransPay Global membership.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-10 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500 relative overflow-hidden">
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#C4A962]/30 rounded-xl blur-xl"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center border border-[#C4A962]/20">
                    <Send className="w-6 h-6 text-[#C4A962]" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Send us a message
                </h2>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#C4A962]/40 focus:ring-2 focus:ring-[#C4A962]/20 transition-all backdrop-blur-sm placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#C4A962]/40 focus:ring-2 focus:ring-[#C4A962]/20 transition-all backdrop-blur-sm placeholder:text-white/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#C4A962]/40 focus:ring-2 focus:ring-[#C4A962]/20 transition-all backdrop-blur-sm placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#C4A962]/40 focus:ring-2 focus:ring-[#C4A962]/20 transition-all backdrop-blur-sm placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#C4A962]/40 focus:ring-2 focus:ring-[#C4A962]/20 transition-all backdrop-blur-sm">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#C4A962]/40 focus:ring-2 focus:ring-[#C4A962]/20 transition-all backdrop-blur-sm resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-10 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500 relative overflow-hidden">
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div
                            className={`absolute inset-0 ${
                              index % 2 === 0
                                ? "bg-[#C4A962]/20"
                                : "bg-[#4A90E2]/20"
                            } rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                          ></div>
                          <div
                            className={`relative w-14 h-14 rounded-xl ${
                              index % 2 === 0
                                ? "bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10"
                                : "bg-gradient-to-br from-[#4A90E2]/20 to-[#4A90E2]/10"
                            } flex items-center justify-center border ${
                              index % 2 === 0
                                ? "border-[#C4A962]/20"
                                : "border-[#4A90E2]/20"
                            } group-hover:scale-110 transition-transform duration-300`}
                          >
                            <info.icon
                              className={`w-7 h-7 ${
                                index % 2 === 0
                                  ? "text-[#C4A962]"
                                  : "text-[#4A90E2]"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg mb-1">
                          {info.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-2">
                          {info.description}
                        </p>
                        <p className="text-[#C4A962] font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-10 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500 relative overflow-hidden">
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#4A90E2]/30 rounded-xl blur-xl"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-[#4A90E2]/20 to-[#4A90E2]/10 rounded-xl flex items-center justify-center border border-[#4A90E2]/20">
                      <MessageCircle className="w-6 h-6 text-[#4A90E2]" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Quick Response
                  </h2>
                </div>
                <p className="text-white/70 mb-6 font-light leading-relaxed">
                  We typically respond to all inquiries within 24 hours. For
                  urgent matters, please call us directly.
                </p>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-[#C4A962]/30 rounded-2xl p-6">
                  <h3 className="font-bold text-white mb-3 text-lg flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C4A962] animate-pulse"></div>
                    Live Chat Available
                  </h3>
                  <p className="text-white/70 text-sm mb-4 font-light">
                    Chat with our support team in real-time during business
                    hours.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-[#4A90E2] to-[#5A9FE2] text-white hover:shadow-[0_0_30px_rgba(74,144,226,0.4)] font-semibold transition-all duration-300">
                    Start Live Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
