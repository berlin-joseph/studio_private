
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
        "text-2xl sm:text-3xl font-semibold text-foreground/95 mb-8 sm:mb-10 relative flex items-center whitespace-nowrap",
        // Decorative line: adjusted thickness and width
        "after:content-[''] after:block after:w-24 sm:after:w-32 after:h-0.5 after:bg-primary after:ml-4 sm:after:ml-5 after:rounded-full", 
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

