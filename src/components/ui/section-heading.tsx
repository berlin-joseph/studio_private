import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className, ...props }) => {
  return (
    <h2
      className={cn(
        "text-3xl sm:text-4xl font-bold text-foreground mb-6 sm:mb-8 relative flex items-center",
        "after:content-[''] after:block after:relative after:top-px after:w-24 sm:after:w-48 after:h-px after:ml-4 after:bg-primary/30", // Adjusted line style
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
