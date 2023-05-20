import { FlexRowColStack } from '../FlexRowColStack';
import { TitleWithSpan } from '../TitleWithSpan';
import { CardTeamColab } from './CardTeamColab';

export function TeamContainer() {
  return (
    <FlexRowColStack>
      <div className="w-full mt-24">
        <div>
          <TitleWithSpan
            spanText="Nossa equipe"
            text="criativa e de desenvolvimento"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
          <CardTeamColab name="Michael André" office="Designer Gráfico" />
          <CardTeamColab name="Natã Hermes" office="Desenvolvedor" />
          <CardTeamColab name="Lucas Fabiano" office="Marketing Digital" />
        </div>
      </div>
    </FlexRowColStack>
  );
}
