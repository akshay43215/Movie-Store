
import{ORIGINALS,ACTIONS} from '../../urls/urls'
import RowPost from "../RowPost/RowPost";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={ORIGINALS} />
      <RowPost title='Actions' isSmall url={ACTIONS} />
    </div>
  );
}

export default App;
