
import { APIKEY,IMAGEURL } from '../../constants/constants'
import {useEffect,useState} from 'react'
import  Axios from '../../Axios/Axios'
import './Banner.css'

function Banner() {

const [movie, setMovie] = useState([])

    useEffect(() => {
        
        Axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${APIKEY}&language=en-US`).then((response)=>{
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

// console.log(movie);
// console.log(IMAGEURL);
  return (
    <div style={{ backgroundImage:`url(${movie?IMAGEURL+movie.backdrop_path:''})` }} className="banner-container">
        <div className="content">
            <h1 className='title'>{movie?.title}</h1>
            <div className="banner-buttons">
                <button>Play</button>
                <button>My List</button>
            </div>
            <div className="discreption">
                <h2>{movie?.overview}</h2>
            </div>
            <div className="fade-bootom">
            </div>
        </div>
    </div>
    )
}

export default Banner