import { useContext, useState } from "react";
import "./Card.css"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import news  from "../../assets/news.png"
import { NewsContext } from "../../context/Newscontext";
import { Link } from "react-router-dom";
const Card = (props) => {

  //called addtofavlist from newscontext using usecontext
  const {addToFavlist}=useContext(NewsContext)

//this function use to show the selection of favuorate article by changing heart effetct vacant to fill
  const [isFavourateActive,setFavourateActive] = useState(false)

  //function to show another img if link img fails to load
  const onImgError = (e) => {
    e.target.src = news
  }



  return (
    <div className="Cards" >
      {/*here all the parameters are passed using props methods to display information of the articles in this card */}
        {props.img? <img src={props.img}className="card-img" alt="" onError={onImgError}/>: <img src={news}className="card-img" alt=""/>}
       
        <div className="wishlist-icon" onClick={()=>{addToFavlist(props),setFavourateActive(!isFavourateActive)}} >
          {isFavourateActive?<FaHeart onClick={''} style={{color:"red"}} />:<FaRegHeart />} {/*here we have put a condition if article id selected for favouratelist it will show fill heart othherwise vacant heart */} 
        </div>
        <Link to={props.url} style={{textDecoration:"none", color:"black"}}><h3 className="card-title">{props.title}</h3>
        <p className="card-description" >{props.description}</p></Link>
    </div>
  )
}

export default Card
