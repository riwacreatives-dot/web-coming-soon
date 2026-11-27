import { FounderItem } from '../types';
import { FOUNDER_PRINCIPAL } from './studioData';

// Strictly exports confirmed principal only (zero fabricated squads or unverified claims)
export const LEADERSHIP_DATA: FounderItem[] = [FOUNDER_PRINCIPAL];
