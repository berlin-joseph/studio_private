'use client';
import React from 'react';
import {Button} from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';
import {Mail} from 'lucide-react';

const ContactSection: React.FC = () => {
  const containerVariants = {
    hidden: {opacity: 0, y: 30}, // Add y offset
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Individual items don't need separate variants if staggered
  const itemVariants = {
     hidden: {opacity: 0, y: 20}, // Keep for potential direct use
     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
   };

  const userEmail = 'l.berlinjoe@hotmail.com';


  return (
    <motion.div
      className="text-center max-w-xl mx-auto" // Reduced max-width slightly for focus
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
    >
      {/* Removed individual motion wrappers for children, rely on container stagger */}
       <h4
        className="text-base sm:text-lg font-mono text-primary mb-3" // Reduced margin
       >
         05. What's Next? {/* Added section number */}
       </h4>
       <div className="mb-6"> {/* Wrap heading for stagger */}
        <SectionHeading>Get In Touch</SectionHeading>
       </div>

       <p
        className="text-foreground/90 my-6 text-base sm:text-lg leading-relaxed" // Adjusted margin, added leading
       >
        I'm currently open to new opportunities and collaborations. Whether you
        have a question, a project idea, or just want to say hi, feel free to
        reach out. My inbox is always open, and I'll do my best to get back to
        you!
       </p>
       <div> {/* Wrap button for stagger */}
         <Button asChild size="lg" className="group shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"> {/* Enhanced button style */}
          <a href={`mailto:${userEmail}`}>
            Say Hello <Mail className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /> {/* Added icon animation */}
          </a>
        </Button>
       </div>
    </motion.div>
  );
};

export default ContactSection;
