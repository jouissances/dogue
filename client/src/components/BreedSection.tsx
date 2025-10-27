import { useState, useMemo, useEffect } from "react";
import { DogBreed, CoatVariant } from "@shared/schema";
import PhysicalTraits from "./PhysicalTraits";
import BreedTemperament from "./BreedTemperament";
import BreedTrivia from "./BreedTrivia";

interface BreedSectionProps {
  breed: DogBreed;
}

export default function BreedSection({ breed }: BreedSectionProps) {
  const [selectedCoatType, setSelectedCoatType] = useState<string | undefined>(
    breed.coatTypes?.[0]
  );
  
  const filteredVariants = useMemo(() => {
    if (!breed.coatVariants) return undefined;
    if (!selectedCoatType) return breed.coatVariants;
    return breed.coatVariants.filter(v => v.coatType === selectedCoatType);
  }, [breed.coatVariants, selectedCoatType]);
  
  const [selectedVariant, setSelectedVariant] = useState<CoatVariant | undefined>(
    filteredVariants?.[0] || breed.coatVariants?.[0]
  );

  useEffect(() => {
    setSelectedCoatType(breed.coatTypes?.[0]);
    const newFiltered = breed.coatTypes?.[0] 
      ? breed.coatVariants?.filter(v => v.coatType === breed.coatTypes![0])
      : breed.coatVariants;
    setSelectedVariant(newFiltered?.[0] || breed.coatVariants?.[0]);
  }, [breed.id, breed.coatTypes, breed.coatVariants]);

  const handleCoatTypeChange = (coatType: string) => {
    setSelectedCoatType(coatType);
    const newFilteredVariants = breed.coatVariants?.filter(v => v.coatType === coatType);
    if (newFilteredVariants && newFilteredVariants.length > 0) {
      setSelectedVariant(newFilteredVariants[0]);
    }
  };

  const currentImage = selectedVariant?.image || breed.image;

  return (
    <section
      id={breed.id}
      className="h-screen min-w-full flex items-center relative snap-start snap-always flex-shrink-0 overflow-y-auto"
      aria-labelledby={`breed-${breed.id}-name`}
    >
      <div className="w-full h-full flex flex-col justify-center">
        {/* Main Content - Centered Portrait with Sidebar Info */}
        <div className="px-8 py-6">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Breed Info */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h2
                  id={`breed-${breed.id}-name`}
                  className="text-5xl font-serif font-bold mb-2"
                  data-testid={`text-breed-name-${breed.id}`}
                >
                  {breed.name}
                </h2>
                {breed.group && (
                  <p className="text-sm text-muted-foreground mb-1" data-testid="text-breed-group">
                    {breed.group}
                  </p>
                )}
                <p className="text-xs text-muted-foreground italic">
                  Origin: {breed.origin}
                </p>
              </div>
              
              <BreedTemperament
                temperament={breed.temperament}
                behavior={breed.behavior}
              />
            </div>

            {/* Center Column - Large Portrait */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <img
                src={currentImage}
                alt={`${breed.name} dog portrait${selectedVariant ? ` - ${selectedVariant.color}` : ''}`}
                className="max-h-[600px] w-auto object-contain transition-all duration-300"
                data-testid={`img-breed-${breed.id}`}
              />
            </div>

            {/* Right Column - Physical Traits */}
            <div className="lg:col-span-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-4">
                Physical Characteristics
              </h3>
              <PhysicalTraits
                size={breed.size}
                height={breed.height}
                weight={breed.weight}
                coat={breed.coat}
                lifespan={breed.lifespan}
                coatTypes={breed.coatTypes}
                selectedCoatType={selectedCoatType}
                onCoatTypeSelect={handleCoatTypeChange}
                coatVariants={filteredVariants}
                selectedVariant={selectedVariant}
                onVariantSelect={setSelectedVariant}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - History and Trivia */}
        <div className="border-t bg-accent/10 px-8 py-5 mt-2">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
                History
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{breed.history}</p>
            </div>
            <BreedTrivia trivia={breed.trivia} />
          </div>
        </div>
      </div>
    </section>
  );
}
