import type { NextApiRequest, NextApiResponse } from "next";
    import { MediaItem } from "../../types/media";

    export default function handler(
      req: NextApiRequest,
      res: NextApiResponse<MediaItem[]>
    ) {
      const sampleData: MediaItem[] = [
        { id: 1, title: "Sample Film", type: "film" },
        { id: 2, title: "Sample Series", type: "series" },
        { id: 3, title: "Sample Book", type: "book" },
      ];
      res.status(200).json(sampleData);
    }
