import { FlexRowColStack } from '../FlexRowColStack';
import { TitleWithSpan } from '../TitleWithSpan';
import { FrameMembers } from '../frames/members';

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
        <FrameMembers />
      </div>
    </FlexRowColStack>
  );
}
