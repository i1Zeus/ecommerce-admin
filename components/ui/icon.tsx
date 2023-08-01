import { cn } from "@/lib/utils";

interface IconProps {
  icon: any;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon, className }) => {
  return <div className={cn("p-0 m-0", className)}>{icon}</div>;
};

export default Icon;
