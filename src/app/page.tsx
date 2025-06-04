'use client';
import type {FC} from 'react';
import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/layout/footer';
import {useEffect, useRef} from 'react';
import {motion, useInView, useAnimation} from 'framer-motion';
import { cn } from '@/lib/utils';

const SectionWrapper: FC<{children: React.ReactNode; id: string; className?: string}> = ({children, id, className}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, amount: 0.2});
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={{
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0},
      }}
      initial="hidden"
      animate={controls}
      transition={{duration: 0.6, ease: 'easeOut'}}
      className={cn("min-h-[70vh]", className)} // Adjusted min-height
    >
      {children}
    </motion.section>
  );
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <SectionWrapper id="hero" className="min-h-[calc(100vh-5rem)] pt-20"> {/* Adjusted hero section height */}
          <HeroSection />
        </SectionWrapper>
        <SectionWrapper id="about">
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper id="experience">
          <ExperienceSection />
        </SectionWrapper>
        <SectionWrapper id="projects">
          <ProjectsSection />
        </SectionWrapper>
        <SectionWrapper id="skills">
          <SkillsSection />
        </SectionWrapper>
        <SectionWrapper id="contact">
          <ContactSection />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
