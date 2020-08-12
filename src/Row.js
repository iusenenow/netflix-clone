import React, { useState, useEffect } from 'react';
import axios from './axios'

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl, isLargeRow }) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const { data } = await axios.get(fetchUrl)
      setMovies(data.results)
    }

    fetchData()
  }, [fetchUrl])

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path :
                movie.backdrop_path}`}
            alt={movie.name} />
        ))}
      </div>
    </div>
  )
}

export default Row
