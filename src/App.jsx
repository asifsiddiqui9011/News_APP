
import './App.css'
import Home from './Pages/Home/Home'
import Category from "./components/Category/Category"
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Navbar/>
      
      <Routes>
      <Route
          path={"/"}
          element={<Home />}
        />
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
          element={''}
        />
      </Routes>

      <Footer/>    
    </>
  )
}

export default App
