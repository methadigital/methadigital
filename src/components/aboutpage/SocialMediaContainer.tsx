import { FlexRowColStack } from '../FlexRowColStack';
import { TitleWithSpan } from '../TitleWithSpan';
import { CardSocialMedia } from './CardSocialMedia';

export function SocialMediaContainer() {
  return (
    <FlexRowColStack>
      <div className="mt-24 w-full">
        <div className="md:w-80">
          <TitleWithSpan spanText="Acompanhe" text="nosso progresso" />
        </div>
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4">
            <CardSocialMedia
              name="YouTube"
              url="https://www.youtube.com/@oficialmetha"
            />
            <CardSocialMedia
              name="Facebook"
              url="https://www.facebook.com/methadigitaloficial"
            />
            <CardSocialMedia
              name="Instagram"
              url="https://www.instagram.com/oficialmetha"
            />
          </div>
        </div>
      </div>
    </FlexRowColStack>
  );
}
