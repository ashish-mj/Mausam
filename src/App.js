import React, { useState } from 'react';
import logo from './images/weather.png';
import website from './images/website.png';
import linkdin from './images/linkedin.png';
import github from './images/github.png';

const api = {
  key : "ad2569b0b91b23602d0a188447c0d986",
  base : "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({});

  const search = evt =>{
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
    });
  }
  }

  const dateBuilder = (d) =>{
    let months =["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month =months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div className="app">
      <section className={
        (typeof  weather.main == "undefined")
      ? 'weather_app': (weather.main.temp > 18 )
      ? 'weather_app warm': 'weather_app cold'}>
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
             <input type="text" className="search-bar" placeholder="Search..."
             onChange={e => setQuery(e.target.value)}
             value={query}
             onKeyPress={search}
             />
           </div>
           {(typeof weather.main != "undefined") ? (
           <div className="box">
           <div className="location-box">
             <div className="location">{weather.name},{weather.sys.country}</div>
             <div className="date">{dateBuilder(new Date())}</div>
           </div>

           <div className="weather-box">
             <div className="temp">{Math.round(weather.main.temp)}&#176;c</div>
             <div className="weather">{weather.weather[0].main}</div>
           </div>
           </div>
           ): ('')}
        </main>
      </section>
    </div>
  );
}

export default App;
