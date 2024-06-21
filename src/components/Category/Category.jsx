import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Category.css"

function Cbtn(props){
  return(
    <div className="Cbtn-container">
        <div className="cbtn">
         <p> {props.tag}</p>
        </div>
    </div>
  )
}


const Category = (props) => {

  const[category,setCategory] = useState('general')
  
  props.catgry(category)
 
  return (
    <div className="category-container">

      <Link to="/general"  style={{textDecoration:"none"}}><div onClick={ () => {setCategory("general")}}>
          <Cbtn  tag={"General"}/>
          {category==="general"?<hr id="hrbottom"/>:<></>}
        </div></Link>
        <Link to="/business"  style={{textDecoration:"none"}}> <div onClick={ () => {setCategory("business")}}>
            <Cbtn tag={"Business"}/>
            {category==="business"?<hr id="hrbottom"/>:<></>}
        </div></Link>
        <Link to="/technology"  style={{textDecoration:"none"}}> <div onClick={ () => {setCategory("technology")}}>
          <Cbtn tag={"Technology"}/> 
          {category==="technology"?<hr id="hrbottom"/>:<></>}
        </div></Link>
        <Link to="/health"  style={{textDecoration:"none"}}><div onClick={ () => {setCategory("health")}}>
          <Cbtn tag={"Health"}/>
          {category==="health"?<hr id="hrbottom"/>:<></>}
        </div></Link>
        <Link to="/sports" style={{textDecoration:"none"}}> <div onClick={ () => {setCategory("sports")}}>
          <Cbtn tag={"Sports"}/>
          {category==="sports"?<hr id="hrbottom"/>:<></>}
        </div></Link>
        <Link to="/entertainment"  style={{textDecoration:"none"}}> <div onClick={ () => {setCategory("entertainment")}}>
          <Cbtn tag={"Entertainment"}/> 
          {category==="entertainment"?<hr id="hrbottom"/>:<></>}
        </div></Link>   
    </div>
  )
}

export default Category;
