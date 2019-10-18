import React from 'react';
import AutoSuggestion from './components/AutoSuggestion'
import Movie from './components/Movie'
import './App.css';
import Search from './components/Search';

class App extends React.Component {
  constructor(
    props
  ){
    this.state = {
      value: '',
    debounce: null,
    error: false,
    loading: false,
    results: [],
    movie: [],
    genre: [],
    API_URL:'https://api.themoviedb.org/3',
    API_KEY:'be4ec4c766ce01b7d9b6f5755c0d5e4a'
    }
  
}

getMovie = id =>
    fetch(`${this.state.API_URL}/movie/${id}?api_key=${this.state.API_KEY}`)
      .then(res => res.json())
      .catch(error => error.json());

findMovies = query =>
      fetch(`${this.state.API_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
        .then(res => res.json())
        .catch(error => error.json());

getGenres = () => 
    fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
        .then(res => res.json())
        .catch(error => error.json());

  onChange = name => event => {
    if( query.debounce ) {
      clearTimeout( query.debounce )
    }
    this.setState(
      { 
        ...this.state, query: {
          [name]: event.target.value, 
        debounce: setTimeout(() => searchMovie(this.state.value), 1000)
        }
        })
  }

  searchMovie = query => {
    if( query !== undefined && query !== '') {
      setQuery({
        loading: true,
        results: []
      });
      findMovies(`${query}`)
        .then(res => {
          if ( res.total_results === 0) {
            setQuery({
              loading: false,
              error: false,
              results: []
            });
          } else {
            setQuery({
              loading: false,
              results: [...res.results],
            });
          }
        })
        .catch(() => {
          setQuery({
            error: true,
            loading: false,
          });
        })
    } else {
      setQuery({
        results: [],
        error: false,
      });
    }
  };

  movieResults = id => {
    getMovie(id)
    .then(res => {
      setMovie([res])
      setQuery({results: []})
    })
    .catch(error => {
      alert(error)    
      }
    );
    getGenres()
    .then(res => {
      setGenre(res.genres)
    })
    .catch(error => {
      alert(error)
    })
  };
}

App = () =>{

  [query, setQuery] = React.useState({
    value: '',
    debounce: null,
    error: false,
    loading: false,
    results: [],
  })

  [movie, setMovie] = React.useState([])
  [genre, setGenre] = React.useState([])


  API_URL = 'https://api.themoviedb.org/3'
  API_KEY = 'be4ec4c766ce01b7d9b6f5755c0d5e4a'
  getMovie = id =>
    fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .catch(error => error.json());

    findMovies = query =>
      fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
        .then(res => res.json())
        .catch(error => error.json());

    getGenres = () => 
    fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
        .then(res => res.json())
        .catch(error => error.json());

  onChange = name => event => {
    if( query.debounce ) {
      clearTimeout( query.debounce )
    }
    setQuery(
      { 
        ...query, 
        [name]: event.target.value, 
        debounce: setTimeout(() => searchMovie(query.value), 1000)})
  }

  searchMovie = query => {
    if( query !== undefined && query !== '') {
      setQuery({
        loading: true,
        results: []
      });
      findMovies(`${query}`)
        .then(res => {
          if ( res.total_results === 0) {
            setQuery({
              loading: false,
              error: false,
              results: []
            });
          } else {
            setQuery({
              loading: false,
              results: [...res.results],
            });
          }
        })
        .catch(() => {
          setQuery({
            error: true,
            loading: false,
          });
        })
    } else {
      setQuery({
        results: [],
        error: false,
      });
    }
  };

  movieResults = id => {
    getMovie(id)
    .then(res => {
      setMovie([res])
      setQuery({results: []})
    })
    .catch(error => {
      alert(error)    
      }
    );
    getGenres()
    .then(res => {
      setGenre(res.genres)
    })
    .catch(error => {
      alert(error)
    })
  };

  return (
    <>
    <Search onChange={onChange} />  
    <AutoSuggestion getMovie={movieResults} data={query.results}  />
    <Movie movie={movie} genre={genre} />
   </>
  )

}

export default App;
