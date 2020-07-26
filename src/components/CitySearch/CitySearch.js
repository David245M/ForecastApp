import React from 'react'
import './CitySearch.css'
import {locationSearch, weather} from './../../weather'

class CitySearch extends React.Component {
    handleSearch(event) {
        var state = {}
        locationSearch(event.target.value)
            .then(loc => loc.json())
            .then(location => {
                // eslint-disable-next-line eqeqeq
                if(location.status.code != 200) {
                    return Promise.reject(location.status.message)
                }
                state.location = location.results[0]
                return weather(location.results[0].geometry)
            })
            .then(wthr => wthr.json(), 
                err => {
                    console.error(err)
                    return Promise.reject()
                })
            .then(weather => {
                state.weather = weather
                this.props.setState(state)
            })
    }

    render() {
        return (
            <div className="city-search">
                <input 
                    type="text"
                    placeholder="Введите город"
                    onBlur={event => this.handleSearch(event)}
                    onSubmit={event => this.handleSearch(event)}
                    // eslint-disable-next-line eqeqeq
                    onKeyPress={event => {if(event.key == 'Enter') this.handleSearch(event)}}
                    autoComplete="on"                />
                <button 
                    onSubmit={event => this.handleSearch(event)}
                    style={{backgroundColor: 'rgba(118, 255, 135, 0.4)'}}>
                        Поиск
                </button>
            </div>
        )
    }
}

export {CitySearch}