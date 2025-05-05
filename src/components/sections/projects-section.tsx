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

const initialProjects: Project[] = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: '#', // Placeholder
    image: 'https://picsum.photos/seed/ecommerce/600/400',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application allowing users to create projects, assign tasks, and track progress.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    image: 'https://picsum.photos/seed/taskapp/600/400',
  },
  {
    title: 'Portfolio Website V1',
    description:
      'My previous portfolio website showcasing earlier projects and skills. Built with focus on performance and animations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    liveUrl: '#', // Placeholder
    image: 'https://picsum.photos/seed/portfolio/600/400',
  },
   {
    title: 'Data Visualization Dashboard',
    description:
      'An interactive dashboard for visualizing complex datasets using various chart types and filtering options.',
    tags: ['React', 'D3.js', 'Redux', 'Material UI'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: '#', // Placeholder
    image: 'https://picsum.photos/seed/dataviz/600/400',
  },
];

const ProjectsSection: React.FC = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const { toast } = useToast();

  const handleOptimizeClick = async () => {
    setIsOptimizing(true);
    try {
      // Prepare input for AI analysis (can be more detailed)
      const portfolioContent = JSON.stringify(initialProjects.map(p => ({ title: p.title, description: p.description, tags: p.tags })));
      const userGoals = "Showcase full-stack development skills, highlight modern tech stack usage, attract potential employers.";

      const suggestions = await optimizePortfolio({ portfolioContent, userGoals });

      // Display suggestions (example using toast)
      toast({
        title: "AI Optimization Suggestions",
        description: (
          <div className="text-sm">
            <p><strong>Layout:</strong> {suggestions.suggestedLayout}</p>
            <p><strong>Wording:</strong> {suggestions.suggestedWording}</p>
            <p><strong>Colors:</strong> {suggestions.suggestedColorSchemes}</p>
            <p><strong>Animations:</strong> {suggestions.suggestedAnimations}</p>
          </div>
        ),
        duration: 15000, // Show for longer
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
                    data-ai-hint="project screenshot code"
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
