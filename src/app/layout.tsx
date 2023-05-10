import Image from 'next/image';
import './globals.css';
import { Montserrat } from 'next/font/google';

import { Bars3Icon } from '@heroicons/react/24/solid';

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
    <html lang="pt-BR">
      <link rel="icon" href="/images/favicon.ico" />
      <body className={montserrat.className}>
        <main className="h-screen w-screen flex flex-col items-center">
          <header className="w-full h-20 py-4 px-8 max-w-7xl flex flex-row justify-between items-center">
            <div className="flex h-full w-32 relative">
              <Image
                src="/images/logotipo.svg"
                priority
                fill
                alt="Logotipo que possui uma imagem em forma de M e a palavra metha"
              />
            </div>
            <Bars3Icon className="cursor-pointer text-icons md:hidden" />
            <div className="flex flex-row justify-around gap-16">
              <span className="text-primary">Início</span>
              <span>Sobre</span>
              <span>Serviços</span>
              <span>Ajuda</span>
              <span>Contato</span>
            </div>
          </header>
          <div className="w-full max-w-7xl px-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
