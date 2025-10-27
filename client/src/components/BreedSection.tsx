import { DogBreed } from "@shared/schema";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhysicalTraits from "./PhysicalTraits";
import BreedTemperament from "./BreedTemperament";
import BreedTrivia from "./BreedTrivia";

interface BreedSectionProps {
  breed: DogBreed;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export default function BreedSection({
  breed,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: BreedSectionProps) {
  return (
    <section
      id={breed.id}
      className="h-screen flex items-center relative snap-start snap-always"
      aria-labelledby={`breed-${breed.id}-name`}
    >
      {/* Horizontal Navigation Buttons */}
      {hasPrevious && (
        <Button
          variant="outline"
          size="icon"
          className="fixed left-4 top-1/2 transform -translate-y-1/2 z-30 hidden md:flex"
          onClick={onPrevious}
          aria-label="Previous breed"
          data-testid="button-previous-breed"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}

      {hasNext && (
        <Button
          variant="outline"
          size="icon"
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 hidden md:flex"
          onClick={onNext}
          aria-label="Next breed"
          data-testid="button-next-breed"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      )}

      {/* Content */}
      <div className="w-full py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={breed.image}
                alt={`${breed.name} dog portrait`}
                className="max-h-96 w-auto object-contain"
                data-testid={`img-breed-${breed.id}`}
              />
            </div>

            {/* Title and History */}
            <div>
              <h2
                id={`breed-${breed.id}-name`}
                className="text-4xl md:text-5xl font-serif font-bold mb-4"
                data-testid={`text-breed-name-${breed.id}`}
              >
                {breed.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Origin: {breed.origin}
              </p>
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed">{breed.history}</p>
              </div>
            </div>
          </div>

          {/* Traits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-6">
                Physical Characteristics
              </h3>
              <div className="space-y-4">
                <PhysicalTraits
                  size={breed.size}
                  weight={breed.weight}
                  coat={breed.coat}
                  lifespan={breed.lifespan}
                />
              </div>
            </div>

            <div>
              <BreedTemperament
                temperament={breed.temperament}
                behavior={breed.behavior}
              />
            </div>
          </div>

          {/* Trivia */}
          <BreedTrivia trivia={breed.trivia} />
        </div>
      </div>
    </section>
  );
}
