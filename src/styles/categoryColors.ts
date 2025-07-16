// Zentrale Farbtabelle für Event-Kategorien (Flat UI Colors)
export const CATEGORY_COLORS: Record<string, string> = {
  Anime: '#f6e58d',      // Sun Flower
  Konzert: '#badc58',    // Green Pastel
  Workshop: '#f9ca24',   // Orange
  Panel: '#ff7979',      // Light Red
  Film: '#7ed6df',       // Light Blue
  Sonstiges: '#c7ecee',  // Light Purple
};

export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] || '#f5f6fa';
} 
