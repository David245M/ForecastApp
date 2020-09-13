<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import './style.css'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
=======
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//import Preloader from './Preloader'
import './style.css'

var weather, position;

const render = () => {
    ReactDOM.render(
        <App weather={weather} position={position} style={{opacity:0}}/>,
        document.getElementById('root')
    )
}
window.onload = loading;

function loading() {
    let div = document.createElement('div');
    div.id = 'root'
    div.classList.add('loading')
    document.body.appendChild(div);
    setPosition(navigator.geolocation).then(pos => {
        getLocation(pos)
            .then(po => {position = po.results[0]})
            .then(po => {
                setWeather(pos).then(result => {
                    weather = result;
                    render();
                    div.classList.remove('loading');
                    console.log(weather)
                }) 
            })
        
    })
}

function setWeather(pos) {
    const ID = `ed1c9f62943c7e399b215a7abd341289`;
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${pos.latitude}&lon=${pos.longitude}&exclude=&appid=${ID}&units=metric`
    const promiceWeather = new Promise((resolved, rejected) => {
        const require = new XMLHttpRequest();
        require.responseType = 'json'
        require.open('GET', URL);
        require.onload = (err) => {
            // eslint-disable-next-line eqeqeq
            if (require.status == 200) {
                
                resolved(require.response) 
            } else {
                
                rejected(require.status);
            }
        }
        require.send(null)
    })

    return promiceWeather;
}

function setPosition(geo) {
    const promicePosition = new Promise((resolved, rejected) => {
        if(!!geo){
            geo.getCurrentPosition(pos => {
                resolved(pos.coords);
            })
        } else { 
            rejected(Error('navigator.geolocation is not defined!!'))
        }
    })

    return promicePosition;
}

function getLocation(pos){
    const URL = `https://api.opencagedata.com/geocode/v1/json?q=${pos.latitude}+${pos.longitude}&key=6e14c6c9118a4f8492aec145d9c37124`

    return new Promise((resolved, rejected) => {
        const require = new XMLHttpRequest()
        require.responseType= 'json'
        require.open('GET', URL)
        require.onload = (err) => {
            // eslint-disable-next-line eqeqeq
            if (require.status == 200) {
                
                resolved(require.response) 
            } else {
                
                rejected(require.status);
            }
        }
        require.send(null);
    })
}

>>>>>>> 5481aa537846f4493369ed3b48c565ee739a7f79
