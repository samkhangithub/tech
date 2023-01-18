import React from "react";
import './footer.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
const Footer = () => {
  return (
    <>


     
      <footer className="footer-39201 bg-primary text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h3>OUR SERVICES</h3>
            <ul className="list-unstyled nav-links">
              <li><a href="#">Architecture</a></li>
              <li><a href="#">Project Management</a></li>
              <li><a href="#">UX</a></li>
              <li><a href="#">UI</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">DevOps</a></li>
              <li><a href="#">QC</a></li>
              <li><a href="#">Branding</a></li>
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
         
          <div className="col-md-4 mb-4 mb-md-0 pt-4 contect-div">
            <p className="mb-4">Receive monthly updates through our Newsletter</p>
               <button className="btn-jion">Jion <MdKeyboardArrowRight className="md_icon" /></button>
			  <div className="col mb-4 mb-md-0 mt-3 d-md-flex pt-4 abs">
				<div className="col ">
				<h3>JOIN OUR TEAM</h3>
				<span>jobs@patagonian.com</span>
				</div>
			<div className="col ">
				<h3>CONTACT US</h3>
				<span>jobs@patagonian.com</span>
				</div>
			</div>
          </div>
			
        </div>

     
      </div>
    </footer>
        {/* <footer className="py-5">
          <div className="row p-5">
            <div className="col-md-3 col-sm-6   ComInfo">
              <h5>OUR SERVICES</h5>
              <ul className="nav flex-column">
                <li className="nav-item "><a href="#">Architecture</a></li>
                <li className="nav-item "><a href="#">Project Management</a></li>
                <li className="nav-item "><a href="#" >UX</a></li>
                <li className="nav-item "><a href="#" >UI</a></li>
                <li className="nav-item "><a href="#" >Development</a></li>
                <li className="nav-item "><a href="#" >DevOps</a></li>
                <li className="nav-item "><a href="#" >QC</a></li>
                <li className="nav-item "><a href="#" >Branding</a></li>

              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12  ComInfo">
              <h5>OUR COMPANY</h5>
              <ul className="nav flex-column">
                <li className="nav-item "><a href="#" >Our Services</a></li>
                <li className="nav-item "><a href="#" >Industries</a></li>
                <li className="nav-item "><a href="#" >Blog</a></li>
                <li className="nav-item "><a href="#">About us</a></li>
                <li className="nav-item "><a href="#">Careers</a></li>
                <li className="nav-item "><a href="#">Contact</a></li>

              </ul>
            </div>
            <div className="col-md-6 col-sm-12 header text-center d-md-flex">
             
                <div className="col-md-6 ">
                <p>Receive monthly updates through our Newsletter</p>
                  <button className="btn1 text-sm-center" type="button">Jion  <MdKeyboardArrowRight className="md_icon" /></button>
                </div>
                
                <div className="col-md-6 col-sm-12">
                    <div className="">
                    <ul>
                      <li>JOIN OUR TEAM</li>
                      <li>jobs@patagonian.com</li>
                    </ul>
                    
                    </div>
                   
                    <div className="">
                    <ul>
                      <li>CONTACT US</li>
                      <li>jobs@patagonian.com</li>
                    </ul>
                    
                    </div>
                  
                </div>
            </div>
           
          </div>
         
        </footer> */}
      


   





      <div className="container-fluid bg-white  text-dark py-5">
        <div className="row p-1">
          <div className="col-md-3 col-sm-12 col-xs-12 text-center text-white ">
            <div className="fot">
              <h4 className="mb-3">ARGENTINA</h4>
              <a href="">
                General Roca
              </a>
              <a href="">
                Mendoza
              </a>
              <a href="">
                Buenos Aires
              </a>
              <a href="h">
                Rosario
              </a>
              <a href="">
                Villa La Angostura
              </a>

            </div>
          </div>

          <div className="col-md-3 col-sm-12 col-xs-12 text-center text-white">
            <div className="fot">
              <h4 className="mb-3">COLOMBIA</h4>
              <a href="">
                Bogotá
              </a>
              <a href="">
                Cali
              </a>
              <a href="">
                Medellín
              </a>
              <a href="">
                About us
              </a>

            </div>
          </div>



          <div className="col-md-3 col-sm-12 col-xs-12  text-white">
            <div className="fot">
              <h4 className="mb-3">UNITED STATES</h4>
              <a href="">
                Miami, FL
              </a>
            </div>
          </div>


          <div className="col-md-3 col-sm-12 col-xs-12 text-center">
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
      </div>
      <div className="container col-md-11 col-sm-12  text-center d-md-flex justify-content-between  ">
            <h4 >Brains Pk</h4>
            <p>&copy; 2023 Company, Inc. All rights reserved.</p>
    
          </div>
    </>
  )
};

export default Footer;