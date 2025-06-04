
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {Github, Linkedin, Mail, Code} from 'lucide-react'; // Added Mail and Code
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
  {
    name: 'Email',
    url: 'mailto:l.berlinjoe@hotmail.com',
    icon: Mail,
  }
];

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const userEmail = 'l.berlinjoe@hotmail.com';

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialIconClasses = "h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110";
  const verticalLineClasses = "after:content-[''] after:block after:w-px after:h-20 sm:after:h-24 after:bg-border after:mt-4"; // Adjusted height and color

  return (
    <>
      {/* Fixed Social Links (Left) - Only on larger screens now */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }} // Slightly increased delay
        className="fixed bottom-0 left-6 sm:left-8 lg:left-10 hidden lg:flex flex-col items-center z-30" // Use flex
      >
          <div className={cn("flex flex-col items-center space-y-5", verticalLineClasses)}>
               {socialLinks.map((link) => (
                 <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                   <link.icon className={cn(socialIconClasses, "h-[22px] w-[22px]")} /> {/* Consistent size */}
                 </Link>
               ))}
          </div>
      </motion.div>

      {/* Fixed Email Link (Right) - Only on larger screens now */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }} // Slightly increased delay
        className="fixed bottom-0 right-6 sm:right-8 lg:right-10 hidden lg:flex flex-col items-center z-30" // Use flex
      >
         <div className={cn("flex flex-col items-center", verticalLineClasses)}> {/* Removed space-y-5 for single element */}
            <a href={`mailto:${userEmail}`} className="writing-mode-vertical-rl rotate-180 text-xs font-mono text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider hover:-translate-y-1 my-5">
                {userEmail}
            </a>
         </div>
      </motion.div>

      {/* Main Footer Content */}
      <motion.footer
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5, delay: 1.0 }} // Slightly delayed fade-in
         className="py-8 text-center text-muted-foreground text-xs" // Adjusted padding and text size
      >
          {/* Social Icons for smaller screens (visible on lg:hidden) */}
         <div className="mb-4 flex lg:hidden justify-center space-x-6">
           {socialLinks.map((link) => (
             <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
               <link.icon className={cn(socialIconClasses, "h-6 w-6")} />
             </Link>
           ))}
         </div>

        <div className="font-mono tracking-wide mb-2 flex items-center justify-center gap-2"> {/* Added tracking */}
          <Code className="h-4 w-4 text-primary/70" />
          <span>Designed & Built by Berlin Joe L</span>
        </div>
        <p>
          {currentYear !== null ? `© ${currentYear}. All rights reserved.` : '\u00A0' /* Placeholder for year */}
        </p>
      </motion.footer>
    </>
  );
};

export default Footer;
