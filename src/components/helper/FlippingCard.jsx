import React, {Component} from 'react';

export default class FlippingCard extends Component {
    constructor(props) {
        super(props);
        this.state = { flipped: false };
        this.flip = this.flip.bind(this);
    }

    flip = () => {
        this.setState({ flipped: !this.state.flipped });
    }

    render(){
        return(
            <div
                onMouseEnter={this.flip}
                onMouseLeave={this.flip}
                className={"flipping-card" + (this.state.flipped ? " flipped" : "")}
            >
                {this.props.children}
            </div>
        )
    }
}

export const CardFront = props => {
    return(
        <div className={`card-front`}>
            <img src={props.cover} alt={props.title}/>
            <p className={`flipping-card-icon`} style={{
                background: props.iconBG
            }}>
                {props.icon}
            </p>
            <h2>{props.title}</h2>
        </div>
    )
}

export const CardBack = props => {
    return(
        <div className={`card-back`}>
            <p>{props.children}</p>
        </div>
    )
}