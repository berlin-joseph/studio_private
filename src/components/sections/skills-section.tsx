'use client';
import React from 'react';
import {Badge} from '@/components/ui/badge';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';
import { Code, Database, Cloud, Settings, Smile } from 'lucide-react'; // Import icons

// Updated skill categories based on user input
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
    icon: Code,
  },
   {
    title: 'Frontend Development',
    skills: ['React', 'React Native', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'Material UI', 'Ant Design', 'Next.js'],
    icon: Code, // Reusing Code icon for frontend frameworks
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Sequelize'],
    icon: Settings, // Using Settings icon for backend
  },
  {
    title: 'Databases & ORMs',
    skills: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Drizzle ORM', 'MongoDB', 'Mongoose', 'Firebase'],
    icon: Database,
  },
  {
    title: 'Cloud Platforms',
    skills: ['AWS', 'Netlify', 'Heroku', 'Vercel'],
    icon: Cloud,
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'Postman', 'VSCode', 'Docker', 'Jira', 'CI/CD Pipelines'],
    icon: Settings, // Reusing Settings icon for tools
  },
   {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Collaboration', 'Communication', 'Time Management', 'Attention to Detail'],
    icon: Smile, // Using Smile icon for soft skills
  },
];

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Slightly faster stagger
      },
    },
  };

   const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }, // Slightly faster transition
    },
  };

  return (
    <div className="w-full max-w-5xl mx-auto"> {/* Increased max-width slightly */}
      <SectionHeading>My Technical Skills</SectionHeading>
      <motion.div
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" // Added lg:grid-cols-3 for better layout on larger screens
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger animation earlier
      >
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={itemVariants} className="flex flex-col"> {/* Ensure flex column layout */}
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
               {category.icon && <category.icon className="mr-2 h-5 w-5" />} {/* Added icon */}
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm px-3 py-1 border-primary/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default" // Adjusted styling slightly
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
