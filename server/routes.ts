import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDogBreedSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // GET /api/breeds - List all breeds (supports search via query param)
  app.get("/api/breeds", async (req, res) => {
    try {
      const searchQuery = req.query.q as string | undefined;
      
      if (searchQuery) {
        const breeds = await storage.searchBreeds(searchQuery);
        return res.json(breeds);
      }
      
      const breeds = await storage.listBreeds();
      res.json(breeds);
    } catch (error) {
      console.error("Error listing breeds:", error);
      res.status(500).json({ error: "Failed to fetch breeds" });
    }
  });

  // GET /api/breeds/:id - Get a specific breed by ID
  app.get("/api/breeds/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const breed = await storage.getBreed(id);
      
      if (!breed) {
        return res.status(404).json({ error: "Breed not found" });
      }
      
      res.json(breed);
    } catch (error) {
      console.error("Error fetching breed:", error);
      res.status(500).json({ error: "Failed to fetch breed" });
    }
  });

  // POST /api/breeds - Create a new breed (for future expansion)
  app.post("/api/breeds", async (req, res) => {
    try {
      const validatedBreed = insertDogBreedSchema.parse(req.body);
      const newBreed = await storage.createBreed(validatedBreed);
      res.status(201).json(newBreed);
    } catch (error) {
      console.error("Error creating breed:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid breed data", details: error });
      }
      res.status(500).json({ error: "Failed to create breed" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
