import type { NextApiRequest, NextApiResponse } from "next";
    import { Movie } from "../../../types/media";

    // ... (mock movie data remains the same)

    export default function handler(
      req: NextApiRequest,
      res: NextApiResponse<Movie | { error: string }>
    ) {
      try {
        const { id } = req.query;
        const movie = mockMovies.find((m) => m.id === Number(id));

        if (!movie) {
          return res.status(404).json({ error: "Movie not found" });
        }

        res.status(200).json(movie);
      } catch (error: any) {
        console.error("Error fetching movie:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
