'use client';
import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Full Stack Developer',
    duration: 'Jan 2022 - Present',
    description: [
      'Developed and maintained web applications using React, Node.js, and PostgreSQL.',
      'Collaborated with cross-functional teams to define, design, and ship new features.',
      'Improved application performance by 20% through code optimization and database tuning.',
      'Implemented automated testing suites, increasing code coverage by 30%.',
    ],
  },
  {
    company: 'WebCrafters Co.',
    role: 'Junior Developer',
    duration: 'June 2021 - Dec 2021',
    description: [
      'Assisted senior developers in building client websites using HTML, CSS, and JavaScript.',
      'Participated in code reviews and contributed to improving code quality.',
      'Gained experience with version control systems like Git.',
      'Developed responsive layouts ensuring cross-browser compatibility.',
    ],
  },
  // Add more experiences as needed
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
       <SectionHeading>Where I've Worked</SectionHeading>
      <Tabs defaultValue={experiences[0].company} className="flex flex-col md:flex-row gap-6 md:gap-10 mt-8">
        <TabsList className="flex flex-row md:flex-col md:w-48 h-auto bg-transparent p-0 overflow-x-auto md:overflow-x-visible">
          {experiences.map((exp, index) => (
            <TabsTrigger
              key={exp.company}
              value={exp.company}
              className="justify-start text-left w-full px-4 py-3 whitespace-nowrap md:whitespace-normal data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:shadow-none relative after:absolute after:left-0 after:top-0 after:bottom-0 after:w-0.5 after:bg-primary after:scale-y-0 data-[state=active]:after:scale-y-100 after:transition-transform after:duration-300 md:border-l-2 md:border-border md:data-[state=active]:border-primary md:after:hidden"
            >
              {exp.company}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-1">
          {experiences.map((exp) => (
             <TabsContent key={exp.company} value={exp.company} className="mt-0">
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
