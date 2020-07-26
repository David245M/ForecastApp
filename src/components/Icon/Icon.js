import React from 'react'
import './Icon.css'

class Icon extends React.Component {
    idToGif(id) {
        var name;
        switch(id) {
            case '01d': 
                name = 'sun-weather'
                break;
            case '01n':
            case '02n':
                name = 'night-weather'
                break;
            case '02d':
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                name = 'cloudy-weather'
                break;
            case '09d':
            case '09n':
                name = 'shower-rain'
                break;
            case '10d':
                name = 'rain'
                break;
            case '11d':
            case '11n':
                name = 'thunderstorm'
                break;
            case '13d':
            case '13n':
                name = 'snow'
                break;
            default: 
                name = 'cloudy-weather' 
                console.log('default icon')
        }
        return `./gif2/${name}.gif`
    }
    render() {
        return (
            <picture>
                <img 
                className="icon"
                src={require(''+this.idToGif(this.props.id))} 
                alt="icon" />
            </picture>
        )
    }
}

export {Icon} 