import React, { useState } from "react";
import './career.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import piwe from '../../image/piwe.svg';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const Career = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                                        <h2>Want to join our arcadian community?</h2>
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
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="First Name"
                                                                autoFocus
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Last Name"
                                                                autoFocus
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Control
                                                                type="email"
                                                                placeholder="Email Address"
                                                                autoFocus
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Professional Profile URL"
                                                                autoFocus
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Phone"
                                                                autoFocus
                                                        
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Control
                                                                type="file"
                                                                autoFocus
                                                            />
                                                        </Form.Group>
                                                    </Form>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary">
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
    )
};

export default Career;
