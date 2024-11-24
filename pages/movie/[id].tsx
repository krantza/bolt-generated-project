// ... (imports and other code remain the same)

      return (
        <div>
          <h1>{movie.title}</h1>
          <p>Genre: {movie.genre}</p>
          <p>Year: {movie.year}</p>
          <p>Rating: {movie.rating}</p>

          {/* Release Info (add release date here when available) */}
          <p>Release Date: {/* movie.releaseDate */}</p>

          <h3>Reviews</h3>
          <ul>
            {movie.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>

          {/* Key Details */}
          <p>Plot: {movie.plot}</p>
          <p>Cast: {movie.cast.join(", ")}</p>
          <p>Director: {movie.crew.director}</p>
          {/* Add other crew members as needed */}
          {/* Embed trailer if available */}
          {movie.trailer && (
            <iframe
              width="560"
              height="315"
              src={movie.trailer}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
          {/* Display awards */}
          <p>Awards: {movie.awards.join(", ")}</p>
        </div>
      );
