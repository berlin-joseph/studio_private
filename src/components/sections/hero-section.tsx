
'use client';
import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
       contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const startDate = new Date(2023, 0); 
  const currentDate = new Date();
  let yearsExperience = currentDate.getFullYear() - startDate.getFullYear();
  const m = currentDate.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && currentDate.getDate() < startDate.getDate())) {
    yearsExperience--;
  }
  const experienceText = yearsExperience > 0 ? `${yearsExperience}+ year${yearsExperience > 1 ? 's' : ''}` : 'valuable industry';


  return (
    <motion.div
      className="flex flex-col justify-center max-w-3xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="text-primary font-mono mb-3 sm:mb-4 text-lg sm:text-xl" // Increased font size
        variants={itemVariants}
      >
        Hi there, my name is
      </motion.p>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-2 sm:mb-3"
        variants={itemVariants}
      >
        Berlin Joe L.
      </motion.h1>
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground/80 mb-6 sm:mb-8"
        variants={itemVariants}
      >
        I craft innovative digital experiences.
      </motion.h2>
      <motion.p
        className="max-w-xl text-foreground/90 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed"
        variants={itemVariants}
      >
        I'm a passionate Full-Stack Software Developer with {experienceText} of professional experience,
        dedicated to architecting and building scalable, high-performance, and user-centric applications. 
        My current focus involves leveraging cutting-edge technologies like AI/ML and modern web frameworks to create accessible,
        impactful digital solutions that solve real-world problems and delight users.
      </motion.p>
      <motion.div variants={itemVariants}>
        <a
          href="#contact"
          onClick={handleContactClick}
          className={cn(
            buttonVariants({ size: "lg" }),
            "group shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
          )}
        >
          Get In Touch
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;

