import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Technology from './components/technology';
import Destinations from './components/destinations';
import Crew from './components/crew';
import Layout from './components/layout';


function App() {


  return (
    <>

    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="destinations" element={<Destinations />} />
    <Route path="crew" element={<Crew />} />
    <Route path="technology" element={<Technology />} />
    </Route>
   
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
