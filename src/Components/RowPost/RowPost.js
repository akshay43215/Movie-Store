import {APIKEY,IMAGEURL} from '../../constants/constants'
import { useEffect,useState } from 'react'
import YouTube from 'react-youtube';
import Axios from '../../Axios/Axios'
import './RowPost.css'

function RowPost({title,isSmall,url}) {

const [movies, setMovies] = useState([])
const [urlId, setUrlId] = useState(null)

useEffect(() => {

  Axios.get(url).then((response)=>{
    // console.log(response.data.results);
    setMovies(response.data.results)

  }).catch((error)=>{
    console.log(error,' in row post');
  })
}, [])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  // const playMovie =(id)=> {
  //   console.log(id); 
  //   Axios.get(`https://api.themoviedb.org/3/movie/${id}/videos/?api_key=${APIKEY}&language=en-US`).then((response)=>{
  //     console.log('result','result');
  //     if (response.data.results.length!==0) {
  //       //setUrlId(response.data.results[0])
  //     }else{
  //       console.log('no trailer');
  //     }
  //   }) 
  // }
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

  return (
      <div className="row-container">
          <h2>{title}</h2>
          <div className="row-posters">
            {
              movies.map((itm)=>
                  <img key={itm.id} className={isSmall?'small-poster':'poster'} onClick={()=>handleTrailer(itm.id)} src={`${IMAGEURL+itm.backdrop_path}`} alt="row-post" />              
                  // onClick={()=>playMovie(itm.id)}
              )
            }
            
          </div>

            {/* <YouTube opts={opts} videoId="2g811Eo7K8U"/> */}
            
            { urlId && <YouTube opts={opts} videoId={urlId}/> }
          
      </div>
  )
}

export default RowPost