
'use client';
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';

const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full max-w-5xl mx-auto">
      <motion.div
        className="lg:w-3/5 text-foreground/90 space-y-5 text-base sm:text-lg leading-relaxed"
        initial={{opacity: 0, x: -50}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6, ease: 'easeOut'}}
      >
        <SectionHeading sectionNumber="01.">About Me</SectionHeading>
        <p>
           Hello! I'm Berlin, a Full-Stack Software Developer based in Nagercoil, India, with a profound enthusiasm for technology and innovation.
           I specialize in building robust, scalable, and user-centric applications, transforming complex ideas into tangible digital solutions.
           My journey into web development was driven by a deep-seated passion for dismantling intricate challenges and architecting elegant systems that not only function flawlessly but also provide meaningful user experiences.
        </p>
        <p>
          With professional experience dating back to January 2023, I've had the privilege of contributing to a diverse range of projects. This has allowed me to sharpen my skills across the full development stack, from crafting intuitive front-end interfaces to engineering resilient back-end services.
          I thrive in dynamic, collaborative environments and am committed to delivering high-quality applications that exceed expectations and drive impact.
        </p>
         <p>
          Beyond coding, I'm an avid explorer of emerging technologies, particularly in the realms of AI/ML and Web3. I actively contribute to the developer community and embrace lifelong learning to continuously refine my skills and stay at the forefront of innovation. I'm always seeking exciting opportunities to build cutting-edge solutions and collaborate on transformative projects.
        </p>
      </motion.div>
      <motion.div
        className="lg:w-2/5 flex justify-center lg:justify-end mt-8 lg:mt-0"
        initial={{opacity: 0, x: 50}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6, delay: 0.2}}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[350px] lg:h-[350px] rounded-lg group">
           <div className="absolute inset-0 bg-primary/10 rounded-lg z-10 group-hover:bg-transparent transition-colors duration-300"></div>
          <Image
            src="https://media.licdn.com/dms/image/v2/D5603AQG_4dylBvX4UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1675790558997?e=1753920000&v=beta&t=XlzSrp5-uXj1ci9rbaQOnDh43GPfMNEMc2GQ0jDSDAs"
            alt="Berlin Joe L - Full-Stack Developer"
            width={350} 
            height={350}
            className="rounded-lg object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300" // Removed grayscale filter
            data-ai-hint="professional portrait developer man indian"
            priority
          />
           <div className="absolute -inset-1 border-2 border-primary/50 rounded-lg transition-all duration-300 group-hover:border-primary group-hover:-inset-1 pointer-events-none"></div> {/* Adjusted hover inset */}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;

