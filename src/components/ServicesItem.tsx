interface ServicesItemProps {
  label: string;
}

export function ServicesItem({ label }: ServicesItemProps) {
  return (
    <li
      className={
        'cursor-pointer text-icons focus:text-primary hover:text-primary'
      }
    >
      {label}
    </li>
  );
}
