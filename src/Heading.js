import React from 'react'

class Heading extends React.Component {
    timeRender(arg) {
        let time = new Date(arg * 1000)
        return String(time.toTimeString().slice(0,5))
    }
    render() {
        return(
            <div className="heading">
                <div className="location">
                    <h1 className="cityName">{this.props.city}</h1>
                    <h3 className="countryName">{this.props.country}</h3>
                    <h4>{this.props.current.toLocaleString().slice(0,17)}</h4>
                </div>
                <div className="sun">
                    <p>{this.timeRender(this.props.sunrise)}</p>
                    <p>{this.timeRender(this.props.sunset)}</p>
                </div>
            </div>
        )
    }
}

export default Heading