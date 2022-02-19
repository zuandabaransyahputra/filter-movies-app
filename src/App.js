import './App.css';
import { useState, useEffect } from "react"
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from "framer-motion"

function App() {

  const [dataMovies, setDataMovies] = useState([])
  const [filterMovie, setFilterMovie] = useState([])
  const [genre, setGenre] = useState(0)
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetchMoviesp()
  }, [])

  const fetchMoviesp = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc3b8ad1b00296114c474182524f2028&language=en-US&page=1")
    const movies = await data.json()
    setDataMovies(movies.results)
    setFilterMovie(movies.results)
  }

  function handleOnChange(e) {
    setQuery(e.target.value)
  }

  return (
    <div className="filterApp">
        <input type="text" placeholder='search' className="search" onChange={handleOnChange} />
        <Filter dataMovies={dataMovies} setFilterMovie={setFilterMovie} setGenre={setGenre} genre={genre}/>
        <motion.div 
        layout
        className="filterApp__content">
        <AnimatePresence>
        {
          query === ""
          ?
          filterMovie.map((movie) => {
            return <Movie key={movie.id} movie={movie}/>
          })
          :
          filterMovie.filter(movie => movie.title.toLowerCase().includes(query)).map(movie => {
            return <Movie key={movie.id} movie={movie} />
          })
        }
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
