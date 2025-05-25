
// @ts-nocheck
'use client';
import React, {useState} from 'react';
import Image from 'next/image'; // Import next/image
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {Github, ExternalLink, Loader2, Wand2} from 'lucide-react'; // Added Wand2 icon
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';
import {optimizePortfolio} from '@/ai/flows/portfolio-optimization';
import {useToast} from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  imageHint: string; // Added for data-ai-hint
}

// Updated with user's projects and details from README
const initialProjects: Project[] = [
  {
    title: 'Delivery Application (Feather)',
    description:
      'A robust MERN stack delivery application enabling real-time order tracking, route optimization, secure payments, and notification systems.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'CI/CD', 'Payment Gateway'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    image: 'https://placehold.co/600x400.png', 
    imageHint: 'delivery tracking map interface',
  },
   {
    title: 'Praxis (Paladin)',
    description:
      'A real-time appointment booking app connecting patients and doctors seamlessly using React Native, Node.js, and WebSocket. Features integrated push notifications and real-time updates, boosting user engagement by 45%.',
    tags: ['React Native', 'Node.js', 'WebSocket', 'Redux Toolkit', 'Push Notifications'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    image: 'https://placehold.co/600x400.png',
    imageHint: 'appointment mobile doctor patient',
  },
  {
    title: 'BSF Sale (Micromen)',
    description:
      'Real estate sales CRM application for managing leads, properties, and transactions within the BSF suite. Built with React Native and Node.js, optimized state handling with Redux Toolkit & RTK Query.',
    tags: ['React Native', 'Node.js', 'CRM', 'Real Estate', 'Redux Toolkit', 'RTK Query'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://apps.apple.com/in/app/bsfsale/id6502038086',
    image: 'https://placehold.co/600x400.png', 
    imageHint: 'real estate crm mobile sales',
  },
   {
    title: 'BSF ESS (Micromen)',
    description:
      'Employee Self-Service portal built with React Native and Node.js for HR management within the BSF real estate application suite.',
    tags: ['React Native', 'Node.js', 'HRMS', 'Real Estate', 'Employee Portal'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://apps.apple.com/in/app/bsfess/id6741994244',
    image: 'https://placehold.co/600x400.png', 
    imageHint: 'employee self service mobile hr',
  },
  {
    title: 'BSF Asset (Micromen)',
    description:
      'Asset management application tailored for real estate property tracking within the BSF suite, developed using React Native and Node.js.',
    tags: ['React Native', 'Node.js', 'Asset Management', 'Real Estate'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://apps.apple.com/in/app/bsfasset/id6733239830',
    image: 'https://placehold.co/600x400.png', 
    imageHint: 'asset management mobile dashboard',
  },
  {
    title: 'BSF AtSite (Micromen)',
    description:
      'On-site management tool built with React Native and Node.js for real estate project tracking and updates as part of the BSF suite.',
    tags: ['React Native', 'Node.js', 'Site Management', 'Real Estate'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://apps.apple.com/in/app/bsfatsite/id6711351231',
    image: 'https://placehold.co/600x400.png', 
    imageHint: 'site management mobile construction',
  },
   {
    title: 'BSF Admin (Micromen)',
    description:
      'Administrative control panel built with React Native and Node.js for managing the BSF suite of real estate applications.',
    tags: ['React Native', 'Node.js', 'Admin Panel', 'Real Estate'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://apps.apple.com/in/app/bsfadmin/id6618151123',
    image: 'https://placehold.co/600x400.png', 
    imageHint: 'admin dashboard mobile control',
  },
   {
    title: 'RAM Real Estate',
    description:
      'Web application developed with Next.js to showcase real estate properties, featuring listings and property details. Deployed on Vercel.',
    tags: ['Next.js', 'React', 'Vercel', 'Real Estate', 'Web Application'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder link, replace if actual exists
    liveUrl: 'https://ram-realestate.vercel.app/',
    image: 'https://placehold.co/600x400.png', 
    imageHint: 'real estate website property',
  },
  {
    title: 'Zoro Tech Landing Page',
    description:
      'Developed the official company website and landing page for Zoro Tech, showcasing their services and brand identity.',
    tags: ['Web Development', 'Landing Page', 'Company Site', 'HTML', 'CSS', 'JavaScript'], // Added generic tags
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder link, replace if actual exists
    liveUrl: 'https://zoro-tech.com/',
    image: 'https://placehold.co/600x400.png', 
    imageHint: 'technology company website modern',
  },
  {
    title: 'Arkova Technologies Landing Page',
    description:
      'Developed the official company website and landing page for Arkova Technologies, presenting their solutions and expertise.',
    tags: ['Web Development', 'Landing Page', 'Company Site', 'HTML', 'CSS', 'JavaScript'], // Added generic tags
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder link, replace if actual exists
    liveUrl: 'https://www.arkovatechnologies.com/',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'technology website professional interface',
  },
];

const ProjectsSection: React.FC = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const { toast } = useToast();

  const handleOptimizeClick = async () => {
    setIsOptimizing(true);
    try {
      // Prepare input for AI analysis
      const portfolioContent = JSON.stringify(initialProjects.map(p => ({ title: p.title, description: p.description, tags: p.tags })));
      const userGoals = "Showcase full-stack development skills, highlight modern tech stack usage (React Native, Node.js, MERN, Next.js), attract potential employers in mobile and web development.";

      const suggestions = await optimizePortfolio({ portfolioContent, userGoals });

      // Display suggestions (example using toast)
      toast({
        title: "AI Optimization Suggestions",
        description: (
          <div className="text-sm max-h-60 overflow-y-auto">
            <p className="font-semibold mb-1 text-primary">Layout:</p> <p className="mb-2 text-foreground/90">{suggestions.suggestedLayout}</p>
            <p className="font-semibold mb-1 text-primary">Wording:</p> <p className="mb-2 text-foreground/90">{suggestions.suggestedWording}</p>
            <p className="font-semibold mb-1 text-primary">Colors:</p> <p className="mb-2 text-foreground/90">{suggestions.suggestedColorSchemes}</p>
            <p className="font-semibold mb-1 text-primary">Animations:</p> <p className="text-foreground/90">{suggestions.suggestedAnimations}</p>
          </div>
        ),
        duration: 30000, // Show for longer
      });

    } catch (error) {
      console.error("Error optimizing portfolio:", error);
      toast({
        title: "Optimization Failed",
        description: "Could not get AI suggestions at this time.",
        variant: "destructive",
      });
    } finally {
      setIsOptimizing(false);
    }
  };


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  };

  // Determine grid columns based on the number of projects
  const gridColsClass = initialProjects.length > 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';

  return (
    <div className="w-full max-w-7xl mx-auto"> {/* Wider max-width */}
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10"> {/* Adjusted alignment and margin */}
        <SectionHeading className="mb-4 sm:mb-0" sectionNumber="03.">Some Things I've Built</SectionHeading>
         <Button onClick={handleOptimizeClick} disabled={isOptimizing} size="sm" className="shadow-sm hover:shadow-md transition-shadow"> {/* Changed variant, size */}
          {isOptimizing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Optimizing...
            </>
          ) : (
            <>
             <Wand2 className="mr-2 h-4 w-4" /> Optimize with AI {/* Added icon */}
            </>
          )}
        </Button>
      </div>

      <motion.div
        className={`grid grid-cols-1 md:grid-cols-2 ${gridColsClass} gap-6`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.1}}
      >
        {initialProjects.map((project, index) => (
          <motion.div key={project.title} variants={itemVariants}> {/* Use project title as key */}
            {/* Card styling improvements */}
            <Card className="h-full flex flex-col bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1.5">
              {/* Image Placeholder with next/image */}
              <div className="relative h-48 w-full overflow-hidden">
                 <Image
                    src={project.image}
                    alt={project.title}
                    fill // Use fill instead of layout="fill" and objectFit
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" // Add sizes prop
                    style={{ objectFit: 'cover' }} // Use inline style for objectFit
                    className="transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint} // Use specific hint
                    priority={index < 3} // Prioritize loading first few images
                 />
                 {/* Gradient overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <CardHeader className="pb-3 pt-4 px-5"> {/* Adjusted padding */}
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pb-4 px-5"> {/* Adjusted padding */}
                <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3"> {/* Line clamp description */}
                  {project.description}
                </CardDescription>
                {/* Tag styling */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs font-medium border-primary/40 text-primary/90 hover:bg-primary/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {/* Footer styling */}
              <CardFooter className="flex justify-end space-x-2 pt-2 pb-4 px-5 border-t border-border/30 mt-auto"> {/* Added border, spacing */}
                {project.githubUrl && (
                  <Link href={project.githubUrl} passHref legacyBehavior target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub Repository`}>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
                {project.liveUrl && (
                  <Link href={project.liveUrl} passHref legacyBehavior target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Link`}>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
