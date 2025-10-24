"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { getUserData, isAuthenticated } from "@/lib/api";
import type { User } from "@/lib/api/types";
import {
  Plane,
  Hotel,
  Palmtree,
  Star,
  CheckCircle,
  Shield,
  CreditCard,
  Sparkles,
  Award,
  Clock,
  Tag,
  AlertTriangle,
} from "lucide-react";

export default function TravelPerksPage() {
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

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <Palmtree className="w-6 h-6 text-secondary-700" />
            </div>
            <h1 className="text-4xl font-bold text-primary-900 tracking-tight">
              TransPay Global — Travel Perks
            </h1>
          </div>
          <p className="text-primary-700/80 text-2xl font-light mb-4">
            Fly smarter. Stay better. Save up to 50%.
          </p>
          <p className="text-primary-700/80 text-lg font-light">
            Exclusive hotel bookings, air tickets, and VVIP airport lounge
            access—all at TransPay Global member rates.
          </p>
        </div>

        {/* Quick Value Highlights */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <Sparkles className="w-6 h-6 text-secondary-700" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              Quick Value Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hotels */}
            <div className="bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-2xl p-6 border-l-4 border-secondary-500">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Hotel className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Hotels
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Up to 50% off on selected properties and dates
                  </p>
                </div>
              </div>
            </div>

            {/* Flights */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-6 border-l-4 border-primary-500">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Plane className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Flights
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Special member fares & promo codes on global carriers
                  </p>
                </div>
              </div>
            </div>

            {/* VVIP Lounges */}
            <div className="bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-2xl p-6 border-l-4 border-secondary-500">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    VVIP Lounges
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Complimentary or discounted entry via partner network
                  </p>
                </div>
              </div>
            </div>

            {/* 24/7 Concierge */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-6 border-l-4 border-primary-500">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    24/7 Concierge
                  </h3>
                  <p className="text-sm text-primary-700/80 font-light">
                    Real-time support for changes, cancellations, and upgrades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-6 border-l-4 border-primary-500">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-bold">■</span>
            </div>
            <h2 className="text-xl font-bold text-primary-900">How It Works</h2>
          </div>
          <div className="ml-9 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                1.
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Search & Compare
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  Find flights/hotels inside TransPay Global.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                2.
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Unlock Discounts
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  Sign in and apply Member Price or TPG code at checkout.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                3.
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Confirm & Pay
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  Pay via card/crypto/wallet and get instant e-tickets &
                  vouchers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-700 font-bold flex-shrink-0">
                4.
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Lounge Access
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  Show your in-app Lounge QR/Pass at participating lounges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft">
              <Award className="w-6 h-6 text-secondary-700" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 tracking-tight">
              Membership Tiers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Silver Tier */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 border-2 border-gray-300 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900">
                  Silver (Free)
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-700/80 font-light">
                    Up to 10% hotel discount
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-700/80 font-light">
                    Promo fares
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-700/80 font-light">
                    Pay-per-use lounge access
                  </p>
                </div>
              </div>
            </div>

            {/* Gold Tier */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-400 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900">Gold</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-700/80 font-light">
                    Up to 30% hotel discount
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-700/80 font-light">
                    Extra flight promo codes
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-700/80 font-light">
                    2 lounge visits/year included
                  </p>
                </div>
              </div>
            </div>

            {/* Platinum Tier */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-400 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900">Platinum</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-700/80 font-light">
                    Up to 50% hotel discount
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-700/80 font-light">
                    Premium flight deals
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-700/80 font-light">
                    Multiple VVIP lounge visits/month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Promotions */}
        <div className="bg-gradient-to-r from-secondary-50 to-secondary-100/50 rounded-2xl p-6 border-l-4 border-secondary-500">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-6 h-6 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Tag className="w-3 h-3 text-white" />
            </div>
            <h2 className="text-xl font-bold text-primary-900">
              Sample Promotions
            </h2>
          </div>
          <div className="ml-9 space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-secondary-700 font-bold flex-shrink-0">
                1.
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Weekend Flash Sale
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  Dubai ✈ Istanbul — Members save extra at checkout.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-secondary-700 font-bold flex-shrink-0">
                2.
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  City Stays under AED 299
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  Member-only hotel deals live now.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-secondary-700 font-bold flex-shrink-0">
                3.
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-900 mb-1">
                  Free Lounge Visit with Platinum
                </p>
                <p className="text-sm text-primary-700/80 font-light">
                  Activate in your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200/50 rounded-2xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-3 h-3 text-white" />
            </div>
            <h2 className="text-xl font-bold text-primary-900">
              Terms & Conditions
            </h2>
          </div>
          <div className="ml-9 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-red-700 font-bold flex-shrink-0">1.</span>
              <p className="text-sm text-primary-700/80 font-light">
                Discounts are dynamic and depend on availability, room type, and
                travel dates.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-700 font-bold flex-shrink-0">2.</span>
              <p className="text-sm text-primary-700/80 font-light">
                &apos;Up to 50%&apos; applies to selected hotels and dates;
                typical savings may vary.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-700 font-bold flex-shrink-0">3.</span>
              <p className="text-sm text-primary-700/80 font-light">
                Flight deals may exclude taxes/fees and cannot be combined with
                other promotions.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-700 font-bold flex-shrink-0">4.</span>
              <p className="text-sm text-primary-700/80 font-light">
                Lounge access via partner networks; capacity or time limits may
                apply.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-700 font-bold flex-shrink-0">5.</span>
              <p className="text-sm text-primary-700/80 font-light">
                TransPay Global acts as an intermediary; services are provided
                by partners.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-700 font-bold flex-shrink-0">6.</span>
              <p className="text-sm text-primary-700/80 font-light">
                Misuse (e.g., resale of codes/passes) may lead to suspension of
                benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
