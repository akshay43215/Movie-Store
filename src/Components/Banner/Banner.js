
import { APIKEY,IMAGEURL } from '../../constants/constants'
import {useEffect,useState} from 'react'
import YouTube from 'react-youtube';
import  Axios from '../../Axios/Axios'
import './Banner.css'

function Banner() {

const [movie, setMovie] = useState([])
const [urlId, setUrlId] = useState(null)

    useEffect(() => {
        
        Axios.get(`/trending/all/week?api_key=${APIKEY}&language=en-US`).then((response)=>{
            // console.log((response.data.results).length);
            const objLength = response.data.results.length
            // console.log(objLength);
            const r = Math.random()*(objLength-0) + 0
            const randomIdx= Math.floor(r)

            setMovie(response.data.results[randomIdx])
        }).catch((err)=>{
            console.log( err,'in banner api');
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        margin: 'auto',
        playerVars: {
          autoplay: 1,
        },
      }

    const handleTrailer=(id)=> {
        console.log(id,'fn argument id');
    
        Axios.get(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`).then((response)=>{
          
        console.log(response.data.results,'results');
          if (response.data?.results?.length) {
            setUrlId(response.data.results[0].key)
          }
          return;
          // console.log(urlId,'urlid state');
        }) 
         }

// console.log(movie);
// console.log(IMAGEURL);
  return (
    <div style={{ backgroundImage:`url(${movie?IMAGEURL+movie.backdrop_path:''})` }} className="banner-container">
        <div className="content">
            <h1 className='title'>{movie?.title}</h1>
            <div className="banner-buttons">
                <button onClick={()=>handleTrailer(movie.id)}>Play</button>
                <button>My List</button>
            </div>
            <div className="discreption">
                <h2>{movie?.overview}</h2>
            </div>
            <div className="fade-bootom">
            </div>
        </div>
            { urlId && <YouTube opts={opts} videoId={urlId}/> }
    </div>
    )
}

export default Banner