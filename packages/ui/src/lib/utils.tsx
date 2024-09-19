import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useMemo } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
