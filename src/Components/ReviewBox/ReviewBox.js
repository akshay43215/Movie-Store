// import 'ReviewBox.css'

import { useState } from "react";
import './ReviewBox.css'

function ReviewBox({movieName,reviewBox,setReviewBox}) {
    const [txtContent, settxtContent] = useState('');
    const [items, setItems] = useState([]);
    const submitReview=(event)=> {
        console.log('fn form submit');
        event.preventDefault();
        console.log(movieName);
        setItems([...items, { review: txtContent }]);
        // localStorage.setItem(movieName,JSON.stringify(items))
        settxtContent('')
        setReviewBox(false)
    }

    const searchLocal=()=> {
        console.log(localStorage.getItem(`movieName`));
    }
    const saveLocal=()=> {
        localStorage.setItem(`movieName`,JSON.stringify(items))
        setReviewBox(false)
    }

  return (
    <div className="reviewbox-container">
        <form action="" onSubmit={submitReview}>
            <h2>Heading</h2>
            <input type="text" onChange={(e)=>settxtContent(e.target.value)} placeholder='enter your review...' />
        </form>
        <div className="btn-div">
            <button onClick={searchLocal} >Show</button>
            <button onClick={saveLocal}>Save</button>
        </div>
    </div>
  )
}

export default ReviewBox