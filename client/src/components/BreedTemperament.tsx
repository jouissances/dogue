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
      <h3 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
        Temperament
      </h3>
      
      <div className="mb-3 flex flex-wrap gap-1.5">
        {temperament.map((trait) => (
          <span
            key={trait}
            className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs"
            data-testid={`badge-temperament-${trait.toLowerCase()}`}
          >
            {trait}
          </span>
        ))}
      </div>
      
      <p 
        className="text-xs leading-relaxed text-muted-foreground"
        data-testid="text-behavior"
      >
        {behavior}
      </p>
    </div>
  );
}
