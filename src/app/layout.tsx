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

export const metadata: Metadata = {
  title: "Berlin Joe L - Full-Stack Developer | React, Next.js, AI/ML Expert",
  description: "Berlin Joe L's official portfolio. A skilled Full-Stack Software Developer specializing in scalable, user-centric web and mobile applications using React, Next.js, Node.js, AI/ML, and DevOps practices. Explore projects and experience.",
  keywords: ['Berlin Joe L', 'Full-Stack Developer', 'Software Engineer', 'React Developer', 'Next.js', 'Node.js', 'MERN Stack', 'PERN Stack', 'AI', 'ML', 'Web3', 'DevOps', 'AWS', 'Portfolio', 'Web Developer', 'Mobile Developer'],
  openGraph: {
    title: "Berlin Joe L - Full-Stack Developer Portfolio",
    description: "Explore the portfolio of Berlin Joe L, a Full-Stack Developer creating innovative web and mobile solutions.",
    url: '/', // Replace with your actual domain in production
    siteName: "Berlin Joe L's Portfolio",
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with your actual OG image URL
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
    images: ['https://placehold.co/1200x630.png'], // Replace with your actual Twitter image URL
    // creator: '@yourtwitterhandle', // Optional: Add your Twitter handle
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
        <Providers>{children}</Providers> {/* Wrap with Providers */}
        <Toaster />
      </body>
    </html>
  );
}
