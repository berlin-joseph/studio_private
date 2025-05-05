'use client';

import {LazyMotion, domAnimation} from 'framer-motion';
import type {ReactNode} from 'react';

export function Providers({children}: {children: ReactNode}) {
  // Wrap with LazyMotion to enable Framer Motion features efficiently
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
