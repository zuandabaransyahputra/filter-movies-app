import React from 'react'
import { motion } from "framer-motion"

function Movie({movie}) {
  return (
    <motion.div
    layout
    animate={{opacity : 1}}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}>
        <h3>
            {movie.title}
        </h3>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie" />
    </motion.div>
  )
}

export default Movie