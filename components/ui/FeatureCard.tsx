import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color?: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  href,
  color = "from-primary to-secondary",
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Link href={href}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
          className
        )}
        {...props}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        <div className="relative z-10">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${color} mb-6`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

          <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
            Learn More
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
