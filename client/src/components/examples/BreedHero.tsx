import BreedHero from '../BreedHero';
import goldenRetrieverImg from "@assets/generated_images/Golden_Retriever_dog_portrait_1f588c8d.png";

export default function BreedHeroExample() {
  return (
    <BreedHero
      name="Golden Retriever"
      image={goldenRetrieverImg}
      origin="Scotland"
    />
  );
}
