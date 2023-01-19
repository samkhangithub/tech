import React from "react";
import './development.css';
import { MdKeyboardArrowRight } from "react-icons/md";
// import imgdev from '../image/developer.jpg';
import imgdev from '../image/banner .png';
import imgdescover from '../image/banner Pos.png';
// import imgtalent from '../image/talent.jpg';
import image1 from "../image/Conv.webp";
import card1 from '../image/softwear.png';
import card2 from '../image/services.png';
import card3 from '../image/master.png';
import card4 from '../image/interface.png';
import card5 from '../image/science.png';
import card6 from '../image/testing.png';
import card7 from '../image/qc.png';
import card8 from '../image/branding.png';
import card9 from '../image/managment.png';
import card10 from '../image/development.png';
import card11 from '../image/archit.png';
import card12 from '../image/devops.png';
import card13 from '../image/experience.png';
import Carrer from "../careers/Career";
import Footer from "../footers/Footer";

const cardInfo = [
  {img:card1, header:"Software Maintenance", para:"We make sure our client's software solutions work seamlessly. Our team takes care of the ongoing maintenance", btn:"VIEW SERVICE DETAILS"},
  {img:card2, header:"Data Services", para:"In this age data is the new oil. And as oil, data needs to be produced, refined and transported. Our experienced", btn:"VIEW SERVICE DETAILS"},
  {img:card3, header:"Scrum Master", para:"We will run the project using our own SCRUM method, which is a set of frameworks applied to incrementally", btn:"VIEW SERVICE DETAILS"},
  {img:card4, header:"User Interface", para:"Our team of designers aim to transform the UI into what is called “emotional design”: Get the users to develop positive associations with", btn:"VIEW SERVICE DETAILS"},
  {img:card5, header:"Data Science", para:"Patagonian’s Data driven team will gather their experience and expertise to build the data science solutions that", btn:"VIEW SERVICE DETAILS"},
  {img:card6, header:"Testing", para:"Our Quality Control team will evaluate and deploy functional and system testing methodologies to your", btn:"VIEW SERVICE DETAILS" },
  {img:card7, header:"QC/QA", para:"We provide a comprehensive stand-alone Quality Control services making sure your software is fully functional, secure and reliable when it hits the", btn:"VIEW SERVICE DETAILS"},
  {img:card8, header:"Branding", para:"Our brand-strategy team knows your brand is not just choosing the right colors and a logotype. It’s your company´s entire identity.", btn:"VIEW SERVICE DETAILS"},
  {img:card9, header:"Project Management", para:"Our Software Project Management team offers consulting services to improve your software development", btn:"VIEW SERVICE DETAILS" },
  {img:card10, header:"Development", para:"We craft unique technological experiences to support your business needs. Web or mobile applications,", btn:"VIEW SERVICE DETAILS"},
  {img:card11, header:"Architecture", para:"Selecting the right set of tools, and setting the framework to ensure technical success in our products", btn:"VIEW SERVICE DETAILS" },
  {img:card12, header:"DevOps", para:"One common issue of software products are deficient, slow and unreliable release cycles. Our DevOps & SRE team help organizations to", btn:"VIEW SERVICE DETAILS"},
  {img:card13, header:"User Experience", para:"We aim to create products that solve real problems, focusing on maximizing satisfaction with the least effort", btn:"VIEW SERVICE DETAILS"},
]
const Development = () => {
  return (
    <>
      <div class="container col-xxl-8 ">
        <div class="row flex-lg-row align-items-center g-5 my-5">
          <div class="col-10 col-sm-8 col-lg-6 dev-img">
            <img src={imgdev} class="d-block mx-lg-auto img-fluid " />
          </div>
          <div class="col-lg-6 ">
            {/* <img src={imgdevel} className="img-devel" /> */}
            <h1 class="display-5 fw-bold lh-1 mb-3 text-primary ">Software<br /> Development</h1>
            <p class="lead">With over 10+ years of experience in software product development, we provide scalable solutions to companies ranging from startups to Fortune 500. Combining top diverse talent and a long track record of success, we're ready to help our clients bring their ideas to life.</p>
            <div className="pb-5 see-btn">
              <a href="" className="dev-btn">SEE SERVICE <MdKeyboardArrowRight className="md_icon" /></a>
            </div>
            <div className="pt-3">
              <span>RELATED SERVICES  </span>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start pt-5">
              <button type="button" class="btn btn-outline-warning btn-my  px-4 me-md-2">DATA SERVICES</button>
              <button type="button" class="btn btn-outline-secondary  px-4">DATA SCIENCE</button>
              <button type="button" class="btn btn-outline-secondary  px-4">DEVELOPMENT</button>

            </div>
          </div>
        </div>
      </div>


      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6 dev-img1">
            <img src={imgdescover} class="d-block mx-lg-auto img-fluid " />
          </div>
          <div class="col-lg-6 soft-pro">

            <h1 class="display-5 fw-bold lh-1 mb-3 text-primary ">Software Product<br /> Discovery</h1>
            <p class="lead">We help our clients weed out unnecessary scope by understanding users' problems and opportunities before we set out to solve them. A good Product Discovery ensures a project is on the right track, reducing risks and uncertainty, and builds a solid foundation to grow any product.</p>
            <div className="pb-5 see-btn">
              <a href="" className="dev-btn">SEE SERVICE  <MdKeyboardArrowRight className="md_icon" /></a>
            </div>
            <div className="pt-3 ">
              <span>RELATED SERVICES</span>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start pt-5">
              <button type="button" class="btn btn-outline-secondary  px-4 me-md-2">USER INTERFACE</button>
              <button type="button" class="btn btn-outline-secondary  px-4">BRANDING</button>
              <button type="button" class="btn btn-outline-secondary  px-4">USER EXPERIENCE</button>

            </div>
          </div>
        </div>
      </div>



      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6 dev-img2"> 
            <img src={imgdev} class="d-block mx-lg-auto img-fluid " />
          </div>
          <div class="col-lg-6 pb-5">

            <h1 class="display-5 fw-bold lh-1 mb-3 text-primary ">Talent<br/> Augmentation</h1>
            <p class="lead">We have a top-class talent pool ready to jump on any new challenge. We scale our client's delivery capacity with the right skills, reducing the time to market for any new product or functionality.</p>
            <div className="pb-5 see-btn">
              <a href="" className="dev-btn">SEE SERVICE  <MdKeyboardArrowRight className="md_icon" /></a>
            </div>
          </div>
        </div>
      </div>

{/* Card Jsx */}
      <section className="main">
        <div className="container">
          <div className="head">
            <p>RELATED SERVICES</p>
          </div>
          <div className="row">
          {
            cardInfo.map((item)=>{
              return(
                <div className="col-md-4 col-sm-12 py-5">
              <div className="card p-4 bg-white text-dark card-dev">
                <img src={item.img} className="pt-3" />
                <h3 className="pt-4">{item.header}</h3>
                <p className=" pt-4">{item.para}</p>
                <a href="">{item.btn}  <MdKeyboardArrowRight className="md_icon" /></a>
              </div>

            </div>
              )
            })
          }
          </div>
        </div>
      </section>
<Carrer />
<Footer />
{/* Card Jsx */}
    </>
  )
};

export default Development;