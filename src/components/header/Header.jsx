import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
    const [color, setcolor] = useState(false)
    const changeColor =()=>{
        window.scrollY > 300 ?setcolor(true) :setcolor(false);
    }
    window.addEventListener("scroll",changeColor)
  return (
    <>
    <Navbar  className=" fixed-top text-center py-3"  bg={color ? "dark" :"light"} variant={color ? "dark" :"light"}  expand="lg">
     <Container>
        <Navbar.Brand href="#home" className='fw-bolder' style={{color:"RGB(242, 84, 95)"}}>New EVENT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link href="#INTRO">INTRO</Nav.Link>
            <Nav.Link href="#OVERVIEW">OVERVIEW</Nav.Link>
            <Nav.Link href="#VENUE">VENUE</Nav.Link>
            <Nav.Link href="#PROGRAMS">PROGRAMS</Nav.Link> 
            <Nav.Link href="#REGISTER">REGISTER</Nav.Link>
            <Nav.Link href="#SPONSORS">SPONSORS</Nav.Link>
            <Nav.Link href="#CONTACT">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <header className='hero' id='INTRO'>
            <Container>
                <div className='d-flex text-center text-white align-items-center'>
                    <Col >
                          <h3>July 22 - 26 in San Francisco, CA</h3>   
                          <h1 className='display-2 fw-bold'>Web Design Conference</h1>
                          <Button className="btn-1 but-def">
                          LEARN MORE
                          </Button>                       
                          <Button className="btn-2 but-def">
                          REGISTER NOW
                          </Button>                       
                    </Col>
                </div>
            </Container>
      </header>
    </>
  )
}
/*
  
*/ 

export default Header
