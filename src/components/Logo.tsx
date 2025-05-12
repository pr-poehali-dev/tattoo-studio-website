
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <div className={cn("flex items-center font-montserrat", className)}>
      <span className={cn("font-bold text-white tracking-tight", sizeClasses[size])}>
        <span className="text-accent-purple">Chernilnyy</span>Style
      </span>
    </div>
  );
};

export default Logo;
