'use client';
import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';
import { CheckCircle } from 'lucide-react'; // Import an icon for list items

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  value: string; // Unique value for TabsTrigger
}

// Updated experiences based on README
const experiences: Experience[] = [
   {
    company: 'Feather Software Solutions',
    role: 'MERN Stack Developer',
    duration: 'July 2024 - November 2024', // Corrected duration
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
    duration: 'January 2024 - June 2024', // Corrected duration
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
    duration: 'January 2023 - January 2024', // Corrected duration
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
    <div className="w-full max-w-4xl mx-auto"> {/* Slightly increased max-width */}
       <SectionHeading sectionNumber="02.">Where I've Worked</SectionHeading>
      <Tabs defaultValue={experiences[0].value} className="flex flex-col md:flex-row gap-8 md:gap-10 mt-10" orientation="vertical"> {/* Explicitly set orientation */}
        {/* Improved TabsList styling */}
        <TabsList className="flex flex-row md:flex-col md:w-48 h-auto bg-transparent p-0 overflow-x-auto md:overflow-visible md:border-l-2 border-border md:pr-2"> {/* Added border, padding */}
          {experiences.map((exp) => (
            <TabsTrigger
              key={exp.value}
              value={exp.value}
              className="w-full text-left justify-start px-4 py-3 whitespace-nowrap md:whitespace-normal text-muted-foreground hover:bg-accent/50 hover:text-primary data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:shadow-none relative border-l-2 border-transparent data-[state=active]:border-primary -ml-px transition-all duration-200" // Enhanced active/hover states
            >
              {exp.company}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-1 md:pl-4"> {/* Added padding */}
          {experiences.map((exp) => (
             <TabsContent key={exp.value} value={exp.value} className="mt-0 focus-visible:ring-0 focus-visible:ring-offset-0"> {/* Removed focus ring */}
               <motion.div
                 key={exp.value} // Add key for animation consistency on tab change
                 initial={{ opacity: 0, y: 15 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -15 }} // Add exit animation
                 transition={{ duration: 0.3, ease: 'easeOut' }}
               >
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-1"> {/* Increased font size */}
                  {exp.role}{' '}
                  <span className="text-primary font-medium">@ {exp.company}</span> {/* Adjusted weight */}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 font-mono">{exp.duration}</p> {/* Increased margin */}
                <ul className="space-y-3 list-none pl-0"> {/* Increased spacing */}
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start text-base"> {/* Use text-base */}
                       <CheckCircle className="text-primary mr-3 mt-1 h-4 w-4 flex-shrink-0" /> {/* Use CheckCircle icon */}
                       <span className="text-foreground/90 leading-relaxed">{point}</span> {/* Increased line height */}
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
