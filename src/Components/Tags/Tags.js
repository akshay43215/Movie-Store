import React, { useEffect, useState } from 'react'
import Axios from "../../Axios/Axios";
import './Tags.css'


 function Tags({url,cbTagval}) {
  const [tagsMovies,setTagsMovies] = useState([])
  // const {url} = props;

  useEffect(() => {
    Axios.get(url)
      .then((response) => {
        // console.log(response.data.genres);
        setTagsMovies( response.data.genres);
      })
      .catch((error) => {
        console.log(error, " in row post");
      });
  }, []);
  // console.log(tagsMovies);
  const SpanClickFn=(Id)=>{
    // window.alert(Id);
     cbTagval(Id)
    // console.log('try cb fn',Id);
  }
// console.log(use);
  return (
    <div className="tags-container">
      {
        tagsMovies.map((itm,k)=>{
          // console.log(itm);
               return <span key={itm.id} onClick={()=>SpanClickFn(itm)}> {`${itm.name} - ${itm.id}` } </span>
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