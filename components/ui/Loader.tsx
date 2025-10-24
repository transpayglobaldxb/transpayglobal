import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "dots" | "pulse";
}

export default function Loader({
  size = "md",
  variant = "spinner",
  className,
  ...props
}: LoaderProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  if (variant === "spinner") {
    return (
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-gray-300 border-t-primary",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex space-x-1", className)} {...props}>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
        <div
          className="w-2 h-2 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        />
        <div
          className="w-2 h-2 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        />
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div
        className={cn(
          "bg-primary rounded-full animate-pulse",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }

  return null;
}
