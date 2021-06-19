import React from 'react';
import logo from './images/weather.png';
import website from './images/website.png';
import linkdin from './images/linkedin.png';
import github from './images/github.png';

const api = {
  key : "ad2569b0b91b23602d0a188447c0d986",
  base : "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <section className="weather_app">
        <div className="nav">
           <img src={logo} alt="logo" className="logo"/>
           <p className="name"><b>MAUSAM</b></p>
           <ul className="links">
             <li><a href="https://ashishmj.herokuapp.com/" target="_blank"><img src={website} alt="website" className="links_img"/></a></li>
             <li><a href="https://www.linkedin.com/in/ashish-mj/" target="_blank"><img src={linkdin} alt="linkdin" className="links_img"/></a></li>
             <li><a href="https://github.com/ashish-mj" target="_blank"><img src={github} alt="github" className="links_img"/></a></li>
           </ul>
          </div>
        <main>
           <div className="search-box">
             <input type="text" className="search-bar" placeholder="Search..."/>
           </div>
        </main>
      </section>
    </div>
  );
}

export default App;
