import React, {Component} from 'react';
import './Ghibli.css';

export default class Ghibli extends Component {
  constructor(){
    super();
    this.state = {
      titles: [],
      displayData: false
    }
  }

  componentDidMount(){
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(json => {
        let titlesArr = json.map(movie => {
          return movie.title;
        })
        this.setState({
          titles: this.state.titles.concat(titlesArr)
        }, () => {console.log(this.state.titles)})
      })
      .catch(error => console.log(error))
  }

  titlesMap = () => {
    if (this.state.displayData === false){
      return (
        <div></div>
      )
    } else {
      return(
        this.state.titles.map(title => {
          return (
            <div key={title} className="titleDiv">
              <p>{title}</p>
            </div>
          )
        })
      )
    }
  }

  componentWillUnmount(){
    console.log('This component is leaving the DOM!');
  }

  toggleInfo = () => {
    if (this.state.displayData === false){
      this.setState({displayData: true})
    } else {
      this.setState({displayData: false})
    }
  }

  render(){
    return(
      <div>
        <div>
          <button onClick={this.toggleInfo}>Click for Titles</button>
        </div>
        <div className="flexParent">
          {this.titlesMap()}
        </div>
      </div>
    )
  }
}
