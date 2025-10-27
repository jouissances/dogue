import { Ruler, Weight, Palette, Clock, ArrowsUpFromLine } from "lucide-react";
import { CoatVariant } from "@shared/schema";
import { Button } from "@/components/ui/button";

interface PhysicalTraitsProps {
  size: string;
  height: string;
  weight: string;
  coat: string;
  lifespan: string;
  coatTypes?: string[];
  selectedCoatType?: string;
  onCoatTypeSelect?: (coatType: string) => void;
  coatVariants?: CoatVariant[];
  selectedVariant?: CoatVariant;
  onVariantSelect?: (variant: CoatVariant) => void;
}

export default function PhysicalTraits({
  size,
  height,
  weight,
  coat,
  lifespan,
  coatTypes,
  selectedCoatType,
  onCoatTypeSelect,
  coatVariants,
  selectedVariant,
  onVariantSelect,
}: PhysicalTraitsProps) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card"
        data-testid="card-trait-size"
      >
        <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
          <Ruler className="h-4 w-4 text-primary" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <dt className="font-semibold text-sm mb-1">Size</dt>
          <dd className="text-muted-foreground text-sm" data-testid="text-size">
            {size}
          </dd>
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card"
        data-testid="card-trait-height"
      >
        <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
          <ArrowsUpFromLine className="h-4 w-4 text-primary" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <dt className="font-semibold text-sm mb-1">Height</dt>
          <dd className="text-muted-foreground text-sm" data-testid="text-height">
            {height}
          </dd>
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card"
        data-testid="card-trait-weight"
      >
        <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
          <Weight className="h-4 w-4 text-primary" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <dt className="font-semibold text-sm mb-1">Weight</dt>
          <dd className="text-muted-foreground text-sm" data-testid="text-weight">
            {weight}
          </dd>
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card"
        data-testid="card-trait-coat"
      >
        <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
          <Palette className="h-4 w-4 text-primary" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <dt className="font-semibold text-sm mb-1">Coat</dt>
          <dd className="text-muted-foreground text-sm mb-2" data-testid="text-coat">
            {coat}
          </dd>
          
          {coatTypes && coatTypes.length > 1 && (
            <div className="space-y-2 mb-3">
              <div className="text-xs font-medium text-muted-foreground">Coat Type:</div>
              <div className="flex flex-wrap gap-1.5">
                {coatTypes.map((type, index) => (
                  <Button
                    key={index}
                    variant={selectedCoatType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => onCoatTypeSelect?.(type)}
                    className="text-xs h-7 px-2"
                    data-testid={`button-coat-type-${index}`}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {coatVariants && coatVariants.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-medium text-muted-foreground">Colors & Markings:</div>
              <div className="flex flex-wrap gap-1.5">
                {coatVariants.map((variant, index) => (
                  <Button
                    key={index}
                    variant={selectedVariant === variant ? "default" : "outline"}
                    size="sm"
                    onClick={() => onVariantSelect?.(variant)}
                    className="text-xs h-7 px-2"
                    data-testid={`button-coat-variant-${index}`}
                  >
                    {variant.color}
                  </Button>
                ))}
              </div>
              {selectedVariant && (
                <div className="text-xs text-muted-foreground italic">
                  {selectedVariant.marking}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card"
        data-testid="card-trait-lifespan"
      >
        <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
          <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <dt className="font-semibold text-sm mb-1">Lifespan</dt>
          <dd className="text-muted-foreground text-sm" data-testid="text-lifespan">
            {lifespan}
          </dd>
        </div>
      </div>
    </div>
  );
}
