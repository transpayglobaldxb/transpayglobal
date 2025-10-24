"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { getUserData, logout as apiLogout } from "@/lib/api";
import type { User } from "@/lib/api/types";
import {
  LayoutDashboard,
  User as UserIcon,
  CreditCard,
  FileText,
  Briefcase,
  Settings,
  LogOut,
  Menu,
  X,
  GraduationCap,
  Plane,
  Copy,
  Scale,
  Heart,
} from "lucide-react";

const sidebarNavigation = [
  { name: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { name: "KYC Verification", href: "/app/dashboard/kyc", icon: UserIcon },
  { name: "Copy Trading", href: "/app/dashboard/copytrading", icon: Copy },
  {
    name: "Legal Services",
    href: "/app/dashboard/legal-services",
    icon: Scale,
  },
  {
    name: "Health Services",
    href: "/app/dashboard/health-services",
    icon: Heart,
  },
  {
    name: "Travel & Tourism",
    href: "/app/dashboard/travel-perks",
    icon: Plane,
  },
  {
    name: "Loan & Credit Card",
    href: "/app/dashboard/loans",
    icon: CreditCard,
  },
  { name: "Visa Services", href: "/app/dashboard/visa", icon: FileText },
  { name: "Job Opportunities", href: "/app/dashboard/jobs", icon: Briefcase },
  {
    name: "Scholarships",
    href: "/app/dashboard/scholarships",
    icon: GraduationCap,
  },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const userData = getUserData();
    setUser(userData);
  }, []);

  const handleLogout = () => {
    apiLogout();
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full max-h-screen">
          {/* Mobile close button */}
          <div className="flex items-center justify-end h-16 px-6 border-b lg:hidden flex-shrink-0">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto min-h-0">
            {sidebarNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User section - Fixed at bottom */}
          <div className="border-t p-4 flex-shrink-0">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                <span className="text-primary-700 font-bold text-sm">
                  {user?.fullName
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase() || "U"}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {user?.fullName || "Loading..."}
                </p>
                <p className="text-xs text-gray-500">{user?.email || ""}</p>
              </div>
            </div>
            <div className="space-y-2">
              <Link
                href="/app/dashboard/settings"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors w-full"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6 flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search opportunities..."
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm">
              Notifications
            </Button>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
