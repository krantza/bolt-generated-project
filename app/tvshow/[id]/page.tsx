{/* Add a similar "Fun Facts & Trivia" section for TV shows */}
} from "../../../types/media";

    // ... (getTVShow function remains the same)

    export default async function TVShowDetails({ params }: { params: { id: string } }) {
      const tvShow = await getTVShow(params.id);

      return (
        <div>
          <h1>{tvShow.title}</h1>
          <p>Genre: {tvShow.genre}</p>
          <p>Seasons: {tvShow.seasons}</p>
          <p>Rating: {tvShow.rating}</p>
          {/* ... other TV show details */}
        </div>
      );
    }
      <div>
          <h1>{tvShow.title}</h1>
          <p>Genre: {tvShow.genre}</p>
          <p>Seasons: {tvShow.seasons}</p>
          <p>Rating: {tvShow.rating}</p>
          {/* ... other TV show details */}
        </div>
      );
    }
