import { Lightbulb } from "lucide-react";

interface BreedTriviaProps {
  trivia: string[];
}

export default function BreedTrivia({ trivia }: BreedTriviaProps) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-6">
        Did You Know?
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trivia.slice(0, 4).map((fact, index) => (
          <div
            key={index}
            className="flex gap-3 p-4 rounded-lg bg-accent/30 border border-accent"
            data-testid={`card-trivia-${index}`}
          >
            <div className="flex-shrink-0 pt-0.5">
              <Lightbulb className="h-4 w-4 text-accent-foreground" aria-hidden="true" />
            </div>
            <p className="text-sm leading-relaxed" data-testid={`text-trivia-${index}`}>
              {fact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
