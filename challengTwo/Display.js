import React from 'react';

const divStyle = {
    backgroundColor: 'gray',
    color: 'white',
    padding: '1em',
    textAlign: 'center',
    margin: '1em'
}

const Display = (props) => {
    let data;
    if(props.mode === 'starships'){
        let data = 
        props.data.map(starship => {
            return (
                <div style={divStyle}>
                    <h2>{starship.name}</h2>
                </div>
            )
        }) 
        return data;
    }

    if(props.mode === 'planets'){
        let data = 
        props.data.map(planet => {
            return (
                <div style={divStyle}>
                    <h2>{planet.name}</h2>
                </div>
            )
        }) 
        return data;
    }

    return (
        <div>
            {data}
        </div>
    )
}

export default Display;
