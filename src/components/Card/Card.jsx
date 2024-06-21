import { useState } from "react";
import "./Card.css"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import news  from "../../assets/news.png"

const Card = (props) => {

  const [isFavourateActive,setFavourateActive] = useState(false)
  const onImgError = (e) => {
    e.target.src = news
  }

  return (
    <div className="Cards">
        {props.img? <img src={props.img}className="card-img" alt="" onError={onImgError}/>: <img src={news}className="card-img" alt=""/>}
       
        <div className="wishlist-icon" onClick={()=>{setFavourateActive(!isFavourateActive)}}>
          {isFavourateActive?<FaHeart style={{color:"red"}} />:<FaRegHeart />}  
        </div>
        <h3 className="card-title">{props.title},jheadinghchkdshcew xkdnekdw kwjedwjjwe wk</h3>
        <p/>
        <p className="card-description" >{props.description},Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum expedita sequi quo, recusandae suscipit praesentium consequatur, laborum excepturi repudiandae iste necessitatibus iure nisi aspernatur explicabo natus, aliquid dolore in? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut dolores dolorem porro, esse cum laborum dolor dolorum consequatur quae nisi quisquam, ipsum veritatis a, veniam voluptatum impedit tenetur aliquid at.
        </p>
    </div>
  )
}

export default Card
