import { DogBreed } from "@shared/schema";
import PhysicalTraits from "./PhysicalTraits";
import BreedTemperament from "./BreedTemperament";
import BreedTrivia from "./BreedTrivia";

interface BreedSectionProps {
  breed: DogBreed;
}

export default function BreedSection({ breed }: BreedSectionProps) {
  return (
    <section
      id={breed.id}
      className="h-screen min-w-full flex items-center relative snap-start snap-always flex-shrink-0"
      aria-labelledby={`breed-${breed.id}-name`}
    >
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
