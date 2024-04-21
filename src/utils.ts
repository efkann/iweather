export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function getLocaleDateString(locale: string, timestamp: number) {
  return new Date(timestamp).toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getLocaleWeekday(locale: string, timestamp: number) {
  return new Date(timestamp).toLocaleDateString(locale, {
    weekday: 'short',
  });
}
