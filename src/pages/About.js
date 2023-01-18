import './About.css';

const About = () => {
    return (
        <>
 <section id="header" className="d-flex align-items-center homeimg text-white">

<div className="container-fluid ">
    <div className="row" style={{marginTop:"15%",marginBottom:"15%"}}>
        <div className="col-10 mx-auto">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                    <h1 className='about'> <strong>About Us</strong></h1>
                   
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                    <p className='we'>We are a multinational tech company with offices in Argentina, Colombia and the USA. With our multidisciplinary teams we create products for companies and organizations from various industries around the world.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>        </>
    )
}
export default About;