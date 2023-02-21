import './about.css';
import React, { useState } from 'react';
import img1 from "../../image/img15.webp";
import repairimg from "../../image/repaircms.jpeg";
import patronimg from "../../image/petron.png";
import saloonimg from "../../image/saloon.png";
import imgsen1 from "../../image/saud.webp";
import imgsen2 from "../../image/shehzadshah.webp";
import imgsen3 from "../../image/amir.webp";
import imgsen4 from "../../image/roohullah.webp";
import imgpro1 from "../../image/travcont.webp";
import imgpro2 from "../../image/RiseImage.webp";
import imgpro3 from "../../image/raso.webp";
import imgpro4 from "../../image/Behance.webp";
import imgpro5 from "../../image/AddaImage.webp";
import imgpro6 from "../../image/bubbleImage.webp";
import imgpro7 from "../../image/MusafirImage.webp";
import imgpro8 from "../../image/GratitudeImage.webp";
import imgpro9 from "../../image/traficinfoImage.webp";
import imgpro10 from "../../image/PakfoneImage.webp";
import imgpro11 from "../../image/khpalmart.webp";
import imgpro12 from "../../image/khpalmart.webp";
import imgpro13 from "../../image/petron1.png";
import imgpro14 from "../../image/repair1.png";
import imgpro15 from "../../image/saloon1.png";
import imgteam1 from "../../image/mustafa.png";
import imgteam2 from "../../image/romi.jpg";
import imgteam3 from "../../image/saad.png";
import imgteam4 from "../../image/Imran.png";
import imgteam5 from "../../image/Aqib.png";
import imgteam6 from "../../image/ahmad.png";
import imgteam7 from "../../image/Hamid.png";
import imgteam8 from "../../image/ihtesham.png";
import imgteam9 from "../../image/ihtizaz.png";
import imgteam10 from "../../image/luqman.png";
import imgteam11 from "../../image/ayaz.png";
import imgteam12 from "../../image/sam.png";
import imgteam13 from "../../image/sameer.png";
import imgteam14 from "../../image/rehman.png";


