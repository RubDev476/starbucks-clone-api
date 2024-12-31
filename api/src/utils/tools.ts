
export function slugify(str: string): string {
  return str
      .toLowerCase()
      .replace(/&/g, '') // Omite el carácter "&"
      .replace(/\s+/g, '-') // Reemplaza uno o más espacios con un solo "-"
      .replace(/-+/g, '-') // Evita múltiples guiones consecutivos
      .replace(/^-|-$/g, '') // Elimina guiones al inicio o al final de la cadena
      .replace(/[^\w-]+/g, ''); // Elimina caracteres no permitidos
}

