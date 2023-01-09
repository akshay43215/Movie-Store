
import './Navbar.css'

function Navbar({inputVal,setInputVal}) {
  return (
   <header className='header-container'>
     <h2 className='header-title'>Movie Store</h2>
      <input className='search' type="text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)} placeholder='search movies......'/>
   </header>
  )
}

export default Navbar