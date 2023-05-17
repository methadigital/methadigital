import Link from 'next/link';

interface RedirectButtonProps {
  path: string;
}

export function RedirectButton({ path }: RedirectButtonProps) {
  return (
    <Link href={path} className="px-4 py-2 bg-primary text-white rounded">
      Contato
    </Link>
  );
}
