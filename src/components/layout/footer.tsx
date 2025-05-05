'use client';
import React from 'react';
import Link from 'next/link';
import {Github, Linkedin, Twitter} from 'lucide-react'; // Assuming Twitter icon usage
import {motion} from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/berlin-joseph',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: '#', // Add LinkedIn URL
    icon: Linkedin,
  },
   {
    name: 'Twitter',
    url: '#', // Add Twitter URL
    icon: Twitter,
  },
  // Add more social links as needed
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
       className="py-8 text-center text-muted-foreground text-sm"
    >
        {/* Social Icons for larger screens */}
       <div className="mb-4 hidden md:flex justify-center space-x-6">
         {socialLinks.map((link) => (
           <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
             <link.icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
           </Link>
         ))}
       </div>

       {/* Social Icons fixed at bottom left for smaller screens */}
        <div className="fixed bottom-0 left-0 p-4 md:hidden z-40">
            <div className="flex flex-col items-center space-y-4 after:content-[''] after:block after:w-px after:h-24 after:bg-muted-foreground after:mt-4">
                 {socialLinks.map((link) => (
                   <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                     <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
                   </Link>
                 ))}
            </div>
       </div>

        {/* Email fixed at bottom right for smaller screens */}
       <div className="fixed bottom-0 right-0 p-4 md:hidden z-40">
         <div className="flex flex-col items-center space-y-4 after:content-[''] after:block after:w-px after:h-24 after:bg-muted-foreground after:mt-4">
            <a href="mailto:berlin.joseph@example.com" className="writing-mode-vertical-rl rotate-180 text-xs font-mono text-muted-foreground hover:text-primary transition-colors duration-300 tracking-widest">
                berlin.joseph@example.com {/* Replace with actual email */}
            </a>
         </div>
       </div>


      <p className="font-mono">
        Designed & Built by Berlin Joe L
      </p>
      <p className="mt-1">
        &copy; {currentYear}. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
