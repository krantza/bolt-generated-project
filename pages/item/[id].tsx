import { useRouter } from "next/router";
    import { useEffect, useState } from "react";
    import { Book, Film, MediaItem, Series } from "../../types/media";
    import styled from "styled-components";

    const DetailsContainer = styled.div`
      padding: 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
    `;

    // ... (rest of the page code)

      return (
        <DetailsContainer>
          <h1>{item.title}</h1>
          {/* ... rest of the content */}
        </DetailsContainer>
      );
> setItem(data));
        }
      }, [id]);

      if (!item) {
        return <div>Loading...</div>;
      }

      return (
        <div>
          <h1>{item.title}</h1>
          <p>Type: {item.type}</p>
          {item.type === "film" && (
            <p>Director: {(item as Film).director}</p>
          )}
          {item.type === "series" && (
            <p>Seasons: {(item as Series).seasons}</p>
          )}
          {item.type === "book" && (
            <p>Author: {(item as Book).author}</p>
          )}
        </div>
      );
    }
