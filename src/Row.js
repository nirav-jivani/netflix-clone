import movieTrailer from 'movie-trailer';
import React,{useEffect,useState} from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';

const base_url="https://image.tmdb.org/t/p/original/";

function Row({ title,fetchUrl,isLargeRow }) {
    const [movies,setMovies]=useState([]);
    const [trailerurl,setTrailerurl]=useState("");

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const handleclick=(movie) =>{
        if(trailerurl)
        {
            setTrailerurl("");
        }
        else
        {
            movieTrailer(movie?.name||movie?.title || movie?.original_name||"")
            .then((url) => {
                const urlParams=new URLSearchParams(new URL(url).search);
                setTrailerurl(urlParams.get("v"));
            })
            .catch(err=>{
                console.log(err);
            })
        }
    };
    return (
        <div className="row">
            <h2>{ title }</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={()=>handleclick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
           {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
        </div>
    )
}

export default Row