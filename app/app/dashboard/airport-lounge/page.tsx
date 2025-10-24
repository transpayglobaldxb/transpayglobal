"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Plane,
  Globe,
  Wifi,
  Coffee,
  Briefcase,
  CreditCard,
  Shield,
  Gift,
  MapPin,
  Clock,
  Users,
  Sparkles,
  CheckCircle,
  Star,
  Smartphone,
  Headphones,
  Utensils,
  Bath,
  Video,
  Printer,
  Bell,
  Award,
  ShoppingBag,
  Calendar,
  Lock,
  Zap,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Priority Access & Global Coverage",
    icon: Globe,
    color: "from-blue-100 to-blue-200",
    iconColor: "text-blue-700",
    items: [
      "Complimentary access to 1,300+ airport lounges worldwide",
      "Partnership with Priority Pass, LoungeKey, and DragonPass networks",
      "Instant QR-based entry via TransPay Global App",
      "Access available in 150+ countries across 400+ major airports",
    ],
  },
  {
    id: 2,
    title: "Luxury & Comfort Amenities",
    icon: Star,
    color: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
    items: [
      "Comfortable seating zones, quiet pods, and private rest areas",
      "High-speed Wi-Fi, workstations, and charging ports",
      "Fine dining & buffet meals with local and international cuisines",
      "Premium beverages including coffee, mocktails, and soft drinks",
      "Shower suites, spa services, and nap rooms in selected lounges",
    ],
  },
  {
    id: 3,
    title: "Business & Productivity Support",
    icon: Briefcase,
    color: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
    items: [
      "Access to private meeting rooms and video-conference facilities",
      "Complimentary printing, scanning, and fax services",
      "Dedicated concierge and travel assistance desk",
      "Flight tracking and boarding alerts integrated in TransPay Global App",
    ],
  },
  {
    id: 4,
    title: "Seamless Membership Integration",
    icon: CreditCard,
    color: "from-purple-100 to-purple-200",
    iconColor: "text-purple-700",
    items: [
      "Lounge access linked directly to your TransPay Global Virtual Card",
      "No need for separate passes — scan the app QR for instant entry",
      "Tier-based privileges: Silver (2 complimentary visits/year), Gold (unlimited visits), Platinum Elite (unlimited + 1 guest per visit)",
    ],
  },
  {
    id: 5,
    title: "Travel Convenience Add-ons",
    icon: Plane,
    color: "from-green-100 to-green-200",
    iconColor: "text-green-700",
    items: [
      "Fast-Track Security & Immigration at partner airports",
      "Complimentary baggage handling and port assistance",
      "Hotel booking desk and chauffeur transfer options for members",
      "Medical lounge support and tele-health consultation access through the app",
    ],
  },
  {
    id: 6,
    title: "Smart App Integration",
    icon: Smartphone,
    color: "from-teal-100 to-teal-200",
    iconColor: "text-teal-700",
    items: [
      "Lounge locator with map navigation in the TransPay Global App",
      "Pre-booking and real-time occupancy status",
      "Digital receipts and spending insights synced with your wallet",
      "Option to redeem loyalty points or crypto tokens for lounge access",
    ],
  },
  {
    id: 7,
    title: "Premium Security & Privacy",
    icon: Shield,
    color: "from-red-100 to-red-200",
    iconColor: "text-red-700",
    items: [
      "Biometric verification for secure entry",
      "Encrypted digital passes (no physical card data exposure)",
      "Global insurance coverage for travel and belongings",
    ],
  },
  {
    id: 8,
    title: "Exclusive Member Rewards",
    icon: Gift,
    color: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
    items: [
      "Earn cashback or loyalty tokens on every lounge visit",
      "Special airport retail discounts up to 25%",
      "Invitations to VIP travel events, co-working spaces, and networking lounges",
    ],
  },
];

const quickStats = [
  {
    label: "Global Lounges",
    value: "1,300+",
    icon: MapPin,
    color: "from-primary-100 to-primary-200",
  },
  {
    label: "Countries",
    value: "150+",
    icon: Globe,
    color: "from-green-100 to-green-200",
  },
  {
    label: "Major Airports",
    value: "400+",
    icon: Plane,
    color: "from-secondary-100 to-secondary-200",
  },
  {
    label: "Your Visits",
    value: "0",
    icon: Users,
    color: "from-purple-100 to-purple-200",
  },
];

const membershipTiers = [
  {
    name: "Silver",
    price: "Included",
    color: "from-gray-100 to-gray-200",
    textColor: "text-gray-700",
    features: [
      "2 complimentary visits per year",
      "Access to 1,300+ lounges",
      "Basic amenities included",
      "Mobile app access",
    ],
  },
  {
    name: "Gold",
    price: "$199/year",
    color: "from-secondary-100 to-secondary-200",
    textColor: "text-secondary-700",
    popular: true,
    features: [
      "Unlimited lounge visits",
      "Priority security fast-track",
      "Premium dining & beverages",
      "Business center access",
      "Spa services at select locations",
    ],
  },
  {
    name: "Platinum Elite",
    price: "$499/year",
    color: "from-primary-100 to-primary-200",
    textColor: "text-primary-700",
    features: [
      "All Gold benefits",
      "Bring 1 guest per visit",
      "Private meeting rooms",
      "Chauffeur transfer credits",
      "VIP concierge 24/7",
      "Airport retail discounts",
    ],
  },
];

export default function AirportLoungePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-secondary-600 animate-glow" />
            <h1 className="text-4xl font-bold text-primary-900 tracking-tight">
              VIP Airport Lounge Access
            </h1>
          </div>
          <p className="text-primary-700/80 text-lg font-light leading-relaxed">
            Experience luxury travel with complimentary access to 1,300+ airport lounges worldwide
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-primary-600 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-primary-900">{stat.value}</p>
                </div>
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="w-7 h-7 text-primary-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Membership Tiers */}
        <div>
          <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
            Membership Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-elegant border-2 ${
                  tier.popular ? "border-secondary-300" : "border-gray-100/50"
                } p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 relative overflow-hidden`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white px-4 py-1 text-xs font-bold rounded-bl-xl">
                    POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft`}
                  >
                    <Award className={`w-8 h-8 ${tier.textColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-3xl font-bold text-secondary-700">
                    {tier.price}
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-primary-700/80 font-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    tier.popular
                      ? "bg-gradient-to-r from-secondary-600 to-secondary-700 text-white hover:shadow-luxury hover:-translate-y-1"
                      : "bg-white border-2 border-primary-200 text-primary-700 hover:bg-primary-50"
                  }`}
                >
                  {tier.popular ? "Upgrade Now" : "Select Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
            Premium Features & Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-900 mb-2">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary-600 flex-shrink-0 mt-2" />
                      <span className="text-sm text-primary-700/80 font-light leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="card-luxury p-8 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 hover:shadow-luxury transition-all duration-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-2">
                Ready to Travel in Style?
              </h3>
              <p className="text-primary-700/80 font-light">
                Upgrade your membership today and enjoy unlimited lounge access worldwide
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-white border-2 border-primary-200 rounded-xl text-primary-700 font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 whitespace-nowrap">
                Learn More
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-primary hover:-translate-y-1 transition-all duration-300 whitespace-nowrap inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

