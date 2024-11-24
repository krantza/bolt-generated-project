{/* Implement similar error handling for TV shows */}
next";
    import { TVShow } from "../../../types/media";

    // ... (mock data and handler function remain the same)
V show data from pages/api/tvshows.ts
    ];

    export default function handler(
      req: NextApiRequest,
      res: NextApiResponse<TVShow | { message: string }>
    ) {
      const { id } = req.query;
      const tvShow = mockTVShows.find((show) => show.id === Number(id));

      if (tvShow) {
        res.status(200).json(tvShow);
      } else {
        res.status(404).json({ message: "TV Show not found" });
      }
    }
