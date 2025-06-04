
// @ts-nocheck
'use client';
import React, {useState} from 'react';
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
import {Github, ExternalLink, Loader2, Wand2, FolderGit2} from 'lucide-react'; // Added FolderGit2
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
  icon?: React.ElementType; // Optional icon for the project card
}

const initialProjects: Project[] = [
  {
    title: 'Delivery Application (Feather)',
    description:
      'A comprehensive MERN stack delivery platform featuring real-time order tracking, dynamic route optimization for enhanced efficiency, secure payment integrations, and an automated notification system, designed to streamline logistics and improve user experience.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'CI/CD', 'Payment Gateway'],
    githubUrl: 'https://github.com/berlin-joseph',
    icon: FolderGit2,
  },
   {
    title: 'Praxis (Paladin)',
    description:
      'An innovative real-time appointment booking application built with React Native and Node.js, seamlessly connecting patients and doctors. Features integrated push notifications and live updates, resulting in a 45% boost in user engagement.',
    tags: ['React Native', 'Node.js', 'WebSocket', 'Redux Toolkit', 'Push Notifications'],
    githubUrl: 'https://github.com/berlin-joseph',
    icon: FolderGit2,
  },
  {
    title: 'BSF Sale (Micromen)',
    description:
      'A specialized real estate sales CRM application, part of the BSF suite, for managing leads, properties, and transactions. Developed with React Native and Node.js, featuring optimized state handling via Redux Toolkit & RTK Query.',
    tags: ['React Native', 'Node.js', 'CRM', 'Real Estate', 'Redux Toolkit'], // Removed RTK Query for brevity as it's part of Redux Toolkit ecosystem
    githubUrl: 'https://github.com/berlin-joseph',
    liveUrl: 'https://apps.apple.com/in/app/bsfsale/id6502038086',
    icon: FolderGit2,
  },
   {
    title: 'BSF ESS (Micromen)',
    description:
      'An Employee Self-Service (ESS) portal developed with React Native and Node.js, designed for efficient HR management and employee interactions within the BSF real estate application ecosystem.',
    tags: ['React Native', 'Node.js', 'HRMS', 'Real Estate', 'Employee Portal'],
    githubUrl: 'https://github.com/berlin-joseph',
    liveUrl: 'https://apps.apple.com/in/app/bsfess/id6741994244',
    icon: FolderGit2,
  },
  {
    title: 'BSF Asset (Micromen)',
    description:
      'A dedicated asset management application tailored for comprehensive real estate property tracking and inventory control, integrated into the BSF suite. Built using React Native and Node.js.',
    tags: ['React Native', 'Node.js', 'Asset Management', 'Real Estate'],
    githubUrl: 'https://github.com/berlin-joseph',
    liveUrl: 'https://apps.apple.com/in/app/bsfasset/id6733239830',
    icon: FolderGit2,
  },
  {
    title: 'BSF AtSite (Micromen)',
    description:
      'An on-site management tool developed with React Native and Node.js, facilitating real estate project tracking, task assignments, and progress updates directly from construction sites, as part of the BSF suite.',
    tags: ['React Native', 'Node.js', 'Site Management', 'Real Estate'],
    githubUrl: 'https://github.com/berlin-joseph',
    liveUrl: 'https://apps.apple.com/in/app/bsfatsite/id6711351231',
    icon: FolderGit2,
  },
   {
    title: 'BSF Admin (Micromen)',
    description:
      'A powerful administrative control panel built using React Native and Node.js, providing centralized management and configuration capabilities for the entire BSF suite of real estate applications.',
    tags: ['React Native', 'Node.js', 'Admin Panel', 'Real Estate'],
    githubUrl: 'https://github.com/berlin-joseph',
    liveUrl: 'https://apps.apple.com/in/app/bsfadmin/id6618151123',
    icon: FolderGit2,
  },
   {
    title: 'RAM Real Estate',
    description:
      'A modern web application developed with Next.js to showcase real estate properties, featuring dynamic listings, detailed property views, and a user-friendly interface. Deployed on Vercel for optimal performance.',
    tags: ['Next.js', 'React', 'Vercel', 'Real Estate', 'Web App'], // Shortened Web Application to Web App
    githubUrl: 'https://github.com/berlin-joseph', 
    liveUrl: 'https://ram-realestate.vercel.app/',
    icon: FolderGit2,
  },
  {
    title: 'Zoro Tech Landing Page',
    description:
      'Developed the official company website and primary landing page for Zoro Tech, effectively showcasing their diverse range of services, brand identity, and value proposition to potential clients.',
    tags: ['Web Dev', 'Landing Page', 'Company Site', 'HTML', 'CSS', 'JS'], // Shortened tags
    githubUrl: 'https://github.com/berlin-joseph',
    liveUrl: 'https://zoro-tech.com/',
    icon: FolderGit2,
  },
  {
    title: 'Arkova Technologies Landing Page',
    description:
      'Designed and developed the official company website and landing page for Arkova Technologies, strategically presenting their technological solutions, industry expertise, and client success stories.',
    tags: ['Web Dev', 'Landing Page', 'Company Site', 'HTML', 'CSS', 'JS'], // Shortened tags
    githubUrl: 'https://github.com/berlin-joseph',
    liveUrl: 'https://www.arkovatechnologies.com/',
    icon: FolderGit2,
  },
];

