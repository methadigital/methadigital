import { FlexRowColStack } from '../FlexRowColStack';
import { CardServiceGallery } from './CardServiceGallery';

export function ServicesContainer() {
  return (
    <FlexRowColStack>
      <div className="w-full flex flex-col">
        <CardServiceGallery serviceName="Desenvolvimento" />
        <CardServiceGallery serviceName="Design" />
        <CardServiceGallery serviceName="Marketing Digital" />
      </div>
    </FlexRowColStack>
  );
}
