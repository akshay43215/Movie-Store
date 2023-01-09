
import{ORIGINALS,GenreID,Genres,SEARCH} from '../../urls/urls'
import RowPost from "../RowPost/RowPost";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import { APIKEY } from '../../constants/constants';
import { useState } from 'react';
import './App.css'
import Tags from '../Tags/Tags';
function App() {
  const [inputVal, setInputVal] = useState('')
  const [rowTitle, setRowTitle] = useState('All')
  const [rowId, setRowId] = useState('')
  // const [reviewBox, setReviewBox] = useState(false)
  // console.log(inputVal);
  // console.log(Find);

  const cbTagval=(itm)=> {
    // console.log('tags onclick cb',itm);
    // window.alert(ID);
    // const titleTwo=itm.name
    setRowTitle(itm.name)
    setRowId(itm.id)
    // setRowId(`/discover/movie?api_key=${APIKEY}&with_genres=${itm.id}`)
  }
  // console.log(rowId);

  return (
    <div className="App">
      <Navbar inputVal={inputVal} setInputVal={setInputVal}/>
      <Banner/>
      <Tags url={Genres} cbTagval={cbTagval}/>
      <RowPost title='Trending' url={ORIGINALS} />
      <RowPost title={rowTitle} url={GenreID+rowId} inputVal={inputVal} isSmall noWrap/>
      {/* <RowPost title='Actions' isSmall url={ACTIONS} noWrap /> */}
    </div>
  );
}

export default App;
