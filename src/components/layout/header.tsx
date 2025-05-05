'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
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
      setIsScrolled(window.scrollY > 50);

      let currentSection = 'hero';
      navItems.forEach((item) => {
        const section = document.getElementById(item.href.substring(1));
        if (section && window.scrollY >= section.offsetTop - 100) {
          // Adjust offset as needed
          currentSection = item.href.substring(1);
        }
      });
      // Check hero section explicitly
      const heroSection = document.getElementById('hero');
      if (heroSection && window.scrollY < heroSection.offsetHeight - 100) {
        currentSection = 'hero';
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state

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
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust offset for fixed header
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <motion.header
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 0.5, ease: 'easeOut'}}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="#hero" passHref legacyBehavior>
          <a
            onClick={(e) => handleNavLinkClick(e, '#hero')}
            className="text-2xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors"
          >
            BJL
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link key={item.name} href={item.href} passHref legacyBehavior>
              <motion.a
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.3, delay: 0.1 * index}}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className={cn(
                  'text-sm font-medium transition-colors relative',
                  activeSection === item.href.substring(1)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                )}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 block h-[2px] w-full bg-primary"
                    transition={{type: 'spring', stiffness: 300, damping: 30}}
                  />
                )}
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

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet
            open={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
          >
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-background">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
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
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4 p-4 mt-6">
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href} passHref legacyBehavior>
                      <a
                        onClick={(e) => handleNavLinkClick(e, item.href)}
                        className={cn(
                          'text-lg font-medium transition-colors',
                          activeSection === item.href.substring(1)
                            ? 'text-primary'
                            : 'text-foreground hover:text-primary'
                        )}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <Button variant="outline" className="mt-6">
                    Resume
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
