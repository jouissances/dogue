import { useState, useEffect, useMemo, useCallback } from "react";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MenuPanel from "@/components/MenuPanel";
import BreedSection from "@/components/BreedSection";
import { useBreeds } from "@/hooks/useBreeds";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBreedIndex, setCurrentBreedIndex] = useState(-1);
  const [isOnLanding, setIsOnLanding] = useState(true);
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

  const scrollToBreedSection = useCallback(() => {
    const breedContainer = document.getElementById("breed-container");
    if (breedContainer) {
      breedContainer.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOnLanding(false);
    }
  }, []);

  const scrollToLanding = useCallback(() => {
    const landing = document.getElementById("landing");
    if (landing) {
      landing.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOnLanding(true);
    }
  }, []);

  const scrollToBreed = useCallback((breedId: string) => {
    const element = document.getElementById(breedId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }, []);

  const handlePrevious = useCallback(() => {
    if (currentBreedIndex > 0) {
      const prevIndex = currentBreedIndex - 1;
      const element = document.getElementById(sortedBreeds[prevIndex].id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", inline: "start" });
      }
    }
  }, [currentBreedIndex, sortedBreeds]);

  const handleNext = useCallback(() => {
    if (currentBreedIndex < sortedBreeds.length - 1) {
      const nextIndex = currentBreedIndex + 1;
      const element = document.getElementById(sortedBreeds[nextIndex].id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", inline: "start" });
      }
    }
  }, [currentBreedIndex, sortedBreeds]);

  useEffect(() => {
    const handleVerticalScroll = () => {
      const landing = document.getElementById("landing");
      const breedContainer = document.getElementById("breed-container");
      if (!landing || !breedContainer) return;

      const landingRect = landing.getBoundingClientRect();
      const breedRect = breedContainer.getBoundingClientRect();

      if (landingRect.top >= -100 && landingRect.top <= 100) {
        setIsOnLanding(true);
      } else if (breedRect.top >= -100 && breedRect.top <= 100) {
        setIsOnLanding(false);
      }
    };

    const mainContainer = document.getElementById("main-container");
    if (mainContainer) {
      mainContainer.addEventListener("scroll", handleVerticalScroll);
      handleVerticalScroll();
      return () => mainContainer.removeEventListener("scroll", handleVerticalScroll);
    }
  }, []);

  useEffect(() => {
    if (isOnLanding) return;

    const handleHorizontalScroll = () => {
      const container = document.getElementById("breeds-scroll");
      if (!container) return;

      const scrollPosition = container.scrollLeft + container.offsetWidth / 2;
      const tolerance = 10;

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

    const container = document.getElementById("breeds-scroll");
    if (container) {
      container.addEventListener("scroll", handleHorizontalScroll);
      handleHorizontalScroll();
      return () => container.removeEventListener("scroll", handleHorizontalScroll);
    }
  }, [sortedBreeds, isOnLanding]);

  useEffect(() => {
    if (sortedBreeds.length === 0 || isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOnLanding) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          scrollToBreedSection();
        }
      } else {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          scrollToLanding();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          handlePrevious();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          handleNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentBreedIndex, sortedBreeds, handlePrevious, handleNext, isMenuOpen, isOnLanding, scrollToBreedSection, scrollToLanding]);

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
    <div id="main-container" className="bg-background overflow-y-auto overflow-x-hidden h-screen snap-y snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Fixed Header with Menu Button */}
      <header className="fixed top-0 right-0 z-40 p-3 sm:p-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          data-testid="button-open-menu"
          className="bg-background/80 backdrop-blur-md h-10 w-10 sm:h-10 sm:w-10"
        >
          <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </header>

      {/* Menu Panel */}
      <MenuPanel
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        breeds={sortedBreeds}
        onBreedSelect={(breedId) => {
          scrollToBreedSection();
          setTimeout(() => scrollToBreed(breedId), 500);
        }}
      />

      {/* Global Navigation Arrows - Only show when in breed section */}
      {!isOnLanding && (
        <>
          {currentBreedIndex > 0 && (
            <Button
              variant="outline"
              size="icon"
              className="fixed left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-background/80 backdrop-blur-md h-10 w-10 sm:h-10 sm:w-10"
              onClick={handlePrevious}
              aria-label="Previous breed"
              data-testid="button-previous-breed"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          )}
          {currentBreedIndex < sortedBreeds.length - 1 && (
            <Button
              variant="outline"
              size="icon"
              className="fixed right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-background/80 backdrop-blur-md h-10 w-10 sm:h-10 sm:w-10"
              onClick={handleNext}
              aria-label="Next breed"
              data-testid="button-next-breed"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          )}
        </>
      )}

      {/* Landing Section */}
      <section 
        id="landing"
        className="h-screen min-h-screen flex items-center justify-center snap-start snap-always px-4"
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
            Dog Breed Encyclopedia
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2">
            Explore detailed information about popular dog breeds, their history, 
            characteristics, and fascinating facts.
          </p>
          <Button
            size="lg"
            onClick={scrollToBreedSection}
            data-testid="button-start-exploring"
            className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
          >
            Start Exploring
          </Button>
        </div>
      </section>

      {/* Breed Section Container - Horizontal Scroll */}
      <section 
        id="breed-container"
        className="h-screen min-h-screen snap-start snap-always relative overflow-hidden"
      >
        <div 
          id="breeds-scroll"
          className="h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sortedBreeds.map((breed) => (
            <BreedSection
              key={breed.id}
              breed={breed}
            />
          ))}
        </div>
      </section>

      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
