import type { NextApiRequest, NextApiResponse } from "next";
    import { Movie } from "../../types/media";

    export default function handler(
      req: NextApiRequest,
      res: NextApiResponse<Movie[]>
    ) {
      // Placeholder for fetching movie data
      const movies: Movie[] = []; // Replace with actual data fetching logic
      res.status(200).json(movies);
    }
