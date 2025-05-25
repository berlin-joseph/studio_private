
'use client';
import React from 'react';
import {Badge} from '@/components/ui/badge';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';
import { Code, Database, Cloud, Settings, Smile, Server, Smartphone, LayoutGrid, Layers, Brain, Workflow } from 'lucide-react'; // Added Layers, Brain, Workflow

// Updated skill categories based on user's proficiency
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'SQL'], // Added Python as it's common for AI/ML
    icon: Code,
  },
  {
    title: 'Full-Stack Expertise',
    skills: ['MERN Stack', 'PERN Stack'],
    icon: Layers,
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'Electron JS', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'Material UI', 'Ant Design'],
    icon: LayoutGrid,
  },
  {
    title: 'Mobile Development',
    skills: ['React Native'],
    icon: Smartphone,
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Sequelize'],
    icon: Server,
  },
  {
    title: 'Databases & ORMs',
    skills: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Drizzle ORM', 'MongoDB', 'Mongoose', 'Firebase'],
    icon: Database,
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'DevOps', 'CI/CD Pipelines', 'Docker', 'Netlify', 'Heroku', 'Vercel'], // Moved CI/CD & Docker here
    icon: Cloud,
  },
  {
    title: 'AI, ML & Web3',
    skills: ['AI', 'Machine Learning (ML)', 'Web 3.0', 'Smart Contracts'], // Added Smart Contracts for Web3
    icon: Brain,
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'Postman', 'VSCode', 'Jira'], // CI/CD & Docker moved to Cloud & DevOps
    icon: Settings,
  },
   {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Collaboration', 'Communication', 'Time Management', 'Attention to Detail'],
    icon: Smile,
  },
];

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

   const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <SectionHeading sectionNumber="04.">My Technical Skills</SectionHeading>
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={itemVariants} className="flex flex-col">
            <h3 className="text-lg font-semibold text-primary mb-5 flex items-center gap-2">
               {category.icon && <category.icon className="h-5 w-5" />}
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm font-medium px-3 py-1 border-border bg-secondary/50 text-secondary-foreground/90 hover:bg-accent hover:text-accent-foreground hover:border-primary/50 transition-all duration-200 cursor-default shadow-sm"
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
