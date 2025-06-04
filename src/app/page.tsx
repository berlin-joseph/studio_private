
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
  const isInView = useInView(ref, {once: true, amount: 0.15}); // Adjusted amount for earlier trigger
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
        hidden: {opacity: 0, y: 40}, // Slightly adjusted y
        visible: {opacity: 1, y: 0},
      }}
      initial="hidden"
      animate={controls}
      transition={{duration: 0.6, ease: 'easeOut'}}
      className={cn("min-h-[60vh]", className)} // Adjusted min-height
    >
      {children}
    </motion.section>
  );
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background"> {/* Ensured bg-background here too */}
      <Header />
      <main className="flex-grow">
        {/* Hero section is typically full viewport height or close to it */}
        <SectionWrapper id="hero" className="min-h-[calc(100vh-5rem)] !py-0 flex items-center"> {/* Removed padding for hero, flex items-center */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"> {/* Added container for content padding */}
            <HeroSection />
          </div>
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
        <SectionWrapper id="contact" className="pb-24 md:pb-32"> {/* Added more padding at the bottom of contact section */}
          <ContactSection />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
