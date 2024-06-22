import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NewsContextProvider from './context/Newscontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>{/*here App component is wrapped into the BrowserRouter to navigate at every Route with in the app and also NewsContextProvider to use the NewsContext stest and function within the app anywhere */}
    <NewsContextProvider>
    <App />
    </NewsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
