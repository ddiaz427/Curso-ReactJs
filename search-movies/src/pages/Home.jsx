import { useState } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import SearchForm from '../components/SearchForm/SearchForm';
import Title from '../components/Title/Title';

const Home = () => {
  
    const [results, setResults] = useState([])
    const [usedSearch, setUsedSearch] = useState(false)
  
    const handlerResults = (results) => {
      setResults(results)
      setUsedSearch(true);
    }
  
    const renderResults = () => {
      return results.length === 0
      ? <p>Sorry! Not results found!</p>
      : <MoviesList movies={results}/>
    }
    return (
        <div>
            <Title>Search Movies</Title>
            <div className="SearchForm-wrapper">
                <SearchForm onResults={handlerResults} />
            </div>
            {usedSearch
            ? renderResults()
            : <small>Use the form to search a movie</small>
            }
        </div>
    )
}

export default Home