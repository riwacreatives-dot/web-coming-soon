import { ServiceItem } from '../types';
import { LOCKED_CAPABILITIES } from './studioData';

export type CapabilityItem = ServiceItem;

// Single-source adapter keeping existing service imports synchronized with LOCKED_CAPABILITIES
export const CAPABILITIES_DATA: ServiceItem[] = LOCKED_CAPABILITIES;
export const SERVICES_DATA: ServiceItem[] = CAPABILITIES_DATA;
