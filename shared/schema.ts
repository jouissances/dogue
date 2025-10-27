import { z } from "zod";

export interface DogBreed {
  id: string;
  name: string;
  image: string;
  origin: string;
  history: string;
  size: string;
  weight: string;
  coat: string;
  lifespan: string;
  temperament: string[];
  behavior: string;
  trivia: string[];
}

export const dogBreedSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  origin: z.string(),
  history: z.string(),
  size: z.string(),
  weight: z.string(),
  coat: z.string(),
  lifespan: z.string(),
  temperament: z.array(z.string()),
  behavior: z.string(),
  trivia: z.array(z.string()),
});
