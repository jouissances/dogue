import { useState, useEffect, useMemo, useCallback } from "react";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MenuPanel from "@/components/MenuPanel";
import BreedSection from "@/components/BreedSection";
import { useBreeds } from "@/hooks/useBreeds";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBreedIndex, setCurrentBreedIndex] = useState(-1);
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
    if (currentBreedIndex === 0) {
      const landingElement = document.getElementById("landing");
      if (landingElement) {
        landingElement.scrollIntoView({ behavior: "smooth", inline: "start" });
      }
    } else if (currentBreedIndex > 0) {
      const prevIndex = currentBreedIndex - 1;
      const element = document.getElementById(sortedBreeds[prevIndex].id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", inline: "start" });
      }
    }
  }, [currentBreedIndex, sortedBreeds]);

  const handleNext = useCallback(() => {
    const nextIndex = currentBreedIndex === -1 ? 0 : currentBreedIndex + 1;
    if (nextIndex < sortedBreeds.length) {
      const element = document.getElementById(sortedBreeds[nextIndex].id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", inline: "start" });
      }
    }
  }, [currentBreedIndex, sortedBreeds]);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("scroll-container");
      if (!container) return;

      const landingElement = document.getElementById("landing");
      const scrollPosition = container.scrollLeft + container.offsetWidth / 2;
      const tolerance = 10;

      if (landingElement) {
        const landingLeft = landingElement.offsetLeft;
        const landingRight = landingLeft + landingElement.offsetWidth;
        if (scrollPosition >= landingLeft - tolerance && scrollPosition < landingRight + tolerance) {
          setCurrentBreedIndex(prevIndex => prevIndex !== -1 ? -1 : prevIndex);
          return;
        }
      }

      const sections = sortedBreeds.map((breed) => document.getElementById(breed.id));
      sections.forEach((section, index) => {
        if (section) {
          const left = section.offsetLeft;
          const right = left + section.offsetWidth;
          if (scrollPosition >= left - tolerance && scrollPosition < right + tolerance) {
            setCurrentBreedIndex(prevIndex => prevIndex !== index ? index : prevIndex);
          }
        }
      });
    };

    const container = document.getElementById("scroll-container");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [sortedBreeds]);

  useEffect(() => {
    if (sortedBreeds.length === 0 || isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight") {
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
    <div className="h-screen bg-background overflow-hidden">
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

      {/* Global Navigation Arrows - Only show when not on landing page */}
      {currentBreedIndex !== -1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-30 bg-background/80 backdrop-blur-md"
            onClick={handlePrevious}
            aria-label="Previous breed"
            data-testid="button-previous-breed"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          {currentBreedIndex < sortedBreeds.length - 1 && (
            <Button
              variant="outline"
              size="icon"
              className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 bg-background/80 backdrop-blur-md"
              onClick={handleNext}
              aria-label="Next breed"
              data-testid="button-next-breed"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}
        </>
      )}

      {/* Horizontal Scroll Container */}
      <div 
        id="scroll-container"
        className="h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Landing Section */}
        <section 
          id="landing"
          className="h-screen min-w-full flex items-center justify-center snap-start snap-always flex-shrink-0"
        >
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
        <main role="main" className="flex">
          {sortedBreeds.map((breed) => (
            <BreedSection
              key={breed.id}
              breed={breed}
            />
          ))}
        </main>
      </div>

      <style>{`
        #scroll-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
