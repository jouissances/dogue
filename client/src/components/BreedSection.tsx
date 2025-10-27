import { useState } from "react";
import { DogBreed, CoatVariant } from "@shared/schema";
import PhysicalTraits from "./PhysicalTraits";
import BreedTemperament from "./BreedTemperament";
import BreedTrivia from "./BreedTrivia";

interface BreedSectionProps {
  breed: DogBreed;
}

export default function BreedSection({ breed }: BreedSectionProps) {
  const [selectedVariant, setSelectedVariant] = useState<CoatVariant | undefined>(
    breed.coatVariants?.[0]
  );

  const currentImage = selectedVariant?.image || breed.image;

  return (
    <section
      id={breed.id}
      className="h-screen min-w-full flex items-center relative snap-start snap-always flex-shrink-0 overflow-y-auto"
      aria-labelledby={`breed-${breed.id}-name`}
    >
      {/* Content */}
      <div className="w-full py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
            {/* Image */}
            <div className="flex justify-center lg:sticky lg:top-8">
              <img
                src={currentImage}
                alt={`${breed.name} dog portrait${selectedVariant ? ` - ${selectedVariant.color}` : ''}`}
                className="max-h-80 w-auto object-contain transition-all duration-300"
                data-testid={`img-breed-${breed.id}`}
              />
            </div>

            {/* Title and History */}
            <div>
              <h2
                id={`breed-${breed.id}-name`}
                className="text-3xl md:text-4xl font-serif font-bold mb-3"
                data-testid={`text-breed-name-${breed.id}`}
              >
                {breed.name}
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                Origin: {breed.origin}
              </p>
              <div className="prose prose-sm max-w-none">
                <p className="text-sm leading-relaxed">{breed.history}</p>
              </div>
            </div>
          </div>

          {/* Traits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-4">
                Physical Characteristics
              </h3>
              <PhysicalTraits
                size={breed.size}
                height={breed.height}
                weight={breed.weight}
                coat={breed.coat}
                lifespan={breed.lifespan}
                coatVariants={breed.coatVariants}
                selectedVariant={selectedVariant}
                onVariantSelect={setSelectedVariant}
              />
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
