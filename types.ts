export interface Project {
  id: string;
  title: string;
  category: 'Strategy' | 'Design' | 'AI';
  summary: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  demoLink?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
}

export enum Page {
  HOME = 'home',
  PROJECTS = 'projects',
  ABOUT = 'about',
  CONTACT = 'contact',
  BLOG = 'blog'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}