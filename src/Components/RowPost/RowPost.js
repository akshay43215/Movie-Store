import {APIKEY,IMAGEURL} from '../../constants/constants'
import { useEffect,useState } from 'react'
import YouTube from 'react-youtube';
import Axios from '../../Axios/Axios'
import './RowPost.css'

function RowPost({title,isSmall,url,noWrap,inputVal}) {

const [movies, setMovies] = useState([])
const [urlId, setUrlId] = useState(null)
console.log(inputVal);
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
  const getColor = (vote)=>{
     
    if(vote>=7)
     return 'green'
    else if(vote>=5)
      return 'orenge'
    else
      return 'red'
    
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
            {movies.map((itm)=>
                  <div className='movie-map' key={itm.id}>
                    <div className="first-part">
                      <span className={getColor(itm.vote_average)}>{itm.vote_average}</span>
                      <h3>{itm.name}</h3>
                      <button  onClick={()=>handleTrailer(itm.id)}>Watch</button>
                      </div>
                      <img key={itm.id} className={isSmall?'small-poster':'poster'}
                        src={`${IMAGEURL+itm.backdrop_path}`} 
                        style={noWrap?{flexWrap:noWrap}:{}} alt="row-post" />   
                    <div className="second-part">
                    </div>
                  </div>
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