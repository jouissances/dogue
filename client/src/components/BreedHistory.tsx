interface BreedHistoryProps {
  history: string;
}

export default function BreedHistory({ history }: BreedHistoryProps) {
  return (
    <section 
      className="max-w-4xl mx-auto px-6 mb-16"
      aria-labelledby="history-heading"
    >
      <h2 
        id="history-heading"
        className="text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-4"
      >
        Origin & History
      </h2>
      <p 
        className="text-lg leading-relaxed max-w-prose"
        data-testid="text-breed-history"
      >
        {history}
      </p>
    </section>
  );
}
