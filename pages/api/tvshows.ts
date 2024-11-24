// Update similarly to movies.ts with the new TVShow type
";

    type TVShow = {
      id: number;
      title: string;
      genre: string;
      seasons: number;
    };

    export default function handler(
      req: NextApiRequest,
      res: NextApiResponse<TVShow[]>
    ) {
      const tvShows: TVShow[] = [
        { id: 1, title: "Show X", genre: "Drama", seasons: 3 },
        { id: 2, title: "Show Y", genre: "Sci-Fi", seasons: 5 },
        // Add more mock TV show data
      ];

      res.status(200).json(tvShows);
    }
