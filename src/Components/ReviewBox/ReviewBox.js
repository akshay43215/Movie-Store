
import { useState } from "react";
import "./ReviewBox.css";

function ReviewBox({ movieName, reviewBox, setReviewBox }) {
  const [txtContent, settxtContent] = useState("");
  const [items, setItems] = useState([]);

  const submitReview = (event) => {
    console.log("form data has submitted");
    event.preventDefault();
    // console.log(movieName);
    setItems([...items, { review: txtContent }]);
    settxtContent("");
  };

  const searchLocal = () => {
    try {
      const searchItm = JSON.parse(localStorage.getItem(`"${movieName}"`));
      if (searchItm){
        setItems(searchItm);
      }
    } catch (error) {
      console.log(error);
    }
    
  };

  const saveLocal = () => {
    localStorage.setItem(JSON.stringify(movieName), JSON.stringify(items));
    setReviewBox(!reviewBox);
  };

  return (
    <div className="reviewbox-container">
      <form action="" onSubmit={submitReview}>
        <h4>{movieName}</h4>
        <input
          type="text"
          onChange={(e) => settxtContent(e.target.value)}
          placeholder="Post your review..."
        />
      </form>
      <ul>

        {items.map((itm, k) => {
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