const ProjectsSection: React.FC = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const { toast } = useToast();

  const handleOptimizeClick = async () => {
    setIsOptimizing(true);
    try {
      const portfolioContent = JSON.stringify(initialProjects.map(p => ({ title: p.title, description: p.description, tags: p.tags })));
      const userGoals = "Showcase full-stack development skills, highlight modern tech stack usage (React Native, Node.js, MERN, Next.js), attract potential employers in mobile and web development.";

      const suggestions = await optimizePortfolio({ portfolioContent, userGoals });

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
        duration: 30000, 
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

  const gridColsClass = initialProjects.length > 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';

  return (
    <div className="w-full max-w-7xl mx-auto">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 sm:mb-12">
        <SectionHeading className="mb-4 sm:mb-0" sectionNumber="03.">Things I've Built</SectionHeading> {/* Slightly rephrased */}
         <Button onClick={handleOptimizeClick} disabled={isOptimizing} size="sm" className="shadow-md hover:shadow-primary/30 transition-shadow group">
          {isOptimizing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Optimizing...
            </>
          ) : (
            <>
             <Wand2 className="mr-2 h-4 w-4 group-hover:animate-sparkle" /> {/* Added sparkle animation suggestion */}
             Optimize with AI
            </>
          )}
        </Button>
      </div>

      <motion.div
        className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-6`} // Use sm for 2 columns earlier
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.05}} // Trigger animation sooner
      >
        {initialProjects.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <Card className={cn(
                "h-full flex flex-col bg-card border-border/70", // Slightly more opaque card
                "hover:border-primary/60 shadow-lg hover:shadow-primary/20", 
                "transition-all duration-300 group transform hover:-translate-y-1.5 rounded-lg overflow-hidden" // Increased translate and rounded-lg
              )}>
              <CardHeader className="pb-3 pt-5 px-5">
                <div className="flex justify-between items-start mb-2">
                    {project.icon && <project.icon className="h-8 w-8 text-primary/80" />}
                    <div className="flex space-x-1.5">
                        {project.githubUrl && (
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub Repository`}>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary h-7 w-7">
                              <Github className="h-4 w-4" />
                            </Button>
                          </Link>
                        )}
                        {project.liveUrl && (
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Link`}>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary h-7 w-7">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </Link>
                        )}
                    </div>
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pb-4 px-5">
                <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed"> {/* Adjusted line-clamp and leading */}
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-3 pb-4 px-5 border-t border-border/50 mt-auto"> {/* Use flex-wrap for tags */}
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" // Changed to secondary for a softer look
                      className="text-xs font-medium border-transparent text-secondary-foreground/80"
                    >
                      {tag}
                    </Badge>
                  ))}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
