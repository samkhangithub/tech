import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import Fade from "react-reveal/Fade";
import logofot from "../../image/techlogo.png";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import moscar from '../../image/MoscarLogo.png'
const Footers = () => {
  return (
    <>
      <Fade bottom duration={2000}>
        <footer className="footer-39201 bg-primary text-white mt-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-4">
                <NavLink to="/">
                  <img src={moscar} className="logofot" />
                </NavLink>
                <p className="">
                  We have been providing quality services since 2001. We provide
                  our clients with complete end-to-end solutions. We offer
                  customized solutions according to their needs.
                </p>
              </div>
              <div className="col-md-3 mb-4 mb-md-0">
                <h4>Useful Links</h4>
                <ul className="list-unstyled nav-links ">
                  <NavLink to="/">
                    <li>
                      <a style={{ color: "white" }}>Home</a>
                    </li>
                  </NavLink>
                  <NavLink to="/about">
                    <li>
                      <a style={{ color: "white" }}>About</a>
                    </li>
                  </NavLink>
                  <NavLink to="/services">
                    <li>
                      <a style={{ color: "white" }}>Our Services</a>
                    </li>
                  </NavLink>
                  <NavLink to="/contact">
                    <li>
                      <a style={{ color: "white" }}>Contact</a>
                    </li>
                  </NavLink>
                  {/* <NavLink to="/blog">
                  <li>
                    <a style={{color:"white"}}>Blog</a>
                    </li>
                  </NavLink> */}
                </ul>
              </div>
              <div className="col-md-4 mb-md-0  contect-div">
                <div className="col mb-4 mb-md-0 abs">
                  <div className="col ">
                    <h4 className="mb-4">CONTACT</h4>
                    <div className="d-flex">
                      <div className="mt-1 loc">
                        <div
                          style={{
                            background: "#e56700",
                            padding: "3px 7px 3px 7px",
                            borderRadius: "50%",
                          }}
                        >
                          <ImLocation2
                            style={{ width: "15px", height: "15px" }}
                          />
                        </div>
                      </div>

                      <div style={{ marginLeft: "10px" }}>
                        <a
                          href="https://goo.gl/maps/9jGNEgeX2fomX5CMA"
                          target="_blank"
                          style={{ color: "white" }}
                        >
                          Egypt 3/10 Gate: B - Misr Development Buildings, El
                          Sefarat District, Nasr City, Cairo – Egypt.
                        </a>
                      </div>
                    </div>

                    <div className="d-flex">
                      <div
                        style={{
                          background: "#e56700",
                          padding: "3px 7px 3px 7px",
                          borderRadius: "50%",
                        }}
                      >
                        <MdEmail />
                      </div>
                      &nbsp; &nbsp;
                      <div className="pt-1">
                        <a
                          href="mailto:info@moscar-bs.com"
                          className="text-white"
                        >
                          info@moscar-bs.com
                        </a>
                      </div>
                    </div>

                    <div className="d-flex pt-2">
                      <div
                        style={{
                          background: "#e56700",
                          padding: "3px 7px 3px 7px",
                          borderRadius: "50%",
                        }}
                      >
                        <BsTelephoneFill />
                      </div>
                      &nbsp; &nbsp;
                      <div className="pt-1">
                        <a
                          href="tel:+2 011 017 20558"
                          style={{ color: "white" }}
                        >
                          +2 011 017 20558
                        </a>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <hr
                style={{ border: "1px solid", color: "#fff" }}
                className="mt-3"
              />
            </div>
            <div>
              <div className="col-md-11 col-sm-12  text-center d-md-flex justify-content-between">
                <p>&copy; 2023 Moscar. All rights reserved.</p>
                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/techcreatorfb/"
                    className="p-2"
                    target="_blank"
                  >
                    <FaFacebook className="conicon" />
                  </a>
                  <a
                    href="https://linkedin.com/company/techcreator"
                    className="p-2"
                    target="_blank"
                  >
                    <FaLinkedinIn className="conicon" />
                  </a>
                  <a
                    href="https://instagram.com/techcreatorco"
                    className="p-2"
                    target="_blank"
                  >
                    <FaInstagram className="conicon " />
                  </a>
                  <a
                    href="https://twitter.com/techcreatorco"
                    className="p-2"
                    target="_blank"
                  >
                    <GrTwitter className="conicon " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Fade>
    </>
  );
};

export default Footers;
