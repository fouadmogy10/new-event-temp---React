import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import sponser from '../../imags/sponsor-img1.jpg'
import sponser1 from '../../imags/sponsor-img2.jpg'
import sponser2 from '../../imags/sponsor-img3.jpg'
import sponser3 from '../../imags/sponsor-img4.jpg'


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
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
        <section className='SPEAKERS py-5' id='SPONSORS'>
            <div className="title text-center">
                <h2 className='text-uppercase'>creative SPEAKERS</h2>
                <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
               
            </div>
           <Container>
           <Slider {...settings}>
          <div>
            <div className="card border-0 m-3" >
              <img className="card-img-top" src={sponser} alt=""/>
            </div>
          </div>
          <div>
            <div className="card border-0 m-3" >
              <img className="card-img-top" src={sponser1} alt=""/>
            </div>
          </div>
          <div>
            <div className="card border-0 m-3" >
              <img className="card-img-top" src={sponser2} alt=""/>
            </div>
          </div>
          <div>
            <div className="card border-0 m-3" >
              <img className="card-img-top" src={sponser3} alt=""/>
            </div>
          </div>
         
        </Slider>
           </Container>
        </section>
    </>
  )
}

export default SPEAKERS