import React from 'react'
import Card from './Card'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Card 
                    weather={this.props.weather} 
                    position={this.props.position}
                    sunrise = {this.props.weather.current.sunrise}
                    sunset={this.props.weather.current.sunset}/>
                
            </div>
        )
    }
}

export default App