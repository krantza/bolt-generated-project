import { useState } from "react";
    import styled from "styled-components";

    const Form = styled.form`
      /* Add some styling */
    `;

    const TextArea = styled.textarea`
      /* Add some styling */
    `;

    interface ReviewFormProps {
      onSubmit: (reviewText: string, rating: number) => void;
    }

    const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
      const [reviewText, setReviewText] = useState("");
      const [rating, setRating] = useState(0);

      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(reviewText, rating);
        setReviewText("");
        setRating(0);
      };

      return (
        <Form onSubmit={handleSubmit}>
          <TextArea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          {/* Add rating input (e.g., star rating component) */}
          <button type="submit">Submit Review</button>
        </Form>
      );
    };

    export default ReviewForm;
