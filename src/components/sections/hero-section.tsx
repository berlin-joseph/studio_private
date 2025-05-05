'use client';
import React from 'react';
import {Button} from '@/components/ui/button';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6, ease: 'easeOut'},
    },
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80, // Adjust offset
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      className="flex flex-col items-start justify-center min-h-[calc(100vh-5rem)] pt-20" // Adjust padding-top to account for header height
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="text-primary font-mono mb-4 text-base sm:text-lg"
        variants={itemVariants}
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
        variants={itemVariants}
      >
        Berlin Joe L.
      </motion.h1>
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground opacity-80 mb-6"
        variants={itemVariants}
      >
        I build things for the web.
      </motion.h2>
      <motion.p
        className="max-w-xl text-foreground opacity-90 mb-10 text-base sm:text-lg"
        variants={itemVariants}
      >
        I'm a Full Stack Developer with 3 years of industry experience,
        specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I'm focused on creating accessible,
        user-centered products.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Button asChild size="lg" className="group">
          <Link href="#contact" onClick={handleContactClick}>
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
