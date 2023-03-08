import React, { useState } from "react";
import "./career.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import piwe from "../../image/piwe.svg";
import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
const Career = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profile_URL, setProfile_URL] = useState("");
  const [phone, setPhone] = useState("");
  const [fileCv, setFileCv] = useState("");
  console.log("newFilwe", fileCv);
  const submit_btn = async () => {
    const data = new FormData();
    data.append("file", fileCv);
    data.append("upload_preset", "thepictures");
    data.append("cloud_name", "dzvauvbk5");
    // data.append("api_key", "237755194494673");
    // data.append("api_secret", "z8Df55fpDuqmNtEL7WYo9uCxIUo");
    fetch("https://api.cloudinary.com/v1_1/dzvauvbk5/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then(async (data) => {
        // fileUrl = data;
        let fileUrl = data.url;
        console.log(data);
        console.log(firstName, lastName, email, profile_URL, phone);
        let result = await fetch(
          "https://techcreator-backend.herokuapp.com/api/v1/register",
          {
            method: "POST",
            body: JSON.stringify({
              firstName,
              lastName,
              email,
              profile_URL,
              phone,
              fileUrl,
            }),
            headers: {
              "content-type": "application/json",
            },
          }
        );
        result = await result.json();
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    // }).then((response) => {
    //   return console.log("response :", response);
    //   console.log(response);

    //   if (response.ok) {
    //     return response.json();
    //   }
    //   throw new Error(`Network response was not ok: ${response.status}`);
    // });
    // return console.log("file url :", fileUrl);
  };

  return (
    <>
      <div className="container-fluid bg-white py-5 ">
        <Fade bottom duration={2000}>
          <div className="container  main-div">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 pt-5 pt-lg-0 div-header  d-flex justify-content-center flex-column">
                    <p>CAREERS</p>
                    <h3>Want to join our arcadian community?</h3>
                    <div className="div-btn pt-5 col-sm-12 ">
                      {/* <button className="btns1 m-3">View our job openings <MdKeyboardArrowRight className="md_icon" /></button> */}
                      <button className="btns2 m-3" onClick={handleShow}>
                        Send resume <MdKeyboardArrowRight className="md_icon" />
                      </button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Want to be TechCreator?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Professional Profile URL"
                                value={profile_URL}
                                onChange={(e) => setProfile_URL(e.target.value)}
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="file"
                                // value={fileCv}
                                onChange={(e) => setFileCv(e.target.files[0])}
                                autoFocus
                              />
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={submit_btn}>
                            Submit
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end">
                    <img src={piwe} className="img-fluid1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Career;
