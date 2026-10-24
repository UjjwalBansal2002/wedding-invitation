'use client';

import { useState, useEffect } from 'react';
import { calculateCountdown, type CountdownTime } from '@/lib/countdown';

export function useCountdown(weddingDate: string) {
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    // Set initial countdown
    setCountdown(calculateCountdown(weddingDate));

    // Update countdown every second
    const interval = setInterval(() => {
      setCountdown(calculateCountdown(weddingDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return countdown;
}
