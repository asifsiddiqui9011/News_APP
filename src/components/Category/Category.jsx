import { useEffect, useState, useRef, useContext} from "react"
import { Link } from "react-router-dom"
import "./Category.css"
import { NewsContext } from "../../context/Newscontext"
import general from "../../assets/general.png"
import business from "../../assets/business.jpg"
import health from "../../assets/health.jpg"
import technology from "../../assets/technology.jpg"
import entertainment from "../../assets/entertainment.jpg"
import sports from "../../assets/sports.png"

const Category = () => {
 
  //here we are calling category or set category state from NewsContex using useContex to update the seleted category,such as Business, technology etc..
  const {category,setCategory}=useContext(NewsContext)
  const [banner,setBanner] = useState(general)

//here we are calling a function to change the banner as per the category changes
  const changeBanner=(event)=>{
    setBanner(event)
    console.log(banner,"banner changing")
  }

 
 //setting focus for general button during Loading and refreshing page
  const buttonRef = useRef(null);
  useEffect(() => {
   
    buttonRef.current.focus();
  }, []);

 
  return (
    <>
    <div className='banners'>
       <img className="banner-img" src={banner} alt="" />
    </div>
    <div className="category-container">

      <Link to="/"  style={{textDecoration:"none"}}>{/*here Link is used to navigate to the particular selected catorgy page just like here general category is selected  */}
        <div onClick={ () => {setCategory("general")}}>
          <div className="Cbtn-container">
            <button className="cbtn" ref={buttonRef} onClick={()=>{changeBanner(general)}} >General</button>{/*here ref function is used to show focus into this button after refereshing the page  */}
          </div> 
          {category==="general"?<hr id="hrbottom"/>:<></>}{/*if the category button is selected the hr tag will show below the button otherwise non */}
        </div>
      </Link>
      <Link to="/business"  style={{textDecoration:"none"}}> 
        <div onClick={ () => {setCategory("business")}}>
          <div className="Cbtn-container">
              <button className="cbtn" onClick={()=>{changeBanner(business)}}>Business</button>
          </div> 
          {category==="business"?<hr id="hrbottom"/>:<></>}
        </div>
      </Link>
      <Link to="/technology"  style={{textDecoration:"none"}}> 
          <div onClick={ () => {setCategory("technology")}}>
            <div className="Cbtn-container">
                <button className="cbtn" onClick={()=>{changeBanner(technology)}}>Technology</button>
            </div> 
            {category==="technology"?<hr id="hrbottom"/>:<></>}
        </div>
      </Link>
      <Link to="/health"  style={{textDecoration:"none"}}>
        <div onClick={ () => {setCategory("health")}}>
          <div className="Cbtn-container">
              <button className="cbtn" onClick={()=>{changeBanner(health)}}>Health</button>
          </div> 
          {category==="health"?<hr id="hrbottom"/>:<></>}
        </div>
      </Link>
      <Link to="/sports" style={{textDecoration:"none"}}>
        <div onClick={ () => {setCategory("sports")}}>
          <div className="Cbtn-container">
                <button className="cbtn" onClick={()=>{changeBanner(sports)}}>Sports</button>
          </div> 
          {category==="sports"?<hr id="hrbottom"/>:<></>}
        </div>
      </Link>
      <Link to="/entertainment"  style={{textDecoration:"none"}}>
        <div onClick={ () => {setCategory("entertainment")}}>
          <div className="Cbtn-container">
                <button className="cbtn" onClick={()=>{changeBanner(entertainment)}}>Entertainment</button>
            </div> 
            {category==="entertainment"?<hr id="hrbottom"/>:<></>}
        </div>
      </Link>  
    </div>
    </>
  )
}

export default Category;
