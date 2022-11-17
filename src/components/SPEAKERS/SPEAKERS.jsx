import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import speacker1 from '../../imags/speakers-img1.jpg'
import speacker2 from '../../imags/speakers-img2.jpg'
import speacker3 from '../../imags/speakers-img3.jpg'
import speacker4 from '../../imags/speakers-img4.jpg'
import speacker5 from '../../imags/speakers-img5.jpg'

function SPEAKERS() {
  var settings = {
    dots: true,
    infinite: !false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
        <section className='SPEAKERS py-5' id='VENUE'>
            <div className="title text-center">
                <h2 className='text-uppercase'>creative SPEAKERS</h2>
                <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
               
            </div>
           <Container>
           <Slider {...settings}>
          <div>
            <div className="card border-0 m-3" >
              <img className="card-img-top" src={speacker1} alt=""/>
              <div className="card-body text-center">
                <h4 className="card-title">Jenny Green</h4>
                <p className="card-text">UI Designer</p>
              </div>
            </div>
          </div>
          <div>
          <div className="card border-0 m-3" >
              <img className="card-img-top" src={speacker5} alt=""/>
              <div className="card-body text-center">
                <h4 className="card-title">Elite Hamilton</h4>
                <p className="card-text">Marketing Guru</p>
              </div>
            </div>
          </div>
          <div>
          <div className="card border-0 m-3 " >
              <img className="card-img-top" src={speacker2} alt=""/>
              <div className="card-body text-center">
                <h4 className="card-title">David Yoon</h4>
                <p className="card-text">Creative Director</p>
              </div>
            </div>
          </div>
          <div>
          <div className="card border-0 m-3" >
              <img className="card-img-top" src={speacker3} alt=""/>
              <div className="card-body text-center">
                <h4 className="card-title">Je Mary Lee</h4>
                <p className="card-text">Web Specialistr</p>
              </div>
            </div>
          </div>
          <div>
          <div className="card border-0 m-3" >
              <img className="card-img-top" src={speacker4} alt=""/>
              <div className="card-body text-center">
                <h4 className="card-title">Johnathan Doe</h4>
                <p className="card-text">Frontend Dev</p>
              </div>
            </div>
          </div>
        </Slider>
           </Container>
        </section>
    </>
  )
}

export default SPEAKERS