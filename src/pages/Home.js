import img1 from "../image/img1.webp";

import './home.css';

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center homeimg text-white">

                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                    <h1> <strong className="brand-name font-weight-bold">Building great</strong></h1>
                                    <h2 className="my-3">Digital solutions</h2>
                                    <h3>Software Development Outsourcing</h3>
                                    <h4>We are a Latin American company, based in non-traditional tech hubs, with an ever growing talent pool that is dedicated to building world class software development outsourcing services.</h4>
                                    <div className="mt-3">
                                        <a href="" className="btn btn-success">Get Started</a>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12  header-img">
                                    <img src={img1} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="header" className="d-flex align-items-center mt-5  text-dark">

<div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12  header-img">
                    <img src={img1} className="img-fluid" alt="img1" />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                 
                  
                    <h4 className="mt-3">SOFTWARE OUTSOURCING SERVICES</h4>
                   <h5 className="mt-5">We are passionate developers of great technology products. Our holistic expertise in software solutions allows us to intervene in all stages of our client's projects, don't matter their size.</h5>
                    <div className="mt-3">
                        <a href="" className="btn  btn-outline-primary">Get Started</a>
                    </div>
                </div>

              
            </div>
        </div>
    </div>
</div>
</section>


        </>
    )
}
export default Home;
