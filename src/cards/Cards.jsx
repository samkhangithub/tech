import React from "react";
import Marquee from 'react-fast-marquee';
import './cards.css';
import image1 from "../image/Conv.webp";
import image2 from "../image/connect.webp";
import image3 from "../image/reheus.webp";
import image4 from "../image/quote.webp";
import imgs1 from '../image/wizlinelogo.webp';
import imgs2 from '../image/fitbacklogo.webp';
import imgs3 from '../image/visionlogo.webp';
import imgs4 from '../image/wizlinelogo.webp';
import imgs5 from '../image/rofexlogo.webp';
import imgs6 from '../image/wizlinelogo.webp';
import imgs7 from '../image/rehbouslogo.webp';
import imgs8 from '../image/patagoninalogo.webp';
import imgs9 from '../image/pacteralogo.webp';
import imgs10 from '../image/opticlogo.webp';

const Cards = () =>{
    return(
        <>
        

        <div className="col-md-12 clint-div text-center my-5">
            <h5>CLIENT TESTIMONIALS</h5>
            <h3>What they say about us</h3>
        </div>
      <section className="card-img">
      <div className="container py-5">
    <div className="row">
        <div className="col-md-4 col-sm-12 py-5">
            <div className="box p-4 bg-white text-dark">
                <img src={image1} className=" img-div"/>
                <p className="">The fact that they’ve been with us from the start and were patient, supportive, committed, and flexible is excellent.</p>
            <a href="#"> <img src={image4} className="img-quote" /><img src={image4} className="img-quote"/>  Steven Krubiner</a>
            <span>Founder & CEO</span>
            </div>
        </div>

        <div className="col-md-4 col-sm-12 py-5">
            <div className="box p-4 bg-white text-dark">
                <img src={image2} className=" img-div"/>
                <p>The fact that they’ve been with us from the start and were patient, supportive, committed, and flexible is excellent.</p>
            <a href="#"> <img src={image4} className="img-quote" /><img src={image4} className="img-quote"/> July Jimenez</a>
            <span>CTO</span>
            </div>
        </div>

        <div className="col-md-4 col-sm-12 py-5">
            <div className="box p-4 bg-white text-dark">
                <img src={image3} className=" img-div"/>
                <p>The fact that they’ve been with us from the start and were patient, supportive, committed, and flexible is excellent.</p>
            <a href="#"> <img src={image4} className="img-quote" /><img src={image4} className="img-quote"/> Sean Crawford</a>
            <span>Founder & CEO</span>
            </div>
        </div>
    
 
{/* start count jsx */}
    <div className="row">
        <div className=" d-md-flex col-10 mx-auto">
            <div className="col-md-4 col-sm-12 count">
                <h1>+<span>100</span><span className="my-span">CLIENTS</span> </h1>
            </div>

            <div className="col-md-4 col-sm-12 count">
                <h1>+<span>15</span><span className="my-span">COUNTRIES</span> </h1>
            </div>

            <div className="col-md-4 col-sm-12 count">
                <h1>+<span>300</span><span className="my-span">PRODUCTS</span> </h1>
            </div>           
        </div>
    </div>
  <div className="row">
  <Marquee gradient={false} speed={20} className="pt-5">
    <div className="col img-wrapper">
        <img src={imgs1} />
    </div>
    <div className="col img-wrapper">
        <img src={imgs2} />
    </div>
    <div className="col img-wrapper">
        <img src={imgs3} />
    </div>
    <div className="col img-wrapper">
        <img src={imgs4} />
    </div>
    <div className="col img-wrapper">
        <img src={imgs5} />
    </div>
    <div className="col img-wrapper">
        <img src={imgs6} />
    </div>
    <div className="col img-wrapper">
        <img src={imgs7} />
    </div>
    <div className="col img-wrapper">
        <img src={imgs8} />
    </div>
    <div className="col img-wrapper">
        <img src={imgs9} />
    </div>
    <div className="col img-wrapper">
        <img src={imgs10} />
    </div>
    </Marquee>
  </div>
    </div>
    {/* count jsx end */}
</div>
</section>
        </>
    )
};

export default Cards;