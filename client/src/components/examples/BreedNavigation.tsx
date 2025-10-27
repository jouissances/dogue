import BreedNavigation from '../BreedNavigation';

export default function BreedNavigationExample() {
  return (
    <BreedNavigation
      currentBreedName="Golden Retriever"
      previousBreed={{ id: "dachshund", name: "Dachshund" }}
      nextBreed={{ id: "beagle", name: "Beagle" }}
    />
  );
}
