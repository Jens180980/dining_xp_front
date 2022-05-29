
//Import plugins
import { useState, createContext, useEffect } from "react";
import { getGeneralContent, getRestaurants } from './helpers/apicalls';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import pages
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Reviews from './components/reviews/reviews.jsx'
import Contacts from './components/contacts/contacts.jsx'

//Import modular components
import Main from './components/main/main.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx'

// Import styles
import './App.scss';

// Data management
export const generalContentCtx = createContext({})
export const restaurantCtx = createContext();


const App = () => {
  
  const [generalContent, setGeneralContent] = useState();
  const [restaurantData, setRestaurantData] = useState();

  // Api calls
  useEffect(() => {
    const getData = async () => {
      getGeneralContent().then((apiGeneralContent) => {
        setGeneralContent(apiGeneralContent.data.data)
      });

      getRestaurants().then((apiRestaurants) => {
        setRestaurantData(apiRestaurants.data.data);
      });

    };
    
  getData();
  
  }, []);


  return (

    <>
      <restaurantCtx.Provider value={restaurantData}>
      <generalContentCtx.Provider value={generalContent}>
        <Router>
          <Header />
            <Main>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/reviews" element={<Reviews /> } />
                <Route path="/contact" element={<Contacts />} /> 
              </Routes>
            </Main>
            <Footer />
        </Router>
      </generalContentCtx.Provider>
      </restaurantCtx.Provider>
    </>
  );
};

export default App;