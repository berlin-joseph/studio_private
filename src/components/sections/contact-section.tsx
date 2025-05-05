'use client';
import React from 'react';
import {Button} from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';
import {Mail} from 'lucide-react';

const ContactSection: React.FC = () => {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6, ease: 'easeOut'},
    },
  };


  return (
    <motion.div
      className="text-center max-w-2xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
    >
      <motion.h4
        className="text-base sm:text-lg font-mono text-primary mb-4"
        variants={itemVariants}
      >
        What's Next?
      </motion.h4>
      <motion.div variants={itemVariants}>
       <SectionHeading>Get In Touch</SectionHeading>
      </motion.div>

      <motion.p
        className="text-foreground opacity-90 my-6 text-base sm:text-lg"
        variants={itemVariants}
      >
        I'm currently open to new opportunities and collaborations. Whether you
        have a question, a project idea, or just want to say hi, feel free to
        reach out. My inbox is always open, and I'll do my best to get back to
        you!
      </motion.p>
      <motion.div variants={itemVariants}>
        <Button asChild size="lg" className="group">
          <a href="mailto:berlin.joseph@example.com"> {/* Replace with actual email */}
            Say Hello <Mail className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
