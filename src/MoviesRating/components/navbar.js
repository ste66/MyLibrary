import React, { Component } from 'react'

import {Navbar,Nav, Form, FormControl, Button} from 'react-bootstrap'

class navbar extends Component {
    render() {
        return (
            <div>
                
           <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">StellaCinema</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Adult Movies</Nav.Link>
                    <Nav.Link href="#pricing">Kid Movies</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    </Form>
            </Navbar> 

            </div>
        )
    }
}

export default navbar;