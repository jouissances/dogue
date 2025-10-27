import { dogBreeds } from "@/data/breeds";
import BreedCard from "@/components/BreedCard";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Dog Breed Encyclopedia - Learn About Your Favorite Breeds";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card" role="banner">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Dog Breed Encyclopedia
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore detailed information about popular dog breeds, their history, 
            characteristics, and fascinating facts.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12" role="main">
        <section aria-labelledby="breeds-heading">
          <h2 id="breeds-heading" className="sr-only">
            Available Dog Breeds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dogBreeds.map((breed) => (
              <BreedCard
                key={breed.id}
                id={breed.id}
                name={breed.name}
                image={breed.image}
                origin={breed.origin}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-20 py-8" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground">
          <p>Dog Breed Encyclopedia &copy; 2025</p>
        </div>
      </footer>
    </div>
  );
}
