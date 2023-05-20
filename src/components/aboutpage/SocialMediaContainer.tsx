import { FlexRowColStack } from '../FlexRowColStack';
import { TitleWithSpan } from '../TitleWithSpan';

export function SocialMediaContainer() {
  return (
    <FlexRowColStack>
      <div className="mt-12 w-full">
        <div className="w-44">
          <p className="text-base md:text2xl text-icons">
            <span className="text-primary">Acompanhe</span> nosso progresso
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4">
            <div className="text-icons text-xs md:text-lg flex flex-col items-center md:flex-row hover:text-primary ">
              <span className="font-bold mr-4 w-16 md:w-24">YouTube</span>
              <span className="hidden md:flex">-</span>
              <span className="md:ml-4 flex justify-start">
                <a
                  href="https://www.youtube.com/@oficialmetha"
                  className="decoration-transparent"
                >
                  https://www.youtube.com/@oficialmetha
                </a>
              </span>
            </div>
            <div className="text-icons text-xs md:text-lg flex flex-col items-center md:flex-row hover:text-primary">
              <span className="font-bold mr-4 w-16 md:w-24">Facebook</span>
              <span className="hidden md:flex">-</span>
              <span className="md:ml-4">
                <a href="https://www.facebook.com/oficialmetha">
                  https://www.facebook.com/methadigitaloficial
                </a>
              </span>
            </div>
            <div className="text-icons text-xs md:text-lg flex flex-col md:flex-row items-center hover:text-primary">
              <span className="font-bold mr-4 w-16 md:w-24">Instagram</span>
              <span className="hidden md:flex">-</span>
              <span className="md:ml-4">
                <a href="https://www.instagram.com/oficialmetha">
                  https://www.instagram.com/oficialmetha
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </FlexRowColStack>
  );
}
