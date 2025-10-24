import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const faqs = [
  {
    question: "What is TransPay Global?",
    answer:
      "TransPay Global is a membership platform that provides access to verified financial opportunities including loans, trading, visa services, job placements, hotel bookings, and credit improvement services. For a one-time fee of $5, members get lifetime access to our curated network of trusted partners.",
  },
  {
    question: "How much does it cost to join?",
    answer:
      "Membership costs just $5 one-time payment. There are no monthly fees or hidden charges. This gives you lifetime access to all our services and opportunities.",
  },
  {
    question: "Are all the opportunities verified?",
    answer:
      "Yes, every partner and opportunity on our platform goes through a rigorous verification process. We check credentials, licenses, and track records to ensure our members only interact with legitimate, trustworthy service providers.",
  },
  {
    question: "What if I need help with an opportunity?",
    answer:
      "Our customer support team is available 24/7 to help you with any questions or issues. We also provide guidance and resources to help you make the most of every opportunity.",
  },
  {
    question: "Can I cancel my membership?",
    answer:
      "Since our membership is a one-time payment, there's no need to cancel. However, if you're not satisfied with our services within the first 30 days, we offer a full refund guarantee.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up with your email and basic information, complete the $5 payment, and you'll immediately gain access to your personalized dashboard with all available opportunities.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. We use bank-level encryption and security measures to protect your data. We never share your personal information with third parties without your explicit consent.",
  },
  {
    question: "What types of opportunities are available?",
    answer:
      "We offer opportunities in six main categories: trading and investments, personal and business loans, visa and immigration services, job placements and career opportunities, hotel bookings and travel, and credit score improvement services.",
  },
];

export default function FAQPage() {
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
              Everything You Need to Know
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              Questions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Find answers to common questions about our services, membership, and
            how to get the most out of your TransPay Global experience.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500"
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-[#C4A962]/30 rounded-xl blur-lg group-open:blur-xl transition-all"></div>
                        <div className="relative w-10 h-10 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center border border-[#C4A962]/20 group-open:scale-110 transition-transform duration-300">
                          <HelpCircle className="w-5 h-5 text-[#C4A962]" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white group-open:text-[#C4A962] transition-colors pt-1">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown className="w-6 h-6 text-white/60 group-open:rotate-180 group-open:text-[#C4A962] transition-all duration-300 flex-shrink-0 ml-4" />
                  </summary>
                  <div className="mt-4 ml-14 text-white/70 leading-relaxed font-light animate-slide-up">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-10 hover:bg-white/10 hover:border-[#C4A962]/40 hover:shadow-[0_0_40px_rgba(196,169,98,0.2)] transition-all duration-500 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#4A90E2]/30 rounded-2xl blur-xl"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#4A90E2]/20 to-[#4A90E2]/10 rounded-2xl flex items-center justify-center border border-[#4A90E2]/20">
                    <MessageCircle className="w-8 h-8 text-[#4A90E2]" />
                  </div>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Still have{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                  questions?
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-8 font-light leading-relaxed">
                Our support team is here to help. Contact us anytime for
                personalized assistance and expert guidance.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-12 py-6 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
