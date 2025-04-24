/**
 * Definiciones de tipos globales para la aplicación
 */

/**
 * Interfaz global para Google Analytics
 */
interface Window {
  gtag: (
    command: string,
    action: string | string[],
    params?: {
      [key: string]: any;
    }
  ) => void;
} 