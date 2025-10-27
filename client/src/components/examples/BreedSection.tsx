import BreedSection from "../BreedSection";
import goldenRetrieverImg from "@assets/generated_images/Golden_Retriever_dog_portrait_1f588c8d.png";

export default function BreedSectionExample() {
  const mockBreed = {
    id: "golden-retriever",
    name: "Golden Retriever",
    image: goldenRetrieverImg,
    origin: "Scotland",
    history: "The Golden Retriever was developed in Scotland during the mid-19th century by Lord Tweedmouth.",
    size: "Large",
    weight: "55-75 lbs (25-34 kg)",
    coat: "Dense, water-repellent double coat",
    lifespan: "10-12 years",
    temperament: ["Intelligent", "Friendly", "Reliable"],
    behavior: "Golden Retrievers are renowned for their gentle, loving nature.",
    trivia: ["They can carry an egg in their mouth without breaking it"],
  };

  return (
    <BreedSection
      breed={mockBreed}
      onPrevious={() => console.log("Previous clicked")}
      onNext={() => console.log("Next clicked")}
      hasPrevious={true}
      hasNext={true}
    />
  );
}
