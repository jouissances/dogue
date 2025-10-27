import BreedFooterNav from '../BreedFooterNav';
import beagleImg from "@assets/generated_images/Beagle_dog_portrait_transparent_0eee134e.png";
import dachshundImg from "@assets/generated_images/Dachshund_dog_portrait_transparent_be40d679.png";

export default function BreedFooterNavExample() {
  return (
    <BreedFooterNav
      previousBreed={{ id: "dachshund", name: "Dachshund", image: dachshundImg }}
      nextBreed={{ id: "beagle", name: "Beagle", image: beagleImg }}
    />
  );
}
