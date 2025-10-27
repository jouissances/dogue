import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

interface BreedFooterNavProps {
  previousBreed?: { id: string; name: string; image: string };
  nextBreed?: { id: string; name: string; image: string };
}

export default function BreedFooterNav({
  previousBreed,
  nextBreed,
}: BreedFooterNavProps) {
  return (
    <footer 
      className="border-t border-border bg-card mt-20"
      role="contentinfo"
    >
      <nav 
        className="max-w-4xl mx-auto px-6 py-8"
        aria-label="Breed navigation footer"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Previous Breed */}
          <div className="flex justify-center md:justify-start">
            {previousBreed ? (
              <Link href={`/breed/${previousBreed.id}`} data-testid="link-footer-previous">
                <Button variant="outline" className="gap-2">
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Previous</div>
                    <div className="font-semibold">{previousBreed.name}</div>
                  </div>
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Home Button */}
          <div className="flex justify-center">
            <Link href="/" data-testid="link-footer-home">
              <Button variant="default" className="gap-2">
                <Home className="h-4 w-4" aria-hidden="true" />
                All Breeds
              </Button>
            </Link>
          </div>

          {/* Next Breed */}
          <div className="flex justify-center md:justify-end">
            {nextBreed ? (
              <Link href={`/breed/${nextBreed.id}`} data-testid="link-footer-next">
                <Button variant="outline" className="gap-2">
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Next</div>
                    <div className="font-semibold">{nextBreed.name}</div>
                  </div>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </nav>
    </footer>
  );
}
