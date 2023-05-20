interface CardTeamColabProps {
  name: string;
  office?: string;
}

export function CardTeamColab({ name, office }: CardTeamColabProps) {
  return (
    <div className="mt-8 gap-4 flex justify-around items-center ">
      <div className="flex flex-col w-full items-center">
        <div className="w-72 h-60 bg-icons opacity-30"></div>
        <div className="flex flex-col items-center justify-center mt-4 text-icons">
          <span className="font-semibold text-sm">{name}</span>
          {office && <span className="text-xs">{office}</span>}
        </div>
      </div>
    </div>
  );
}
