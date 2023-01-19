import React from "react";
import Marquee from 'react-fast-marquee';
import './cards.css';
import image1 from "../image/Conv.webp";
import image2 from "../image/connect.webp";
import image3 from "../image/reheus.webp";
import image4 from "../image/quote.webp";
import imgs1 from '../image/raodmap.png';
import imgs2 from '../image/Patronwork logo.png';
import imgs3 from '../image/logo-white.png';
import imgs4 from '../image/image00292.png';
import imgs5 from '../image/BelgiumImmo.png';
import imgs6 from '../image/apca.png';
import imgs7 from '../image/twitter.png';



const boxInfo = [
    {img:image1,para:"The fact that they’ve been with us from the start and were patient, supportive, committed, and flexible is excellent.",link:"Steven Krubiner",span:"Founder & CEO"},
    {img:image2,para:"We have had a good collaboration and we can talk openly about topics that are working well and also the ones that aren't.",link:" July Jimenez",span:"CTO"},
    {img:image3,para:"We have had a good collaboration and we can talk openly about topics that are working well and also the ones that aren't.",link:" Sean Crawford",span:"Founder & CEO"}
]
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
    {
        boxInfo.map((item)=>{
            return(
                <div className="col-md-4 col-sm-12 py-5">
            <div className="box p-4 bg-white text-dark">
                <img src={item.img} className=" img-div"/>
                <p className="">{item.para}</p>
            <a href="#"> <img src={image4} className="img-quote" /><img src={image4} className="img-quote"/>  {item.link}</a>
            <span>{item.span}</span>
            </div>
        </div>
            )
        })
    }
 
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
  <Marquee gradient={false} speed={40} className="pt-5">
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