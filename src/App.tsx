import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Use Routes and Route for routing
import Home from './comp/Home/Home';
import Navbar from './comp/Navbar/Navbar';
import Footer from './comp/Footer/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;