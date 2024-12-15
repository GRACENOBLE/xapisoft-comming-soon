import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight, ChevronRight } from "lucide-react"; // Import your arrow icon
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-sm font-sm border border-dark place-items-center w-fit group relative",
  {
    variants: {
      variant: {
        default:
          "text-dark border border-dark rounded-full text-sm font-medium hover:bg-primary-100/20 hover:border-primary-100 hover:text-primary-100",
        light2:
          "text-white border border-white rounded-full text-sm font-medium hover:bg-primary-100/20 hover:border-primary-100 hover:text-primary-100",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        light:
          "text-white hover:bg-primary-100 border border-white hover:border-primary-100 rounded-full text-sm font-medium ",
        dark: "text-dark hover:text-white hover:bg-primary-100 border border-dark hover:border-primary-100 rounded-full text-sm font-medium",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: " h-fit px-5 py-3",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-fit px-6 py-4",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <ArrowRight
          className="text-primary-100 group-hover:scale-0 transition-all duration-300 origin-left"
          size={18}
        />
        <span
          className={cn(
            "transition-transform duration-300 group-hover:-translate-x-6 group-hover:text-white",
            variant === "light" || variant === "dark"
              ? "group-hover:text-white"
              : "group-hover:text-primary-100"
          )}
        >
          {children}
        </span>
        <ArrowRight
          className={cn(
            "scale-0 right-6 group-hover:scale-100 transition-all duration-300 origin-right absolute",
            variant === "light" || variant === "dark"
              ? "text-white"
              : "text-primary-100"
          )}
          size={18}
        />
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
