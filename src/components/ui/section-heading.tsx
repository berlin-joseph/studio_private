
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
        "text-3xl sm:text-4xl font-bold text-foreground mb-10 sm:mb-12 relative flex items-center whitespace-nowrap", // Increased font size and boldness
        // Decorative line: shorter, thicker, rounded
        "after:content-[''] after:block after:w-16 sm:after:w-24 after:h-1 after:bg-primary after:ml-4 sm:after:ml-6 after:rounded-full", 
        className
      )}
      {...props}
    >
       {/* Optional Section Number */}
       {sectionNumber && (
         <span className="text-primary font-mono text-xl sm:text-2xl mr-2 sm:mr-3"> {/* Adjusted size */}
           {sectionNumber}
         </span>
       )}
      {children}
    </h2>
  );
};

export default SectionHeading;
