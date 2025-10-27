import BreedTemperament from '../BreedTemperament';

export default function BreedTemperamentExample() {
  return (
    <BreedTemperament
      temperament={["Intelligent", "Friendly", "Reliable", "Trustworthy", "Kind"]}
      behavior="Golden Retrievers are renowned for their gentle, loving nature and exceptional intelligence. They're eager to please, which makes them highly trainable."
    />
  );
}
