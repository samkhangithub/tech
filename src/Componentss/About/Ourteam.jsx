import React from "react";
import './team.scss';
import Fade from "react-reveal/Fade";
import imgteam1 from "../../image/Imran.png";
import imgteam2 from "../../image/Hamid.png";
import imgteam3 from "../../image/sam.png";
import imgteam4 from "../../image/saad.png";
import imgteam5 from "../../image/Sameer.png";
import imgteam6 from "../../image/ahmad.png";
import imgteam7 from "../../image/romi.jpg";
import imgteam8 from "../../image/rehman.png";
import imgteam9 from "../../image/ihtizaz.png";
import imgteam10 from "../../image/luqman.png";
import imgteam11 from "../../image/ayaz.png";
import imgteam12 from "../../image/mustafa.png";
import imgteam13 from "../../image/ihtesham.png";
import imgteam14 from "../../image/Aqib.png";
import imgteam15 from "../../image/basit.png";
import imgteam16 from "../../image/hamza.png";
import imgteam17 from "../../image/inam.png";
import imgteam18 from "../../image/Sameer2.png";
import { GrLinkedinOption } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    img:imgteam1,
    linkdin:"https://www.linkedin.com/in/imran-khan-160446216/",
    name:"Imran Khan",
    title:"React Developer"
  },
  {
    img:imgteam2,
    linkdin:"https://www.linkedin.com/in/hamid-khan-b47b1b261/",
    name:"Hamid Khan",
    title:"React Developer"
  },
  {
    img:imgteam3,
    linkdin:"https://www.linkedin.com/in/sameer-khan-660966251/",
    name:"Sameer Khan",
    title:"React Developer"
  },
  {
    img:imgteam4,
    linkdin:"https://www.linkedin.com/in/saad-khan-42716a222/",
    name:"Saad Khan",
    title:"Anular Developer"
  },
  {
    img:imgteam5,
    linkdin:"https://www.linkedin.com/in/sameer-khan-2358a9248/",
    name:"Sameer Khan",
    title:"Angular Developer"
  },
  {
    img:imgteam6,
    linkdin:"https://www.linkedin.com/in/ahmad-ali-791190241/",
    name:"Ahmad Ali",
    title:"Angular Developer"
  },
  {
    img:imgteam7,
    linkdin:"https://www.linkedin.com/in/zeeshan-khan-aa1026243/",
    name:"Zeeshan Khan",
    title:"React Developer"
  },
  {
    img:imgteam8,
    linkdin:"https://www.linkedin.com/in/saudkhan0039/",
    twitter:"https://www.linkedin.com/in/saudkhan0039/",
    inta:"https://www.linkedin.com/in/saudkhan0039/",
    name:"Rehman Zeb Khan",
    title:"React Developer"
  },
  {
    img:imgteam9,
    linkdin:"https://www.linkedin.com/in/ihtizaz-ahmad-716385255/",
    name:"Ihtizaz Khan",
    title:"Angular Developer"
  },
  {
    img:imgteam10,
    linkdin:"https://www.linkedin.com/in/luqman-yousafzai-8a4744223",
    name:"Muhammad Luqman",
    title:"Angular Developer"
  },
  {
    img:imgteam11,
    linkdin:"https://www.linkedin.com/in/muhammad-ayaz-4823b3251/",
    name:"Ayaz Khan",
    title:"React Developer"
  },
  {
    img:imgteam12,
    linkdin:"https://www.linkedin.com/in/mustafa-zeb-72a180172/",
    name:"Mustafa Khan",
    title:"React Developer"
  },
  {
    img:imgteam13,
    linkdin:"https://www.linkedin.com/in/ihtesham-ul-haq-36aa10123/",
    name:"Ihtesham Khan",
    title:"Designer"
  },
  {
    img:imgteam14,
    linkdin:"https://www.linkedin.com/in/aqib-hassan-zeb-bb7b58211/",
    name:"Aqib Khan",
    title:"Angular Developer"
  },
  {
    img:imgteam15,
    linkdin:"https://www.linkedin.com/in/abdul-basit-seo-2232b6220/",
    name:"Abdul Basit",
    title:"React Developer"
  },
  {
    img:imgteam16,
    linkdin:"https://www.linkedin.com/in/hamza-farooq-009673227/",
    name:"Hamza Farooq",
    title:"React Developer"
  },
  {
    img:imgteam17,
    linkdin:"https://www.linkedin.com/in/saudkhan0039/",
    twitter:"https://www.linkedin.com/in/saudkhan0039/",
    inta:"https://www.linkedin.com/in/saudkhan0039/",
    name:"Inam Ulhaq",
    title:"React Developer"
  },
  {
    img:imgteam18,
    linkdin:"https://www.linkedin.com/in/sameer-ahmad-8915ab17a/",
    name:"Sameer Ahmad",
    title:"React Developer"
  },
]
const Ourteam = () =>{
  let  seetings = {
    dots:true,
    Infinite:true,
    speed:500,
    slidesToShow:4,
    slideToScroll:1,
    cssEase:"linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
}
    return(
        <div className="row rowteam mt-5" >
            <Fade bottom duration={2000}>
              <div className="col-12 mx-auto">
                <div className="team">
                  <h3>Our Team</h3>
                  <p>These are the people who get the job done</p>
                </div>
              
                    <Slider {...seetings} className="slick-non container pt-4">
                {team.map((item)=>{
                  return(
              <div className="cart-wrapeer ">
                <div className="cart">
                  <div className="cart-image">
                    <img src={item.img} className="img-fluid item1"/>
                  </div>
                  <ul className="social-icon">
                    <li><a href={item.linkdin} target="_blank"><i className="fa"><GrLinkedinOption/></i></a></li>
                  </ul>
                  <div className="details">
                    <h2>{item.name} <span className="job-title text-primary">{item.title}</span></h2>
                  </div>
                </div>
              </div>
                  )
                })}
                
                </Slider>
                </div>
            
            </Fade>
          </div>
    )
};

export default Ourteam;