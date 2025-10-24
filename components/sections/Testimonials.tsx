import SectionTitle from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content:
      "TransPay Global helped me secure a business loan that I couldn't get anywhere else. The process was smooth and the support team was incredible.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content:
      "I've been using their trading platform recommendations for 6 months now. My portfolio has grown by 40% thanks to their verified partners.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    content:
      "The visa service was a lifesaver! They guided me through the entire process and I got my work visa approved in just 3 weeks.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "David Thompson",
    role: "Financial Analyst",
    content:
      "The job opportunities they provide are exclusive and high-quality. I landed my dream job through their network in just 2 months.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Lisa Wang",
    role: "Travel Consultant",
    content:
      "Their hotel booking service saved me hundreds of dollars on my business trips. The hotels are always premium quality.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "James Wilson",
    role: "Entrepreneur",
    content:
      "My credit score improved by 80 points in 6 months using their credit improvement services. Highly recommended!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#1E3854] via-[#213E63] to-[#2A4A6F]">
      {/* Luxurious Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-20 w-[500px] h-[500px] bg-[#C4A962]/10 rounded-full blur-[100px] animate-float"></div>
        <div
          className="absolute bottom-1/4 left-20 w-[600px] h-[600px] bg-[#4A90E2]/8 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl mb-6">
            <span className="text-sm font-semibold text-[#C4A962] tracking-luxury">
              Success Stories
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            What Our Members{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              Say
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Join thousands of satisfied members who have transformed their
            financial lives with TransPay Global.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#C4A962]/30 absolute top-4 right-4 group-hover:text-[#C4A962]/50 transition-colors duration-300" />

                <div className="flex items-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#C4A962]/30 rounded-full blur-md"></div>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="relative w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-[#C4A962]/20 group-hover:ring-[#C4A962]/40 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#C4A962] fill-current"
                    />
                  ))}
                </div>

                <p className="text-white/70 leading-relaxed font-light">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-[#C4A962]/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-white mb-2 group-hover:text-[#C4A962] transition-colors duration-300">
                  10,000+
                </div>
                <div className="text-white/70 font-light">Happy Members</div>
              </div>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-[#C4A962]/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-white mb-2 group-hover:text-[#C4A962] transition-colors duration-300">
                  95%
                </div>
                <div className="text-white/70 font-light">Success Rate</div>
              </div>
            </div>
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-[#C4A962]/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-white mb-2 group-hover:text-[#C4A962] transition-colors duration-300">
                  4.9/5
                </div>
                <div className="text-white/70 font-light">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
