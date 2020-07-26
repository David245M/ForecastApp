import React from 'react'
import './Temperature.css'

class Temperature extends React.Component {
    render() {
        return (
            <h1 className="temperature">{`${Math.floor(this.props.temp)}°`}</h1>
        )
    }
}

export {Temperature}