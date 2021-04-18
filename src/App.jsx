import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Header from'./Component/Header';
import Footer from './Component/Footer';
import MainBody from './Component/MainBody';

function App() {
  return (
    <div className="app">
      <Header/>
      <MainBody/>
      <Footer/>
    </div>
  );
}

export default App;
