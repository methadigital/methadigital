import './globals.css';
import { Montserrat } from 'next/font/google';

import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({
  weight: ['400', '500', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Metha Digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <link rel="icon" href="/images/favicon.ico" />
      <body className={montserrat.className}>
        <main className="bg-white h-full screen flex flex-col items-center p-4 lg:px-16 2xl:px-32">
          <Navbar />
          <div className="w-full">{children}</div>
        </main>
        <footer className="mt-32 p-4 lg:px-16 2xl:px-32">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
