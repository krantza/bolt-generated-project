import type { NextApiRequest, NextApiResponse } from "next";
    import { Book, Film, MediaItem, Series } from "../../../types/media";

    // ... (rest of the file remains the same)
 NextApiRequest,
      res: NextApiResponse<MediaItem | Film | Series | Book>
    ) {
      const { id } = req.query;

      const sampleData: (MediaItem | Film | Series | Book)[] = [
        {
          id: 1,
          title: "Sample Film",
          type: "film",
          director: "John Doe",
        },
        {
          id: 2,
          title: "Sample Series",
          type: "series",
          seasons: 3,
        },
        { id: 3, title: "Sample Book", type: "book", author: "Jane Doe" },
      ];

      const item = sampleData.find((item) => item.id === Number(id));

      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ message: "Not found" });
      }
    }
