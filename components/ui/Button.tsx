"use client";

import { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "danger"
  | "success";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  leftIcon,
  rightIcon,
}: Props) {
  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-black text-white hover:bg-neutral-800",

    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200",

    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100",

    outline:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",

    danger:
      "bg-red-500 text-white hover:bg-red-600",

    success:
      "bg-emerald-500 text-white hover:bg-emerald-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-5
        py-3
        font-semibold
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${styles[variant]}
        ${className}
      `}
    >
      {leftIcon && (
        <span className="flex items-center">
          {leftIcon}
        </span>
      )}

      <span>{children}</span>

      {rightIcon && (
        <span className="flex items-center">
          {rightIcon}
        </span>
      )}
    </button>
  );
}