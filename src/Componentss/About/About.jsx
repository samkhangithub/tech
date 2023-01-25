import './about.css';
import React, { useState } from 'react';

import img1 from "../../image/img15.webp";
import img2 from "../../image/img16.webp";
import img3 from "../../image/img17.webp";
import img4 from "../../image/img18.webp";
import img5 from "../../image/img19.webp";
import img6 from "../../image/img20.webp";
import img7 from "../../image/img21.webp";
import img8 from "../../image/img3.webp";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GrLinkedinOption } from 'react-icons/gr';

const About = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const Array = [
        {
            img : img8,
            title : "CEO",
            name : "Federico"
        },
        {
            img : img8,
            title : "CTO",
            name : "Rodrigo"
        },
        {
            img : img8,
            title : "CBO",
            name : "Eugenio"
        },
        {
            img : img8,
            title : "COO",
            name : "Pedro"
        },
        

    ]
    return (
        <>
            <section id="header" className="d-flex align-items-center homeimg text-white">

                <div className="container-fluid ">
                    <div className="row" style={{ marginTop: "15%", marginBottom: "15%" }}>
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                    <h1 className='about'> <strong>About Us</strong></h1>

                                </div>

                                <div className="col-lg-7 col-md-12 col-sm-12 mb-5">
                                    <p className='we-about'>We are a multinational tech company with offices in Argentina, Colombia and the USA. With our multidisciplinary teams we create products for companies and organizations from various industries around the world.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section id="header2" className="d-flex align-items-center">

                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex flex-column ">
                                    <img src={img1} className="img1" />

                                </div>

                                <div className="col-lg-7 col-md-12 col-sm-12 mb-5 ">

                                    <Carousel activeIndex={index} onSelect={handleSelect} className="slider">
                                        <Carousel.Item className='carouselitem'>
                                            <h3 className='slidetitle1'>WE ARE
                                                <br />
                                                <strong>GEEKS</strong>
                                            </h3>
                                            <p className='slidepara1'>We live and breath technology. We keep ourselves updated: try new components, study new languages and collaborating with the open source community.</p>

                                        </Carousel.Item>
                                        <Carousel.Item className='carouselitem'>
                                            <h3 className='slidetitle1'>WE ARE A
                                                <br />
                                                <strong>TEAM</strong>
                                            </h3>
                                            <p className='slidepara1'>We focus on integral solutions, exploring various perspectives to solve a problem. Our work is the result of collaborative thinking.</p>


                                        </Carousel.Item>
                                        <Carousel.Item className='carouselitem'>

                                            <h3 className='slidetitle1'>WE ARE
                                                <br />
                                                <strong>AGNOSTIC</strong>
                                            </h3>
                                            <p className='slidepara1'>We have experience in multiple technologies and methodologies, which gives us the ability to think on the best approach and tool for each problem.</p>

                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="header3" className="d-flex align-items-center bg-light text-dark">

                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                    <div className='triangleimg1'>
                                        <img src={img2} className="img-fluid" />
                                    </div>
                                    <div className='triangleimg2' >
                                        <img src={img2} className="img-fluid" />
                                    </div>
                                    <div className='triangleimg3' >
                                        <img src={img2} className="img-fluid" />
                                    </div>

                                    <div className='lifetext'>
                                        <p className='style'>LIFESTYLE</p>
                                        <h1 className='our'>Our Culture</h1>
                                        <p className='spite'>In spite of having experienced significant growth we strive to maintain the essence of a small outfit: with open door policies, a relaxed work culture and, first and foremost, an unwavering fidelity for all of our clients, big and small.</p>
                                        <a class="cmp-btn" href="/our-services">View all services <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="cmp-btn__icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 mb-5 mt-5">
                                    <div className='img4'>
                                        <img src={img4} className="img-fluid" />
                                    </div>
                                    <div className='img3'>
                                        <img src={img3} className="img-fluid" />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            <section id="header4" className="d-flex align-items-center  ">

                <div className="container-fluid ">
                    <div className="row" style={{ marginTop: "10%", marginBottom: "10%" }}>
                        <div className="col-10 mx-auto">

                            <p className='start'>We started out in a garage down south in patagonia. But now...</p>
                            <h3 className='you'>You can find us here</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id="header5" className="d-flex align-items-center">

                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12 mb-5 mb-lg-0 mt-5 mt-lg-0">
                                    <div className='circle'>
                                        <img src={img5} className="img-fluid" />
                                    </div>
                                    <h3 className='caption'>Argentina</h3>
                                </div>

                                <div className="col-lg-4 col-md-12 col-sm-12 ">
                                    <div className='circle'>
                                        <img src={img6} className="img-fluid" />
                                    </div>
                                    <h3 className='caption'>Colombia</h3>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 mb-5 mb-lg-0 mt-5 mt-lg-0">
                                    <div className='circle'>
                                        <img src={img7} className="img-fluid" />
                                    </div>
                                    <h3 className='caption'>USA</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="header3" className="d-flex align-items-center bg-light text-dark mt-5">

<div className="container-fluid ">
    <div className="row">
        <div className="col-10 mx-auto">
        <div className='board'>
        <h2>Our Board</h2>
        <p>Meet the guys that are directing our efforts</p>
        </div>
       
        <Row xs={1} md={4} className="g-4">
      {Array.map((item, index) => (
        <Col  key={index} >
          <Card className='about-img'>
          <img  src={item.img}  />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className='des d-flex justify-content-between'>
               {item.name}
               <GrLinkedinOption  style={{color:"blue"}} size={30}/>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    

        </div>
    </div>
</div>
</section>


        </>
    )
}
export default About;