
'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image
import {Button, buttonVariants} from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle, 
  SheetTrigger,
} from '@/components/ui/sheet';
import {Menu, X, Download} from 'lucide-react';
import {motion} from 'framer-motion';
import {cn} from '@/lib/utils';

const navItems = [
  {name: 'About', href: '#about'},
  {name: 'Experience', href: '#experience'},
  {name: 'Projects', href: '#projects'},
  {name: 'Skills', href: '#skills'},
  {name: 'Contact', href: '#contact'},
];

const resumeUrl = "https://drive.google.com/file/d/1jT-mCY__l-QYzECUoaIDowJRsGxSJPlP/view?usp=drive_link";
const profileImageUrl = "https://media.licdn.com/dms/image/v2/D5603AQG_4dylBvX4UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1675790558997?e=1754524800&v=beta&t=cvWyMrrBZldAP-mu946GTSIbhrauMsBLCSUHeIq802M";

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
      
      const headerOffset = 80; 

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            const buffer = window.innerHeight * 0.4; 
            if (currentScrollY >= sectionElement.offsetTop - headerOffset - buffer) {
                currentSection = sectionId;
                break;
            }
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
        const headerOffset = 80; 
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20', 
        isScrolled
          ? 'bg-background/90 backdrop-blur-lg shadow-xl' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        <Link href="#hero" passHref legacyBehavior>
          <a
            onClick={(e) => handleNavLinkClick(e, '#hero')}
            className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src={profileImageUrl}
              alt="Berlin Joe L - Logo"
              width={40} 
              height={40}
              className="rounded-full object-cover"
              priority
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-6">
          {navItems.map((item, index) => (
            <Link key={item.name} href={item.href} passHref legacyBehavior>
              <motion.a
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.3, delay: 0.1 * index}}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className={cn(
                  'text-sm transition-colors duration-300 relative py-1 group', 
                  activeSection === item.href.substring(1)
                    ? 'text-primary font-semibold'
                    : 'text-foreground/70 hover:text-primary font-medium'
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
            <Link
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                "group"
              )}
            >
              Resume <Download className="ml-1.5 h-4 w-4 group-hover:animate-bounce" />
            </Link>
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
                "text-primary hover:bg-accent/50 rounded-md"
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
                     className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
                   >
                     <Image
                        src={profileImageUrl}
                        alt="Berlin Joe L - Logo"
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                      />
                   </a>
                 </Link>
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="text-foreground hover:bg-accent/50 rounded-md"
                   aria-label="Close menu"
                 >
                   <X className="h-6 w-6" />
                   <span className="sr-only">Close menu</span>
                 </Button>
               </div>
                <nav className="flex flex-col space-y-4 p-6 mt-2 flex-grow">
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href} passHref legacyBehavior>
                      <a
                        onClick={(e) => handleNavLinkClick(e, item.href)}
                        className={cn(
                          'text-base font-medium transition-colors duration-300 py-2.5 px-4 text-center rounded-md',
                           activeSection === item.href.substring(1)
                            ? 'text-primary bg-primary/10 font-semibold ring-1 ring-primary/50' 
                            : 'text-foreground hover:text-primary hover:bg-accent/50'
                        )}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                   <Link
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: 'outline' }),
                        "mt-auto w-full group"
                      )}
                    >
                    Resume <Download className="ml-1.5 h-4 w-4 group-hover:animate-bounce" />
                  </Link>
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
