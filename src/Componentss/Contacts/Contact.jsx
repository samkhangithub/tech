import React, { useState } from "react";
import './contact.css';
import contact from '../../image/contact.svg';
import { useFormik } from "formik";
import Footers from "../Footers/Footer";
import { signUpSchema } from "../../schemeas";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";


const initialValues = {
  name: "",
  email: "",
  message: "",
  phone: "",
  location: "",
};


const Contact = () => {

  const [message, setSentMessage] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (value,action) => {
      console.log(value);
      action.resetForm();
    }
  });
  console.log(errors);

  // const [done, setDone] = useState(false);
  // const form = useRef();

  // const defaultValue = {
  //   name: "",
  //   email: "",
  //   message: "",
  //   phone: "",
  //   location: "",
  // };

  // const validationSchema = yup.object().shape({
  //   name: yup.string().required("Please enter your name"),
  //   email: yup
  //     .string()
  //     .required("Please enter your valid email")
  //     .email("please enter valid email"),
  //   location: yup.string().required("please enter your location"),
  //   phone: yup.number().required(" please enter your phone number"),
  //   message: yup.string().required("At least 12 characters required"),
  // });

  // const handleSubmit = (values) => {
  //   console.log("values", values);
  // };

  // const sendEmail = (e) => {
  //   emailjs
  //     .sendForm(
  //       "service_ke6l7t9",
  //       "template_az7509f",
  //       form.current,
  //       "YVdl6iNn7uMxsZU4r"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setSentMessage(true);
  //         setTimeout(() => {
  //           setSentMessage(false);
  //         }, 2000);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   document.getElementById("name").value = "";
  //   document.getElementById("email").value = "";
  //   document.getElementById("phone").value = "";
  //   document.getElementById("location").value = "";
  //   document.getElementById("message").value = "";
  // };




  return (
    <>
      <section className="contact-main">
        <div className="container-fluid">
          <div className="row">
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
          </div>
        </div>


      </section>

      <div className="container-fluid">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex flex-column cont-img">
                <img src={contact} />
              </div>


            </div>
          </div>
        </div>
      </div>




      <div>
        <div
        // className="contact2"
        // style={{
        //   backgroundImage:
        //     "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg)",
        // }}
        // id="contact"
        >
          <div className="container">
            <div className="row contact-container">
              <div className="col-lg-12 main-card">
                <div className="card card-shadow border-0 mb-4">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="contact-box p-4">
                        <h4 className="title">Contact Us</h4>

                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-lg-6 form">
                              <div className="form-group mt-3">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Name"
                                  name="name"
                                  id="name"
                                  value={values.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? (
                                  <p>{errors.name}</p>): null}
                              </div>
                            </div>
                            <div className="col-lg-6 form">
                              <div className="form-group mt-3">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Email"
                                  id="email"
                                  name="email"
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? (
                                  <p>{errors.email}</p>): null}

                              </div>
                            </div>
                            <div className="col-lg-6 form">
                              <div className="form-group mt-3">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Phone"
                                  id="phone"
                                  name="phone"
                                  value={values.phone}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                               {errors.phone && touched.phone ? (
                                  <p>{errors.phone}</p>): null}

                              </div>
                            </div>
                            <div className="col-lg-6 form">
                              <div className="form-group mt-3">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Location"
                                  id="location"
                                  name="location"
                                  value={values.location}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {errors.location && touched.location ? (
                                  <p>{errors.location}</p>): null}

                              </div>
                            </div>
                            <div className="col-lg-12 form">
                              <div className="form-group mt-3">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Message"
                                  id="message"
                                  name="message"
                                  value={values.message}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                 {errors.message && touched.message ? (
                                  <p>{errors.message}</p>): null}

                              </div>
                            </div>
                            <div className="col-lg-12">
                              <button
                                type="submit"
                                className="btn-sub btn btn-danger-gradiant mt-4 mb-3 text-white border-0 py-2 px-3"
                              // disabled={isSubmitting}
                              >
                                <span>

                                  SUBMIT NOW <i className="ti-arrow-right" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>

                        {message && (
                          <p
                            className="contact-box-text"
                            style={{ color: "black" }}
                          >
                            Thank you for Contacting us. We will get in touch with
                            you as soon as possible.
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
                      <h5 className="text-white font-weight-light mb-3">
                        ADDRESS
                      </h5>
                      <p className="text-white op-7">
                        Sherdad Dheri Village Maneri Payan,
                        <br /> Swabi, Khyber Pakhtunkhwa
                      </p>
                      <h5 className="text-white font-weight-light mb-3 mt-4">
                        CALL US
                      </h5>
                      <p className="text-white op-7">
                        +923488123407
                        <br />
                        {/* 03485422181{" "} */}
                      </p>
                      <div className="col-md-3 col-sm-12 col-xs-12 text-center">
            <div className="">

              <div className="d-flex">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </>
  )
};

export default Contact;