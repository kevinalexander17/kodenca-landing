/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1F36', // Azul oscuro profundo
          light: '#2D3748',   // Azul oscuro más claro
          dark: '#0F172A'     // Azul oscuro más oscuro
        },
        secondary: {
          DEFAULT: '#3B82F6', // Azul brillante
          light: '#60A5FA',   // Azul más claro
          dark: '#2563EB'     // Azul más oscuro
        },
        accent: {
          DEFAULT: '#10B981', // Verde esmeralda
          light: '#34D399',   // Verde más claro
          dark: '#059669'     // Verde más oscuro
        },
        neutral: {
          DEFAULT: '#64748B', // Gris azulado
          light: '#94A3B8',   // Gris más claro
          dark: '#475569'     // Gris más oscuro
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
} 