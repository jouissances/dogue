interface BreedTemperamentProps {
  temperament: string[];
  behavior: string;
}

export default function BreedTemperament({
  temperament,
  behavior,
}: BreedTemperamentProps) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-6">
        Temperament & Behavior
      </h3>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {temperament.map((trait) => (
          <span
            key={trait}
            className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm"
            data-testid={`badge-temperament-${trait.toLowerCase()}`}
          >
            {trait}
          </span>
        ))}
      </div>
      
      <p 
        className="text-base leading-relaxed text-muted-foreground"
        data-testid="text-behavior"
      >
        {behavior}
      </p>
    </div>
  );
}
