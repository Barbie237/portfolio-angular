export interface ProjectScreenshot {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  emoji: string;
  image?: string;
  gradient: string;
  tags: string[];
  features: string[];
  screenshots: ProjectScreenshot[];
  liveUrl?: string;
  company: string;
  period: string;
  techEnv: string[];
}
