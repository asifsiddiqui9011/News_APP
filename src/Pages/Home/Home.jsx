import "./Home.css"
import Card from "../../components/Card/Card"
import { useContext, useEffect, useState } from "react"
import Category from "../../components/Category/Category"
import { NewsContext} from "../../context/Newscontext"
import { RiH3 } from "react-icons/ri"
import general from "../../assets/general.png"
import health from "../../assets/health.jpg"
import business from "../../assets/business.jpg"
import entertainment from "../../assets/entertainment.jpg"
import technology from "../../assets/technology.jpg"
import sports from  "../../assets/sports.png"

const Home = () => {
  const {articles,category,banner}= useContext(NewsContext) 
  


  return (
    <div className="home-container">
    <div className='banners'>
          <img className="banner-img" src={banner} alt="" />
      </div>
      <Category />
      
    <div className="cards-container">
      {/*here we have set the condition if articles are not null then it will map all the articles on to the screen otherwise it will show thow the message */}
      {articles?
      articles.map((article,index)=>{
        return ( <Card key={index} title={article.title} img={article.image} description={article.description} url={article.url}/>)
      })
      :<h1>Something went wrong please try again after sometime!!!</h1>}
    </div>
    </div>
  )
}

export default Home;
