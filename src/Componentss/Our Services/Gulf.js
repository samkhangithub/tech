import React from 'react'
import { Container } from 'react-bootstrap'
import gulf from '../../image/gulf.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ooredoo from '../../image/ooredoo.jpg'
import Marquee from "react-fast-marquee";
import Fade from "react-reveal/Fade";

const Gulf = () => {


    const settings = {
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };
    return (
        <Container>
            <div className='pt-40'>
                <section>

                    <div className='w-full'>
                        <h1 style={{ color: "#706F75", fontWeight: "600" }}>
                            Full Call Center Outsourcing


                        </h1>
                        <br />
                        <p style={{ color: "#A7344C", fontSize: 17, fontWeight: "500" }}>
                            External / In-House Contact Center Services of GCCS
                        </p>
                        <p style={{color:"#7B7B7C" }}>
                            An end to end call center outsourcing including manpower, location, offices and call management system.
                        </p>
                        <br/>
                    </div>
                    <div className='items-center gap-8 md:flex'>
                       
                        <div className='w-full'>

                            
                            <img src={gulf} className='rounded-md' />
                        </div>
                        <div>
                            <p className='text-[#7b7b7c] text-[15px] font-normal'>Outsourcing call center staffing services can cover the entire sales process and more. Dedicated staff can do everything from managing customer service requests to upselling products to potential customers.</p>
                        </div>
                    </div>

                    <div className='pt-20'>
                        <p className='text-[#7b7b7c] text-[15px] font-normal'>Employ a team of inbound call center professionals experienced in resolving customer issues with patience and respect. Customer service center agents can work with outbound call center agents to keep call center agents focused on business and generating leads.</p>
                    </div>
                </section>

                <section className='pt-6' >

                    <div className="row">
                        <Fade bottom duration={2000}>
                            <Marquee gradient={false} speed={40} className="pt-5 marque">
                                <div className="col img-wrapper">
                                    <img src={ooredoo} alt="TechCreator" />
                                </div>
                                <div className="col img-wrapper">
                                    <img src={ooredoo} alt="TechCreator" />
                                </div>
                                {/* <div className="col img-wrapper">
                    <img src={imgs4} alt="TechCreator" />
                  </div> */}
                                <div className="col img-wrapper">
                                    <img src={ooredoo} alt="TechCreator" />
                                </div>

                                <div className="col img-wrapper">
                                    <img src={ooredoo} alt="technology software company" />
                                </div>
                            </Marquee>
                        </Fade>
                    </div>
                    {/* <div  className="">
                        <Slider  {...settings}>

                            
                            <div className="relative w-[179px] h-auto">
                                <img
                                    src={ooredoo}
                                    alt="Original Image"
                                    className="w-full h-full transition-opacity duration-300 ease-in-out"
                                    />
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                                    <div className="h-full transition-opacity duration-300 ease-in-out opacity-0 bg-gradient-to-b from-transparent to-black hover:opacity-100"></div>
                                </div>
                            </div>
                            <div className="relative w-[179px] h-auto">
                                <img
                                    src={ooredoo}
                                    alt="Original Image"
                                    className="w-full h-full transition-opacity duration-300 ease-in-out"
                                    />
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                                    <div className="h-full transition-opacity duration-300 ease-in-out opacity-0 bg-gradient-to-b from-transparent to-black hover:opacity-100"></div>
                                </div>
                            </div>
                            <div className="relative w-[179px] h-auto">
                                <img
                                    src={ooredoo}
                                    alt="Original Image"
                                    className="w-full h-full transition-opacity duration-300 ease-in-out"
                                    />
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                                    <div className="h-full transition-opacity duration-300 ease-in-out opacity-0 bg-gradient-to-b from-transparent to-black hover:opacity-100"></div>
                                </div>
                            </div>
                            <div className="relative w-[179px] h-auto">
                                <img
                                    src={ooredoo}
                                    alt="Original Image"
                                    className="w-full h-full transition-opacity duration-300 ease-in-out"
                                />
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                                    <div className="h-full transition-opacity duration-300 ease-in-out opacity-0 bg-gradient-to-b from-transparent to-black hover:opacity-100"></div>
                                </div>
                            </div>
                            <div className="relative w-[179px] h-auto">
                                <img
                                    src={ooredoo}
                                    alt="Original Image"
                                    className="w-full h-full transition-opacity duration-300 ease-in-out"
                                />
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                                    <div className="h-full transition-opacity duration-300 ease-in-out opacity-0 bg-gradient-to-b from-transparent to-black hover:opacity-100"></div>
                                </div>
                            </div>
                            <div className="relative w-[179px] h-auto">
                                <img
                                    src={ooredoo}
                                    alt="Original Image"
                                    className="w-full h-full transition-opacity duration-300 ease-in-out"
                                    />
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                                    <div className="h-full transition-opacity duration-300 ease-in-out opacity-0 bg-gradient-to-b from-transparent to-black hover:opacity-100"></div>
                                </div>
                            </div>
                            <div className="relative w-[179px] h-auto">
                                <img
                                    src={ooredoo}
                                    alt="Original Image"
                                    className="w-full h-full transition-opacity duration-300 ease-in-out"
                                    />
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                                    <div className="h-full transition-opacity duration-300 ease-in-out opacity-0 bg-gradient-to-b from-transparent to-black hover:opacity-100"></div>
                                </div>
                            </div>

                                  
                        </Slider>
                    </div> */}
                </section>
            </div>
        </Container>

    )
}

export default Gulf
