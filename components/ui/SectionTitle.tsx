import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  centered = true,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "text-center max-w-4xl mx-auto",
        !centered && "text-left max-w-none",
        className
      )}
      {...props}
    >
      {subtitle && (
        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
