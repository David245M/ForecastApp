import React from 'react'
import {geo, weather, location} from './../../weather'
import './Finder.css'

class Finder extends React.Component {
    getGeoloation() {
        const state = {}
        geo
        //.catch(err => console.error('here'))
           .then(pos => location(pos.coords), err => {
               console.error('here')
               return Promise.reject()
            })
           .then(loc => loc.json() )
           .then(loc => {
               state.location = loc.results[0];
               return weather(loc.results[0].geometry)
           })
           .then(wea => wea.json())
           .then(weather => {
                state.weather = weather
                console.log(state)
                this.props.setState(state)
           })
    }
    render() {
        return (
            <div className="findMe">
                <button onClick={() => this.getGeoloation()}>
                    <strong>Найти меня</strong>
                </button>
            </div>
        )
    }
}

export {Finder}