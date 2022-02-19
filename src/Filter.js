import React from 'react'
import { useEffect} from "react"

export default function Filter({ genre, setGenre, setFilterMovie, dataMovies }) {

  useEffect(() => {
    if (genre === 0) {
      setFilterMovie(dataMovies)
      return;
    }

    const filter = dataMovies.filter(movie => movie.genre_ids.includes(genre))
    setFilterMovie(filter)
  }, [genre])

  return (
    <div className="filter">
        <button className={genre === 0 ? "active" : ''} onClick={() => setGenre(0)}>All</button>
        <button className={genre === 35 ? "active" : ''} onClick={() => setGenre(35)}>Comedy</button>
        <button className={genre === 28 ? "active" : ''} onClick={() => setGenre(28)}>Action</button>
    </div>
  )
}
