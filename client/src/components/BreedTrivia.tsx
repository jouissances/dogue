import { Lightbulb } from "lucide-react";

interface BreedTriviaProps {
  trivia: string[];
}

export default function BreedTrivia({ trivia }: BreedTriviaProps) {
  return (
    <section 
      className="max-w-4xl mx-auto px-6 mb-16"
      aria-labelledby="trivia-heading"
    >
      <h2 
        id="trivia-heading"
        className="text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-6"
      >
        Did You Know?
      </h2>
      
      <div className="space-y-4">
        {trivia.map((fact, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 rounded-lg bg-accent/30 border border-accent"
            data-testid={`card-trivia-${index}`}
          >
            <div className="flex-shrink-0 pt-0.5">
              <Lightbulb className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
            </div>
            <p className="text-base leading-relaxed" data-testid={`text-trivia-${index}`}>
              {fact}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
