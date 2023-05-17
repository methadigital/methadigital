import { RedirectButton } from '@/components/RedirectButton';
import { ServicesList } from '@/components/ServicesList';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BsArrowUp } from 'react-icons/bs';

export default function Home() {
  return (
    <>
      <div className="flex items-center">
        <div className="py-20">
          <p className=" w-72 text-2xl text-icons">
            <span className="text-primary">Conecte-se</span> ao digital e
            transforme seu futuro.
          </p>

          <div className="mt-2 flex items-center cursor-pointer gap-2 text-icons hover:text-primary">
            <ArrowRightCircleIcon className="h-8" />{' '}
            <span>Saiba mais sobre</span>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img
            className="max-w-xs w-auto"
            alt=""
            src="/images/ilstr-homepage.svg"
          />
        </div>
      </div>
      <div className="mt-8">
        <ServicesList />
      </div>

      <div className="my-32 flex flex-col items-center justify-center">
        <img
          src="/images/logotipo.svg"
          className="md:cursor-pointer h-9 mb-16"
          alt="Logotipo que possui uma imagem em forma de M e a palavra metha"
        />

        <p className="w-[34%] text-center">
          Venha fazer parte da nossa comunidade de sucesso online e crie uma
          presença digital de destaque.
        </p>

        <div className="mt-8">
          <RedirectButton path="/contact" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col  gap-8">
        <div className="flex flex-row justify-between">
          <span className="text-primary">Siga-nos</span>
          <span className="text-primary">Direitos Autorais</span>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2">
            <a href="https://www.youtube.com" about="_blank">
              <FaYoutube size={22} className="text-icons" />
            </a>
            <a href="https://www.instagram.com" about="_blank">
              <FaInstagram size={22} className="text-icons" />
            </a>
            <a href="https://www.facebook.com" about="_blank">
              <FaFacebookF size={22} className="text-icons" />
            </a>
          </div>
          <span className="text-icons">
            © 2023. Todos os direitos reservados.
          </span>
        </div>
      </div>
      <div className="w-full mt-32 flex justify-end">
        <div className="p-4 bg-primary cursor-pointer rounded-sm">
          <BsArrowUp size={24} className="text-[#DCC8FF]" />
        </div>
      </div>
    </>
  );
}
