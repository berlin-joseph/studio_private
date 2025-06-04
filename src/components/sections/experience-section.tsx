
'use client';
import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';
import { CheckSquare } from 'lucide-react'; // Changed to CheckSquare for a slightly different look
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
    company: 'Feather Software',
    role: 'MERN Stack Developer',
    duration: 'July 2024 - Nov 2024',
    description: [
      'Spearheaded development of a MERN stack delivery app with real-time tracking & management features.',
      'Engineered route optimization algorithms & analytics dashboards, improving delivery efficiency by ~40%.',
      'Integrated secure payment gateways & notification systems, increasing user satisfaction by 30%.',
      'Led a team to establish CI/CD pipelines, reducing deployment times by ~35% & enhancing release velocity.',
    ],
    value: 'feather',
  },
  {
    company: 'Micromen Software',
    role: 'Application Developer',
    duration: 'Jan 2024 - June 2024',
    description: [
      'Developed a CRM app (React Native & Node.js), enhancing customer engagement by 40%.',
      'Architected & optimized backend systems, achieving 40% API latency reduction & increased throughput.',
      'Championed software quality via comprehensive testing (Jest & RTL), achieving 95% test coverage.',
    ],
    value: 'micromen',
  },
  {
    company: 'Paladin Software',
    role: 'Jr. Software Developer',
    duration: 'Jan 2023 - Jan 2024',
    description: [
      'Contributed to scalable mobile apps (React Native), accelerating development cycles by ~20%.',
      'Streamlined state management (Redux Toolkit), reducing code complexity by ~30%.',
      'Enhanced mobile app performance by 25% through lazy loading & code-splitting.',
    ],
    value: 'paladin',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
       <SectionHeading sectionNumber="02.">Where I've Worked</SectionHeading>
      <Tabs defaultValue={experiences[0].value} className="flex flex-col md:flex-row gap-6 md:gap-8 mt-10 sm:mt-12" orientation="vertical">
        <TabsList className="flex flex-row md:flex-col md:w-52 h-auto bg-transparent p-0 overflow-x-auto md:overflow-visible md:border-l-2 border-border/50 md:pr-0">
          {experiences.map((exp) => (
            <TabsTrigger
              key={exp.value}
              value={exp.value}
              className={cn(
                "w-full text-left justify-start px-4 py-3.5 text-sm whitespace-nowrap md:whitespace-normal",
                "text-muted-foreground hover:bg-accent/60 hover:text-primary",
                "data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:font-semibold",
                "data-[state=active]:shadow-inner data-[state=active]:border-primary", // Changed shadow to inner
                "relative border-l-2 md:border-l-4 border-transparent data-[state=active]:border-primary -ml-px md:-ml-1",
                "transition-all duration-200 ease-in-out"
              )}
            >
              {exp.company}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-1 md:pl-6">
          {experiences.map((exp) => (
             <TabsContent key={exp.value} value={exp.value} className="mt-0 focus-visible:ring-0 focus-visible:ring-offset-0">
               <motion.div
                 key={exp.value}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.35, ease: 'easeOut' }}
               >
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-1.5">
                  {exp.role}{' '}
                  <span className="text-primary font-medium">@ {exp.company}</span>
                </h3>
                <p className="text-xs text-muted-foreground mb-6 font-mono tracking-wide">{exp.duration}</p>
                <ul className="space-y-3.5 list-none pl-0">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start text-sm sm:text-base">
                       <CheckSquare className="text-primary mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                       <span className="text-foreground/85 leading-relaxed">{point}</span>
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

    
