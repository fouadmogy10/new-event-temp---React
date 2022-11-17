import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
function Iframe() {
  return (
    <>
    <section className='py-5' >
        <Container className='py-5'>
            <Row>
                <Col md={6} className='mb-3'>
                    <h2>WATCH VIDEO</h2>
                    <p className='fw-bold fs-3'>
                    Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.
                    </p>
                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet consectetuer diam nonummy.</p>
                </Col>
                <Col md={6}>
                <iframe width="100%" height="300" src="https://www.youtube.com/embed/TTCfLZ-2RXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
        </section></>
  )
}

export default Iframe