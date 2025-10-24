"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Building2, Star, MapPin, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";

const bookings = [
  {
    id: "BOOK-001",
    hotel: "Grand Hotel Plaza",
    location: "New York, NY",
    checkIn: "2024-02-15",
    checkOut: "2024-02-18",
    guests: 2,
    status: "Confirmed",
    price: "$450",
  },
  {
    id: "BOOK-002",
    hotel: "Beach Resort Paradise",
    location: "Miami, FL",
    checkIn: "2024-03-10",
    checkOut: "2024-03-15",
    guests: 4,
    status: "Pending",
    price: "$1,200",
  },
];

const featuredHotels = [
  {
    name: "Luxury Business Hotel",
    location: "San Francisco, CA",
    rating: 4.8,
    price: "$299/night",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
    amenities: ["Free WiFi", "Pool", "Gym", "Restaurant"],
  },
  {
    name: "Boutique City Hotel",
    location: "Chicago, IL",
    rating: 4.6,
    price: "$199/night",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop",
    amenities: ["Free WiFi", "Spa", "Bar", "Room Service"],
  },
  {
    name: "Resort & Spa",
    location: "Las Vegas, NV",
    rating: 4.9,
    price: "$399/night",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    amenities: ["Free WiFi", "Casino", "Pool", "Spa", "Multiple Restaurants"],
  },
];

export default function BookingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-secondary-600 animate-glow" />
            <h1 className="text-4xl font-bold text-primary-900 tracking-tight">Hotel Bookings</h1>
          </div>
          <p className="text-primary-700/80 text-lg font-light leading-relaxed">
            Book premium hotels worldwide at exclusive member rates.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Active Bookings
                </p>
                <p className="text-3xl font-bold text-primary-900">2</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7 text-primary-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">Total Saved</p>
                <p className="text-3xl font-bold text-primary-900">$450</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Star className="w-7 h-7 text-green-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  Member Discount
                </p>
                <p className="text-3xl font-bold text-primary-900">25%</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>
          <div className="card-luxury p-6 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-600 mb-2">Next Stay</p>
                <p className="text-3xl font-bold text-primary-900">Feb 15</p>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7 text-secondary-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Hotels */}
        <div>
          <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
            Featured Hotels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredHotels.map((hotel, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-elegant border border-gray-100/50 hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 overflow-hidden group">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-primary-900 group-hover:text-secondary-700 transition-colors">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-secondary-600 fill-secondary-600" />
                      <span className="text-sm text-primary-700 font-semibold">
                        {hotel.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-primary-700/80 mb-3 font-light">{hotel.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity, amenityIndex) => (
                      <span
                        key={amenityIndex}
                        className="px-3 py-1 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 rounded-lg text-xs font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-secondary-700">
                      {hotel.price}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg text-sm font-semibold hover:shadow-primary hover:-translate-y-1 transition-all duration-300">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking History */}
        <div>
          <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">
            Your Bookings
          </h2>
          <div className="card-luxury p-8 hover:shadow-luxury transition-all duration-500">
            <div className="space-y-4">
              {bookings.map((booking, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-gradient-to-r from-primary-50/30 to-secondary-50/30 rounded-2xl border-2 border-transparent hover:border-primary-200 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-soft">
                      <Building2 className="w-7 h-7 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900">
                        {booking.hotel}
                      </h3>
                      <p className="text-sm text-primary-700/80 font-light">
                        {booking.location}
                      </p>
                      <p className="text-sm text-primary-700/70 font-light">
                        {booking.checkIn} - {booking.checkOut} •{" "}
                        {booking.guests} guests
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                        booking.status === "Confirmed"
                          ? "bg-gradient-to-r from-green-100 to-green-200 text-green-800"
                          : booking.status === "Pending"
                          ? "bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-800"
                          : "bg-gradient-to-r from-red-100 to-red-200 text-red-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                    <p className="text-sm font-bold text-primary-900 mt-2">
                      {booking.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
