import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import Link from "next/link";

const Button = ({
  children,
  text,
  className,

  // behavior
  onClick,
  disabled = false,
  loading = false,

  // routing
  as = "button", // "button" | "link" | "a"
  href,

  // design system
  variant = "primary", // primary | outline | ghost | danger
  size = "md", // sm | md | lg

  // icons
  leftIcon,
  rightIcon,

  // animation
  animated = false,
  animatedSpanOne,
  animatedSpanTwo,
}) => {
  // 🎨 VARIANTS
  const variants = {
    primary: "bg-gradient-to-r from-orange-400 to-red-500 text-white",
    outline:
      "border border-orange-400 text-orange-500 hover:bg-orange-50",
    ghost: "text-gray-700 hover:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  // 📏 SIZES
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-full",
    md: "px-5 py-2.5 text-base rounded-full",
    lg: "px-6 py-3 text-lg rounded-full",
  };

  // 🧠 BASE STYLES
  const baseStyles = twMerge(
    clsx(
      "relative inline-flex items-center justify-center",
      "font-medium whitespace-nowrap overflow-hidden",
      "transition-all duration-300 ease-in-out",
      "transform hover:scale-105 active:scale-95",
      "gap-2.5",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      variants[variant],
      sizes[size],
      className
    )
  );

  // ✨ ANIMATION LAYERS
  const animationLayer = animated && (
    <>
      <span
        className={twMerge(
          "absolute inset-0 rounded-full bg-orange-300 opacity-30 animate-bounce",
          animatedSpanOne
        )}
      />
      <span
        className={twMerge(
          "absolute inset-0 rounded-full bg-orange-400 opacity-20 blur-lg scale-110",
          animatedSpanTwo
        )}
      />
    </>
  );

  // 🔘 CONTENT
  const content = (
    <>
      {animationLayer}

      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}

        {children || text}

        {!loading && rightIcon}
      </span>
    </>
  );

  // 🔀 RENDER

  // ✅ Next.js Link
  if (as === "link" && href) {
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  // ✅ External link
  if (as === "a" && href) {
    return (
      <a
        href={href}
        className={baseStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  // ✅ Default button
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={baseStyles}
    >
      {content}
    </button>
  );
};

export default Button;