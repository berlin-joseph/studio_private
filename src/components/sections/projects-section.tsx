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
  imageHint: string; // Added for data-ai-hint
}

// Updated with user's projects and details
const initialProjects: Project[] = [
  {
    title: 'Delivery Application (Feather)',
    description:
      'A robust MERN stack delivery application enabling real-time order tracking, route optimization, secure payments, and notification systems.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'CI/CD', 'Payment Gateway'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    image: 'https://picsum.photos/seed/delivery-app/600/400',
    imageHint: 'delivery tracking map interface',
  },
   {
    title: 'Praxis (Paladin)',
    description:
      'A real-time appointment booking app connecting patients and doctors seamlessly. Features integrated push notifications and real-time updates.',
    tags: ['React Native', 'Node.js', 'WebSocket', 'Redux Toolkit', 'Push Notifications'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    image: 'https://picsum.photos/seed/praxis-app/600/400',
    imageHint: 'appointment booking mobile app',
  },
  {
    title: 'BSF Sale (Micromen)',
    description:
      'Real estate sales CRM application for managing leads, properties, and transactions within the BSF suite.',
    tags: ['React Native', 'Node.js', 'CRM', 'Real Estate'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://apps.apple.com/in/app/bsfsale/id6502038086',
    image: 'https://picsum.photos/seed/bsf-sale-crm/600/400',
    imageHint: 'real estate crm mobile',
  },
   {
    title: 'BSF ESS (Micromen)',
    description:
      'Employee Self-Service portal for HR management within the BSF real estate application suite.',
    tags: ['React Native', 'Node.js', 'HRMS', 'Real Estate', 'Employee Portal'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://apps.apple.com/in/app/bsfess/id6741994244',
    image: 'https://picsum.photos/seed/bsf-ess-hr/600/400',
    imageHint: 'employee self service mobile',
  },
  {
    title: 'BSF Asset (Micromen)',
    description:
      'Asset management application tailored for real estate property tracking within the BSF suite.',
    tags: ['React Native', 'Node.js', 'Asset Management', 'Real Estate'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://apps.apple.com/in/app/bsfasset/id6733239830',
    image: 'https://picsum.photos/seed/bsf-asset-manage/600/400',
    imageHint: 'asset management mobile',
  },
  {
    title: 'BSF AtSite (Micromen)',
    description:
      'On-site management tool for real estate project tracking and updates as part of the BSF suite.',
    tags: ['React Native', 'Node.js', 'Site Management', 'Real Estate'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://apps.apple.com/in/app/bsfatsite/id6711351231',
    image: 'https://picsum.photos/seed/bsf-atsite-track/600/400',
    imageHint: 'site management mobile',
  },
   {
    title: 'BSF Admin (Micromen)',
    description:
      'Administrative control panel for managing the BSF suite of real estate applications.',
    tags: ['React Native', 'Node.js', 'Admin Panel', 'Real Estate'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://apps.apple.com/in/app/bsfadmin/id6618151123',
    image: 'https://picsum.photos/seed/bsf-admin-panel/600/400',
    imageHint: 'admin dashboard mobile',
  },
   {
    title: 'RAM Real Estate',
    description:
      'Web application developed to showcase real estate properties, featuring listings and property details.',
    tags: ['Next.js', 'React', 'Vercel', 'Real Estate', 'Web Application'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://ram-realestate.vercel.app/',
    image: 'https://picsum.photos/seed/ram-realestate-web/600/400',
    imageHint: 'real estate website listing',
  },
  {
    title: 'Zoro Tech Landing Page',
    description:
      'Developed the official company website and landing page for Zoro Tech.',
    tags: ['Web Development', 'Landing Page', 'Company Site'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://zoro-tech.com/',
    image: 'https://picsum.photos/seed/zoro-tech-landing/600/400',
    imageHint: 'technology company website',
  },
  {
    title: 'Arkova Technologies Landing Page',
    description:
      'Developed the official company website and landing page for Arkova Technologies.',
    tags: ['Web Development', 'Landing Page', 'Company Site'],
    githubUrl: 'https://github.com/berlin-joseph', // Placeholder
    liveUrl: 'https://www.arkovatechnologies.com/',
    image: 'https://picsum.photos/seed/arkova-tech-landing/600/400',
    imageHint: 'technology website interface',
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

  // Determine grid columns based on the number of projects
  const gridColsClass = initialProjects.length > 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';

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
        className={`grid grid-cols-1 md:grid-cols-2 ${gridColsClass} gap-6`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.1}}
      >
        {initialProjects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full flex flex-col bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden group transform hover:-translate-y-1">
              {/* Image Placeholder */}
              <div className="relative h-48 w-full overflow-hidden">
                 <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint} // Use specific hint
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
                      aria-label={`${project.title} Live Link`}
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
