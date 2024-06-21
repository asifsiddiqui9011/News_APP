import "./Navbar.css"
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar-container">
      <h1>NewsApp</h1>
      <div className="navbar-tags">
        <Link to={'/general'} style={{textDecoration:"none",color:"black"}}><p >Home</p></Link>
        <p >Contact Us</p>
      </div>
      <div className="navbar-wishlist">
        <Link to={"/favourate"}><FaRegHeart /></Link> 
      </div>
    </div>
  )
}

export default Navbar
