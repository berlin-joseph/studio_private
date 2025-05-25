'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {Github, Linkedin} from 'lucide-react';
import {motion} from 'framer-motion';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/berlin-joseph',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/berlinjoel/',
    icon: Linkedin,
  },
];

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const userEmail = 'l.berlinjoe@hotmail.com';

  // Avoid hydration mismatch for currentYear
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialIconClasses = "h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:-translate-y-0.5";
  const verticalLineClasses = "after:content-[''] after:block after:w-px after:h-20 sm:after:h-24 after:bg-muted-foreground/50 after:mt-4"; // Adjusted height and color

  return (
    <>
      {/* Fixed Social Links (Left) - Only on larger screens now */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }} // Delayed animation
        className="fixed bottom-0 left-4 sm:left-6 lg:left-10 hidden lg:block z-30" // Display only on large screens
      >
          <div className={cn("flex flex-col items-center space-y-5", verticalLineClasses)}>
               {socialLinks.map((link) => (
                 <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                   <link.icon className={cn(socialIconClasses, "h-6 w-6")} /> {/* Slightly larger icon */}
                 </Link>
               ))}
          </div>
      </motion.div>

      {/* Fixed Email Link (Right) - Only on larger screens now */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }} // Delayed animation
        className="fixed bottom-0 right-4 sm:right-6 lg:right-10 hidden lg:block z-30" // Display only on large screens
      >
         <div className={cn("flex flex-col items-center space-y-5", verticalLineClasses)}>
            <a href={`mailto:${userEmail}`} className="writing-mode-vertical-rl rotate-180 text-xs font-mono text-muted-foreground hover:text-primary transition-colors duration-300 tracking-widest transform hover:-translate-y-0.5">
                {userEmail}
            </a>
         </div>
      </motion.div>

      {/* Main Footer Content */}
      <motion.footer
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.8 }} // Slightly delayed fade-in
         className="py-6 text-center text-muted-foreground text-xs sm:text-sm" // Adjusted padding and text size
      >
          {/* Social Icons for smaller screens (optional, if needed) */}
         {/* <div className="mb-4 flex lg:hidden justify-center space-x-6">
           {socialLinks.map((link) => (
             <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
               <link.icon className={socialIconClasses} />
             </Link>
           ))}
         </div> */}

        <p className="font-mono tracking-wide mb-1"> {/* Added tracking */}
          Designed & Built by Berlin Joe L
        </p>
        <p>
          {currentYear !== null ? `© ${currentYear}. All rights reserved.` : '\u00A0' /* Placeholder for year */}
        </p>
      </motion.footer>
    </>
  );
};

export default Footer;
