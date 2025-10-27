import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

interface BreedCardProps {
  id: string;
  name: string;
  image: string;
  origin: string;
}

export default function BreedCard({ id, name, image, origin }: BreedCardProps) {
  return (
    <Link href={`/breed/${id}`} data-testid={`link-breed-${id}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
        <CardContent className="p-6">
          <div className="flex justify-center mb-4">
            <img
              src={image}
              alt={`${name} dog`}
              className="h-48 w-auto object-contain"
              data-testid={`img-breed-${id}`}
            />
          </div>
          <h3 
            className="text-xl font-serif font-semibold text-center mb-2"
            data-testid={`text-breed-name-${id}`}
          >
            {name}
          </h3>
          <p className="text-sm text-muted-foreground text-center">
            Origin: {origin}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
