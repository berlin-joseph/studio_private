import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  /** Optional section number, e.g., "01." */
  sectionNumber?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, sectionNumber, className, ...props }) => {
  return (
    <h2
      className={cn(
        // Base styling
        "text-2xl sm:text-3xl font-semibold text-foreground/95 mb-8 sm:mb-10 relative flex items-center whitespace-nowrap", // Adjusted font size/weight, margins, added whitespace-nowrap
        // Decorative line
        "after:content-[''] after:block after:relative after:top-px after:w-full after:max-w-xs after:sm:max-w-sm after:h-px after:ml-4 after:bg-primary/30", // Adjusted line style and length
        className
      )}
      {...props}
    >
       {/* Optional Section Number */}
       {sectionNumber && (
         <span className="text-primary font-mono text-xl sm:text-2xl mr-2 sm:mr-3">
           {sectionNumber}
         </span>
       )}
      {children}
    </h2>
  );
};

export default SectionHeading;
