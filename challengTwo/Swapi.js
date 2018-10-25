import React from 'react';
import Display from './Display';
import _starships from './starships';
import _planets from './planets';

const navStyle = {
    width: "100%",
    color: 'black',
    backgroundColor: 'blue'
}

const backgroundStyle = {
    backgroundColor: 'black'
}


export default class Swapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: '',
            displayData: []
        }

        this.togglePlanets = this.togglePlanets.bind(this);
        this.toggleStarships = this.toggleStarships.bind(this);
    }

    componentWillMount() {
        this.setState({
            mode: 'starships',
            displayData: _starships.results
        })
    }

    toggleStarships() {
        this.setState({
            mode: 'planets',
            displayData: _starships.results
        })
    }

    togglePlanets() {
        this.setState({
            mode: 'planets',
            displayData: _planets.results
        })
    }

    render() {
        return (
            <div style={backgroundStyle}>
                <nav style={navStyle}>
                    <h2>Swapi Data</h2>
                </nav>
                <button onClick={() => this.toggleStarships()}>Starships</button>
                <button onClick={() => this.togglePlanets()}>Planets</button>
                <Display data={this.state.displayData} mode={this.state.mode} />
            </div>
        )
    }
}

