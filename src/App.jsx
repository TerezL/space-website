import { useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Technology from './components/technology';
import Destinations from './components/destinations';
import Crew from './components/crew';
import Layout from './components/layout';


function App() {


  return (
    <>

    <HashRouter>

    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="destinations" element={<Destinations />} />
    <Route path="crew" element={<Crew />} />
    <Route path="technology" element={<Technology />} />
    </Route>
   
      </Routes>
      </HashRouter>
    </>
  )
}

export default App
