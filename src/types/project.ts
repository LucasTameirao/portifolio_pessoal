export interface ProjectItem {
  id: string;
  title: string;
  tagline?: string;
  polaroidImage: string;
  bannerImage: string;
  shortDescription: string;
  contextAndChallenge: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  carouselImages: {
    url: string;
    caption?: string;
  }[];
}
