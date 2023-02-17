import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'components/Shared/Api';

const MovieReviewsPage = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await movieReviews(id);
        setItems(data);
      } catch {
        alert('Ooops, something went wrong');
      }
    };
    fetchReviews();
  }, [id, setItems]);

  const elements = items.map(({ id, author, content }) => (
    <li key={id}>
      <h4>{author}</h4>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {items && !!items.length ? (
        <ul>{elements}</ul>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default MovieReviewsPage;
