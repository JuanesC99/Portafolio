import './globals.css';
import { Inter } from 'next/font/google';
import { TransitionProvider } from './components/TransitionProvider';
import TransitionOverlay from './components/TransitionOverlay';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portafolio de Juan ',
  description: 'Portafolio personal de Juan  - Desarrollador Full Stack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <TransitionProvider>
          {children}
          <TransitionOverlay />
        </TransitionProvider>
      </body>
    </html>
  );
}
