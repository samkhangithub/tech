import React from "react";
import './project.css';
import { MdKeyboardArrowRight } from "react-icons/md";
const Project = () =>{
    return(
        <>
          <div className="container-fluid mains">
                    <div className="row">
                        <div className="col-10 mx-auto ">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 pt-5 pt-lg-0  proj-header ">
                                    <h3>Ready to tell us about <strong className="brand-name font-weight-bold">your project?</strong></h3>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12  d-flex justify-content-end">
                                   <button className="proj-btn">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
};

export default Project;