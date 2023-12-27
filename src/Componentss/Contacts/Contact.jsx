import React, { useState } from "react";
import "./contact.css";
import contact from "../../image/contact.svg";
import Footers from "../Footers/Footer";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import Fade from "react-reveal/Fade";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";
import { Formik, Form, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
const initialValues = {
  name: "",
  email: "",
  message: "",
  phone: "",
  location: "",
};

const Contact = () => {
  const [message, setSentMessage] = useState(false);
  const form = useRef();

  const defaultValue = {
    name: "",
    email: "",
    message: "",
    phone: "",
    location: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your valid email")
      .email("please enter valid email"),
    location: yup.string().required("please enter your location"),
    phone: yup.number().required(" please enter your phone number"),
    message: yup.string().required("At least 12 characters required"),
  });

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_ljl7dzo",
        "template_azji8xv",
        form.current,
        "V3m6c5qimGtsOA6yF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSentMessage(true);
          toast.success("Successful submitted");
          setTimeout(() => {
            setSentMessage(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("location").value = "";
    document.getElementById("message").value = "";
  };

  return (
    <>
      <Helmet>
        <title>Contact - Techcreator Software Company</title>
        <meta
          name="description"
          content="If you are interested in contacting us, please fill in the contact form and we will get back to you as soon as we can."
        />
        <meta
          name="keywords"
          content="techcreator, techcreator software house, techcreator software compant, sofwarehouse, apps development, software industry, swabi software house, techcreator contact us"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      {/* <section className="contact-main">
        <div className="container-fluid">
          <div className="row">
          <Fade left duration={2000}>
            <div className="col-10 mx-auto text-white">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12   d-flex justify-content-center flex-column">
                  <h1 className="offset-md-6">Contact us</h1>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p>We are a Latin American company, based in non-traditional tech hubs, with an ever growing talent pool that is dedicated to building world class software development outsourcing services. Our service lines have been developed and tailored in accordance to what our clients need and the evolution of our still young and highly adaptive industry.</p>
                </div>
              </div>
            </div>
            </Fade>
          </div>
        </div>


      </section> */}
      <ToastContainer />
      <section
        id="header"
        className="d-flex align-items-center contact-main text-white"
      >
        <div className="container-fluid ">
          <div
            className="row"
            style={{ marginTop: "15%", marginBottom: "15%" }}
          >
            <Fade left delay={500} duration={3000}>
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                    <h1 className="contact">Contact Us</h1>
                  </div>

                  <div className="col-lg-7 col-md-12 col-sm-12 mb-5 cont-head">
                    <h2>Want to Say Something?</h2>
                    <p className="we-about lead">
                      We are here to respond on your querries.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row">
              <Fade bottom duration={2000}>
                <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex flex-column cont-img">
                  <img src={contact} alt="Techcreator Software Company" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="container">
            <div className="row contact-container">
              <Fade bottom duration={2000}>
                <div className="col-lg-12 main-card">
                  <div className="card card-shadow border-0 mb-4">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="contact-box p-4">
                          <h2 className="title">Contact Us</h2>

                          <Formik
                            initialValues={defaultValue}
                            validationSchema={validationSchema}
                            onSubmit={sendEmail}
                          >
                            {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                            }) => (
                              <form onSubmit={handleSubmit} ref={form}>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        id="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      <p className="text-danger">
                                        <ErrorMessage name="name" />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Email"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      <p className="text-danger">
                                        <ErrorMessage name="email" />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Phone"
                                        id="phone"
                                        name="phone"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      <p className="text-danger">
                                        <ErrorMessage name="phone" />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Location"
                                        id="location"
                                        name="location"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      <p className="text-danger">
                                        <ErrorMessage name="location" />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group mt-3">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Message"
                                        id="message"
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      <p className="text-danger">
                                        <ErrorMessage name="message" />
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 pt-3">
                                    <button
                                      type="submit"
                                      className="contact-btn"
                                      disabled={isSubmitting}
                                    >
                                      SUBMIT NOW
                                    </button>
                                  </div>
                                </div>
                              </form>
                            )}
                          </Formik>

                          {message && (
                            <p
                              className="contact-box-text pt-3"
                              style={{ color: "black" }}
                            >
                              Thank you for Contacting us. We will get in touch
                              with you as soon as possible.
                            </p>
                          )}
                        </div>
                      </div>
                      <div
                        className="col-lg-4 bg-image"
                        style={{
                          backgroundImage:
                            "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)",
                        }}
                      >
                        <div className="detail-box p-4">
                          <h3
                            className="text-white font-weight-light mb-3"
                            style={{ fontSize: "20px" }}
                          >
                            ADDRESS
                          </h3>
                          <p className="text-white op-7">
                            Egypt 3/10 Gate: B - Misr Development Buildings, El
                            Sefarat District, Nasr City, Cairo – Egypt.
                          </p>
                          <p className="text-white op-7">
                            Saudi Arabia Al Murjanah Tower, Prince Sultan Road,
                            Jeddah - Saudi Arabia.
                          </p>
                          <h3
                            className="text-white font-weight-light mb-3 mt-4"
                            style={{ fontSize: "20px" }}
                          >
                            CALL US
                          </h3>
                          <p className="text-white op-7">
                            +2 011 017 20558 <br />
                          </p>
                          <p className="text-white op-7">
                            info@moscar-bs.com <br />
                          </p>
                          <div className="col-md-3 col-sm-12 col-xs-12 text-center">
                            <div className="">
                              <div className="d-flex">
                                <a
                                  href="https://www.facebook.com/brainspkpage"
                                  className="p-2"
                                >
                                  <FaFacebook className="conicon" />
                                </a>
                                <a
                                  href="https://www.linkedin.com/company/brainspk/"
                                  className="p-2"
                                >
                                  <FaLinkedinIn className="conicon " />
                                </a>
                                <a
                                  href="https://www.instagram.com/brainspk2021/"
                                  className="p-2"
                                >
                                  <FaInstagram className="conicon " />
                                </a>
                                <a
                                  href="https://www.instagram.com/brainspk2021/"
                                  className="p-2"
                                >
                                  <GrTwitter className="conicon " />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

