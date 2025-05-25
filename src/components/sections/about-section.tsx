'use client';
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';

const AboutSection: React.FC = () => {
  return (
    // Center content vertically within the section
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full max-w-5xl mx-auto">
      <motion.div
        className="lg:w-3/5 text-foreground/90 space-y-5 text-base sm:text-lg leading-relaxed" // Increased leading, adjusted width ratio
        initial={{opacity: 0, x: -50}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6, ease: 'easeOut'}}
      >
        <SectionHeading sectionNumber="01.">About Me</SectionHeading>
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
          and continuously learning to enhance my skills. I'm always looking for opportunities to build impactful solutions.
        </p>
      </motion.div>
      <motion.div
        className="lg:w-2/5 flex justify-center lg:justify-end mt-8 lg:mt-0" // Adjusted width ratio and margin
        initial={{opacity: 0, x: 50}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6, delay: 0.2}}
      >
        {/* Image styling improvements */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-lg group"> {/* Slightly larger on larger screens */}
          {/* Subtle background overlay */}
           <div className="absolute inset-0 bg-primary/10 rounded-lg z-10 group-hover:bg-transparent transition-colors duration-300"></div>
           {/* Image with hover effect */}
          <Image
            src="https://media.licdn.com/dms/image/v2/D5603AQG_4dylBvX4UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1675790558997?e=1753920000&v=beta&t=XlzSrp5-uXj1ci9rbaQOnDh43GPfMNEMc2GQ0jDSDAs"
            alt="Berlin Joe L"
            width={200}
            height={200}
            className="rounded-lg object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300 filter grayscale group-hover:grayscale-0" // Grayscale effect
            data-ai-hint="professional portrait developer man indian"
            priority // Prioritize loading this image
          />
           {/* Border accent */}
           <div className="absolute -inset-1 border-2 border-primary/50 rounded-lg transition-all duration-300 group-hover:border-primary group-hover:-inset-2 pointer-events-none"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
