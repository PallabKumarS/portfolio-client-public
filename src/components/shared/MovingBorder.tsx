import { cn } from "@/lib/utils";

const MovingGradientBorder = ({
  children,
  className,
  duration = 8,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderWidth?: number;
  duration?: number;
  gradientColors?: string;
}) => {
  return (
    <div
      className={cn("moving-border-wrapper relative p-0.5 group overflow-hidden rounded-3xl")}
      style={{ "--border-duration": `${duration}s` } as React.CSSProperties}
    >
      {/* Pure CSS conic-gradient border — GPU composited, zero JS overhead */}
      <div className="moving-border-gradient absolute inset-0 z-0" />
      <div className="moving-border-gradient absolute inset-0 z-0 opacity-50 blur-sm" />

      {/* Content container */}
      <div
        className={cn(
          "relative z-10 bg-background rounded-[calc(1.5rem-2px)] h-full w-full",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default MovingGradientBorder;
