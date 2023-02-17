import { useState } from 'react';

const SearchMoviesForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
          value={query}
        />
      </form>
    </div>
  );
};

export default SearchMoviesForm;
