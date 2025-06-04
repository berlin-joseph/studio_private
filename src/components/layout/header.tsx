
'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {Button, buttonVariants} from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import {Menu, X, Download} from 'lucide-react'; // Added Download
import {motion} from 'framer-motion';
import {cn} from '@/lib/utils';

const navItems = [
  {name: 'About', href: '#about'},
  {name: 'Experience', href: '#experience'},
  {name: 'Projects', href: '#projects'},
  {name: 'Skills', href: '#skills'},
  {name: 'Contact', href: '#contact'},
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      let currentSection = 'hero';
      const sections = [
        'hero',
        ...navItems.map(item => item.href.substring(1)),
      ];
      
      const headerOffset = 80; // Height of the header

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            // Adjust for sections that are near the bottom of the page
            const buffer = window.innerHeight * 0.4; // 40% of viewport height as buffer
            if (currentScrollY >= sectionElement.offsetTop - headerOffset - buffer) {
                currentSection = sectionId;
                break;
            }
        }
      }
      setActiveSection(currentSection);
    };


    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const headerOffset = 80; // Height of the header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 0.5, ease: 'easeOut'}}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20', // Standardized height
        isScrolled
          ? 'bg-background/90 backdrop-blur-lg shadow-xl' // Enhanced shadow and blur
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full"> {/* Standardized padding */}
        <Link href="#hero" passHref legacyBehavior>
          <a
            onClick={(e) => handleNavLinkClick(e, '#hero')}
            className="text-2xl sm:text-3xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors duration-300" // Slightly larger logo
          >
            BJL
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-6"> {/* Adjusted spacing */}
          {navItems.map((item, index) => (
            <Link key={item.name} href={item.href} passHref legacyBehavior>
              <motion.a
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.3, delay: 0.1 * index}}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className={cn(
                  'text-sm font-medium transition-colors duration-300 relative py-1 group', 
                  activeSection === item.href.substring(1)
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary'
                )}
              >
                {item.name}
                <span className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    activeSection === item.href.substring(1) ? "w-full" : "w-0"
                )}></span>
              </motion.a>
            </Link>
          ))}
          <motion.div
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.3, delay: 0.1 * navItems.length}}
          >
            <Button variant="outline" size="sm" className="group">
              Resume <Download className="ml-1.5 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet
            open={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
          >
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "text-primary hover:bg-accent/50 rounded-md" // Added rounded-md
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-0 flex flex-col shadow-2xl">
               <div className="flex justify-between items-center p-4 border-b border-border h-20">
                 <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                 <Link href="#hero" passHref legacyBehavior>
                   <a
                     onClick={(e) => handleNavLinkClick(e, '#hero')}
                     className="text-2xl font-bold text-primary"
                   >
                     BJL
                   </a>
                 </Link>
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="text-foreground hover:bg-accent/50 rounded-md" // Added rounded-md
                   aria-label="Close menu"
                 >
                   <X className="h-6 w-6" />
                   <span className="sr-only">Close menu</span>
                 </Button>
               </div>
                <nav className="flex flex-col space-y-4 p-6 mt-2 flex-grow"> {/* Reduced space-y and mt */}
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href} passHref legacyBehavior>
                      <a
                        onClick={(e) => handleNavLinkClick(e, item.href)}
                        className={cn(
                          'text-base font-medium transition-colors duration-300 py-2.5 px-4 text-center rounded-md', // Increased padding
                           activeSection === item.href.substring(1)
                            ? 'text-primary bg-primary/10 font-semibold ring-1 ring-primary/50' // Enhanced active state
                            : 'text-foreground hover:text-primary hover:bg-accent/50'
                        )}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                   <Button variant="outline" className="mt-auto w-full group"> {/* Ensure button is at bottom */}
                    Resume <Download className="ml-1.5 h-4 w-4 group-hover:animate-bounce" />
                  </Button>
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
