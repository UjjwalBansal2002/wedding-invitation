export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

export function calculateCountdown(weddingDateString: string): CountdownTime {
  const weddingDate = new Date(weddingDateString).getTime();
  const now = new Date().getTime();
  const difference = weddingDate - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isPassed: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isPassed: false,
  };
}
