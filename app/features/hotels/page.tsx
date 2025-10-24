import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import {
  Building2,
  Star,
  MapPin,
  Clock,
  Award,
  DollarSign,
  ArrowRight,
  Globe,
} from "lucide-react";

const hotelFeatures = [
  {
    icon: Building2,
    title: "Premium Hotels",
    description:
      "Access to luxury and premium hotel chains worldwide at discounted rates up to 50% off.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description:
      "Real guest reviews and ratings to help you choose the perfect stay with confidence.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description:
      "Hotels in the best locations with easy access to attractions and business centers.",
    gradient: "from-primary-100 to-primary-200",
    iconColor: "text-primary-700",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support for all your booking needs and inquiries.",
    gradient: "from-secondary-100 to-secondary-200",
    iconColor: "text-secondary-700",
  },
];

const perks = [
  { title: "Best Price Guarantee", icon: DollarSign, desc: "Up to 50% off" },
  { title: "Global Coverage", icon: Globe, desc: "1M+ hotels" },
  { title: "Loyalty Rewards", icon: Award, desc: "Earn points" },
  { title: "Instant Booking", icon: Star, desc: "Confirmed immediately" },
];

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-secondary-200/15 to-transparent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-200/15 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <SectionTitle
          title="Hotel Bookings"
          subtitle="Find the Perfect Stay for Your Travels"
          description="Book premium hotels worldwide at exclusive member rates with our verified partners and enjoy luxurious stays."
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {hotelFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-elegant border border-gray-100/50 p-8 text-center hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft`}
              >
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-700/80 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Perks Section */}
        <div className="mt-20 card-luxury p-12 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Member Benefits
            </h2>
            <p className="text-xl text-primary-700/80 font-light">
              Exclusive perks and savings on every booking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 text-center hover:shadow-primary hover:scale-105 transition-all duration-300 border border-primary-200/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <perk.icon className="w-7 h-7 text-primary-700" />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-primary-700 font-semibold">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card-luxury max-w-4xl mx-auto p-12 hover:shadow-luxury transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center">
                <Building2 className="w-10 h-10 text-secondary-700" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-primary-900 mb-4 tracking-tight">
              Ready to Book Your Stay?
            </h2>
            <p className="text-xl text-primary-700/80 mb-8 font-light leading-relaxed">
              Search and book from thousands of verified hotels worldwide with
              exclusive member rates and premium benefits.
            </p>
            <Button size="lg" className="btn-secondary group">
              Search Hotels
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
