import { useState, useEffect } from "react";
import { X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { DogBreed } from "@shared/schema";

interface MenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
  breeds: DogBreed[];
  onBreedSelect: (breedId: string) => void;
}

export default function MenuPanel({ isOpen, onClose, breeds, onBreedSelect }: MenuPanelProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBreedClick = (breedId: string) => {
    onBreedSelect(breedId);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape, { capture: true });
    return () => window.removeEventListener("keydown", handleEscape, { capture: true });
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Menu Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-card border-l border-border z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Breed navigation menu"
        aria-hidden={!isOpen}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-serif font-semibold">Browse Breeds</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              aria-label="Close menu"
              data-testid="button-close-menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Search Bar */}
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search breeds..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search-breeds"
              />
            </div>
          </div>

          {/* Breed List */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {filteredBreeds.map((breed) => (
                <li key={breed.id}>
                  <button
                    onClick={() => handleBreedClick(breed.id)}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    data-testid={`button-menu-breed-${breed.id}`}
                  >
                    <div className="font-semibold">{breed.name}</div>
                    <div className="text-sm text-muted-foreground">{breed.origin}</div>
                  </button>
                </li>
              ))}
            </ul>
            {filteredBreeds.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No breeds found</p>
            )}
          </nav>
        </div>
      </aside>
    </>
  );
}
