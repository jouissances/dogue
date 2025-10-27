interface BreedTemperamentProps {
  temperament: string[];
  behavior: string;
}

export default function BreedTemperament({
  temperament,
  behavior,
}: BreedTemperamentProps) {
  return (
    <section 
      className="max-w-4xl mx-auto px-6 mb-16"
      aria-labelledby="temperament-heading"
    >
      <h2 
        id="temperament-heading"
        className="text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-6"
      >
        Temperament & Behavior
      </h2>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {temperament.map((trait) => (
          <span
            key={trait}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
            data-testid={`badge-temperament-${trait.toLowerCase()}`}
          >
            {trait}
          </span>
        ))}
      </div>
      
      <p 
        className="text-lg leading-relaxed max-w-prose"
        data-testid="text-behavior"
      >
        {behavior}
      </p>
    </section>
  );
}
