
import './Navbar.css'

function Navbar({inputVal,setInputVal}) {
  return (
   <header className='header-container'>
     <h2 className='header-title'>Movie Store</h2>
      {/* <img className='logo' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'} alt="Logo-iimage" /> */}
      <input className='search' type="text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)} placeholder='search movies......!'/>
      {/* <img className='avatar' src={'https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'} alt="avatar" /> */}
      
   </header>
  )
}

export default Navbar