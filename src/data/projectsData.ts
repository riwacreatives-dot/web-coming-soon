import { PublicProjectItem } from '../types';
import { getPublicWorkStories } from './studioData';

// Strictly exports permission-cleared public stories ONLY (zero unapproved Solanas or fabricated entries)
export const PROJECTS_DATA: PublicProjectItem[] = getPublicWorkStories();
