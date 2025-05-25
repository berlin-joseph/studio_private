'use client';
import React from 'react';
import {Button} from '@/components/ui/button';
import {motion} from 'framer-motion';
// import Link from 'next/link'; // Link is no longer used directly here
import {ArrowRight} from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slightly faster stagger
        delayChildren: 0.2, // Slightly faster delay
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5, ease: 'easeOut'}, // Slightly faster transition
    },
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
       // Let smooth scrolling with scroll-padding-top handle the offset
       contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate years of experience dynamically (approximate)
  const startDate = new Date(2023, 0); // January 2023
  const currentDate = new Date();
  const yearsExperience = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365));
  const experienceText = yearsExperience > 0 ? `${yearsExperience}+ year${yearsExperience > 1 ? 's' : ''}` : 'under a year';


  return (
    // Ensure the container uses the available vertical space minus the header height
    // `flex-grow` is handled by the main layout, we just need vertical centering here
    <motion.div
      className="flex flex-col justify-center max-w-3xl" // Max width for content
      variants={containerVariants}
      initial="hidden"
      animate="visible"
       // Removed min-h-screen and pt-20 as section wrapper handles it
    >
      <motion.p
        className="text-primary font-mono mb-3 sm:mb-4 text-base sm:text-lg" // Reduced bottom margin
        variants={itemVariants}
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-2 sm:mb-3" // Added font-extrabold, reduced margin
        variants={itemVariants}
      >
        Berlin Joe L.
      </motion.h1>
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground/80 mb-6 sm:mb-8" // Use foreground with opacity, adjusted margin
        variants={itemVariants}
      >
        I build things for the web.
      </motion.h2>
      <motion.p
        className="max-w-xl text-foreground/90 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed" // Adjusted margin, added leading-relaxed
        variants={itemVariants}
      >
        I'm a Full-Stack Software Developer with {experienceText} of industry experience,
        specializing in building scalable and user-centric applications. Currently, I'm focused on creating accessible,
        impactful digital solutions using the latest technologies.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Button asChild size="lg" className="group shadow-md hover:shadow-lg transition-shadow duration-300">
          <a href="#contact" onClick={handleContactClick} className="flex items-center"> {/* Use <a> tag directly */}
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
