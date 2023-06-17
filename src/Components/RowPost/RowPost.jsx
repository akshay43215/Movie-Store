import { APIKEY, IMAGEURL } from "../../constants/constants";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Axios from "../../Axios/Axios";
import ReviewBox from "../ReviewBox/ReviewBox";
import "./RowPost.css";

function RowPost({ title, isSmall, url, noWrap, inputVal}) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState(null);
  const [movieName, setMovieName] = useState('')
  const [reviewBox, setReviewBox] = useState(false)
  
  useEffect(() => {
    Axios.get(url)
      .then((response) => {
        // console.log(response.data);
        setMovies(response.data.results);
     
      })
      .catch((error) => {
        console.log(error, " in row post");
      });
  }, [url]);
// console.log(inputVal);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const getColor = (vote) => {
    if (vote >= 7) return "green";
    else if (vote >= 5) return "orenge";
    else return "red";
  };

  const handleTrailer = (id) => {
    // console.log(id, "fn argument id");

    Axios.get(`/movie/${id}/videos?api_key=${APIKEY}&language=en-US`)
    .then((response) => {
        console.log(response.data, "results");
        if (response.data?.results?.length) {
          setUrlId(response.data.results[0].key);
        }
        return;
      }
     ).catch()
     console.log('error on playing Video');
  };
  const reviewMovie=(name)=> {
    // console.log( name);
    setReviewBox(!reviewBox)
    setMovieName(name)
  }

  return (
    <div className="row-container">
      <h2>{title}</h2>
      <div className="row-posters" style={noWrap ? { flexWrap: "wrap" } : {}}>
        {
        movies.filter((itm)=>{
          if (!inputVal) return true
          if (itm.title.includes(inputVal)) {
            return true;
          } else {
            return false;
          }
        })
        .map((itm) => {
          // console.log(itm.title,itm.name);
            return(
            <div className="movie-map" key={itm.id}>
              <div className="first-part">
                <span className={getColor(itm.vote_average)}>
                  {itm.vote_average}
                </span>
                <div className="name-div">
                <h3>{itm.name}{itm.title}</h3>
                </div>
                <button onClick={() => handleTrailer(itm.id)}>Watch</button>
              </div>
              <div className="second-part"></div>
              <img
                key={itm.id} onClick={()=>reviewMovie(itm.name||itm.title)}
                className={isSmall ? "small-poster" : "poster"}
                src={`${IMAGEURL + itm.backdrop_path}`}
                alt="row-post-image"
                />
            </div>
            )
          }
          )}
      </div>
      {reviewBox && <ReviewBox movieName={movieName} reviewBox={reviewBox} setReviewBox={setReviewBox}/>}

      {urlId && <YouTube opts={opts} videoId={urlId} />}
    </div>
  );
}

export default RowPost;
