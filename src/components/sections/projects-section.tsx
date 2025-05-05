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
import {Github, ExternalLink} from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';
import {motion} from 'framer-motion';
import {optimizePortfolio} from '@/ai/flows/portfolio-optimization';
import {useToast} from '@/hooks/use-toast';
import {Loader2} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

// Updated with user's projects
const initialProjects: Project[] = [
  {
    title: 'Praxis',
    description:
      'A real-time appointment booking app connecting patients and doctors seamlessly. Features integrated push notifications and real-time updates.',
    tags: ['React Native', 'Node.js', 'WebSocket', 'Redux Toolkit', 'Push Notifications'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder - update if available
    // liveUrl: '#', // Add live URL if available
    image: 'https://picsum.photos/seed/praxis-app/600/400',
  },
  {
    title: 'BSF',
    description:
      'A real estate mobile application for property listings and secure transaction management. Optimized state handling with Redux Toolkit & RTK Query.',
    tags: ['React Native', 'Redux Toolkit', 'RTK Query', 'Firebase', 'Secure Transactions'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder - update if available
    // liveUrl: '#', // Add live URL if available
    image: 'https://picsum.photos/seed/bsf-app/600/400',
  },
   {
    title: 'Delivery Application',
    description:
      'A robust MERN stack delivery application enabling real-time order tracking, route optimization, secure payments, and notification systems.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'CI/CD', 'Payment Gateway'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder - update if available
    // liveUrl: '#', // Add live URL if available
    image: 'https://picsum.photos/seed/delivery-app/600/400',
  },
  {
    title: 'CRM Application',
    description:
      'Feature-rich CRM application built with React Native and Node.js, featuring optimized backend architecture for enhanced customer engagement.',
    tags: ['React Native', 'Node.js', 'Jest', 'React Testing Library', 'API Optimization'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder - update if available
    // liveUrl: '#', // Add live URL if available
    image: 'https://picsum.photos/seed/crm-app/600/400',
  },
  // Add more projects if needed, or remove if fewer than 4
];

const ProjectsSection: React.FC = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const { toast } = useToast();

  const handleOptimizeClick = async () => {
    setIsOptimizing(true);
    try {
      // Prepare input for AI analysis (can be more detailed)
      const portfolioContent = JSON.stringify(initialProjects.map(p => ({ title: p.title, description: p.description, tags: p.tags })));
      const userGoals = "Showcase full-stack development skills, highlight modern tech stack usage (React Native, Node.js, MERN), attract potential employers in mobile and web development.";

      const suggestions = await optimizePortfolio({ portfolioContent, userGoals });

      // Display suggestions (example using toast)
      toast({
        title: "AI Optimization Suggestions",
        description: (
          <div className="text-sm max-h-60 overflow-y-auto">
            <p className="font-semibold mb-1">Layout:</p> <p className="mb-2">{suggestions.suggestedLayout}</p>
            <p className="font-semibold mb-1">Wording:</p> <p className="mb-2">{suggestions.suggestedWording}</p>
            <p className="font-semibold mb-1">Colors:</p> <p className="mb-2">{suggestions.suggestedColorSchemes}</p>
            <p className="font-semibold mb-1">Animations:</p> <p>{suggestions.suggestedAnimations}</p>
          </div>
        ),
        duration: 20000, // Show for longer
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

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-8">
        <SectionHeading>Some Things I've Built</SectionHeading>
         <Button onClick={handleOptimizeClick} disabled={isOptimizing} variant="outline" size="sm">
          {isOptimizing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Optimizing...
            </>
          ) : (
            'Optimize with AI'
          )}
        </Button>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.1}}
      >
        {initialProjects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full flex flex-col bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden group transform hover:-translate-y-1">
              {/* Image Placeholder - Replace with actual images later */}
              <div className="relative h-48 w-full overflow-hidden">
                 <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    // Added more specific hints based on project types
                    data-ai-hint={
                      project.title === 'Praxis' ? 'appointment booking mobile app' :
                      project.title === 'BSF' ? 'real estate mobile app interface' :
                      project.title === 'Delivery Application' ? 'delivery tracking map interface' :
                      project.title === 'CRM Application' ? 'customer relationship management dashboard' :
                      'project screenshot code interface'
                    }
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pb-4">
                <CardDescription className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-3 pt-0 pb-4 px-4">
                {project.githubUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  </Button>
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
