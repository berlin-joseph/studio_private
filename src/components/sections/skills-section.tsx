'use client';
import React from 'react';
import {Badge} from '@/components/ui/badge';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'GSAP', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    title: 'Databases & Cloud',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'AWS (Basic)', 'Docker'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Jira', 'Figma (Basic)'],
  },
];

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

   const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <SectionHeading>My Skills</SectionHeading>
      <motion.div
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={itemVariants}>
            <h3 className="text-lg font-semibold text-primary mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm px-3 py-1 border-primary/50 text-primary hover:bg-primary/10 transition-colors"
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
