import { useQuery } from "@tanstack/react-query";
import type { DogBreed } from "@shared/schema";

export function useBreeds() {
  return useQuery<DogBreed[]>({
    queryKey: ["/api/breeds"],
    queryFn: async () => {
      const response = await fetch("/api/breeds");
      if (!response.ok) {
        throw new Error("Failed to fetch breeds");
      }
      return response.json();
    },
  });
}

export function useBreed(id: string | undefined) {
  return useQuery<DogBreed>({
    queryKey: ["/api/breeds", id],
    queryFn: async () => {
      const response = await fetch(`/api/breeds/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch breed");
      }
      return response.json();
    },
    enabled: !!id,
  });
}

export function useSearchBreeds(searchQuery: string) {
  return useQuery<DogBreed[]>({
    queryKey: ["/api/breeds", { search: searchQuery }],
    queryFn: async () => {
      const response = await fetch(`/api/breeds?q=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) {
        throw new Error("Failed to search breeds");
      }
      return response.json();
    },
    enabled: searchQuery.length > 0,
  });
}
