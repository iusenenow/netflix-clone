import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests';

const Banner = () => {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(requests.fetchNetflixOriginals)

      const randomMovie = data.results[Math.floor(Math.random() * data.results.length - 1)]

      setMovie(randomMovie)
    }
    fetchData()
  }, [])

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }

  return (
    <header className="banner" style={{
      backgroundSize: "cover",
      backgroundPostion: "center center",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}>

      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>

        <h1 className="banner-description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner-fadeBottom"></div>
    </header>
  )
}

export default Banner
