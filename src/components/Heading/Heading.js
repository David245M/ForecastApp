import React from 'react'
import './Heading.css'

class Heading extends React.Component {
    getTimeString = date => 
        new Date(date*1000).toLocaleTimeString().slice(0,5)
        
    render() {
        return (
            <div className="heading">
                <div className ="location">
                    <h1>{
                        this.props.location.city || 
                        this.props.location.city_district ||
                        this.props.location.town ||
                        this.props.location.village ||
                        this.props.location[this.props.location._type]}</h1>
                    <h3>{this.props.location.country}</h3>
                    <h4>{new Date().toLocaleDateString() + ' ' 
                        + new Date().toTimeString().slice(0,5)}</h4>
                </div>
                <div className="sun">
                    <p>{this.getTimeString(this.props.sun.rise.apparent)}</p>
                    <p>{this.getTimeString(this.props.sun.set.apparent)}</p>
                </div>
            </div>
        )
    }
}

export {Heading}