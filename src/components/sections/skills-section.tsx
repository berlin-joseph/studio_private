
'use client';
import React from 'react';
import {Badge} from '@/components/ui/badge';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';
import { Code, Database, Cloud, Settings, Smile, Server, Smartphone, LayoutGrid, Layers, Brain, Workflow, Briefcase, Zap, Users, Award } from 'lucide-react'; // Added Zap, Users, Award

const skillCategories = [
  {
    title: 'Languages', // Shortened
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'SQL'],
    icon: Code,
  },
  {
    title: 'Full-Stack Stacks', // Changed title
    skills: ['MERN Stack', 'PERN Stack'],
    icon: Layers,
  },
  {
    title: 'Frontend', // Shortened
    skills: ['React', 'Next.js', 'Electron JS', 'Redux (Toolkit)', 'TanStack Query', 'Tailwind CSS', 'ShadCN UI', 'Material UI'], // Added ShadCN
    icon: LayoutGrid,
  },
  {
    title: 'Mobile', // Shortened
    skills: ['React Native'],
    icon: Smartphone,
  },
  {
    title: 'Backend', // Shortened
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Sequelize ORM'], // Added ORM explicitly
    icon: Server,
  },
  {
    title: 'Databases', // Shortened
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Prisma ORM', 'Drizzle ORM'],
    icon: Database,
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, Lambda)', 'DevOps', 'CI/CD (GitHub Actions)', 'Docker', 'Vercel', 'Netlify'], // Added specifics
    icon: Cloud,
  },
  {
    title: 'AI/ML & Web3',
    skills: ['Genkit (AI)', 'Machine Learning (Conceptual)', 'Web3 (Solidity Basics)', 'Smart Contracts'], // Added specifics
    icon: Brain,
  },
  {
    title: 'Tools & Platforms', // Changed title
    skills: ['Git & GitHub', 'Postman API', 'VS Code', 'Jira', 'Figma (Basics)'], // Added specifics
    icon: Settings,
  },
   {
    title: 'Professional Skills', // Changed title
    skills: ['Agile Methodologies', 'Problem-Solving', 'Team Collaboration', 'Effective Communication', 'Project Management (Basics)'], // Rephrased
    icon: Briefcase,
  },
];

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // Faster stagger
      },
    },
  };

   const itemVariants = {
    hidden: { opacity: 0, y: 25 }, // Increased y
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' }, // Slightly adjusted duration
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <SectionHeading sectionNumber="04.">My Tech Arsenal</SectionHeading> {/* Rephrased */}
      <motion.div
        className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-8" // Changed to 3 columns on xl, adjusted gap
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }} // Trigger animation sooner
      >
        {skillCategories.map((category) => (
          <motion.div 
            key={category.title} 
            variants={itemVariants} 
            className="flex flex-col bg-card/70 p-5 rounded-lg shadow-md border border-border/60 hover:border-primary/50 transition-colors duration-300" // Added card styling
          >
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2.5"> {/* Adjusted margin and gap */}
               {category.icon && <category.icon className="h-5 w-5" />}
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary" // Changed to secondary for a softer look
                  className="text-xs font-medium border-transparent text-secondary-foreground/90 hover:bg-primary/15 hover:text-primary transition-all duration-200 cursor-default" // Added hover effect
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
