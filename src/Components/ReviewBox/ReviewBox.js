// import 'ReviewBox.css'

import { useState } from "react";
import "./ReviewBox.css";

function ReviewBox({ movieName, reviewBox, setReviewBox }) {
  const [txtContent, settxtContent] = useState("");
  const [items, setItems] = useState([]);

  const submitReview = (event) => {
    console.log("fn form submit");
    event.preventDefault();
    console.log(movieName);
    setItems([...items, { review: txtContent }]);
    // localStorage.setItem(movieName,JSON.stringify(items))
    settxtContent("");
  };

  const searchLocal = () => {
    // console.log(localStorage.getItem(`movieName`));
    const searchItm = JSON.parse(localStorage.getItem(`"${movieName}"`));
    console.log(searchItm);
    setItems(searchItm);
  };
  const saveLocal = () => {
    localStorage.setItem(JSON.stringify(movieName), JSON.stringify(items));
    setReviewBox(!reviewBox);
  };

  return (
    <div className="reviewbox-container">
      <form action="" onSubmit={submitReview}>
        <h3>{movieName}</h3>
        <input
          type="text"
          onChange={(e) => settxtContent(e.target.value)}
          placeholder="Post your review..."
        />
      </form>
      <ul>
        {items.map((itm, k) => {
          const id = itm.id;
          // console.log(check);

          return <li key={k}> {itm.review} </li>;
        })}
      </ul>
      <div className="btn-div">
        <button onClick={searchLocal}>Show</button>
        <button onClick={saveLocal}>Save</button>
      </div>
    </div>
  );
}

export default ReviewBox;
