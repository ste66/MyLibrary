

import React, { Component } from 'react'

import {Card, Button} from 'react-bootstrap'
import Comments from './comments'

class card extends Component {
    render() {
        const {name, year, rating,image} = this.props;
        return (
            <div>
                <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
             Released in :  {year}
                </Card.Text>
                <Button variant="primary">{rating}</Button>

                 {/* Add your comment component under the button inside the card */}
               <Comments about="I Like"/>
            </Card.Body>
            </Card>
            </div>
        )
    }
}
export default card;