import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GrLinkedinOption } from 'react-icons/gr';
import Career from '../Careers/Career';
import Footers from '../Footers/Footer';
import Fade from 'react-reveal/Fade';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const About = () => {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const Array = [
        {
            img: imgsen1,
            title: "CEO",
            name: "Saud Khan",
            link: 'https://www.linkedin.com/in/saudkhan0039/'
        },
        {
            img: imgsen3,
            title: "MG",
            name: "Aamir Shehzad",
            link: 'https://pk.linkedin.com/in/aamir-shahzad-77ba95191?trk=public_profile_browsemap'
        },



    ]

    const Senior = [
        {
            img: imgsen1,
            title: "CEO FullStack Developer",
            name: "Saud Khan",
            link: 'https://www.linkedin.com/in/saudkhan0039/'
        },
        {
            img: imgsen2,
            title: "Full Stack Developer",
            name: "Shehzad Shah"
        },
        {
            img: imgsen3,
            title: "Founder",
            name: "Aamir Shehzad",
            link: 'https://pk.linkedin.com/in/aamir-shahzad-77ba95191?trk=public_profile_browsemap'
        },
        {
            img: imgsen4,
            title: "DevOps/Project Manager",
            name: "Rooh Ullah",
            link: 'https://pk.linkedin.com/in/rooh-ullah-bpk?trk=public_profile_browsemap'
        },

    ]


    const projectInfo = [
        { img: imgpro1, link: "https://www.travcont.com/", head: "Travcont", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro2, link: "https://risetech.pk/", head: "Ristech", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro3, link: "https://www.behance.net/gallery/92378157/Rasoya-App?tracking_source=project_owner_other_projects", head: "Rasoyia", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro4, link: "https://www.behance.net/gallery/92378157/Rasoya-App?tracking_source=project_owner_other_projects", link: "https://www.upwork.com/o/companies/~010359a829c900bed1/portfolio/project/1484076208918925312", head: "Mobile & Laptop Services", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro5, link: "https://www.upwork.com/o/companies/~010359a829c900bed1/portfolio/project/1484076208918925312", head: "Adda Bazar", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro6, link: "https://www.behance.net/gallery/92465019/Bubbles-Laundry-App?tracking_source=project_owner_other_projects", head: "Bubbles Laundry", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro7, link: "https://www.behance.net/gallery/89606661/Mosafir-App-for-Mobilink-Jazz?tracking_source=project_owner_other_projects", head: "Musafir App", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro8, link: "https://www.behance.net/gallery/92140709/Gratitude", head: "Gratitude-Selfcare", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro9, link: "https://traffikinfoo.netlify.app/", head: "Traffic Info", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro10, link: "https://pakfon.com/", head: "Pakfone", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro11, link: "https://khpalmart.com/", head: "Khpal Mart", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro12, link: "https://khpalmart.com/", head: "Khpal Mart", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro13, link: "http://www.patronworks.net/home", head: "Patronworks", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro14, link: "https://repaircms.com/de/", head: "Repaircms", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },
        { img: imgpro15, link: "https://dancing-vacherin-e90755.netlify.app/", head: "Saloon", para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..", btn: "Go To Website" },

    ];
    return (
        <>

            <section className="d-flex align-items-center aboutimg text-white">

                <div className="container-fluid ">
                    <div className="row" style={{ marginTop: "15%", marginBottom: "15%" }}>
                        <Fade left delay={500} duration={3000}>
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                        <h1 className='about'> <strong>About Us</strong></h1>

                                    </div>

                                    <div className="col-lg-7 col-md-12 col-sm-12 mb-5">
                                        <p className='we-about lead'>At TechCreator We specialize in products and services that span over several domains like Software Applications, Data analytics, Embedded Systems and Artificial Intelligence smart solutions with unified goal of realizing the dreams of a better tomorrow through technology.</p>
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
            {/* 
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
                                            <a class="cmp-btn" onClick={() => navigate("/services")}>View all services <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="cmp-btn__icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
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
            </section> */}

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
                                                <div className='senior-img'>
                                                    <img src={item.img} className="img-fluid" />
                                                </div>

                                                <Card.Body className='main-cards'>
                                                    <Card.Title className='sen-title'>{item.title}</Card.Title>
                                                    <Card.Text className='sen-name'>
                                                        {item.name}
                                                        <a href={item.link} target="_blank">
                                                            <GrLinkedinOption className='icon' />
                                                        </a>
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
                                                <div className='senior-img'>
                                                    <img src={item.img} className="img-fluid" />
                                                </div>

                                                <Card.Body className='main-cards'>
                                                    <Card.Title className='sen-title'>{item.title}</Card.Title>
                                                    <Card.Text className='sen-name'>
                                                        {item.name}
                                                        <a href={item.link} target="_blank">
                                                            <GrLinkedinOption className='icon' />
                                                        </a>
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
                            <div className="col-12 mx-auto container-my">
                                <div className='team'>
                                    <h2>Our Team</h2>
                                    <p>These are the people who get the job done</p>
                                </div>
                              
                                <Carousel activeIndex={index} onSelect={handleSelect} className="slider2">
                                    <Carousel.Item className='carouselitem2'>
                                        <img src={imgteam1} className="img-fluid item1" />
                                        <img src={imgteam2} className="img-fluid item2" />
                                        <img src={imgteam3} className="img-fluid item3" />
                                    </Carousel.Item>
                                    <Carousel.Item className='carouselitem2'>
                                        <img src={imgteam4} className="img-fluid item1" />
                                        <img src={imgteam5} className="img-fluid item2" />
                                        <img src={imgteam6} className="img-fluid item3" />
                                    </Carousel.Item>
                                    <Carousel.Item className='carouselitem2'>
                                        <img src={imgteam7} className="img-fluid item1" />
                                        <img src={imgteam8} className="img-fluid item2" />
                                        <img src={imgteam9} className="img-fluid item3" />
                                    </Carousel.Item>
                                    <Carousel.Item className='carouselitem2'>
                                        <img src={imgteam10} className="img-fluid item1" />
                                        <img src={imgteam11} className="img-fluid item2" />
                                        <img src={imgteam12} className="img-fluid item3" />
                                    </Carousel.Item>
                                    <Carousel.Item className='carouselitem2'>
                                        <img src={imgteam13} className="img-fluid item1" />
                                        <img src={imgteam14} className="img-fluid item2" />
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
                                <a className="cmp-btn2 mt-5" onClick={() => navigate("/services")}>View all our work <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="cmp-btn__icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                                <div className="row bg-sam mt-5">

                                    <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">


                                        <h1 className="petro">Repaircms</h1>
                                        <h6 className="mt-2 Plat">TechCreator created a platform  that led Repaircms to its  digital transformation process</h6>
                                        <p className="we lead">We developed an entire platform that enabled  Petromark to track and report their non destructive  testing projects in their clients oilfields.</p>

                                        {/* <div className="mt-3 mb-5">
        <a href="" className="howbtn">SEE HOW WE DID IT <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
    </div> */}

                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12 header-img">

                                        <div className="img13 mt-3">

                                            <img src={repairimg} className="img-fluid pt-5" alt="img13" />
                                        </div>
                                        {/* <div className="img14">
        <img src={img14} className="img-fluid" alt="img14" />

    </div> */}


                                    </div>

                                </div>

                            </div>
                        </Fade>
                    </div>


                    <div className="row text-white  rounded">
                        <Fade bottom delay={500} duration={2000}>
                            <div className="col-10 mx-auto mt-5">
                                <div className="row bg-sam mt-5">
                                    <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                        <h2 className="petro">PatronWorks</h2>
                                        <h6 className="mt-2 Plat">Point of sale system for retail businesses</h6>
                                        <p className="we lead">Patronworks is a complete E-Commerce solution for your Restaurants, it provides a feature rich Point of Sale ( POS ) and a Customer app where users can explore and buy interesting food items.</p>
                                        {/* <div className="mb-5">
    <a href="" className="howbtn">SEE HOW WE DID IT <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
</div> */}
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12 header-img">

                                        <div className="img13 mt-3">

                                            <img src={patronimg} className="img-fluid pt-5" alt="img13" />
                                        </div>
                                        {/* <div className="img14">
          <img src={img14} className="img-fluid" alt="img14" />

         </div> */}


                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>


                    <div className="row text-white  rounded">
                        <Fade bottom delay={500} duration={2000}>
                            <div className="col-10 mx-auto mt-5">
                                <div className="row bg-sam mt-5">
                                    <div className="col-lg-7 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                        <h2 className="petro">Sallon</h2>
                                        <h6 className="mt-2 Plat">A spot where all your beauty appointments meet</h6>
                                        <p className="we lead">Browse the top-rated options to find the services and
professionals that are perfect for you.</p>
                                        {/* <div className="mb-5">
    <a href="" className="howbtn">SEE HOW WE DID IT <MdKeyboardArrowRight style={{ marginBottom: "5px", width: "1.3em", height: "1.3em" }} /></a>
</div> */}
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12 header-img">

                                        <div className="img13 mt-3">

                                            <img src={saloonimg} className="img-fluid pt-5" alt="img13" />
                                        </div>
                                        {/* <div className="img14">
            <img src={img14} className="img-fluid" alt="img14" />

          </div> */}


                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>


            <div className='proimg'>
                <div className="col">
                    <h1 className="pro-mains text-center my-5">
                        Our Projects
                    </h1>
                </div>
                <div className="container d-md-flex">
                    <div className='row'>
                        {
                            projectInfo.map((projectInfo) => {
                                return (
                                    <div className="col-md-4 col-sm-12 cards container">
                                        <img src={projectInfo.img} className="" />
                                        <div className="cards-body">
                                            <h1 className="cards-title">{projectInfo.head}</h1>
                                            <p className="cards-info">{projectInfo.para}</p>
                                            <a className="cards-btn" target="_blank" href={projectInfo.link}>{projectInfo.btn}</a>
                                        </div>
                                    </div>
                                )
                            })
                        }




                    </div>
                </div>
            </div>
            <Career />
            <Footers />

        </>
    )
}
export default About;