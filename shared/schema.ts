import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const coatVariantSchema = z.object({
  color: z.string(),
  marking: z.string(),
  coatType: z.string().optional(),
  image: z.string(),
});

export type CoatVariant = z.infer<typeof coatVariantSchema>;

export const dogBreeds = pgTable("dog_breeds", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image").notNull(),
  origin: text("origin").notNull(),
  group: text("group"),
  history: text("history").notNull(),
  size: text("size").notNull(),
  height: text("height").notNull(),
  weight: text("weight").notNull(),
  coat: text("coat").notNull(),
  lifespan: text("lifespan").notNull(),
  temperament: text("temperament").array().notNull(),
  behavior: text("behavior").notNull(),
  trivia: text("trivia").array().notNull(),
});

export const insertDogBreedSchema = createInsertSchema(dogBreeds);
export type InsertDogBreed = z.infer<typeof insertDogBreedSchema>;
export type DogBreed = typeof dogBreeds.$inferSelect & {
  coatTypes?: string[];
  coatVariants?: CoatVariant[];
};
