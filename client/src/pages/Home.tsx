import { useState, useEffect, useMemo, useCallback } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MenuPanel from "@/components/MenuPanel";
import BreedSection from "@/components/BreedSection";
import { useBreeds } from "@/hooks/useBreeds";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBreedIndex, setCurrentBreedIndex] = useState(0);
  const { data: breeds = [], isLoading, isError } = useBreeds();

  const sortedBreeds = useMemo(() => 
    [...breeds].sort((a, b) => a.name.localeCompare(b.name)),
    [breeds]
  );

  useEffect(() => {
    document.title = "Dog Breed Encyclopedia - Learn About Your Favorite Breeds";
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const scrollToBreed = useCallback((breedId: string) => {
    const element = document.getElementById(breedId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handlePrevious = useCallback(() => {
    if (currentBreedIndex > 0) {
      const prevIndex = currentBreedIndex - 1;
      setCurrentBreedIndex(prevIndex);
      scrollToBreed(sortedBreeds[prevIndex].id);
    }
  }, [currentBreedIndex, sortedBreeds, scrollToBreed]);

  const handleNext = useCallback(() => {
    if (currentBreedIndex < sortedBreeds.length - 1) {
      const nextIndex = currentBreedIndex + 1;
      setCurrentBreedIndex(nextIndex);
      scrollToBreed(sortedBreeds[nextIndex].id);
    }
  }, [currentBreedIndex, sortedBreeds, scrollToBreed]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = sortedBreeds.map((breed) => document.getElementById(breed.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setCurrentBreedIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sortedBreeds]);

  useEffect(() => {
    if (sortedBreeds.length === 0 || isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentBreedIndex, sortedBreeds, handlePrevious, handleNext, isMenuOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading breeds...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive text-lg mb-4">Failed to load breeds</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    );
  }

  if (sortedBreeds.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground text-lg">No breeds available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header with Menu Button */}
      <header className="fixed top-0 right-0 z-40 p-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          data-testid="button-open-menu"
          className="bg-background/80 backdrop-blur-md"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </header>

      {/* Menu Panel */}
      <MenuPanel
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        breeds={sortedBreeds}
        onBreedSelect={scrollToBreed}
      />

      {/* Landing Section */}
      <section className="h-screen flex items-center justify-center snap-start snap-always">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Dog Breed Encyclopedia
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore detailed information about popular dog breeds, their history, 
            characteristics, and fascinating facts.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToBreed(sortedBreeds[0].id)}
            data-testid="button-start-exploring"
          >
            Start Exploring
          </Button>
        </div>
      </section>

      {/* Breed Sections */}
      <main role="main">
        {sortedBreeds.map((breed, index) => (
          <BreedSection
            key={breed.id}
            breed={breed}
            onPrevious={handlePrevious}
            onNext={handleNext}
            hasPrevious={index > 0}
            hasNext={index < sortedBreeds.length - 1}
          />
        ))}
      </main>
    </div>
  );
}
