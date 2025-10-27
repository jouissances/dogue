import { Lightbulb } from "lucide-react";

interface BreedTriviaProps {
  trivia: string[];
}

export default function BreedTrivia({ trivia }: BreedTriviaProps) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
        Did You Know?
      </h3>
      
      <div className="space-y-2">
        {trivia.slice(0, 4).map((fact, index) => (
          <div
            key={index}
            className="flex gap-2 p-2.5 rounded-lg bg-accent/30 border border-accent"
            data-testid={`card-trivia-${index}`}
          >
            <div className="flex-shrink-0 pt-0.5">
              <Lightbulb className="h-3.5 w-3.5 text-accent-foreground" aria-hidden="true" />
            </div>
            <p className="text-xs leading-relaxed" data-testid={`text-trivia-${index}`}>
              {fact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
