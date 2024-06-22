
import './App.css'
import Favourate from './Pages/Favourate/Favourate'
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'//here we have used Routes and Route to wrap the Route of the page
function App() {

  return (
    <>
      <Navbar/> {/*here we have rendered Navbar component */}
      
      <Routes>{/*here we have settted particular eligible Route of every component to be rendered and wraped the every Route into the Routes  */}
         <Route
          path={"/general"}
          element={<Home />}
        />
        <Route
          path={"/technology"}
          element={<Home />}
        />
        <Route
          path={"/entertainment"}
          element={<Home />}
        />
        <Route
          path={"/business"}
          element={<Home />}
        />
        
        <Route
          path={"/health"}
          element={<Home />}
        />
        <Route
          path={"/sports"}
          element={<Home />}
        />
        <Route
          path={"/favourate"}
          element={<Favourate/>}
        />
      </Routes>

      <Footer/>    
    </>
  )
}

export default App
