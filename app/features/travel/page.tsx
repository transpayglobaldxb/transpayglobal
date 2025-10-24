"use client";

import {
  Plane,
  Hotel,
  Palmtree,
  MapPin,
  Calendar,
  Shield,
  Star,
  CheckCircle,
  Users,
  Award,
  ArrowRight,
  Globe,
  Ticket,
  Briefcase,
  Sparkles,
  Car,
  FileText,
} from "lucide-react";
import Link from "next/link";

const travelServices = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description:
      "Best deals on domestic and international flights with flexible cancellation",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description:
      "Up to 50% off on selected properties worldwide with instant confirmation",
  },
  {
    icon: Palmtree,
    title: "Tour Packages",
    description:
      "Curated vacation packages including flights, hotels, and activities",
  },
  {
    icon: Ticket,
    title: "Airport Lounge Access",
    description:
      "VVIP lounge access at major airports worldwide with premium amenities",
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description:
      "Professional visa processing and documentation support for all countries",
  },
  {
    icon: Car,
    title: "Car Rentals",
    description:
      "Convenient car rental services at your destination with competitive rates",
  },
  {
    icon: Briefcase,
    title: "Business Travel",
    description: "Corporate travel solutions with dedicated account management",
  },
  {
    icon: MapPin,
    title: "Travel Insurance",
    description: "Comprehensive travel insurance coverage for peace of mind",
  },
];

const features = [
  {
    icon: Star,
    title: "Best Price Guarantee",
    description: "We match and beat competitor prices on all travel bookings",
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Safe and encrypted payment processing for all transactions",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock customer support for your travel needs",
  },
  {
    icon: Award,
    title: "Member Rewards",
    description: "Earn points on every booking for exclusive travel perks",
  },
];

const benefits = [
  {
    icon: Plane,
    title: "Discounted Flights",
    description: "Save up to 40% on flight tickets with exclusive member rates",
  },
  {
    icon: Hotel,
    title: "Hotel Deals",
    description: "Up to 50% off on hotels with free cancellation options",
  },
  {
    icon: Ticket,
    title: "Lounge Access",
    description: "Complimentary airport lounge access for premium members",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Travel services available in 190+ countries worldwide",
  },
  {
    icon: Calendar,
    title: "Flexible Booking",
    description: "Easy date changes and flexible cancellation policies",
  },
  {
    icon: CheckCircle,
    title: "Instant Confirmation",
    description: "Immediate booking confirmation and e-tickets",
  },
];

const stats = [
  { number: "190+", label: "Countries" },
  { number: "100K+", label: "Hotels" },
  { number: "500+", label: "Airlines" },
  { number: "50%", label: "Max Discount" },
];

const membershipTiers = [
  {
    name: "Silver",
    discount: "10-20%",
    features: [
      "Flight & hotel discounts",
      "Priority customer support",
      "Travel insurance options",
      "Basic lounge access",
    ],
  },
  {
    name: "Gold",
    discount: "20-35%",
    features: [
      "Higher discount rates",
      "Free airport lounge access",
      "Complimentary travel insurance",
      "Flexible cancellation",
      "Dedicated travel consultant",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    discount: "35-50%",
    features: [
      "Maximum savings",
      "VVIP lounge access worldwide",
      "Premium travel insurance",
      "Free date changes",
      "Personal concierge service",
      "Exclusive tour packages",
    ],
  },
];

export default function TravelPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#213E63] via-[#2A4A6F] to-[#1E3854]">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#C4A962]/10 rounded-full blur-[100px] animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#4A90E2]/8 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#C4A962]/8 rounded-full blur-[90px] animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-[#C4A962]/30 shadow-2xl mb-6">
            <Palmtree className="w-4 h-4 text-[#C4A962]" />
            <span className="text-sm font-semibold text-[#C4A962] tracking-luxury">
              Best Deals
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Travel &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] via-[#D4B972] to-[#C4A962]">
              Tourism
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive travel solutions including flight bookings, hotel
            reservations, tour packages, and visa assistance worldwide. Fly
            smarter. Stay better. Save up to 50%.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#C4A962] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/70 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Why Book{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                With Us
              </span>
            </h2>
            <p className="text-lg text-white/80 font-light">
              Exclusive benefits for TransPay Global members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#C4A962]/50 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center mb-4 border border-[#C4A962]/20">
                    <Icon className="w-7 h-7 text-[#C4A962]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Travel Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Complete Travel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-white/80 font-light">
              Everything you need for a perfect journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#C4A962]/50 hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-[#C4A962]/20 rounded-xl blur-xl group-hover:bg-[#C4A962]/30 transition-all duration-500"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center border border-[#C4A962]/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-[#C4A962]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Member{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-white/80 font-light">
              Exclusive perks for our valued members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#C4A962]/20 to-[#C4A962]/10 rounded-xl flex items-center justify-center mb-4 border border-[#C4A962]/20">
                  <benefit.icon className="w-6 h-6 text-[#C4A962]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Membership{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Tiers
              </span>
            </h2>
            <p className="text-lg text-white/80 font-light">
              Choose the plan that fits your travel needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-xl rounded-2xl p-8 border ${
                  tier.popular
                    ? "border-[#C4A962] ring-4 ring-[#C4A962]/20 scale-105"
                    : "border-white/10"
                } hover:border-[#C4A962]/50 transition-all duration-500`}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white px-4 py-2 rounded-full text-sm font-bold inline-flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4" fill="currentColor" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold text-[#C4A962] mb-6">
                  {tier.discount}
                  <span className="text-lg text-white/60 font-light">
                    {" "}
                    discount
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#C4A962] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm font-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={
                    tier.popular
                      ? "w-full bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] py-3 rounded-xl font-bold transition-all duration-300"
                      : "w-full bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 py-3 rounded-xl font-bold transition-all duration-300"
                  }
                >
                  Select {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/5 via-transparent to-[#4A90E2]/5 opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A962] to-[#D4B972]">
                Explore the World?
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Start planning your next adventure with exclusive member rates and
              premium travel benefits. Book flights, hotels, and more today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <button className="bg-gradient-to-r from-[#C4A962] to-[#D4B972] text-white hover:shadow-[0_0_40px_rgba(196,169,98,0.5)] px-12 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group inline-flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Booking Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 px-12 py-4 rounded-2xl font-bold transition-all duration-300 inline-flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Browse Destinations
                </button>
              </Link>
            </div>
            <p className="text-white/60 text-sm mt-6">
              Best Price Guarantee • Instant Confirmation • 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
