"use client";

interface Props {
  title: string;
  subtitle: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function PageHeader({
  title,
  subtitle,
  buttonText,
  onClick,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div>

        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        <p className="mt-2 text-gray-500">
          {subtitle}
        </p>

      </div>

      {buttonText && (

        <button
          onClick={onClick}
          className="rounded-2xl bg-black px-6 py-3 font-semibold text-white hover:opacity-90"
        >
          {buttonText}
        </button>

      )}

    </div>
  );
}