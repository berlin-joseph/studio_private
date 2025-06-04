
'use client';
import React from 'react';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button'; // Added Button import
import {motion} from 'framer-motion';
import {ArrowRight, Briefcase, Download, Github, Linkedin, Mail} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 25}, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  };

  const imageVariants = {
    hidden: {opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.3 },
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

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/berlin-joseph', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/berlinjoel/', icon: Linkedin },
    { name: 'Email', href: 'mailto:l.berlinjoe@hotmail.com', icon: Mail },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full max-w-6xl mx-auto">
      {/* Text Content */}
      <motion.div
        className="lg:w-3/5 text-left" 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-primary font-mono mb-3 sm:mb-4 text-lg sm:text-xl" 
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-3 sm:mb-4" 
          variants={itemVariants}
        >
          Berlin Joe L.
        </motion.h1>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80 mb-6 sm:mb-8" 
          variants={itemVariants}
        >
          I build dynamic and innovative web solutions.
        </motion.h2>
        <motion.p
          className="max-w-lg text-foreground/90 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed" 
          variants={itemVariants}
        >
          I'm a Full-Stack Developer with {experienceText} of experience, passionate about crafting scalable, user-centric applications. 
          I specialize in leveraging modern technologies like React, Next.js, Node.js, and AI/ML to deliver impactful digital experiences.
        </motion.p>
        
        <motion.div className="flex flex-col sm:flex-row gap-4 mb-8" variants={itemVariants}>
          <a
            href="#contact"
            onClick={handleContactClick}
            className={cn(
              buttonVariants({ size: "lg", variant: "default" }), 
              "group shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
            )}
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <Button size="lg" variant="outline" className="group shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
            Download CV <Download className="ml-2 h-4 w-4 group-hover:animate-pulse" />
          </Button>
        </motion.div>

        <motion.div className="flex space-x-5" variants={itemVariants}>
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              <link.icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110" />
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Image Content */}
      <motion.div
        className="lg:w-2/5 flex justify-center lg:justify-end mt-10 lg:mt-0"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full z-0 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
          <Image
            src="https://media.licdn.com/dms/image/v2/D5603AQG_4dylBvX4UQ/profile-displayphoto-shrink_800_800/0/1675790558997?e=1753920000&v=beta&t=gT11YTwG5LngmH_2WefuGYr62IlJ8Y0yJ7DeCgHq0qU" 
            alt="Berlin Joe L - Full-Stack Developer"
            width={384} 
            height={384}
            className="rounded-full object-cover w-full h-full shadow-2xl relative z-10 border-4 border-background group-hover:border-primary/50 transition-all duration-300 transform group-hover:scale-105"
            data-ai-hint="professional portrait developer man indian"
            priority
          />
           <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full z-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
             <Briefcase className="w-7 h-7 text-primary-foreground"/>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

