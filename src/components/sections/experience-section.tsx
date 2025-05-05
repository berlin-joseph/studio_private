'use client';
import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  value: string; // Unique value for TabsTrigger
}

const experiences: Experience[] = [
   {
    company: 'Feather Software Solutions',
    role: 'MERN Stack Developer',
    duration: 'July 2024 - Nov 2024',
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
    duration: 'Jan 2024 - June 2024',
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
    duration: 'Jan 2023 - Jan 2024',
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
    <div className="w-full max-w-3xl mx-auto">
       <SectionHeading>Where I've Worked</SectionHeading>
      <Tabs defaultValue={experiences[0].value} className="flex flex-col md:flex-row gap-6 md:gap-10 mt-8">
        <TabsList className="flex flex-row md:flex-col md:w-48 h-auto bg-transparent p-0 overflow-x-auto md:overflow-x-visible">
          {experiences.map((exp) => (
            <TabsTrigger
              key={exp.value}
              value={exp.value}
              className="justify-start text-left w-full px-4 py-3 whitespace-nowrap md:whitespace-normal data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:shadow-none relative after:absolute after:left-0 after:top-0 after:bottom-0 after:w-0.5 after:bg-primary after:scale-y-0 data-[state=active]:after:scale-y-100 after:transition-transform after:duration-300 md:border-l-2 md:border-border md:data-[state=active]:border-primary md:after:hidden"
            >
              {exp.company}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-1">
          {experiences.map((exp) => (
             <TabsContent key={exp.value} value={exp.value} className="mt-0">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
               >
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {exp.role}{' '}
                  <span className="text-primary">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-4 font-mono">{exp.duration}</p>
                <ul className="space-y-2 list-none pl-0">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                       <span className="text-primary mr-2 mt-1">&#8227;</span> {/* Bullet point */}
                       <span className="text-foreground opacity-90">{point}</span>
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
