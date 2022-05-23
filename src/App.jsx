import './App.css';
import { useState, createContext, useEffect } from "react";
import { getGeneralContent, getRestaurants } from './helpers/apicalls';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header/header';

export const generalContentCtx = createContext({})
export const restaurantCtx = createContext({});


const App = () => {
  
  const [generalContent, setGeneralContent] = useState();
  const [restaurantData, setRestaurantData] = useState();


  useEffect(() => {
    const getData = async () => {
      getGeneralContent().then((apiGeneralContent) => {
        setGeneralContent(apiGeneralContent.data.data)
      });

      getRestaurants().then((apiRestaurants) => {
        setRestaurantData(apiRestaurants.data);
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
          <Routes>
            
          </Routes>
        </Router>
      </generalContentCtx.Provider>
      </restaurantCtx.Provider>
    </>
  );
};

export default App;