import "./Navbar.css"
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="Navbar-container">
      <h1>NewsApp</h1>
      <div className="navbar-tags">
        <Link to={'/general'} style={{textDecoration:"none",color:"white"}}><p >Home</p></Link>{/* this is the home tag linked to retun on home page general category of article */}
        <p onClick={()=>{window.scrollTo({top:0,behaviour:"smooth"})}}>Category</p>{/*here pon clicking the category screen window will move to top at the article category buttons selection */}
      </div>
      <div className="navbar-wishlist">
        <Link to={"/favourate"} style={{color:"white"}}><FaRegHeart /></Link> 
      </div>
    </div>
  )
}

export default Navbar;
