import "./Home.css"
import Card from "../../components/Card/Card"
import { useEffect, useState } from "react"
import Category from "../../components/Category/Category"
import general from "../../assets/general.png"
import health from "../../assets/health.jpg"
import business from "../../assets/business.jpg"
import entertainment from "../../assets/entertainment.jpg"
import technology from "../../assets/technology.jpg"
import sports from  "../../assets/sports.jpg"

const Home = () => {
  
  const [articles,setArticles] = useState([])

  const [banner,setBanner] = useState(general)
  const [newsCategory,setNewsCategory] = useState('general')

  const category=(event)=>{
   setNewsCategory(event)
   setBanner(eval(event))
}

  useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${newsCategory}&apiKey=9a03cd9d8b414d3ab2b7b33898e3f4ed`;
    
    try {
      fetch(url)
      .then((response)=>response.json())
      .then((data)=>setArticles(data.articles));
    } catch (error) {
      
    }
   
    setArticles
  },[newsCategory])

  
  

  return (
    <>
    <div className='banners'>
          <img className="banner-img" src={banner} alt="" />
      </div>
      <Category catgry={category}/>
    <div className="cards-container">
      {/* {articles.map((article,index)=>{
        return ( <Card key={index} title={article.title} img={article.urlToImage} description={article.description}/>)
      })} */}
     
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </>
  )
}

export default Home
