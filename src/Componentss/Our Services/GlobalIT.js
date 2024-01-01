import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import egypet from '../../image/egypet.jpg'
import offer from '../../image/offer.png'
import talent from '../../image/talent.jpg'
import interview from '../../image/interview.jpg'
import technical from '../../image/technical.jpg'
import contract from '../../image/contract.jpg'
import onboarding from '../../image/onboarding.jpg'
import evalutaion from '../../image/evaluation.jpg'
import process from '../../image/process.png'
import skill from '../../image/skill.png'
import empowerTalent from '../../image/empowerTalent.png'
const GlobalIT = () => {
    const [activeSection, setActiveSection] = useState('TALENT_SECTION');
    const [activeTab, setActiveTab] = useState('bussines');

    const handleButtonClick = (section) => {
        setActiveSection(section);
    };
    return (
        <>
            <div className='bg-[#3883BB] md:h-[250px] h-full'>
                <Container>
                    <div className='pt-40'>
                        <div className=''>
                            <div className='items-center justify-center sm:justify-between sm:flex'>
                                <div>
                                    <h3 className='text-3xl font-medium text-white'>IT Outsourcing</h3>
                                </div>
                                <div className='sm:w-[413px] sm:justify-between justify-center w-full sm:flex items-center gap-3 '>
                                    <button
                                        onClick={() => setActiveTab('bussines')}
                                        className='sm:w-[215px] w-full rounded-sm sm:h-[44px] h-full border border-white text-white'>
                                        Empowering Bussiness
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('talent')}
                                        className='sm:w-[215px] w-full rounded-md sm:h-[44px] h-full border border-white text-white'>
                                        Empowering Talents
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {activeTab === 'bussines' && (
                <>
                    <section>
                        <Container>
                            <div className='gap-2 pt-10 md:flex'>
                                <div className='md:w-[607px] w-full'>
                                    <div className="flex px-4 items-center border-l-4 border-[#005798]">
                                        <h3 className='text-[#005798] text-3xl font-medium'>Empowering Businesses</h3>
                                    </div>
                                    <div className='md:w-[591px] w-full px-4'>
                                        <div>
                                            <h3 className='text-[#141620] text-2xl font-medium'>The Reroute to Success</h3>
                                        </div>
                                        <div>
                                            <p className='text-[#141620] text-[19px] font-normal'>We understand that every business is unique, with different objectives, goals, and requirements. egabi provides impeccable customized outsourcing services based on operational differences and unique business needs, adopting impact sourcing practices in our business operation. With over 20 years of experience in delivering huge IT projects, egabi has become a trusted partner for many organizations by supporting them with the highest levels of communication and transparency. We are an extension of our client’s teams, accessing a huge pool of experienced candidates across various technologies and solutions.   Focus on your core projects and let us kickstart your digital transformation journey, saving you the time, effort, money, and hassle of finding your technical resources.</p>
                                        </div>

                                        <ul className='pt-4 list-disc' style={{ paddingLeft: '1rem' }}>
                                            <li className='text-3xl font-medium list-none'>Engagement Types:</li>
                                            <li className='list-none pt-3 relative text-[#000000] text-xl font-normal '>
                                                <p className='relative before:text-3xl before:-top-1 before:content-["\2022"] before:absolute before:-left-6 before:text-[#000000]'>Dedicated or shared team/resource</p>
                                            </li>
                                            <li className='list-none  relative text-[#000000] text-xl font-normal '>
                                                <p className='relative before:text-3xl before:-top-1 before:content-["\2022"] before:absolute before:-left-6 before:text-[#000000]'>Onsite, offshore or hybrid</p>
                                            </li>
                                            <li className='list-none relative text-[#000000] text-xl font-normal '>
                                                <p className='relative before:text-3xl before:-top-1 before:content-["\2022"] before:absolute before:-left-6 before:text-[#000000]'>Time and material billing or fixed fees</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='md:w-[456px] w-full bg-gray-50 shadow-sm rounded-md'>
                                    <div className='m-8'>
                                        <div className=''>
                                            <div className='md:w-[415.2px] px-2 justify-end flex items-center h-[60.8px] rounded-md border-r-[30px] border-r-[#005798] w-full bg-gradient-to-r from-[#f9fafb]/0 to-[#fff]'>
                                                Software Development
                                            </div>
                                        </div>
                                        <div className='pt-2'>
                                            <div className='md:w-[415.2px] px-2 flex items-center h-[60.8px] rounded-md border-l-[30px] border-l-[#005798] w-full bg-gradient-to-r from-[#fff] to-[#f9fafb]/0'>
                                                Big Data and Analytics
                                            </div>
                                        </div>
                                        <div className='pt-2'>
                                            <div className='md:w-[415.2px] px-2 justify-end flex items-center h-[60.8px] rounded-md border-r-[30px] border-r-[#005798] w-full bg-gradient-to-r from-[#f9fafb]/0 to-[#fff]'>
                                                Applications Implementation
                                            </div>
                                        </div>
                                        <div className='pt-2'>
                                            <div className='md:w-[415.2px] px-2 flex items-center h-[60.8px] rounded-md border-l-[30px] border-l-[#005798] w-full bg-gradient-to-r from-[#fff] to-[#f9fafb]/0'>
                                                Artificial Intelligent \Machine learning
                                            </div>
                                        </div>
                                        <div className='pt-2'>
                                            <div className='md:w-[415.2px] px-2 justify-end flex items-center h-[60.8px] rounded-md border-r-[30px] border-r-[#005798] w-full bg-gradient-to-r from-[#f9fafb]/0 to-[#fff]'>
                                                Cloud Services
                                            </div>
                                        </div>
                                        <div className='pt-2'>
                                            <div className='md:w-[415.2px] px-2 flex items-center h-[60.8px] rounded-md border-l-[30px] border-l-[#005798] w-full bg-gradient-to-r from-[#fff] to-[#f9fafb]/0'>
                                                Integration and BPM
                                            </div>
                                        </div>
                                        <div className='pt-2'>
                                            <div className='md:w-[415.2px] px-2 justify-end flex items-center h-[60.8px] rounded-md border-r-[30px] border-r-[#005798] w-full bg-gradient-to-r from-[#f9fafb]/0 to-[#fff]'>
                                                Mobility Solutions and platform
                                            </div>
                                        </div>
                                        <div className='pt-2'>
                                            <div className='md:w-[415.2px] px-2 flex items-center h-[60.8px] rounded-md border-l-[30px] border-l-[#005798] w-full bg-gradient-to-r from-[#fff] to-[#f9fafb]/0'>
                                                Cyber Security
                                            </div>
                                        </div>
                                        <div className='pt-2'>
                                            <div className='md:w-[415.2px] px-2 justify-end flex items-center h-[60.8px] rounded-md border-r-[30px] border-r-[#005798] w-full bg-gradient-to-r from-[#f9fafb]/0 to-[#fff]'>
                                                GIS
                                            </div>
                                        </div>
                                        <div className='pt-2'>
                                            <div className='md:w-[415.2px] px-2 flex items-center h-[60.8px] rounded-md border-l-[30px] border-l-[#005798] w-full bg-gradient-to-r from-[#fff] to-[#f9fafb]/0'>
                                                Software Infrastructure services
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>

                    <section>
                        <div className=''>
                            <div style={{
                                backgroundImage: `url(${egypet})`,
                                backgroundSize: 'center',
                                objectFit: 'contain'
                            }}
                                className='w-full h-full'
                            >
                                <div className='px-2 py-2 md:py-32 md:px-36'>
                                    <div>
                                        <h3 className='text-white text-[46px] font-medium'>Why <br />Egypt for<br /> IT Outsourcing?</h3>
                                    </div>
                                    <div className='gap-4 pt-5 md:flex'>
                                        <div className='border-l-4 border-r-white'>
                                            <p className='px-3 text-2xl text-white'>Abundant Talent and <br />Competitive Cost</p>
                                        </div>
                                        <div className='border-l-4 border-r-white'>
                                            <p className='px-3 text-2xl text-white'>Pivotal Location and <br />Supportive Government</p>
                                        </div>
                                        <div className='border-l-4 border-r-white'>
                                            <p className='px-3 text-2xl text-white'>Diversified Cultures<br /> Compatibility</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section className='pt-20'>
                        <Container>
                            <div className="flex px-4 items-center border-l-4 border-[#005798]">
                                <h3 className='text-[#005798] text-3xl font-medium'>Why egabi for IT Outsourcing?</h3>
                            </div>
                            <div className='pt-4'>
                                <p className='text-[#141620] text-lg font-normal'>Outsourcing your IT team can be a valuable investment for businesses. However, you should rely on a trusted outsourcing company to access the resources you need to succeed in this digital world. egabi is your productivity partner, striving for excellence in all tasks while you focus on the bigger picture.</p>
                            </div>

                            <div className='md:flex w-full md:border-b border-0  md:border-b-[#707070]'>
                                <div className='md:w-[400px] w-full h-full md:h-[269px]'>
                                    <div className='md:w-[322px] w-full'>
                                        <h3 className='text-[#141620] text-[46px] font-medium'>1</h3>
                                        <h4 className='text-[#141620] pt-2 text-2xl font-medium'>Affordable rates</h4>
                                        <p className='text-[#141620] text-xl font-normal'>Enjoy the best quality-to-cost ratio with the highest industry standards</p>
                                    </div>
                                </div>
                                <div className='md:w-[400px] border-l border-l-[#707070] md:px-16 px-2 w-full h-full md:h-[269px]'>
                                    <div className='md:w-[322px] w-full'>
                                        <h3 className='text-[#141620] text-[46px] font-medium'>2</h3>
                                        <h4 className='text-[#141620] pt-2 text-2xl font-medium'>Qualified Talents</h4>
                                        <p className='text-[#141620] text-xl font-normal'>Access a pool of talents with a wide range of skills and experiences</p>
                                    </div>
                                </div>
                                <div className='md:w-[400px] border-l border-l-[#707070] md:px-16 px-2 w-full h-full md:h-[269px]'>
                                    <div className='md:w-[322px] w-full'>
                                        <h3 className='text-[#141620] text-[46px] font-medium'>3</h3>
                                        <h4 className='text-[#141620] pt-2 text-2xl font-medium'>High Scalability</h4>
                                        <p className='text-[#141620] text-xl font-normal'>Scale up or down your IT team without the long-term commitment</p>
                                    </div>
                                </div>
                            </div>

                            <div className='justify-center w-full md:flex'>
                                <div className='md:w-[400px] w-full h-full md:h-[269px]'>
                                    <div className='md:w-[322px] w-full pt-4'>
                                        <h3 className='text-[#141620] text-[46px] font-medium'>4</h3>
                                        <h4 className='text-[#141620] pt-2 text-2xl font-medium'>Risk Transferring</h4>
                                        <p className='text-[#141620] text-xl font-normal'>Save yourself the hassle of HR issues and focus on delivery</p>
                                    </div>
                                </div>
                                <div className='md:w-[400px] border-l border-l-[#707070] md:px-16 px-2 w-full h-full md:h-[269px]'>
                                    <div className='md:w-[322px] w-full pt-4'>
                                        <h3 className='text-[#141620] text-[46px] font-medium'>5</h3>
                                        <h4 className='text-[#141620] pt-2 text-2xl font-medium'>Modern technologies</h4>
                                        <p className='text-[#141620] text-xl font-normal'>Access a pool of new technology stacks based on your project needs</p>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>

                    <section>
                        <div style={{
                            backgroundImage: `url(${offer})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right',
                            objectFit: 'contain'
                        }}
                            className='w-full md:h-[556px] h-full'>
                            <Container>
                                <div className='items-center justify-between py-12 md:flex'>
                                    <div className="flex items-center px-4 border-l-4 border-l-white">
                                        <h3 className='text-3xl font-medium text-white'>What we offer</h3>
                                    </div>
                                    <div className='md:w-[400px] w-full'>
                                        <div className='justify-center h-[78px] gap-6 flex flex-wrap'>
                                            <button
                                                className={`text-[#A3A3A3] text-xs font-normal hover:text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-[#005798] focus:border-b-2 focus:border-[#005798] ${activeSection === 'TALENT_SECTION' && ''
                                                    }`}
                                                onClick={() => handleButtonClick('TALENT_SECTION')}
                                            >
                                                <span data-content='TALENT SECTION'>TALENT SECTION</span>
                                            </button>
                                            <button
                                                className={`text-[#A3A3A3] text-xs font-normal hover:text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-[#005798] focus:border-b-2 focus:border-[#005798] ${activeSection === 'TALENT_SECTION' && ''
                                                    }`}
                                                onClick={() => handleButtonClick('HR_INTERVIEWING')}
                                            >
                                                <span data-content='HR INTERVIEWING'>HR INTERVIEWING</span>
                                            </button>
                                            <button
                                                className={`text-[#A3A3A3] text-xs font-normal hover:text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-[#005798] focus:border-b-2 focus:border-[#005798] ${activeSection === 'TALENT_SECTION' && ''
                                                    }`}
                                                onClick={() => handleButtonClick('TECHNICAL_INTERVIEWING')}
                                            >
                                                <span data-content='HR INTERVIEWING'>TECHNICAL INTERVIEWING</span>
                                            </button>
                                            <button
                                                className={`text-[#A3A3A3] text-xs font-normal hover:text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-[#005798] focus:border-b-2 focus:border-[#005798] ${activeSection === 'TALENT_SECTION' && ''
                                                    }`}
                                                onClick={() => handleButtonClick('CONTRACT_NEGOTIATION')}
                                            >
                                                <span data-content='HR INTERVIEWING'>CONTRACT NEGOTIATION</span>
                                            </button>
                                            <button
                                                className={`text-[#A3A3A3] text-xs font-normal hover:text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-[#005798] focus:border-b-2 focus:border-[#005798] ${activeSection === 'TALENT_SECTION' && ''
                                                    }`}
                                                onClick={() => handleButtonClick('ONBOARDING')}
                                            >
                                                <span data-content='HR INTERVIEWING'>ONBOARDING</span>
                                            </button>
                                            <button
                                                className={`text-[#A3A3A3] text-xs font-normal hover:text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-[#005798] focus:border-b-2 focus:border-[#005798] ${activeSection === 'TALENT_SECTION' && ''
                                                    }`}
                                                onClick={() => handleButtonClick('EVALUATION')}
                                            >
                                                <span data-content='HR INTERVIEWING'>EVALUATION</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {activeSection === 'TALENT_SECTION' && (
                                    <div className='items-center justify-center gap-20 sm:justify-center md:flex'>
                                        <div className='md:w-[400px] w-full '>
                                            <img src={talent} className='rounded-2xl' />
                                        </div>
                                        <div className='text-white md:w-[456px] w-full'>
                                            <h4 className='text-xl font-medium'>Talent Selection</h4>
                                            <p className='text-sm'>As employees are the company’s most valuable asset, egabi handles talent recruitment and selection that meet the required technical and behavioral competencies.</p>
                                        </div>
                                    </div>
                                )}

                                {activeSection === 'HR_INTERVIEWING' && (
                                    <div className='items-center justify-center gap-20 md:flex'>
                                        <div className='md:w-[400px] w-full '>
                                            <img src={interview} className='rounded-2xl' />
                                        </div>
                                        <div className='text-white md:w-[456px] w-full'>
                                            <h4 className='text-xl font-medium'>HR Interviewing</h4>
                                            <p className='text-sm'>egabi handles the HR interview, delving deeper into the skills of the prospective employees and getting a sense of their passion, attitudes, cultural fit, and communication skills.</p>
                                        </div>
                                    </div>
                                )}
                                {activeSection === 'TECHNICAL_INTERVIEWING' && (
                                    <div className='items-center justify-center gap-20 md:flex'>
                                        <div className='md:w-[400px] w-full '>
                                            <img src={technical} className='rounded-2xl' />
                                        </div>
                                        <div className='text-white md:w-[456px] w-full'>
                                            <h4 className='text-xl font-medium'>Technical Interviewing</h4>
                                            <p className='text-sm'>egabi handles the technical interview, assessing the technical ability of each candidate, as well as their breadth of knowledge, problem-solving skills, and performance under pressure..</p>
                                        </div>
                                    </div>
                                )}
                                {activeSection === 'CONTRACT_NEGOTIATION' && (
                                    <div className='items-center justify-center gap-20 md:flex'>
                                        <div className='md:w-[400px] w-full '>
                                            <img src={contract} className='rounded-2xl' />
                                        </div>
                                        <div className='text-white md:w-[456px] w-full'>
                                            <h4 className='text-xl font-medium'>Contract Negotiation</h4>
                                            <p className='text-sm'>egabi handles the HR interview, delving deeper into the skills of the prospective employees and getting a sense of their passion, attitudes, cultural fit, and communication skills.</p>
                                        </div>
                                    </div>
                                )}
                                {activeSection === 'ONBOARDING' && (
                                    <div className='items-center justify-center gap-20 md:flex'>
                                        <div className='md:w-[400px] w-full '>
                                            <img src={onboarding} className='rounded-2xl' />
                                        </div>
                                        <div className='text-white md:w-[456px] w-full'>
                                            <h4 className='text-xl font-medium'>Onboarding</h4>
                                            <p className='text-sm'>egabi handles the HR interview, delving deeper into the skills of the prospective employees and getting a sense of their passion, attitudes, cultural fit, and communication skills.</p>
                                        </div>
                                    </div>
                                )}
                                {activeSection === 'EVALUATION' && (
                                    <div className='items-center justify-center gap-20 md:flex'>
                                        <div className='md:w-[400px] w-full '>
                                            <img src={evalutaion} className='rounded-2xl' />
                                        </div>
                                        <div className='text-white md:w-[456px] w-full'>
                                            <h4 className='text-xl font-medium'>Evaluation</h4>
                                            <p className='text-sm'>egabi handles the HR interview, delving deeper into the skills of the prospective employees and getting a sense of their passion, attitudes, cultural fit, and communication skills.</p>
                                        </div>
                                    </div>
                                )}
                            </Container>
                        </div>
                    </section>

                    <section>
                        <Container>
                            <div>
                                <div className="pt-14">
                                    <h3 className='text-[#005798] text-3xl font-medium'>Our Staffing Process</h3>
                                </div>
                                <div>
                                    <img src={process} />
                                </div>
                            </div>
                        </Container>
                    </section>

                    <section>
                        <div style={{
                            backgroundImage: `url(${skill})`,
                            objectFit: "cover",
                            backgroundPosition: 'center',
                        }}
                            className='w-full md:h-[300px] h-full after:bg-black after:opacity-50 after:inset-0 after:z-30'
                        >
                            <div className='flex flex-col justify-center w-full h-full px-3 py-3 md:px-44'>
                                <div className="flex items-center px-4 border-l-4 border-l-white">
                                    <h3 className='text-3xl font-medium text-white'>Our Technical Skills</h3>
                                </div>
                                <div className='pt-6'>
                                    <h4 className='text-2xl text-white'>Unmatched Technical Skills and Valuable Assets for Every Project Need</h4>
                                    <p className='text-sm text-white'>With a wide experience in the IT sector, egabi has a notable record in delivering IT projects using the latest tools and technologies across various industries. </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='pt-6'>
                        <div style={{
                            backgroundImage: `url(${offer})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right',
                            objectFit: 'contain'
                        }}
                            className='w-full md:h-[300px] h-full'
                        >
                            <div className='pt-16 text-center'>
                                <div>
                                    <h3 className='text-[2rem] font-bold text-white'>Maximize Your Business Potential with egabi IT Outsourcing</h3>
                                </div>
                                <div className='pt-6'>
                                    <p className='text-base font-normal text-center text-white'>Get the best talents for your business and leverage the benefits of technology without the burden of hiring an in-house team.</p>
                                </div>
                                <div className='pt-3'>
                                    <button className='text-white border border-white rounded-2xl py-2 px-6 text-[1rem]'>
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
            {activeTab === 'talent' && (
                <>
                    <section>
                        <Container>
                            <div className='gap-8 pt-16 md:flex'>
                                <div className='md:w-[564px] md:h-[274px] h-full w-full'>
                                    <img src={empowerTalent} />
                                </div>
                                <div className='md:w-[564px] w-full'>
                                    <div className="flex px-4 items-center border-l-4 border-[#005798]">
                                        <h3 className='text-[#005798] text-3xl font-medium'>Empowering Talents
                                        </h3>
                                    </div>
                                    <div className='md:w-[591px] w-full px-4 pt-4'>
                                        <div>
                                            <h3 className='text-[#141620] text-3xl font-medium'>Linking our Top-Notch Talent with Businesses All Over the Globe</h3>
                                        </div>
                                        <div>
                                            <p className='text-[#141620] text-base font-normal'>IT Outsourcing is not only a good way to expand your existing skills but also a remarkable opportunity to work on national and international projects with different scales, scopes, requirements, and engagement models (onshore/nearshore/offshore).</p>
                                        </div>
                                        <div>
                                            <p className='text-[#141620] text-base font-normal'>In alignment with our impact sourcing practices,  egabi provides ITO opportunities to increase exposure to multiple business practices and experience the diversity of cultures that crosses borders, which contributes to your professional growth and career development. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>

                    <section className='pt-20'>
                        <Container>
                            <div className="flex px-4 items-center border-l-4 border-[#005798]">
                                <h3 className='text-[#005798] text-3xl font-medium'>Why egabi?</h3>
                            </div>

                            <div className='justify-between w-full pt-8 md:flex'>
                                <div className='md:w-[603px] flex flex-col justify-center items-center border-b border-b-[#707070] h-[197px] border-r border-r-[#707070] w-full'>
                                    <div className='md:w-[400px] w-full gap-4 flex'>
                                        <div>
                                            <h3 className='text-[#141620] text-[46px] font-medium'>1</h3>
                                        </div>
                                        <div>
                                            <h4 className='text-[#141620] text-2xl font-medium'>Flexibility</h4>
                                            <p className='text-[#141620] text-xl font-normal'>Enjoy flexible working hours and a work-from-home arrangement</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='md:w-[603px] border-b border-b-[#707070] flex flex-col justify-center items-center h-[197px] w-full'>
                                    <div className='md:w-[400px] w-full gap-4 flex'>
                                        <div>
                                            <h3 className='text-[#141620] text-[46px] font-medium'>3</h3>
                                        </div>
                                        <div>
                                            <h4 className='text-[#141620] text-2xl font-medium'>Modern Technologies</h4>
                                            <p className='text-[#141620] text-xl font-normal'>Work on projects applying the latest technologies and trends in the software sector</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='justify-between w-full md:flex'>
                                <div className='md:w-[603px] flex flex-col justify-center items-center h-[197px] border-r border-r-[#707070] w-full'>
                                    <div className='md:w-[400px] w-full gap-4 flex'>
                                        <div>
                                            <h3 className='text-[#141620] text-[46px] font-medium'>2</h3>
                                        </div>
                                        <div>
                                            <h4 className='text-[#141620] text-2xl font-medium'>Expertise</h4>
                                            <p className='text-[#141620] text-xl font-normal'>Elevate your experience when exposed to international projects of different scopes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='md:w-[603px] flex flex-col justify-center items-center h-[197px] w-full'>
                                    <div className='md:w-[400px] w-full gap-4 flex'>
                                        <div>
                                            <h3 className='text-[#141620] text-[46px] font-medium'>4</h3>
                                        </div>
                                        <div>
                                            <h4 className='text-[#141620] text-2xl font-medium'>Security and Stability</h4>
                                            <p className='text-[#141620] text-xl font-normal'>Work with a reputable company with guaranteed employee benefits and perks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>

                    <section className='pt-6'>
                        <div style={{
                            backgroundImage: `url(${offer})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right',
                            objectFit: 'contain'
                        }}
                            className='w-full h-[300px]'
                        >
                            <div className='pt-16 text-center'>
                                <div>
                                    <h3 className='text-[2rem] font-bold text-white'>Upload Your Resume</h3>
                                </div>
                                <div className='pt-6'>
                                    <p className='text-base font-normal text-center text-white'>Join our passion for innovation and commitment to excellence by becoming an egabian. Explore our vacancies.</p>
                                </div>
                                <div className='pt-3'>
                                    <button className='text-white border border-white rounded-2xl py-2 px-6 text-[1rem]'>
                                        Job Opportunities
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>

    )
}

export default GlobalIT
