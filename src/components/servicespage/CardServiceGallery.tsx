interface CardServiceGalleryProps {
  serviceName: string;
}

export function CardServiceGallery({ serviceName }: CardServiceGalleryProps) {
  return (
    <div className="w-full mt-16">
      <h1 className="text-icons">{serviceName}</h1>
      <div className="mt-8 flex flex-col gap-8 sm:flex-row justify-between items-center ">
        <div className="w-72 md:w-full h-60 bg-icons opacity-30"></div>
        <div className="w-72 md:w-full h-60 bg-icons opacity-30"></div>
        <div className="w-72 md:w-full h-60 bg-icons opacity-30"></div>
      </div>
    </div>
  );
}
