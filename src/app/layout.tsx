import './globals.css';
import { Lato } from 'next/font/google';

import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const lato = Lato({
  weight: ['400', '900'],
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
      <body className={lato.className}>
        <div className="grid grid-rows-[80px,auto,160px] grid-cols-1">
          <header className="col-span-2 row-span-1 px-5 md:px-10 lg:px-32">
            <Navbar />
          </header>
          <main className="w-full px-5 md:px-10 lg:px-32">{children}</main>
          <footer className="h-full col-span-2 row-span-1 mt-64 px-5 md:px-10 lg:px-32 pb-4">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
