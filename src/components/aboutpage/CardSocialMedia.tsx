interface CardSocialMediaProps {
  name: string;
  url: string;
}

export function CardSocialMedia({ name, url }: CardSocialMediaProps) {
  return (
    <div className="text-icons text-xs md:text-lg flex flex-col items-center md:flex-row hover:text-primary ">
      <span className="font-bold mr-4 w-16 md:w-24">{name}</span>
      <span className="hidden md:flex">-</span>
      <span className="md:ml-4 flex justify-start">
        <a href={url} className="decoration-transparent">
          {url}
        </a>
      </span>
    </div>
  );
}
