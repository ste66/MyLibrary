
import React, { Component } from 'react'

import {Card,Button} from 'react-bootstrap'

class book extends Component {

    
    render() {
        const {book,year,rating,image} = this.props;
        return (
            <div className=" mb-5 ">

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{book}</Card.Title>
                                <Card.Text>
                                Released {year}
                                </Card.Text>
                                <Button variant="warning">{rating}</Button>
                            </Card.Body>
                </Card>

            </div>
        )
    }
}
export default book;