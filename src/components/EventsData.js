import sol from '../images/sol.jpg'
import sol1 from '../images/sol1.jpeg'
import sol2 from '../images/sol.jpg'
import { Component } from 'react';
import './Events.css';

class EventsData extends Component{
    render(){
        return(
        <div className={this.props.className}>
            <div className="eve-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
                </div>
            <div className="image">
                <img alt="img" src=
                {this.props.img1}/>
                <img alt="img" src=
                {this.props.img2}/>
            </div>
        </div>

        )
    }
}

export default EventsData; 