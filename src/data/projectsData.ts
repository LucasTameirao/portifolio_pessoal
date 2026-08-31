import rawProjects from './projects.json';
import { ProjectItem } from '../types/project';

export const PROJECTS_DATA: ProjectItem[] = rawProjects as ProjectItem[];

export const getProjectById = (id: string): ProjectItem | undefined => {
  return PROJECTS_DATA.find((project) => project.id === id);
};
