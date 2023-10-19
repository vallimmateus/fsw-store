import { ArrowDownIcon } from "lucide-react";
import { Badge, BadgeProps } from "./badge";
import { cn } from "@/lib/utils";

const DiscountBadge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <Badge className={cn("px-2 py-0.5", className)} {...props}>
      <ArrowDownIcon size={14} />
      {children}%
    </Badge>
  );
};

export default DiscountBadge;
