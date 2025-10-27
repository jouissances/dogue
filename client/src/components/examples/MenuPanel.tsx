import { useState } from "react";
import MenuPanel from "../MenuPanel";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import beagleImg from "@assets/generated_images/Beagle_dog_portrait_transparent_0eee134e.png";
import dachshundImg from "@assets/generated_images/Dachshund_dog_portrait_transparent_be40d679.png";
import goldenRetrieverImg from "@assets/generated_images/Golden_Retriever_dog_portrait_1f588c8d.png";

export default function MenuPanelExample() {
  const [isOpen, setIsOpen] = useState(true);

  const mockBreeds = [
    { id: "beagle", name: "Beagle", image: beagleImg, origin: "England", history: "", size: "", weight: "", coat: "", lifespan: "", temperament: [], behavior: "", trivia: [] },
    { id: "dachshund", name: "Dachshund", image: dachshundImg, origin: "Germany", history: "", size: "", weight: "", coat: "", lifespan: "", temperament: [], behavior: "", trivia: [] },
    { id: "golden-retriever", name: "Golden Retriever", image: goldenRetrieverImg, origin: "Scotland", history: "", size: "", weight: "", coat: "", lifespan: "", temperament: [], behavior: "", trivia: [] },
  ];

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        <Menu className="h-5 w-5" />
      </Button>
      <MenuPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        breeds={mockBreeds}
        onBreedSelect={(id) => console.log("Selected breed:", id)}
      />
    </div>
  );
}
