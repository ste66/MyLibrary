
import React, { Component } from 'react'

import {Card,Button} from 'react-bootstrap'

class city extends Component {

    
    render() {
        const {city,rating,year,image} = this.props;
        return (
            <div className= " mb-5" >
            
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>City: {city}</Card.Title>
                                <Card.Text>
                                 Year Visited {year}
                                </Card.Text>
                                <Button variant="warning">{rating}</Button>
                            </Card.Body>
                </Card>

            </div>
        )
    }
}
export default city;