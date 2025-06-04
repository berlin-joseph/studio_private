'use client';
import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';
import { CheckCircle } from 'lucide-react'; 
import { cn } from '@/lib/utils';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  value: string;
}

const experiences: Experience[] = [
   {
    company: 'Feather Software Solutions',
    role: 'MERN Stack Developer',
    duration: 'July 2024 - November 2024',
    description: [
      'Spearheaded the development of a robust MERN stack delivery application, incorporating real-time order tracking and comprehensive management features.',
      'Engineered and implemented route optimization algorithms and analytics dashboards, measurably improving delivery efficiency by approximately 40%.',
      'Integrated secure, multi-platform payment gateways and sophisticated notification systems, contributing to a 30% increase in user satisfaction scores.',
      'Led a cross-functional team to establish and refine CI/CD pipelines, significantly reducing deployment times by an estimated 35% and enhancing release velocity.',
    ],
    value: 'feather',
  },
  {
    company: 'Micromen Software Solutions',
    role: 'Application Developer',
    duration: 'January 2024 - June 2024',
    description: [
      'Developed and launched a feature-rich CRM application using React Native and Node.js, successfully enhancing customer engagement metrics by 40%.',
      'Architected and optimized backend systems, achieving a 40% reduction in API latency and substantially increasing request throughput.',
      'Championed software quality by implementing comprehensive testing strategies, achieving 95% test coverage with Jest and React Testing Library.',
    ],
    value: 'micromen',
  },
  {
    company: 'Paladin Software Solutions',
    role: 'Junior Software Developer',
    duration: 'January 2023 - January 2024',
    description: [
      'Contributed to designing and building scalable mobile applications with React Native, accelerating development cycles by approximately 20%.',
      'Streamlined application state management using Redux Toolkit, effectively reducing code complexity by an estimated 30% and improving maintainability.',
      'Enhanced mobile app performance by 25% through strategic implementation of lazy loading techniques and efficient code-splitting practices.',
    ],
    value: 'paladin',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
       <SectionHeading sectionNumber="02.">Where I've Worked</SectionHeading>
      <Tabs defaultValue={experiences[0].value} className="flex flex-col md:flex-row gap-8 md:gap-10 mt-10" orientation="vertical">
        <TabsList className="flex flex-row md:flex-col md:w-48 h-auto bg-transparent p-0 overflow-x-auto md:overflow-visible md:border-l-2 border-border/70 md:pr-2">
          {experiences.map((exp) => (
            <TabsTrigger
              key={exp.value}
              value={exp.value}
              className={cn(
                "w-full text-left justify-start px-4 py-3 whitespace-nowrap md:whitespace-normal",
                "text-muted-foreground hover:bg-accent/70 hover:text-primary",
                "data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:font-medium",
                "data-[state=active]:shadow-inner data-[state=active]:border-primary", 
                "relative border-l-2 border-transparent data-[state=active]:border-primary -ml-px",
                "transition-all duration-200"
              )}
            >
              {exp.company}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-1 md:pl-4">
          {experiences.map((exp) => (
             <TabsContent key={exp.value} value={exp.value} className="mt-0 focus-visible:ring-0 focus-visible:ring-offset-0">
               <motion.div
                 key={exp.value} 
                 initial={{ opacity: 0, y: 15 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -15 }}
                 transition={{ duration: 0.3, ease: 'easeOut' }}
               >
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-1">
                  {exp.role}{' '}
                  <span className="text-primary font-medium">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-5 font-mono">{exp.duration}</p>
                <ul className="space-y-3 list-none pl-0">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start text-base">
                       <CheckCircle className="text-primary mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                       <span className="text-foreground/90 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
               </motion.div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ExperienceSection;
