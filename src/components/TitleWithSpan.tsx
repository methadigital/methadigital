interface TitleWithSpanProps {
  spanText: string;
  text: string;
}

export function TitleWithSpan({ spanText, text }: TitleWithSpanProps) {
  return (
    <p className="text-base md:text-2xl text-icons flex flex-col">
      <span className="text-primary">{spanText}</span> {text}
    </p>
  );
}
