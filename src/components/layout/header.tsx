
'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {Button, buttonVariants} from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle, // Imported SheetTitle
} from '@/components/ui/sheet';
import {Menu, X} from 'lucide-react';
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

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const sectionElement = document.getElementById(sectionId);
        const offset = 100;
        if (sectionElement && currentScrollY >= sectionElement.offsetTop - offset) {
            currentSection = sectionId;
            break;
        }
      }
      setActiveSection(currentSection);
    };


    window.addEventListener('scroll', handleScroll);
    handleScroll();

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
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 0.5, ease: 'easeOut'}}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-full">
        <Link href="#hero" passHref legacyBehavior>
          <a
            onClick={(e) => handleNavLinkClick(e, '#hero')}
            className="text-xl sm:text-2xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors duration-300"
          >
            BJL
          </a>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <Link key={item.name} href={item.href} passHref legacyBehavior>
              <motion.a
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.3, delay: 0.1 * index}}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className={cn(
                  'text-sm transition-colors duration-300 relative py-1',
                  activeSection === item.href.substring(1)
                    ? 'text-primary font-semibold'
                    : 'text-foreground/70 hover:text-primary font-medium'
                )}
              >
                {item.name}
              </motion.a>
            </Link>
          ))}
          <motion.div
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.3, delay: 0.1 * navItems.length}}
          >
            <Button variant="outline" size="sm">
              Resume
            </Button>
          </motion.div>
        </nav>

        <div className="md:hidden">
          <Sheet
            open={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
          >
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "text-primary hover:bg-accent"
              )}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-0 flex flex-col">
               <div className="flex justify-between items-center p-4 border-b border-border h-20">
                 <SheetTitle className="sr-only">Navigation Menu</SheetTitle> {/* Added sr-only SheetTitle */}
                 <Link href="#hero" passHref legacyBehavior>
                   <a
                     onClick={(e) => handleNavLinkClick(e, '#hero')}
                     className="text-xl font-bold text-primary"
                   >
                     BJL
                   </a>
                 </Link>
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="text-foreground hover:bg-accent"
                   aria-label="Close menu"
                 >
                   <X className="h-6 w-6" />
                   <span className="sr-only">Close menu</span>
                 </Button>
               </div>
                <nav className="flex flex-col space-y-5 p-6 mt-4 flex-grow">
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href} passHref legacyBehavior>
                      <a
                        onClick={(e) => handleNavLinkClick(e, item.href)}
                        className={cn(
                          'text-base font-medium transition-colors duration-300 py-2 text-center rounded-md',
                           activeSection === item.href.substring(1)
                            ? 'text-primary bg-accent font-semibold'
                            : 'text-foreground hover:text-primary hover:bg-accent/50'
                        )}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                   <Button variant="outline" className="mt-auto w-full">
                    Resume
                  </Button>
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
