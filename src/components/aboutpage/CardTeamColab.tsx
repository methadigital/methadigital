interface CardTeamColabProps {
  name: string;
  office?: string;
}

export function CardTeamColab({ name, office }: CardTeamColabProps) {
  return (
    <div className="mt-8 gap-4 flex justify-around items-center w-full">
      <div className="flex flex-col w-full items-center">
        <div className="w-3/4 md:w-2/4 lg:w-full xl:w-4/4 2xl:w-3/4 h-40 md:h-60 2xl:h-96 bg-icons opacity-30"></div>
        <div className="flex flex-col items-center mt-4 text-icons">
          <span className="font-semibold text-sm">{name}</span>
          {office && <span className="text-xs">{office}</span>}
        </div>
      </div>
    </div>
  );
}
