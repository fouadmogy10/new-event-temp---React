import { Container, Row ,Col, Image} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import PROGRAMS from '../../imags/firstday-1.jpg'
import PROGRAMS1 from '../../imags/firstday-2.jpg'
import PROGRAMS2 from '../../imags/firstday-3.jpg'
import secondday from '../../imags/secondday-1.jpg'
import secondday1 from '../../imags/secondday-2.jpg'
import secondday2 from '../../imags/secondday-3.jpg'
import thirdday from '../../imags/thirdday-1.jpg'
import thirdday1 from '../../imags/thirdday-2.jpg'
import thirdday2 from '../../imags/thirdday-3.jpg'
import { BiTime,BiMap } from "react-icons/bi";
function NavTap() {
  return (
    <section className='py-5 navtap' id='PROGRAMS'>
        <Container>
            
        
        <div className="tit">
            <h2 className='fw-bold'>OUR PROGRAMS</h2>
            <p className='text-muted'>Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.</p>
        </div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
    <Row className='align-items-center my-2'>
        <Col md={2} sm={4} xs={5}>
            <Image src={PROGRAMS} roundedCircle className='w-100 my-5' />
        </Col>
        <Col md={10} sm={8}>
            <span className='text-muted '><BiTime/> 09.00 AM</span>
            <span className='text-muted'> <BiMap/> Room 240</span>
                <h3 className='py-3'>Introduction to Design</h3>
                <span className='text-muted fw-bold'>By Jenny Green</span>
                <p className='text-muted'>Maecenas accumsan metus turpis, eu faucibus ligula interdum in. Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum.</p>
        </Col>
    </Row>
    <Row className='align-items-center two my-2'>
        <Col md={2} sm={4} xs={5}>
            <Image src={PROGRAMS1} roundedCircle className='w-100 my-5' />
        </Col>
        <Col md={10} sm={8}>
            <span className='text-muted '><BiTime/> 09.00 AM</span>
            <span className='text-muted'> <BiMap/> Room 240</span>
                <h3 className='py-3'>Introduction to Design</h3>
                <span className='text-muted fw-bold'>By Jenny Green</span>
                <p className='text-muted'>Maecenas accumsan metus turpis, eu faucibus ligula interdum in. Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum.</p>
        </Col>
    </Row>
    <Row className='align-items-center my-2'>
        <Col md={2} sm={4} xs={5}>
            <Image src={PROGRAMS2} roundedCircle className='w-100 my-5' />
        </Col>
        <Col md={10} sm={8}>
            <span className='text-muted '><BiTime/> 09.00 AM</span>
            <span className='text-muted'> <BiMap/> Room 240</span>
                <h3 className='py-3'>Introduction to Design</h3>
                <span className='text-muted fw-bold'>By Jenny Green</span>
                <p className='text-muted'>Maecenas accumsan metus turpis, eu faucibus ligula interdum in. Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum.</p>
        </Col>
    </Row>
  </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
  <Row className='align-items-center my-2'>
        <Col md={2} sm={4} xs={5}>
            <Image src={secondday} roundedCircle className='w-100 my-5' />
        </Col>
        <Col md={10} sm={8}>
            <span className='text-muted '><BiTime/> 09.00 AM</span>
            <span className='text-muted'> <BiMap/> Room 240</span>
                <h3 className='py-3'>Introduction to Design</h3>
                <span className='text-muted fw-bold'>By Jenny Green</span>
                <p className='text-muted'>Maecenas accumsan metus turpis, eu faucibus ligula interdum in. Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum.</p>
        </Col>
    </Row>
    <Row className='align-items-center two my-2'>
        <Col md={2} sm={4} xs={5}>
            <Image src={secondday1} roundedCircle className='w-100 my-5' />
        </Col>
        <Col md={10} sm={8}>
            <span className='text-muted '><BiTime/> 09.00 AM</span>
            <span className='text-muted'> <BiMap/> Room 240</span>
                <h3 className='py-3'>Introduction to Design</h3>
                <span className='text-muted fw-bold'>By Jenny Green</span>
                <p className='text-muted'>Maecenas accumsan metus turpis, eu faucibus ligula interdum in. Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum.</p>
        </Col>
    </Row>
    <Row className='align-items-center my-2'>
        <Col md={2} sm={4} xs={5}>
            <Image src={secondday2} roundedCircle className='w-100 my-5' />
        </Col>
        <Col md={10} sm={8}>
            <span className='text-muted '><BiTime/> 09.00 AM</span>
            <span className='text-muted'> <BiMap/> Room 240</span>
                <h3 className='py-3'>Introduction to Design</h3>
                <span className='text-muted fw-bold'>By Jenny Green</span>
                <p className='text-muted'>Maecenas accumsan metus turpis, eu faucibus ligula interdum in. Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum.</p>
        </Col>
    </Row>
  </div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
    <Row className='align-items-center my-2'>
        <Col md={2} sm={4} xs={5}>
            <Image src={thirdday} roundedCircle className='w-100 my-5' />
        </Col>
        <Col md={10} sm={8}>
            <span className='text-muted '><BiTime/> 09.00 AM</span>
            <span className='text-muted'> <BiMap/> Room 240</span>
                <h3 className='py-3'>Introduction to Design</h3>
                <span className='text-muted fw-bold'>By Jenny Green</span>
                <p className='text-muted'>Maecenas accumsan metus turpis, eu faucibus ligula interdum in. Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum.</p>
        </Col>
    </Row>
    <Row className='align-items-center two my-2'>
        <Col md={2} sm={4} xs={5}>
            <Image src={thirdday1} roundedCircle className='w-100 my-5' />
        </Col>
        <Col md={10} sm={8}>
            <span className='text-muted '><BiTime/> 09.00 AM</span>
            <span className='text-muted'> <BiMap/> Room 240</span>
                <h3 className='py-3'>Introduction to Design</h3>
                <span className='text-muted fw-bold'>By Jenny Green</span>
                <p className='text-muted'>Maecenas accumsan metus turpis, eu faucibus ligula interdum in. Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum.</p>
        </Col>
    </Row>
    <Row className='align-items-center my-2'>
        <Col md={2} sm={4} xs={5}>
            <Image src={thirdday2} roundedCircle className='w-100 my-5' />
        </Col>
        <Col md={10} sm={8}>
            <span className='text-muted '><BiTime/> 09.00 AM</span>
            <span className='text-muted'> <BiMap/> Room 240</span>
                <h3 className='py-3'>Introduction to Design</h3>
                <span className='text-muted fw-bold'>By Jenny Green</span>
                <p className='text-muted'>Maecenas accumsan metus turpis, eu faucibus ligula interdum in. Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum.</p>
        </Col>
    </Row>
  </div>
 
</div>
    </Container>
    </section>
  );
}

export default NavTap;