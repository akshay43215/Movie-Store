
import{ORIGINALS,ACTIONS, Tags,SEARCH} from '../../urls/urls'
import RowPost from "../RowPost/RowPost";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import { APIKEY } from '../../constants/constants';
import { useState } from 'react';
import './App.css'
import Tags from '../Tags/Tags';
function App() {
  const [inputVal, setInputVal] = useState('')
  // console.log(inputVal);
  const Find = "https://api.themoviedb.org/3/search/movie?api_key=4febf5a8cbe38fa1518dc7c3e44fce8e&language=en-US&query=wednesday&page=1&include_adult=false"
  console.log(Find);
  return (
    <div className="App">
      <Navbar inputVal={inputVal} setInputVal={setInputVal}/>
      <Banner/>
      <Tags/>
      <RowPost title='Trendings' url={ORIGINALS} />
      
      <RowPost title='Actions' noWrap isSmall url={Find} />
      {/* <RowPost title='Actions' isSmall url={ACTIONS} noWrap /> */}
    </div>
  );
}

export default App;
