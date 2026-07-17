import { cn } from "@/lib/utils";

type InputProps = {
  label?: string;

  placeholder?: string;

  value?: string;

  type?: string;

  helperText?: string;

  error?: string;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;

  className?: string;

  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function Input({
  label,

  placeholder,

  value,

  type = "text",

  helperText,

  error,

  leftIcon,

  rightIcon,

  className,

  onChange,
}: InputProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}

      <div
        className={cn(
          "flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 transition-all duration-300",

          error
            ? "border-red-500"
            : "border-slate-200 focus-within:border-emerald-500"
        )}
      >
        {leftIcon}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent outline-none placeholder:text-slate-400"
        />

        {rightIcon}
      </div>

      {error ? (
        <p className="text-sm text-red-500">
          {error}
        </p>
      ) : (
        helperText && (
          <p className="text-sm text-slate-500">
            {helperText}
          </p>
        )
      )}
    </div>
  );
}