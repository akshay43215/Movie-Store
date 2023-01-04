import React, { useEffect, useState } from 'react'
import Axios from "../../Axios/Axios";
import './Tags.css'

 function Tags() {
  const [tagsMovies,setTagsMovies] = useState([])
  useEffect(() => {
    Axios.get(Tags)
      .then((response) => {
        // console.log(response.data.results);
        setTagsMovies(response.data.results.genres);
      })
      .catch((error) => {
        console.log(error, " in row post");
      });
  }, []);
  return (
    <div className="tags-container">
      {
        tagsMovies.map((itm)=>{
            <span key={itm.id}>{itm.name}</span>
        })
      }
        {/* <input type="text" value='Comedy' disabled/>
        <input type="text" value='action' disabled/>
        <input type="text" value='drama' disabled/>
        <input type="text" value='animation' disabled/>
        <input type="text" value='adventure' disabled/>
        <input type="text" value='fantasy' disabled/> */}
    </div>
  )
}
export default Tags