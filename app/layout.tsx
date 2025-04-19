import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Kodenca - Desarrollo de Software a Medida',
  description: 'Desarrollamos software a medida para pequeñas y medianas empresas, incluyendo aplicaciones web, aplicaciones móviles, páginas web corporativas y sistemas personalizados.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 