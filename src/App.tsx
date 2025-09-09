import React from 'react';
import Layout from './components/layout/Layout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import AboutMe from './components/aboutme/AboutMe';
import FoodDemo from './components/food-demo/FoodDemo';
import CovidData from './components/coviddata/CovidData';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/foodapp" element={<FoodDemo />} />
          <Route path="/coviddata" element={<CovidData />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
