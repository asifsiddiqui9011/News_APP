import { useState } from "react";
import "./Favourate.css"

const Favourate = () => {

    const [favlist,setFavlist]=useState([])
    
    const getDefaultFavlist = ()=> {
        let favlist = {};
        for (let index = 0; index < 300+1; index++) {
            favlist[index] = 0;
        }
        return favlist;
    }

    const addToFavlist = (itemId) => {
        setFavlist((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        
    }
  return (
    <div className="fav-container">
        
    </div>
  )
}

export default Favourate
