import React from 'react'
import { Heading } from './../Heading'
import { Icon } from './../Icon'
import { Temperature } from './../Temperature'
import { Hours } from './../Hours'
import './Card.css'

class Card extends React.Component {
    render() {
        if (Object.entries(this.props.state.weather).length) {
            const cardVisibility = { visibility: 'visible'}
            const weather = this.props.state.weather
            const location = this.props.state.location
            return (
                <div className="card" style={cardVisibility}>
                    <Heading 
                        location={location.components}
                        sun={location.annotations.sun}/>
                    <Icon 
                        id={weather.list[0].weather[0].icon}/>
                    <Temperature 
                        temp={weather.list[0].main.temp}/>
                    <Hours 
                        list={weather.list}/>
                </div>
            )
        } else {
            return (
                <div className="card" 
                    style={{visibility:'hidden', height:'0'}}
                    >
                    или..
                </div>
            )
        }
    }
}

export { Card }