import { ReactNode } from 'react';
import Image from 'next/image';

import developerPhoto from '@images/metha/slider-01.png';
import designerPhoto from '@images/metha/slider-02.png';
import purpleFrame from '@images/metha/purple-frame.png';
import orangeFrame from '@images/metha/orange-frame.png';

import { KeyIcon } from '@icons/key-icon';
import { ArrowRightIcon } from '@icons/arrow-right-icon';

function ContainerImage({ children }: { children: ReactNode }) {
  return <div className="relative">{children}</div>;
}

export function FrameMembers() {
  return (
    <div className="mt-8 gap-4 flex flex-col sm:flex-row justify-around items-center">
      <ContainerImage>
        <Image alt="Dev" src={purpleFrame} width={300} priority />
        <div className="absolute top-0 w-full h-full px-8 py-4 flex items-end">
          <div className="relative w-full">
            <KeyIcon color={'#00ffca'} className="absolute bottom-7 -left-6" />
            <div className="px-2">
              <Image
                alt={`Membro da equipe - Natã Hermes`}
                style={{
                  borderRadius: '50%',
                  borderWidth: 3,
                  borderColor: '#00ffca',
                }}
                src={developerPhoto}
                width={100}
                priority
              />

              <div className="flex flex-col pt-2">
                <span className="text-white italic">Natã Hermes</span>
                <p className="text-white font-bold py-4 h-16">
                  DESENVOLVEDOR DE SOFTWARE FULL-STACK
                </p>
              </div>
            </div>
            <ArrowRightIcon
              color={'#00ffca'}
              className="absolute -bottom-3 -right-2 xxs:right-2 sm:right-2"
            />
          </div>
        </div>
      </ContainerImage>

      <ContainerImage>
        <Image alt="Dev" src={orangeFrame} width={300} priority />
        <div className="absolute top-0 w-full h-full px-8 py-4 flex items-end">
          <div className="relative w-full">
            <KeyIcon color={'#FFD432'} className="absolute bottom-7 -left-6" />
            <div className="px-2">
              <Image
                alt={`Membro da equipe - Michael André`}
                style={{
                  borderRadius: '50%',
                  borderWidth: 3,
                  borderColor: '#FFD432',
                }}
                src={designerPhoto}
                width={100}
                priority
              />

              <div className="flex flex-col pt-2">
                <span className="text-white italic"> Michael André</span>
                <p className="text-white font-bold py-4 h-16">
                  DESIGNER GRÁFICO
                </p>
              </div>
            </div>
            <ArrowRightIcon
              color={'#FFD432'}
              className="absolute bottom-3 right-5 xxs:right-9 sm:right-9"
            />
          </div>
        </div>
      </ContainerImage>
    </div>
  );
}
