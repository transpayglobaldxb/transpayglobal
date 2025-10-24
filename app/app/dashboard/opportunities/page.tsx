import DashboardLayout from "@/components/layout/DashboardLayout";
import OpportunitiesSection from "@/components/ui/OpportunitiesSection";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Filter, Search, Star, TrendingUp, Users, Clock, Sparkles } from "lucide-react";

export default function OpportunitiesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-secondary-600 animate-glow" />
                <h1 className="text-4xl font-bold text-primary-900 tracking-tight">Opportunities</h1>
              </div>
              <p className="text-primary-700/80 text-lg font-light leading-relaxed">
                Discover and apply to verified opportunities tailored to your
                profile
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center px-6 py-3 bg-white border-2 border-primary-200 rounded-xl text-primary-700 font-semibold hover:bg-primary-50 hover:border-primary-300 hover:-translate-y-1 transition-all duration-300 shadow-soft">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-primary hover:-translate-y-1 transition-all duration-300 shadow-soft">
                <Search className="w-4 h-4 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Total Opportunities
                </p>
                <p className="text-3xl font-bold text-primary-900">24</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">Applied</p>
                <p className="text-3xl font-bold text-primary-900">8</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-green-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">Favorites</p>
                <p className="text-3xl font-bold text-primary-900">12</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Star className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>

          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">Deadlines</p>
                <p className="text-3xl font-bold text-primary-900">3</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Opportunities Section */}
        <OpportunitiesSection />

        {/* Additional Opportunities */}
        <div>
          <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
            All Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This would be populated with more opportunities */}
            <div className="card-luxury p-8 text-center hover:shadow-luxury transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                <TrendingUp className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                More Opportunities Coming Soon
              </h3>
              <p className="text-primary-700/80 font-light mb-6 leading-relaxed">
                We&apos;re constantly adding new verified opportunities. Check
                back regularly!
              </p>
              <button className="w-full py-3 px-4 bg-white border-2 border-primary-200 rounded-xl text-primary-700 font-semibold hover:bg-primary-50 hover:border-primary-300 hover:-translate-y-1 transition-all duration-300">
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
