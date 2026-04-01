
import React from 'react';
import { 
  Palette, Video, TrendingUp, Layout, Smartphone, 
  Globe, MessageSquare, Briefcase, GraduationCap 
} from 'lucide-react';
import { SkillGroup, Project, Experience, Education, Certification } from './types';

export const PROFILE_DATA = {
  name: "Mohammed Ashif M.V.",
  role: "Graphic Designer | Video Editor | Digital Marketer",
  tagline: "Bridging the gap between high-end aesthetics and digital performance.",
  location: "Kerala, India",
  email: "hello@ashif.mv",
  phone: "+91 99xx xx xx 50",
  bio: "I am a multi-disciplinary creative based in Kerala, India. With a BBA background and advanced training in Digital Marketing, I combine business strategy with creative execution. I specialize in building visual stories that don't just look premium but drive measurable marketing results."
};

export const SKILLS: SkillGroup[] = [
  { name: "Graphic Design", items: ["Photoshop", "Illustrator", "Canva", "Branding"], icon: <Palette size={20} /> },
  { name: "Video Editing", items: ["Premiere Pro", "After Effects", "CapCut", "Color Grading"], icon: <Video size={20} /> },
  { name: "Digital Marketing", items: ["SEO", "Facebook Ads", "Google Ads", "Analytics"], icon: <TrendingUp size={20} /> },
  { name: "Specialized", items: ["Content Writing", "Email Marketing", "Shopify Mgmt"], icon: <Layout size={20} /> }
];

export const PROJECTS: Project[] = [
  { id: 1, title: "Social Media Creatives", category: "Graphic Design", desc: "Engaging post designs for high-impact social media presence.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800" },
  { id: 2, title: "Brand Identity Works", category: "Branding", desc: "Complete visual identity systems including logos and color palettes.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=800" },
  { id: 3, title: "Promotional Video Edits", category: "Video Editing", desc: "Dynamic motion graphics and video storytelling for brands.", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800" },
  { id: 4, title: "Facebook Ad Campaigns", category: "Marketing", desc: "Targeted ad strategies resulting in high ROI for clients.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
  { id: 5, title: "Shopify Store Mgmt", category: "E-commerce", desc: "End-to-end management and UI optimization for Shopify stores.", image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800" },
  { id: 6, title: "Award & Certificates", category: "Graphic Design", desc: "Professional certificate layouts and award designs.", image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800" }
];

export const EXPERIENCES: Experience[] = [
  { role: "Facebook Ads Manager", company: "Freelance", period: "2024 - Present", desc: "Managing end-to-end ad campaigns, audience targeting, and creative testing." },
  { role: "Brand Consistency Work", company: "Various Clients", period: "2023 - 2024", desc: "Ensuring visual language consistency across all digital touchpoints." },
  { role: "Shopify Store Handling", company: "E-comm Partners", period: "2023", desc: "Managing product listings, theme customization, and customer flow optimization." }
];

export const EDUCATION: Education[] = [
  { degree: "Digital Marketing & Graphic Design", school: "ADI Group", year: "2026", status: "In Progress" },
  { degree: "BBA", school: "University of Calicut", year: "2024", status: "Completed" }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "SEO Certification", issuer: "HubSpot", date: "2025" },
  { title: "Digital Marketing & Design", issuer: "ADI Institution", date: "2024" },
  { title: "Digital Summit 2026", issuer: "Conference", date: "2026" }
];

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Resume' },
  { id: 'ai-lab', label: 'AI Lab', isAI: true },
  { id: 'contact', label: 'Contact' }
];
