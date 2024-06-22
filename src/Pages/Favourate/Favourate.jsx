import { useContext } from "react";
import Card from "../../components/Card/Card";
import "./Favourate.css"
import { NewsContext } from "../../context/Newscontext";

//this is the Favourate list component use to display the favvourate artiles seletecd by users with in the session only
const Favourate = () => {

  const {favlist,Clearfavlist} = useContext(NewsContext) //here we have called favlist state from NewsContext using useContext Hoook

    
  return (
    <>
    <div className="clr-fav-div">
        <button className="clr-fav" onClick={Clearfavlist}>Clear Favourate List</button>
    </div>
    
    <div className="fav-container">
   
      {/*here we have putted a condition if favlist if empty them is will show the message of favlist to add the articles into favlit otherwise it will show the favourate artiles by mapping them  */}
      {favlist
       ? 
        favlist.map((e,i)=>{
          return <Card key={i} title={e.title} description={e.description} img={e.img} />
        })
      :
      <div className="favlist-Message">
        <h1>Please do add your favourate Artciles....</h1>
      </div>
    
      }
        
    </div>
    </>
  )
}

export default Favourate;
