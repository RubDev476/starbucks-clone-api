// Objetivo: Funciones de utilidad.
export function slugify(str: string): string {
  return str
      .toLowerCase()
      .replace(/, /g, '---') // Convierte ", " a "---".
      .replace(/ /g, '-') // Convierte espacios a "-".
      .replace(/[^\w-]+/g, ''); // Elimina caracteres no alfanuméricos.
}

export function deslugify(slug: string): string {
  return slug
      .replace(/---/g, ', ') // Convierte "---" a ", ".
      .replace(/--/g, ' & ') // Convierte "--" a " & ".
      .replace(/-/g, ' ') // Convierte "-" a espacios.
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitaliza la primera letra de cada palabra.
}

export function filterSizeOptions(sizeOptions: Record<string, any>): Record<string, { content: any }> {
  return Object.entries(sizeOptions || {}).reduce((acc, [key, value]) => {
    if (value && typeof value === 'object' && 'content' in value) {
      acc[key] = { content: value.content };
    }
    return acc;
  }, {} as Record<string, { content: any }>);
}