import React from 'react'
import {Icon} from './../Icon'
import {Temperature} from '../Temperature'

class Hour extends React.Component {
    getTime = (date) => new Date(date*1000).toLocaleTimeString().slice(0,5)
    render() {
        return (
            <div className="hour">
                <h3 className="hour-time">{this.getTime(this.props.weather.dt)}</h3>
                <Icon id={this.props.weather.weather[0].icon}/>
                <Temperature temp={this.props.weather.main.temp}/>
                <OptionList 
                    humidity={this.props.weather.main.humidity}
                    wind={this.props.weather.wind}
                    pressure={this.props.weather.main.grnd_level}/>
            </div>
        )
    }
}

class OptionList extends React.Component {
    render() {
        return (
            <ul className="optionList" >
                <li className="option humidity">
                    <picture>
                        <img 
                            src={require('./img/humidity.png')} 
                            title="Humidity"
                            alt="" />
                    </picture>
                    <p>{this.props.humidity}</p>
                </li>
                <li className="option wind">
                    <picture>
                        <img 
                            src={require('./img/wind.png')} 
                            title="Wind" 
                            alt="" />
                    </picture>
                    <p>{this.props.wind.speed}</p>
                </li>
                <li className="option pressure">
                    <picture>
                        <img 
                            src={require('./img/pressure.png')} 
                            title="Pressure" 
                            alt="" />
                    </picture>
                    <p>{(this.props.pressure / 133.3333 * 100).toFixed(0)}</p>
                </li>
            </ul>
        )
    }
}

export {Hour}