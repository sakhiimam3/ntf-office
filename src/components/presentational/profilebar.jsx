import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'



const Profilebar = () => {
  return (
       <>
         
          
   <Container>
       <Row>
           <Col md={12}>
           <Navbar  expand="lg" className="profile_bottom_bar">

<Container>
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar  id="basic-navbar-nav  "  className='m-auto'>
    <Nav className="bottom_links">
      <Nav.Link>All Nft</Nav.Link>
      <Nav.Link >About</Nav.Link>
      <Nav.Link>Activity</Nav.Link>
      <Nav.Link >followers</Nav.Link>
      <Nav.Link>following</Nav.Link>

   
      <NavDropdown title="Setting" id="basic-nav-dropdown"   className="dropDown">
        <NavDropdown.Item href="#action/3.1" >Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" >Privacy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" >Block user</NavDropdown.Item>
       
      </NavDropdown>
    </Nav>
  </Navbar>
</Container>
</Navbar>
           </Col>
       </Row>
   </Container>

       
       </>
  )
}

export default Profilebar