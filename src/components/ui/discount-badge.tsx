import { ArrowDownIcon } from "lucide-react";
import { Badge, BadgeProps } from "./badge";
import { cn } from "@/lib/utils";

const DiscountBadge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <Badge
      className={cn("absolute left-3 top-3 px-2 py-0.5", className)}
      {...props}
    >
      <ArrowDownIcon size={14} />
      {children}%
    </Badge>
  );
};

export default DiscountBadge;
