
import{ORIGINALS,GenreID,Genres} from '../../urls/urls'
import RowPost from "../RowPost/RowPost";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import { useState } from 'react';
import Tags from '../Tags/Tags';
import './App.css'
function App() {
  const [inputVal, setInputVal] = useState('')
  const [rowTitle, setRowTitle] = useState('All')
  const [rowId, setRowId] = useState('')
  

  const cbTagval=(itm)=> {
   
    setRowTitle(itm.name)
    setRowId(itm.id)
  }

  return (
    <div className="App">
      <Navbar inputVal={inputVal} setInputVal={setInputVal}/>
      <Banner/>
      <Tags url={Genres} cbTagval={cbTagval}/>
      <RowPost title='Trending' url={ORIGINALS} />
      <RowPost title={rowTitle} url={GenreID+rowId} inputVal={inputVal} isSmall noWrap/>
    </div>
  );
}

export default App;
