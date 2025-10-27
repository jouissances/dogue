interface BreedHeroProps {
  name: string;
  image: string;
  origin: string;
}

export default function BreedHero({ name, image, origin }: BreedHeroProps) {
  return (
    <section 
      className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-background"
      aria-labelledby="breed-name"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center">
          <img
            src={image}
            alt={`${name} dog portrait`}
            className="max-h-64 md:max-h-96 w-auto object-contain drop-shadow-2xl"
            data-testid="img-breed-hero"
          />
        </div>
        <h1 
          id="breed-name"
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
          data-testid="text-breed-name"
        >
          {name}
        </h1>
        <p 
          className="text-lg md:text-xl text-muted-foreground"
          data-testid="text-breed-origin"
        >
          Origin: {origin}
        </p>
      </div>
    </section>
  );
}
