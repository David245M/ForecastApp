import React from 'react'
import {Hour} from './../Hour'
import './Hours.css'


class Hours extends React.Component {
    render() {
        return (
            <div className="hours">
                {this.props.list.slice(1,5)
                    .map((weather,i) => <Hour weather={weather} key={i}/>)}
            </div>
        )
    }
}

export {Hours}