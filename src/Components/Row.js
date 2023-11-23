import React, { useState, useEffect } from 'react';
import axios from "../axios";
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({title, fetchUrl, isLargeRow = false}) {        //props
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");

   const base_url = "https://image.tmdb.org/t/p/original/";

   useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl); 
      setMovies(request.data.results);
      return request;
    }

    fetchData();
   }, [fetchUrl]);
  //  console.log(movies) 

  const opts ={
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  };

  const handleClick = async (movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.name || "")
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch(error => console.log(error)); 
    }
    // try {
    //   const url = await movieTrailer(movie?.name || "");
    //   const urlParams = new URLSearchParams(new URL(url).search);
    //   const videoId = urlParams.get('v');
    //   if (videoId) {
    //     const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    //     setTrailerUrl(youtubeUrl);
    //   }
    // } catch (error) {
    //   console.log(error);}
    // }
  }
  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row_posters'>
      {movies.map(
        (movie) => (
        ((isLargeRow && movie.poster_path) || 
        (!isLargeRow && movie.backdrop_path)) && (
        <img  
        className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
        key={movie.id}
        onClick={() => handleClick(movie)}
        src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
        alt='movie.name'/> 
        ))
      )}
    </div>
    {/* <p
            style={{ marginRight: "5px" }}
     >{movies.name || movies.original_name || movies.original_title}</p> */}
    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row;
