import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  // Hit Sanity's live API, not the edge-cached CDN, so each ISR
  // regeneration pulls the current content (no second stale layer).
  useCdn: false,
});
