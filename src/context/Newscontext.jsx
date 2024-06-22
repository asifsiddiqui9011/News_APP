import { createContext, useEffect } from "react";
import { useState } from "react";

//here we created NewsContext using createContex  Hook initiating with null value
export const NewsContext = createContext(null);

//here we created NewsContexProvider component and passed props to further call the functions paased in contextValue
const NewsContextProvider = (props) => {

    const [articles,setArticles] = useState([])
    const[category,setCategory] = useState('general')


    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=510b2590dbf24cca91c83b49cb361ea8`;//here we pasted url of NewsApi to fetch the Articles data from api by making  fetch api call
        fetch(url)
      //here handling the error responses
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            return alert('Unauthorized: Please check your API key.');
          } else if (response.status === 404) {
            return alert('Not found: The requested resource does not exist.');
          } else {
             alert('Network response is not ok');
          }
          throw new Error('Network response is not ok');
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);//here setting the response data came from Newsapi into the artcles state
      })
      .catch((error) => {
        alert(error.message);
      });
    
    },[category])

    const [favlist,setFavlist]=useState([])//here we made a favlist state to store the articles selected for favuorate list by users
    const addToFavlist = (article) => {
        setFavlist((prev)=>([...prev,article]))  
    }
    
    const Clearfavlist=()=>{
       setFavlist("")
    }


const contextValue = {articles,category,setCategory,addToFavlist,favlist,Clearfavlist};//here we have passed all the function and state to be updated and used into the app by call them in each component where  ever callable using useContex hook and NewsContext function
    
    return (
        <NewsContext.Provider value={contextValue}>
            {props.children} {/*here we have returned the props.childern to use all the functions and states passed in contexvalue  */}
        </NewsContext.Provider>
    )
}

export default NewsContextProvider;