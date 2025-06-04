
'use client';
import React from 'react';
import {motion} from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { Award, Users, Zap } from 'lucide-react'; // Added icons

const AboutSection: React.FC = () => {
  const coreValues = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly exploring new technologies to build cutting-edge solutions."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Dedicated to crafting robust, scalable, and meticulously tested applications."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Thriving in team environments to achieve shared goals and deliver excellence."
    }
  ];

  return (
    <div className="flex flex-col items-center gap-12 lg:gap-16 w-full max-w-5xl mx-auto">
      <motion.div
        className="text-foreground/90 space-y-6 text-base sm:text-lg leading-relaxed text-center lg:text-left" // Centered text on small screens
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.2}}
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

      {/* Core Values Section */}
      <motion.div 
        className="w-full mt-10 lg:mt-12"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.5, delay: 0.3}}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div 
              key={value.title}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-border/70 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5, delay: index * 0.15}}
            >
              <div className="flex items-center mb-3">
                <value.icon className="h-7 w-7 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
