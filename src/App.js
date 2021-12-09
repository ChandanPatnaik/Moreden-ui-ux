import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./container/header/Header";
import Brand from "./components/brand/Brand";
import Whatgpt from './container/whatgpt/Whatgpt';
import Features from './container/features/Features'
import Possibility from './container/possibility/Possibility';
import Cta from './components/cta/Cta';
import Blog from './container/blog/Blog';
import Footer from './container/footer/Footer';
import './App.css';

const App = () => {
  return <div className="div">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
  </div>;
};

export default App;
