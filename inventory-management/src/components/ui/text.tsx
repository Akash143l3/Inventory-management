import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define the variants using CVA
const textVariants = cva("text-base", {
  variants: {
    variant: {
      default: "text-gray-800",
      heading: "text-3xl font-bold text-gray-900",
      subheading: "text-xl text-gray-600",
      muted: "text-gray-500",
      link: "text-blue-600 hover:underline",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
      medium: "font-medium",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "medium",
    weight: "normal",
  },
});

// Component Props with Variants
interface TextProps extends VariantProps<typeof textVariants> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  className,
  variant,
  size,
  weight,
  as = "p",
  children,
  ...props
}) => {
  const Component = as;
  return (
    <Component
      className={cn(textVariants({ variant, size, weight }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
