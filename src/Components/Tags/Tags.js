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
               return <span key={itm.id} onClick={()=>SpanClickFn(itm)}> {`${itm.name} - ${itm.id}` } </span>
          })
      }
    </div>
  )
}
export default Tags