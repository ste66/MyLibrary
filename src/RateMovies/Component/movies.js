
import React, { Component } from 'react'

import Comment from './comment' 

class movies extends Component {
    render() {
        // destructive Method
        /*const {movie,year,rating} = this.props;*/
        return (
            <div>
                
          <ul >
                <li >Movies : {this.props.movie}</li>
                <li>Year : {this.props.year}</li>
                <li>ImDb Rating : {this.props.rating}</li>
            </ul>

                <Comment mycomment = "I like" />
            </div>
        )
    }
}
export default movies;