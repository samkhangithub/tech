import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import './career.css';
import piwe from '../image/piwe.svg';
const Carrer = () => {
    return (
        <>
            <div className="container-fluid bg-white py-5 ">
                <div className="container  main-div">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 pt-5 pt-lg-0 div-header  d-flex justify-content-center flex-column">

                                    <h6>CAREERS</h6>
                                    <p>Want to join our arcadian community?</p>
                                    <div className="pt-5 col-sm-12 div-btn">
                                        <button className="btns1 m-3">View our job openings <MdKeyboardArrowRight className="md_icon" /></button>
                                        <button className="btns2 m-3">Send resume <MdKeyboardArrowRight className="md_icon" /></button>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end">
                                    <img src={piwe} className="img-fluid1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Carrer;