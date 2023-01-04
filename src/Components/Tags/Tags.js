import React from 'react'
import './Tags.css'

 function Tags() {
  return (
    <div className="tags-container">
        <input type="text" value='Comedy' disabled/>
        <input type="text" value='action' disabled/>
        <input type="text" value='drama' disabled/>
        <input type="text" value='animation' disabled/>
        <input type="text" value='adventure' disabled/>
        <input type="text" value='fantasy' disabled/>
    </div>
  )
}
export default Tags