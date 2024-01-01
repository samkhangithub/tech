import React from "react";
import "./services.css";

import { MdKeyboardArrowRight } from "react-icons/md";
import imgdev from "../../image/banner .png";

import imgdescover from "../../image/banner Pos.png";
import card1 from "../../image/softwear.png";
import card2 from "../../image/services.png";
import card3 from "../../image/master.png";
import card4 from "../../image/interface.png";
import card5 from "../../image/science.png";
import card6 from "../../image/testing.png";
import card7 from "../../image/qc.png";
import card8 from "../../image/branding.png";
import card9 from "../../image/managment.png";
import card10 from "../../image/development.png";
import card11 from "../../image/archit.png";
import card12 from "../../image/devops.png";
import card13 from "../../image/experience.png";
import Footers from "../Footers/Footer";
import Career from "../Careers/Career";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const cardInfo = [
  {
    img: card10,
    href: '/odoo',
    header: "Odoo ERP Solutions",
    para: "At Moscar, we excel in delivering comprehensive Odoo ERP solutions tailored to meet the diverse needs of businesses across various industries. Our team of experienced professionals leverages the power of Odoo's modular approach to streamline operations, enhance productivity, and drive business growth.Learn More……..",
    btn: "VIEW SERVICE DETAILS",
  },
  {
    img: card11,
    href: '/eor',
    header: "Employer of Record (EOR)",
    para: " We specialize in EOR services, providing businesses with a seamless solution for their global workforce management needs. Our expertise in compliance, payroll, HR administration, and legal support enables companies to expand their global presence while mitigating risks and ensuring compliance with local regulations.Learn More……",
    btn: "VIEW SERVICE DETAILS",
  },
  {
    img: card4,
    href: '/gulf',
    header: "Moscar Call Center Outsourcing",
    para: "With a focus on customer satisfaction, we offer top-notch outsourcing call center services designed to optimize customer interactions. Our skilled agents are equipped with the latest technology and best practices to deliver exceptional customer support, enhancing your brand's reputation and fostering long-term relationships with your clientele.Learn More…….",
    btn: "VIEW SERVICE DETAILS",
  },
  {
    img: card13,
    href: '/global',
    header: "Global IT Outsourcing",
    para: "At Moscar, we understand the significance of global outsourcing for businesses seeking to optimize costs, access specialized talent, and expand their operational capabilities. Our global outsourcing services encompass a wide array of solutions, ensuring seamless integration and support across various functions, enabling businesses to thrive in a competitive global landscape.Learn More…….",
  },
  // {
  //   img: card3,
  //   header: "SEO & Content Writing",
  //   para: "Enhance your online visibility and engage your target audience through our expert SEO and content writing services tailored for TechCreator's unique identity.",
  // },
  // {
  //   img: card9,
  //   header: "Project Management",
  //   para: "Our experienced project managers work closely with clients to ensure that projects are completed on time, within budget, and to the highest standards.",
  //   btn: "VIEW SERVICE DETAILS",
  // },

  // {
  //   img: card6,
  //   header: "QA Testing",
  //   para: "Our team of experienced testers uses the latest testing methodologies and tools to provide thorough testing that identifies defects and ensures that your software performs flawlessly.",
  //   btn: "VIEW SERVICE DETAILS",
  // },
  // {
  //   img: card1,
  //   header: "Software Maintenance",
  //   para: "Our team of experts offers timely and cost-effective maintenance solutions to keep your software up-to-date and secure.",
  //   btn: "VIEW SERVICE DETAILS",
  // },

  // ,
  // {
  //   img: card12,
  //   header: "DevOps",
  //   para: "Our team of skilled engineers can help you integrate automation, testing, and deployment processes to ensure faster time-to-market and higher quality products.",
  //   btn: "VIEW SERVICE DETAILS",
  // },
];
const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Techcreator Software Company</title>
        <meta
          name="description"
          content="At TechCreator Software House, we offer custom software development services and solutions to help your business succeed."
        />
        <meta
          name="keywords"
          content="TechCreator, TechCreator web and mobile app development services,  web and mobile app development services, TechCreator Software
          Development, TechCreator Software Product Discovery, TechCreator Talent Augmentation, techcreator software house, apps development, software industry, swabi software house, software development services"
        />
        <link rel="canonical" href="/services" />
      </Helmet>


      <section className="text-white d-flex align-items-center aboutimg">
        <div className="container-fluid ">
          <div
            className="row"
            style={{ marginTop: "15%", marginBottom: "15%" }}
          >
            <Fade left delay={500} duration={3000}>
              <div className="mx-auto col-10">
                <div className="row">
                  <div className="pt-5 col-lg-5 col-md-12 col-sm-12 pt-lg-0 d-flex justify-content-center flex-column">
                    <h1 className="services">Our Services</h1>
                  </div>

                  <div className="mb-5 col-lg-7 col-md-12 col-sm-12">
                    <p className="we-services lead">
                      Moscar offers top-notch web and mobile app
                      development services to help businesses bring their ideas
                      to life. Our experienced team of developers creates custom
                      apps that are tailored to meet our clients' specific
                      needs. We use the latest technologies and industry best
                      practices to ensure that our apps are scalable, secure,
                      and easy to use. Whether you need a simple mobile app or a
                      complex web application, TechCreator has the expertise to
                      deliver high-quality solutions that exceed your
                      expectations. Contact us today to learn more about our web
                      and mobile app development services.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>



      {/* Card Jsx */}
      <section className="main">
        <div className="container">
          <Fade bottom duration={2000}>
            <div className="head">
              <h2 className="mb-3 display-5 fw-bold lh-1 text-primary ">
                Our Service
              </h2>
            </div>
          </Fade>
          <div className="row">
            {cardInfo.map((item) => {
              return (
                <Fade bottom duration={1000}>
                  <div className="py-5 col-md-6 col-lg-4">
                    <NavLink to={item.href}>
                      <div className="p-4 bg-white card-ser text-dark">
                        <img src={item.img} className="pt-3" />
                        <h3 className="pt-4">{item.header}</h3>
                        <span className="pt-4">{item.para}</span>
                      </div>
                    </NavLink>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
};

export default Services;
