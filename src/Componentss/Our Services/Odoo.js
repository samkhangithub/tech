import React from 'react'
import { Container } from 'react-bootstrap'
import inter from '../../image/inter.svg'
import module from '../../image/module.svg'
import integration from '../../image/integration.svg'
import partner from '../../image/partner.svg'
import training from '../../image/traning.svg'
import update from '../../image/update.svg'
import { ImItalic } from 'react-icons/im'
const Odoo = () => {
    return (
        <Container>
            <div className='pt-40'>
                <div className='md:flex items-center gap-4 w-full h-full md:h-[462.5px]'>
                    <div className='md:w-[660px] w-full h-full md:h-[392px]'>
                        <div>
                            <h3 className='text-[#000000] font-bold text-[30px]'>ERP Consultation</h3>
                        </div>
                        <div>
                            <p className='text-[#000000] text-base font-normal'>Discover the power of efficient workflows with Odolution's expert Odoo ERP consultation services. Our team of professionals excels in diagnosing and resolving ERP system issues, optimizing your business processes, and aligning your ERP functionalities with your strategic goals. Trust in our experience and in-depth knowledge to ensure your Odoo ERP system is a catalyst for your business growth.</p>
                            <p className='text-[#000000] text-base font-normal'>In addition, we understand the importance of strategic planning in the successful implementation and use of an ERP system. We work closely with you to understand your business goals, and then align the functionalities of the Odoo ERP system to meet these objectives. </p>
                        </div>
                        <div className='bg-[#A54A7B] flex items-center justify-center md:w-[134.23px] w-full h-[42px]'>
                            <button className='text-white text-[12px] '>CONTACT US</button>
                        </div>
                    </div>

                    <div className='md:w-[630px]  w-full h-full md:h-[440px]'>
                        <img src={inter} />
                    </div>
                </div>
                <div className='md:flex items-center gap-4 w-full h-full md:h-[462.5px]'>
                    <div className='md:w-[630px] w-full h-full md:h-[440px]'>
                        <img src={module} />
                    </div>
                    <div className='md:w-[660px] w-full h-full md:h-[392px]'>
                        <div>
                            <h3 className='text-[#000000] font-bold text-[30px]'>Custom Module Development</h3>
                        </div>
                        <div>
                            <p className='text-[#000000] text-base font-normal'>At Odolution, we believe that every business is unique, and so should be their Odoo implementation. Our expert team offers bespoke Odoo module development services, creating tailored modules that perfectly align with your business processes. With our rich expertise in Odoo's framework, we deliver seamless integrations and extensions that enhance your Odoo experience.
                                Our team of skilled Odoo developers brings a depth of knowledge to every project. They're well-versed in Python, the driving language behind Odoo, ensuring top-notch code quality and optimal module performance.</p>
                            <p className='text-[#000000] text-base font-normal'>We understand that time is of the essence in business. Hence, we strive to deliver your custom modules within agreed timelines, allowing you to leverage the power of customization without delay.</p>
                        </div>
                        <div className='bg-[#A54A7B] flex items-center justify-center md:w-[134.23px] w-full h-[42px]'>
                            <button className='text-white text-[12px] '>CONTACT US</button>
                        </div>
                    </div>
                </div>

                <div className='md:flex items-center gap-4 w-full h-full md:h-[462.5px]'>
                    <div className='md:w-[660px] w-full h-full md:h-[392px]'>
                        <div>
                            <h3 className='text-[#000000] font-bold text-[30px]'>Integration Services</h3>
                        </div>
                        <div>
                            <p className='text-[#000000] text-base font-normal'>We're your trusted partner for comprehensive Odoo Integration Services, ensuring seamless interoperability between your Odoo platform and third-party applications. As a leading authority in this niche, we leverage our extensive knowledge and experience to drive better business efficiency, agility, and success.</p>
                            <p className='text-[#000000] text-base font-normal'>Our Odoo Integration Services cater to various sectors, including eCommerce, Accounting, Manufacturing, HR, CRM, and more. Our seasoned team of IT professionals develops bespoke solutions to ensure a smooth, hassle-free integration with third-party apps like Shopify, Magento, QuickBooks, Salesforce, and more. We ensure your business process flow is uninterrupted, regardless of the application you're integrating.  </p>
                        </div>
                        <div className='bg-[#A54A7B] flex items-center justify-center md:w-[134.23px] w-full h-[42px]'>
                            <button className='text-white text-[12px] '>CONTACT US</button>
                        </div>
                    </div>

                    <div className='md:w-[630px]  w-full h-full md:h-[440px]'>
                        <img src={integration} />
                    </div>
                </div>

                <div className='md:flex items-center gap-4 w-full h-full md:h-[462.5px]'>
                    <div className='md:w-[630px]  w-full h-full md:h-[440px]'>
                        <img src={partner} />
                    </div>
                    <div className='md:w-[660px] w-full h-full md:h-[392px]'>
                        <div>
                            <h3 className='text-[#000000] font-bold text-[30px]'>Partner Support</h3>
                        </div>
                        <div>
                            <p className='text-[#000000] text-base font-normal'>Odolution is your one-stop destination for comprehensive Odoo services. As an experienced Odoo implementation partner, we provide robust, efficient, and integrated solutions tailored to your business needs. Our team excels in providing both technical and functional support, ensuring smooth and effective utilization of your Odoo system. Furthermore, if you're seeking to augment your team with proficient Odoo developers, our outsourcing service makes the skilled resources you need readily accessible.</p>
                            <div className="flex flex-col px-2 border-l-4 border-[#DEE2E6]">
                                <p className='text-[#000000] text-center w-full md:w-[578px] flex items-center justify-center text-base font-normal'>"Even if you're our competition, we see you as our partner. At Odolution, we believe in growth through collaboration. Whether you're stuck in code or in need of extra hands, we're ready to lend ours. Your success is our shared success."</p>
                            </div>
                        </div>
                        <div className='pt-2'>
                            <div className='bg-[#A54A7B] flex items-center justify-center md:w-[134.23px] w-full h-[42px]'>
                                <button className='text-white text-[12px] '>CONTACT US</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:flex items-center  gap-4 w-full h-full md:h-[462.5px]'>
                    <div className='md:w-[660px] w-full h-full md:h-[392px]'>
                        <div>
                            <h3 className='text-[#000000] font-bold text-[30px]'>Training and Support</h3>
                        </div>
                        <div>
                            <p className='text-[#000000] text-base font-normal'>Beyond implementation and technical services, Odolution is proud to offer comprehensive training and support for any Odoo setup, no matter who implemented it. Our highly skilled team is adept at analyzing and understanding diverse Odoo environments. We provide customized training sessions designed to empower your team with the knowledge they need to maximize the utilization of your Odoo system. Additionally, our dedicated support services ensure that help is always within reach, keeping your business operations running smoothly and efficiently.</p>
                        </div>
                        <div className='bg-[#A54A7B] flex items-center justify-center md:w-[134.23px] w-full h-[42px]'>
                            <button className='text-white text-[12px] '>CONTACT US</button>
                        </div>
                    </div>

                    <div className='md:w-[630px] w-full h-full md:h-[440px]'>
                        <img src={training} />
                    </div>
                </div>

                <div className='md:flex items-center gap-4 w-full h-full md:h-[462.5px]'>
                    <div className='md:w-[630px] w-full h-full md:h-[440px]'>
                        <img src={update} />
                    </div>
                    <div className='md:w-[660px] w-full h-full md:h-[392px]'>
                        <div>
                            <h3 className='text-[#000000] font-bold text-[30px]'>Odoo Upgrades and Updates </h3>
                        </div>
                        <div>
                            <p className='text-[#000000] text-base font-normal'>Stay ahead of the curve with Odolution's Odoo version upgrade services. Our expertise extends to helping you smoothly transition from your current Odoo setup to the latest version, ensuring you benefit from new features and improvements without disruption to your operations. With our rigorous testing procedures, we ensure the upgrade process is seamless and your data integrity is preserved. Let us help you keep your business updated, secure, and competitive with the newest Odoo advancements.</p>
                            <div className="flex flex-col px-2 border-l-4 border-[DEE2E6]">
                                <p className='text-[#000000] w-full md:w-[578px] text-center flex items-center justify-center text-base font-normal'>Future-proof your business with Odolution. Stay updated, stay ahead, and let technology be your competitive edge. Upgrade your Odoo system with us and harness the power of progress.</p>
                            </div>
                        </div>
                        <div className='pt-2'>
                            <div className='bg-[#A54A7B] flex items-center justify-center md:w-[134.23px] w-full h-[42px]'>
                                <button className='text-white text-[12px] '>CONTACT US</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Odoo
