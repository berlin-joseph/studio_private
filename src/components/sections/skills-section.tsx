'use client';
import React from 'react';
import {Badge} from '@/components/ui/badge';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';
import { Code, Database, Cloud, Settings, Smile, Server, Smartphone, LayoutGrid } from 'lucide-react'; // Added LayoutGrid for Frontend

// Updated skill categories based on user's README
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
    icon: Code,
  },
   {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'Material UI', 'Ant Design'],
    icon: LayoutGrid, // Using LayoutGrid icon for frontend
  },
   {
    title: 'Mobile Development',
    skills: ['React Native'],
    icon: Smartphone,
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Sequelize'],
    icon: Server, // Using Server icon for backend
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
    skills: ['Git', 'Docker', 'Postman', 'VSCode', 'Jira', 'CI/CD Pipelines'],
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
        staggerChildren: 0.08, // Even faster stagger
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
    <div className="w-full max-w-6xl mx-auto"> {/* Wider max-width */}
      <SectionHeading sectionNumber="04.">My Technical Skills</SectionHeading>
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10" // Adjusted gap
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger animation earlier
      >
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={itemVariants} className="flex flex-col"> {/* Ensure flex column layout */}
            {/* Category Title Styling */}
            <h3 className="text-lg font-semibold text-primary mb-5 flex items-center gap-2"> {/* Increased bottom margin */}
               {category.icon && <category.icon className="h-5 w-5" />}
              {category.title}
            </h3>
            {/* Badge Container */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  // Enhanced badge styling
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
