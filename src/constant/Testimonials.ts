// testReviewData.ts

export interface Review {
  id: number;
  name: string;
  rating: number;
  stars: string;
  comment: string;
}

export const testReviewData: Review[] = [
  {
    id: 1,
    name: "Test User 1",
    rating: 5,
    stars: "⭐⭐⭐⭐⭐",
    comment: "Excellent product, works perfectly for testing.",
  },
  {
    id: 2,
    name: "Test User 2",
    rating: 4,
    stars: "⭐⭐⭐⭐",
    comment: "Good quality and smooth experience.",
  },
  {
    id: 3,
    name: "Test User 3",
    rating: 3,
    stars: "⭐⭐⭐",
    comment: "Average product, nothing special.",
  },
  {
    id: 4,
    name: "Test User 4",
    rating: 2,
    stars: "⭐⭐",
    comment: "Not very satisfied, needs improvement.",
  },
  {
    id: 5,
    name: "Test User 5",
    rating: 1,
    stars: "⭐",
    comment: "Poor quality, just for testing UI.",
  },
];