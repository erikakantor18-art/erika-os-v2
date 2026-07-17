import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-[32px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}