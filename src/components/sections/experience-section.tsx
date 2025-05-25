
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
      'Built a robust delivery application enabling real-time order tracking and management.',
      'Improved delivery efficiency by 40% through route optimization and analytics.',
      'Integrated secure payment gateways and notification systems, increasing user satisfaction by 30%.',
      'Led a team to implement CI/CD pipelines, cutting deployment time by 35%.',
    ],
    value: 'feather',
  },
  {
    company: 'Micromen Software Solutions',
    role: 'Application Developer',
    duration: 'January 2024 - June 2024',
    description: [
      'Developed a feature-rich CRM application with React Native and Node.js, enhancing customer engagement by 40%.',
      'Optimized backend architecture, reducing API latency by 40% and increasing throughput.',
      'Achieved 95% test coverage using Jest and React Testing Library.',
    ],
    value: 'micromen',
  },
  {
    company: 'Paladin Software Solutions',
    role: 'Junior Software Developer',
    duration: 'January 2023 - January 2024',
    description: [
      'Designed scalable mobile applications with React Native, improving development speed by 20%.',
      'Streamlined state management using Redux Toolkit, reducing code complexity by 30%.',
      'Boosted app performance by 25% with lazy loading and efficient code-splitting.',
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
                "data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:font-medium", // Adjusted active state
                "data-[state=active]:shadow-inner data-[state=active]:border-primary", // Added inner shadow and border for active
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
