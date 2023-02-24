import React from "react";
import './footer.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import Fade from 'react-reveal/Fade';
const Footers = () => {
  return (
    <>


<Fade bottom duration={2000}>
      <footer className="footer-39201 bg-primary text-white">
        <div className="container py-5">
          <div className="row" >
            <div className="col-md-4 mb-4 mb-md-0 ">
              <h3>ABOUT</h3>
              <ul className="list-unstyled nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Projects</a></li>
                <li><a href="#">Our Clints</a></li>
                <li><a href="#">Contact Us</a></li>
                
              </ul>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h3>OUR COMPANY</h3>
              <ul className="list-unstyled nav-links">
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4 mb-md-0  contect-div">
              {/* <p className="mb-4">Receive monthly updates through our Newsletter</p>
              <button className="btn-jion">Jion <MdKeyboardArrowRight className="md_icon" /></button> */}
              <div className="col mb-4 mb-md-0 mt-3 pt-4 abs">
                <div className="col ">
                  <h3>JOIN OUR TEAM</h3>
                  <a href="mailto:saudkhanbpk@gmail.com" className="text-white">saudkhanbpk@gmail.com</a>
                </div>
    
              </div>
            </div>

          </div>


        </div>
      </footer>
      </Fade>
<Fade bottom duration={2000}>
      <div className="container bg-white  text-dark py-5 d-flex justify-content-center">
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="">

              <div className="social-icons">
                <a href="https://www.facebook.com/brainspkpage" className="p-2">
                  <FaFacebook className="conicon" />
                </a>
                <a href="https://www.linkedin.com/company/brainspk/" className="p-2">
                  <FaLinkedinIn className="conicon " />
                </a>
                <a href="https://www.instagram.com/brainspk2021/" className="p-2">
                  <FaInstagram className="conicon " />
                </a>
                <a href="https://www.instagram.com/brainspk2021/" className="p-2">
                  <GrTwitter className="conicon " />
                </a>

              </div>
            </div>
          </div>



       
      </div>
      <div className="container col-md-11 col-sm-12  text-center d-md-flex justify-content-between  ">
        <h4 >TechCreator</h4>
        <p>&copy; 2023 TechCreator. All rights reserved.</p>

      </div>
      </Fade>
    </>
  )
};

export default Footers;