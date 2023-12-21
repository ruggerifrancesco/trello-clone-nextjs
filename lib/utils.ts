import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
// Is enabling to safely and properly combine tailwind classes, more dinamically
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
