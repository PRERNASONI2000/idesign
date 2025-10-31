import React from "react";
import { BrowserRouter , Route , Routes , Link } from "react-router-dom";
import Hero from "./pages/Hero";

import "./css/style.css";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App; 



// React Router uses three main components for basic routing:
// Link: Creates navigation links that update the URL
// Routes: A container for all your route definitions
// Route: Defines a mapping between a URL path and a component