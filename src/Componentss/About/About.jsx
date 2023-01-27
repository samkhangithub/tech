import './about.css';
import React, { useState } from 'react';
import img1 from "../../image/img15.webp";
import img2 from "../../image/img16.webp";
import img4 from "../../image/banner .png";
import img5 from "../../image/img19.webp";
import img6 from "../../image/img6.webp";
import img7 from "../../image/img3.webp";
import img8 from "../../image/img3.webp";
import img13 from "../../image/img13.webp";
import img14 from "../../image/img14.webp";
import { MdKeyboardArrowRight } from "react-icons/md";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GrLinkedinOption } from 'react-icons/gr';
import Career from '../Careers/Career';
import Footers from '../Footers/Footer';
import Fade from 'react-reveal/Fade';


const About = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const Array = [
        {
            img: img8,
            title: "CEO",
            name: "Federico"
        },
        {
            img: img8,
            title: "CTO",
            name: "Rodrigo"
        },
        {
            img: img8,
            title: "CBO",
            name: "Eugenio"
        },
        {
            img: img8,
            title: "COO",
            name: "Pedro"
        },


    ]

    const Senior = [
        {
            img: img8,
            title: "CEO",
            name: "Federico"
        },
        {
            img: img8,
            title: "CTO",
            name: "Rodrigo"
        },
        {
            img: img8,
            title: "CBO",
            name: "Eugenio"
        },
        {
            img: img8,
            title: "COO",
            name: "Pedro"
        },
        {
            img: img8,
            title: "COO",
            name: "Pedro"
        },
        {
            img: img8,
            title: "CTO",
            name: "Rodrigo"
        },

    ]
    return (
        <>

            <section id="header" className="d-flex align-items-center homeimg text-white">

                <div className="container-fluid ">
                    <div className="row" style={{ marginTop: "15%", marginBottom: "15%" }}>
                        <Fade left delay={500} duration={3000}>
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
                        </Fade>

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
                                <Fade bottom duration={2000}>
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
                                </Fade>
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
                                    <Fade bottom duration={2000}>
                                        <div className='lifetext'>
                                            <p className='style'>LIFESTYLE</p>
                                            <h1 className='our'>Our Culture</h1>
                                            <p className='spite'>In spite of having experienced significant growth we strive to maintain the essence of a small outfit: with open door policies, a relaxed work culture and, first and foremost, an unwavering fidelity for all of our clients, big and small.</p>
                                            <a class="cmp-btn" href="/our-services">View all services <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="cmp-btn__icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                                        </div>
                                    </Fade>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 mb-5 mt-5">
                                <Fade right duration={2000}>
                                    <div className='img4'>
                                        <img src={img4} className="img-fluid" />
                                    </div>
</Fade>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            <section id="header4" className="d-flex align-items-center  ">

                <div className="container-fluid ">
                    <div className="row" style={{ marginTop: "10%", marginBottom: "10%" }}>
                        <Fade bottom duration={2000}>
                            <div className="col-10 mx-auto">

                                <p className='start'>We started out in a garage down south in patagonia. But now...</p>
                                <h3 className='you'>You can find us here</h3>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>

            <section id="header5" className="d-flex align-items-center">

                <div className="container-fluid ">
                    <div className="row">
                        <Fade bottom duration={2000}>
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
                        </Fade>
                    </div>
                </div>
            </section>

            <section id="header3" className="d-flex align-items-center bg-light text-dark mt-5">

                <div className="container-fluid ">
                    <div className="row">
                        <Fade bottom duration={2000}>
                            <div className="col-10 mx-auto">
                                <div className='board'>
                                    <h2>Our Board</h2>
                                    <p>Meet the guys that are directing our efforts</p>
                                </div>

                                <Row xs={1} md={4} className="g-4">
                                    {Array.map((item, index) => (
                                        <Col key={index}>
                                            <Card>
                                                <img src={item.img} className="img-fluid img8" />
                                                <Card.Body>
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        {item.name}
                                                        <GrLinkedinOption style={{ marginLeft: "60%", color: "blue" }} size={30} />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>


                            </div>
                        </Fade>
                    </div>
                    <div className="row">
                        <Fade bottom duration={2000}>
                            <div className="col-10 mx-auto">
                                <Carousel activeIndex={index} onSelect={handleSelect} className="slider2">
                                    <Carousel.Item className='carouselitem2'>
                                        <h3 className='slidetitle2'>"No risk, no reward"
                                        </h3>
                                        <p className='slidepara2'>Federico</p>

                                    </Carousel.Item>
                                    <Carousel.Item className='carouselitem2'>
                                        <h3 className='slidetitle2'>"This looks intersting, let's give it a try"
                                        </h3>
                                        <p className='slidepara2'>Rodrigo</p>


                                    </Carousel.Item>
                                    <Carousel.Item className='carouselitem2'>

                                        <h3 className='slidetitle2'>"Think big!"
                                        </h3>
                                        <p className='slidepara2'>Eugenio</p>

                                    </Carousel.Item>
                                </Carousel>



                            </div>
                        </Fade>
                    </div>

                    <div className="row ">
                        <Fade bottom duration={2000}>
                            <div className="col-10 mx-auto senior-main">
                                <div className='Senior'>
                                    <h2>Senior Management</h2>
                                    <p>Where stretegic decisions take place</p>
                                </div>

                                <Row xs={1} md={4} className="g-4">
                                    {Senior.map((item, index) => (
                                        <Col key={index}>
                                            <Card>
                                                <div className='img8'>
                                                    <img src={item.img} className="img-fluid" />
                                                </div>

                                                <Card.Body>
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        {item.name}
                                                        <GrLinkedinOption style={{ marginLeft: "60%", color: "blue" }} size={30} />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>


                            </div>
                        </Fade>
                    </div>

                    <div>

                    </div>



                    <div className="row rowteam mt-5">
                        <Fade bottom duration={2000}>
                            <div className="col-12 mx-auto">
                                <div className='team'>
                                    <h2>Our Team</h2>
                                    <p>These are the people who get the job done</p>
                                </div>

                                <Carousel activeIndex={index} onSelect={handleSelect} className="slider2">
                                    <Carousel.Item className='carouselitem2'>
                                        <img src={img8} className="img-fluid item1" />
                                        <img src={img6} className="img-fluid item2" />
                                        <img src={img7} className="img-fluid item3" />
                                    </Carousel.Item>
                                    <Carousel.Item className='carouselitem2'>
                                        <img src={img8} className="img-fluid item1" />
                                        <img src={img6} className="img-fluid item2" />
                                        <img src={img7} className="img-fluid item3" />
                                    </Carousel.Item>
                                    <Carousel.Item className='carouselitem2'>
                                        <img src={img6} className="img-fluid item1" />
                                        <img src={img7} className="img-fluid item2" />
                                        <img src={img8} className="img-fluid item3" />
                                    </Carousel.Item>
                                </Carousel>


                            </div>
                        </Fade>
                    </div>

                    <div className="row mt-5 backgimg text-white  rounded">
<Fade bottom duration={2000}>
                        <div className="col-10 mx-auto mt-5">
                            <h2 className=" text-center here">Here are our services in action</h2>
                            <h1 className="mt-2 text-center">Take a look at some of what we do.</h1>
                            <a className="cmp-btn2 mt-5" href="/our-services">View all our work <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="cmp-btn__icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                            <div className="row bg-white bg mt-5">

                                <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">


                                    <h1 className="petro">Petromark</h1>
                                    <h5 className="mt-2 Plat">Patagonian created a platform <br /> that led Petromark to its <br /> digital transformation process</h5>
                                    <p className="we">We developed an entire platform that enabled <br /> Petromark to track and report their non destructive <br /> testing projects in their clients oilfields.</p>
                                    <div className="mt-3 mb-5">
                                        <a href="" className="howbtn">SEE HOW WE DID IT <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
                                    </div>

                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 header-img">

                                    <div className="img13">

                                        <img src={img13} className="img-fluid " alt="img13" />
                                    </div>
                                    <div className="img14">
                                        <img src={img14} className="img-fluid" alt="img14" />

                                    </div>


                                </div>

                            </div>

                        </div>
                        </Fade>
                    </div>






                    <div className="row text-white  rounded">
<Fade bottom duration={2000}>
                        <div className="col-10 mx-auto mt-1">
                            <div className="row bg-white bg mt-5">
                                <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                    <h2 className="petro">Interamerican Development Bank</h2>
                                    <h5 className="mt-2 Plat">Fast Reaction and Agility for <br /> Covid-19 relief</h5>
                                    <p className="we">We built, in record time, an interactive map for local <br /> communities to find scarce resources and assistance <br /> for COVID-19 relief.</p>
                                    <div className="mt-3 mb-5">
                                        <a href="" className="howbtn">SEE HOW WE DID IT <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 header-img">
                                    <div className="img13">

                                        <img src={img13} className="img-fluid " alt="img13" />
                                    </div>
                                    <div className="img14">
                                        <img src={img14} className="img-fluid" alt="img14" />

                                    </div>

                                </div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>



            </section>

            <Career />
            <Footers />

        </>
    )
}
export default About;