
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {cn} from '@/lib/utils';
import {Toaster} from '@/components/ui/toaster';
import {Providers} from './providers'; // Import Providers

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const profileImageUrl = "https://media.licdn.com/dms/image/v2/D5603AQG_4dylBvX4UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1675790558997?e=1754524800&v=beta&t=cvWyMrrBZldAP-mu946GTSIbhrauMsBLCSUHeIq802M";


export const metadata: Metadata = {
  title: "Berlin Joe L - Full-Stack Developer | React, Next.js, AI/ML Expert",
  description: "Berlin Joe L's official portfolio. A skilled Full-Stack Software Developer specializing in scalable, user-centric web and mobile applications using React, Next.js, Node.js, AI/ML, and DevOps practices. Explore projects and experience.",
  keywords: ['Berlin Joe L', 'Full-Stack Developer', 'Software Engineer', 'React Developer', 'Next.js', 'Node.js', 'MERN Stack', 'PERN Stack', 'AI', 'ML', 'Web3', 'DevOps', 'AWS', 'Portfolio', 'Web Developer', 'Mobile Developer'],
  icons: {
    icon: profileImageUrl,
    shortcut: profileImageUrl,
    apple: profileImageUrl,
  },
  openGraph: {
    title: "Berlin Joe L - Full-Stack Developer Portfolio",
    description: "Explore the portfolio of Berlin Joe L, a Full-Stack Developer creating innovative web and mobile solutions.",
    url: '/', 
    siteName: "Berlin Joe L's Portfolio",
    images: [
      {
        url: profileImageUrl, 
        width: 200, // Using actual shrink dimensions from URL
        height: 200,
        alt: 'Berlin Joe L Profile Picture',
      },
      { // Optional: A larger version for better OG preview if available, otherwise use placeholder
        url: 'https://placehold.co/1200x630.png', 
        width: 1200,
        height: 630,
        alt: 'Berlin Joe L Portfolio Social Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Berlin Joe L - Full-Stack Developer Portfolio",
    description: "Discover Berlin Joe L's work as a Full-Stack Developer, showcasing projects in React, Next.js, AI/ML, and more.",
    images: [profileImageUrl, 'https://placehold.co/1200x630.png'], 
    // creator: '@yourtwitterhandle', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          'bg-background text-foreground'
        )}
      >
        <Providers>{children}</Providers> 
        <Toaster />
      </body>
    </html>
  );
}
