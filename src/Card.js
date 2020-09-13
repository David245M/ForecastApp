import React from 'react' 
import Heading from './Heading'

export default class Card extends React.Component {
    render() {
        var city = this.props.position.components.city;
        var country = this.props.position.components.country;
        var sunset = this.props.sunset;
        var sunrise = this.props.sunrise;
        var time = new Date();
        return (
            <div>
            <Heading 
                city={city} 
                country={country}
                sunset = {sunset}
                sunrise={sunrise}
                current={time}/>
            <Icon 
                weather={this.props.weather.current.weather[0]}
                big={true}/>
            <Temperature 
                temp={this.props.weather.current.temp} 
                big={true}/>
            <SectionHours weatherHours={this.props.weather.hourly}/>
            </div>
        )
    }
}


class Icon extends React.Component {
    chooseIcon(state) {
        let name = {
            '01d': 'sunny',//
            '01n': 'night',//
            '02d': 'few-clouds',//
            '02n': 'few-clouds-night',//
            '03d': 'clouds',//
            '03n': 'clouds',//
            '04d': 'brokenClouds',//
            '04n': 'brokenClouds',//
            '09d': 'shower-rain',//
            '09n': 'shower-rain',//
            '10d': 'rain',//
            '10n': 'rain-night',//
            '11d': 'thunderstorm',
            '11n': 'thunderstorm',
            '13d': 'snow',
            '13n': 'snow',
            '50d': 'mist',
            '50n': 'mist'
        }
        return `./img/${name[state]}.png`
    }

    render() {
        return (
            <img  
                src={require(''+this.chooseIcon(this.props.weather.icon))}
                alt={this.props.weather.main}
                className={!!this.props.big ? 'icon-big' : 'icon'}/>
        )
        // return (
        //     <div className={!!this.props.big ? 'icon-big' : 'icon'}></div>
        // )
    }
}

class Temperature extends React.Component {
    render() {
        if(this.props.big){
            return (
                <h1 className="temperature">{Math.floor(this.props.temp) + '°'}</h1>
            )
        }
        else {
            return (
                <p className="temperature">{Math.floor(this.props.temp) + '°'}</p>
            )
        }
        
    }
}

class Hour extends React.Component {
    time(arg){
        return new Date(arg*1000).toTimeString().slice(0,5)
    }
    render() {
        return(
            <div className="hour">
                <p className="time">{this.time(this.props.weather.dt)}</p>
                <Icon weather={this.props.weather.weather[0]}/>
                <Temperature temp={this.props.weather.temp}/>
                <OptionList weather={this.props.weather}/>
            </div>
        )
        
    }
}

class OptionList extends React.Component {
    render() {
        return(
            <ul className="options">
                <li className="option">
                    <picture>
                        <img src={require('./img/humidity.png')} alt=""/>
                    </picture>                    
                    <p>{this.props.weather.humidity}</p>
                </li>
                <li className="option">
                    <picture>
                        <img src={require('./img/wind.png')} alt="" 
                        style={{transform: `rotate(${this.props.weather.wind_deg}deg)`}}/>
                    </picture>
                    <p>{this.props.weather.wind_speed}</p>
                </li>
                <li className="option">
                    <picture>
                        <img src={require('./img/pressure.png')} alt=""/>
                    </picture>
                    <p>{parseInt(this.props.weather.pressure / 133 * 100)}</p>
                </li>
            </ul>
        )
    }
}

class SectionHours extends React.Component {
    hours =  [
        this.props.weatherHours[3],
        this.props.weatherHours[6],
        this.props.weatherHours[9],
        this.props.weatherHours[12],
    ]
    render() {
        return(
            <div className="hours">
                <Hour weather={this.hours[0]}/>
                <Hour weather={this.hours[1]}/>
                <Hour weather={this.hours[2]}/>
                <Hour weather={this.hours[3]}/>
            </div>
        )
    }
}

