import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import imgO from '../../imags/overview-img.jpg'
function Overview() {
  return (
    <>
        <section className='py-5 overview ' id='OVERVIEW'>
        <Container className='py-5'>
            <Row>
                <Col md={6}>
                    <div className='my-5'>
                    <h3 className='fs-3'>New Event is a fully responsive one-page template for events, conferences or workshops.</h3>
                    <p className='my-3 text-muted'>This is a Bootstrap v3.3.6 layout that is responsive and mobile friendly. You may download and modify this template for your website. Please tell your friends about templatemo.</p>
                    <p className='text-muted'>Quisque facilisis scelerisque venenatis. Nam vulputate ultricies luctus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={imgO} alt="web" className='w-100' />
                </Col>
            </Row>
        </Container>
        </section>
    </>
  )
}

export default Overview