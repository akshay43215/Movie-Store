
import{ORIGINALS,ACTIONS, SEARCH} from '../../urls/urls'
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
  const Find = `/search/movie?api_key=${APIKEY}&language=en-US&query=${inputVal}&page=1&include_adult=false`
  return (
    <div className="App">
      <Navbar inputVal={inputVal} setInputVal={setInputVal}/>
      <Banner/>
      <Tags/>
      <RowPost title='Trendings' url={ORIGINALS} />
      
      <RowPost title='Actions' noWrap isSmall url={ACTIONS} inputVal={inputVal}/>
      {/* <RowPost title='Actions' isSmall url={ACTIONS} noWrap /> */}
    </div>
  );
}

export default App;
