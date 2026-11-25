import { useState, useEffect } from 'react';
import { CLOCK_HUBS } from '../data/clocksData';

export interface ClockDisplayItem {
  city: string;
  country: string;
  timeStr: string;
  period: string;
  coordinates: string;
}

export function useWorldClocks() {
  const [clocks, setClocks] = useState<ClockDisplayItem[]>([]);

  useEffect(() => {
    function calculateTimes() {
      const now = new Date();
      const updated = CLOCK_HUBS.map((hub) => {
        try {
          const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: hub.timezone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          });
          const parts = formatter.formatToParts(now);
          const hour = parts.find((p) => p.type === 'hour')?.value || '12';
          const minute = parts.find((p) => p.type === 'minute')?.value || '00';
          const dayPeriod = parts.find((p) => p.type === 'dayPeriod')?.value || 'AM';

          return {
            city: hub.city,
            country: hub.country,
            timeStr: `${hour}:${minute}`,
            period: dayPeriod.toUpperCase(),
            coordinates: hub.coordinates,
          };
        } catch {
          return {
            city: hub.city,
            country: hub.country,
            timeStr: '12:00',
            period: 'PM',
            coordinates: hub.coordinates,
          };
        }
      });
      setClocks(updated);
    }

    calculateTimes();
    const interval = setInterval(calculateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return clocks;
}

