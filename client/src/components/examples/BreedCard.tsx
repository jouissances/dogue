import BreedCard from '../BreedCard';
import goldenRetrieverImg from "@assets/generated_images/Golden_Retriever_dog_portrait_1f588c8d.png";

export default function BreedCardExample() {
  return (
    <div className="max-w-xs">
      <BreedCard
        id="golden-retriever"
        name="Golden Retriever"
        image={goldenRetrieverImg}
        origin="Scotland"
      />
    </div>
  );
}
