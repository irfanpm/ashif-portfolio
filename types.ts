
import React from 'react';

export type PageType = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'ai-lab' | 'contact' | 'gallery';

export interface SkillGroup {
  name: string;
  items: string[];
  // Fix: Added React import to provide access to the React namespace
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  image: string;
}

export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
  span?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  desc: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  status: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Message {
  role: 'user' | 'ai';
  text: string;
}
