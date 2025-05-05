'use client';
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';

const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      <motion.div
        className="lg:w-1/2 text-foreground opacity-90 space-y-4 text-base sm:text-lg"
        initial={{opacity: 0, x: -50}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6}}
      >
        <SectionHeading>About Me</SectionHeading>
        <p>
           Hello! I'm Berlin, a Full-Stack Software Developer based in Nagercoil, India.
           I specialize in building scalable and user-centric applications using the latest technologies.
           My journey into web development was driven by a passion for solving complex problems and creating impactful digital solutions.
        </p>
        <p>
          With professional experience starting from January 2023, I've had the opportunity to
          work on diverse projects, strengthening my skills in both frontend and backend development.
          I thrive in collaborative environments and aim to deliver seamless, high-quality applications.
        </p>
         <p>
          Beyond coding, I enjoy exploring new technologies, contributing to the developer community,
          and continuously learning to enhance my skills.
        </p>
      </motion.div>
      <motion.div
        className="lg:w-1/2 flex justify-center lg:justify-end"
        initial={{opacity: 0, x: 50}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6, delay: 0.2}}
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-lg overflow-hidden shadow-xl group">
          <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
          {/* Consider replacing with an actual photo */}
          <Image
            src="https://picsum.photos/seed/berlin-profile/400/400"
            alt="Berlin Joe L"
            layout="fill"
            objectFit="cover"
            className="rounded-lg transform group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="professional portrait developer man indian"
          />
           <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
