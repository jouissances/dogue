import { useEffect } from "react";
import { useRoute } from "wouter";
import { dogBreeds } from "@/data/breeds";
import BreedNavigation from "@/components/BreedNavigation";
import BreedHero from "@/components/BreedHero";
import BreedHistory from "@/components/BreedHistory";
import PhysicalTraits from "@/components/PhysicalTraits";
import BreedTemperament from "@/components/BreedTemperament";
import BreedTrivia from "@/components/BreedTrivia";
import BreedFooterNav from "@/components/BreedFooterNav";
import NotFound from "./not-found";

export default function BreedDetail() {
  const [, params] = useRoute("/breed/:id");
  const breedId = params?.id;

  const currentIndex = dogBreeds.findIndex((b) => b.id === breedId);
  const breed = dogBreeds[currentIndex];
  const previousBreed = currentIndex > 0 ? dogBreeds[currentIndex - 1] : undefined;
  const nextBreed = currentIndex < dogBreeds.length - 1 ? dogBreeds[currentIndex + 1] : undefined;

  useEffect(() => {
    if (breed) {
      document.title = `${breed.name} - Dog Breed Encyclopedia`;
    }
  }, [breed]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && previousBreed) {
        window.location.href = `/breed/${previousBreed.id}`;
      } else if (e.key === "ArrowRight" && nextBreed) {
        window.location.href = `/breed/${nextBreed.id}`;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previousBreed, nextBreed]);

  if (!breed) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <BreedNavigation
        currentBreedName={breed.name}
        previousBreed={previousBreed}
        nextBreed={nextBreed}
      />

      <main className="pt-16" role="main">
        <article>
          <BreedHero
            name={breed.name}
            image={breed.image}
            origin={breed.origin}
          />

          <BreedHistory history={breed.history} />

          <PhysicalTraits
            size={breed.size}
            weight={breed.weight}
            coat={breed.coat}
            lifespan={breed.lifespan}
          />

          <BreedTemperament
            temperament={breed.temperament}
            behavior={breed.behavior}
          />

          <BreedTrivia trivia={breed.trivia} />
        </article>
      </main>

      <BreedFooterNav
        previousBreed={previousBreed}
        nextBreed={nextBreed}
      />
    </div>
  );
}
