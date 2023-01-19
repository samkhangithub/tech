import React from "react";
import Development from "../Development/Development";
import './servises.css';
const Servises = () => {
    return (
        <>
            <section className="servises-main">
            <div className="container ">
                    <div className="row">
                        <div className="col-10 mx-auto text-white">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12   d-flex justify-content-center flex-column">
                                    <h1 className="offset-md-6">Our<br/> services</h1>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12">
                                  <p>We are a Latin American company, based in non-traditional tech hubs, with an ever growing talent pool that is dedicated to building world class software development outsourcing services. Our service lines have been developed and tailored in accordance to what our clients need and the evolution of our still young and highly adaptive industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Development />
        </>
    )
};

export default Servises;