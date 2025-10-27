import { Home, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface BreedNavigationProps {
  currentBreedName: string;
  previousBreed?: { id: string; name: string };
  nextBreed?: { id: string; name: string };
}

export default function BreedNavigation({
  currentBreedName,
  previousBreed,
  nextBreed,
}: BreedNavigationProps) {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-16"
      role="banner"
    >
      <nav 
        className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" data-testid="link-home">
          <Button variant="ghost" size="sm" className="gap-2">
            <Home className="h-4 w-4" aria-hidden="true" />
            <span className="hidden md:inline">Home</span>
          </Button>
        </Link>
        
        <h1 className="text-lg md:text-xl font-serif font-semibold text-center">
          {currentBreedName}
        </h1>
        
        <div className="flex gap-2">
          {previousBreed && (
            <Link href={`/breed/${previousBreed.id}`} data-testid="link-previous-breed">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-1"
                aria-label={`Previous breed: ${previousBreed.name}`}
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                <span className="hidden md:inline">Prev</span>
              </Button>
            </Link>
          )}
          {nextBreed && (
            <Link href={`/breed/${nextBreed.id}`} data-testid="link-next-breed">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-1"
                aria-label={`Next breed: ${nextBreed.name}`}
              >
                <span className="hidden md:inline">Next</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
