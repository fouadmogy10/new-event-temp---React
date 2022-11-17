import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function RE() {
  return (
    <>
        <section className='register py-5 text-white' id='REGISTER'>
            <Container className='h-100'>
                <Row className='align-items-center h-100'>
                    <Col md={7} sm={6}>
                        <h2 className='fw-bolder'>REGISTER HERE</h2>
                        <h4 className=' fw-bold'>Nunc eu nibh vel augue mollis tincidunt id efficitur tortor. Sed pulvinar est sit amet tellus iaculis hendrerit.</h4>
                        <p className='text-muted mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet consectetuer diam nonummy.</p>
                    </Col>
                    <Col md={5} sm={6}>
                        <div class="form-check">
                          
                            <input class="form-control my-3 bg-transparent "  type="text"  aria-label="Text for screen reader" placeholder='User Name'/>
                            <input class="form-control my-3 bg-transparent"  type="email"  aria-label="Text for screen reader" placeholder='UR email'/>
                            <input class="form-control my-3 bg-transparent"  type="text"  aria-label="Text for screen reader" placeholder='Password'/>
                            <input class="form-control my-3 bg-transparent"  type="text"  aria-label="Text for screen reader" placeholder='phone number'/>
                            <Button  className="btn-2 but-def">
                          REGISTER NOW
                          </Button> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default RE