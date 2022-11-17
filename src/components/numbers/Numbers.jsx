import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FaUsers,FaClock,FaMicrophone } from "react-icons/fa";
function Numbers() {
  return (
    <>
    <section className='py-5 numbers' >
        <Container>
            <Row>
                <Col md={4} sm={6} className="mb-2">
                    <div className=" text-center">
                        <div className="card-body">
                    <FaUsers/>
                            <h3 className="my-2 card-title text-white">24 Programs</h3>
                            <p className="card-text text-muted">Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-2">
                    <div className=" text-center">
                        <div className="card-body">
                    <FaClock/>
                            <h3 className="my-2 card-title text-white">11 Speakers</h3>
                            <p className="card-text text-muted">Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-2">
                    <div className=" text-center">
                        <div className="card-body">
                    <FaMicrophone/>
                            <h3 className="my-2 card-title text-white">650 Participants</h3>
                            <p className="card-text text-muted">Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Numbers