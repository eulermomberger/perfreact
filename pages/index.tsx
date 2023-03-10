import { SearchResults } from '@/components/SearchResults';
import { FormEvent, useCallback, useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();
    setResults(data);
  };

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, [])

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit'>Buscar</button>
      </form>

      <SearchResults
        results={results}
        addToWishList={addToWishList}
      />
    </div>
  )
}
