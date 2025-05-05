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
          Hello! I'm Berlin, a passionate Full Stack Developer based somewhere
          on Earth. My journey into web development started years ago, driven
          by a fascination with how the internet works and a desire to create
          meaningful digital solutions.
        </p>
        <p>
          With 3 years of professional experience, I've had the opportunity to
          work on a diverse range of projects, honing my skills in both
          front-end and back-end technologies. I thrive in collaborative
          environments and enjoy tackling complex problems to deliver
          high-quality, performant, and user-friendly applications.
        </p>
        <p>
          When I'm not coding, you might find me exploring new technologies,
          contributing to open-source projects, or enjoying the great outdoors.
          I'm always eager to learn and grow, both personally and
          professionally.
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
          <Image
            src="https://picsum.photos/400/400"
            alt="Berlin Joe L"
            layout="fill"
            objectFit="cover"
            className="rounded-lg transform group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="professional portrait developer"
          />
           <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
