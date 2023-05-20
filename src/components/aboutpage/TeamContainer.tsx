import { FlexRowColStack } from '../FlexRowColStack';
import { CardTeamColab } from './CardTeamColab';

export function TeamContainer() {
  return (
    <FlexRowColStack>
      <div className="w-full mt-12">
        <div>
          <p className="text-base md:text2xl text-icons flex flex-col">
            <span className="text-primary w-2/4">Nossa equipe</span> criativa e
            de desenvolvimento
          </p>
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
