import React, { Component } from 'react'

export default class RatingStars extends Component {
    constructor(props){
        super(props)
        this.state={
            rating : props.rating
        }
    }
    changeMovieRating=(value)=>{
        if (this.props.getRating) {
            this.props.getRating(value)
            this.setState({rating : value})
        }
    }
    render() {
        return (
            <div>
                <svg height="25" width="23" className="star" fill={this.state.rating>=1 ? 'yellow' : 'black'} onClick={()=>this.changeMovieRating(1)}>
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                </svg>
                <svg height="25" width="23" className="star" fill={this.state.rating>=2 ? 'yellow' : 'black'} onClick={()=>this.changeMovieRating(2)}>
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                </svg>
                <svg height="25" width="23" className="star" fill={this.state.rating>=3 ? 'yellow' : 'black'} onClick={()=>this.changeMovieRating(3)}>
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                </svg>
                <svg height="25" width="23" className="star" fill={this.state.rating>=4 ? 'yellow' : 'black'} onClick={()=>this.changeMovieRating(4)}>
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                </svg>
                <svg height="25" width="23" className="star" fill={this.state.rating>=5 ? 'yellow' : 'black'} onClick={()=>this.changeMovieRating(5)}>
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                </svg>
            </div>
        )
    }
}

