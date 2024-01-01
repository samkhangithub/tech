import React from 'react'
import { Container } from 'react-bootstrap'
import staf from '../../image/staf.jpg'
import eor from '../../image/eor.gif'
import az from '../../image/az.jpg'
const Eor = () => {

  return (
    <Container>
      <div className='pt-40'>
        <div>
          <div>
            <h3 className='text-[#12a0b1] text-lg font-medium'>In Country Employer of Record (EOR/PEO)</h3>
          </div>
          <div className='md:w-[740px] w-full md:h-[255px] h-full'>
            <img src={staf} />
          </div>


          <ul className='list-disc' style={{ paddingLeft: '1rem' }}>
            <li className='text-[#666666] text-sm font-normal w-full md:w-[750px] h-full'>
              We provide a comprehensive EOR/PEO services with an extensive experience in HR, legal, tax, client services, and accounting. Our EOR/PEO services enables your company to expand and operate from Egypt & destinations we cover whether you have established your local entity in Egypt or not. Our local expertise will manage the whole process starting from choosing the experienced staff and finishing all their legal affairs following Egyptian labor laws, ongoing payroll, Employment contract, work permit needs, and all other paperwork you need to hire your global team.
            </li>
            <li className='text-[#666666] text-sm font-normal w-full md:w-[750px] h-full pt-3'>
              By outsourcing these tasks to Staff Arabia and our established international network of experts, Your Local & Expat workforce will be 100% complied & paid on time, which gives you time to focus on your core business operations & expansion.
            </li>
            <li className='md:w-[750px] w-full h-full md:h-[148px] list-none pt-3'><img src={eor} /></li>
            <li className='text-[#666666] text-sm font-normal w-full md:w-[750px] h-full pt-3'>
              With our EOR/PEO services your company will reduce the costs of administering benefits, streamline payroll & personnel operations, and successfully expand to an international market without having to set up your own entity.
            </li>
            <li className='text-[#666666] text-sm font-normal w-full md:w-[750px] h-full pt-3'>
              Our aim is to support all business owners to focus more on growth and achieve their business expansion plan and we will take care of the rest. This module will enable us to act on behalf of your company through the challenges of compliantly hiring international employees, compensating according to local laws and regulations, and should it become necessary, compliantly terminating employees to reduce all risks to minimum.
            </li>

            <li className='text-[#12a0b1] md:w-[750px] w-full text-xl font-medium text-center list-none pt-3'>
              Customized Solutions for Your New Business Venture
            </li>
          </ul>

          <ul className='md:flex gap-4 list-disc md:w-[750px] md:h-[142px] h-full w-full' style={{ paddingLeft: '1rem' }}>
            <li className='text-[#666666] text-sm font-normal w-full md:w-[750px] h-full pt-3'>
              We provide customized solutions that help companies to achieve their business objective affectively as well as helping them grow and move-on to a larger and better venture at lower cost, risk & competitive edge as a significant element of business success.
            </li>
            <li className='text-[#666666] text-sm font-normal w-full md:w-[750px] h-full pt-3'>
              Our EOR/PEO solution is tailored to take on the challenges of getting your workers On-board, registered, paid, and when the time comes, off-boarded-ensuring tax and employment eligibility documents are completed, payroll taxes are withheld, and benefits are provided and managed.
            </li>
          </ul>

          <ul className='list-disc' style={{ paddingLeft: '1rem' }}>
            <li className='text-[#666666] text-sm font-normal w-full md:w-[750px] h-full pt-3'>
              While in parallel offering you the option to extend & include fully work space administration and logistics support for your team members in case you don’t have your own premises to operate from or for full offshoring purposes.
            </li>
            <li className='text-[#12a0b1] md:w-[750px] w-full text-lg font-medium text-center list-none pt-3' >
              Our employer of record (EOR/PEO) service is an A-Z solution providing integrated & Hassle-Free Management of your Overseas Employees
            </li>
            <li className='md:w-[684px] w-full h-full md:h-[196px] list-none pt-3'><img src={az} /></li>
          </ul>

          <ul className='list-disc' style={{ paddingLeft: '1rem' }}>
            <li className='list-none text-[#12a0b1] text-xl font-medium'>
              EOR :
            </li>

            <li className='text-[#666666] text-sm font-normal w-full md:w-[750px] h-full pt-2'>Employees Registration on Staff Arabia HC and with Full Legality Compliance</li>
            <li className='text-[#666666] text-sm font-normal w-full md:w-[750px] h-full pt-2'>Employee Liability Guarantee Back to Back with Clients in Alignment with Local Laws</li>
            <li className='text-[#666666] text-sm font-normal w-full md:w-[750px] h-full pt-2'>Designated Full Time HR Employee / Account Manager</li>
            <li className='text-[#666666] text-sm font-normal w-full md:w-[750px] h-full pt-2'>Applying client’s policy, procedures & code of ethics in alignment with local laws</li>
          </ul>

          <ul className='list-disc' style={{ paddingLeft: '1rem' }}>
            <li className='list-none text-[#12a0b1] text-xl font-medium pt-3'>
              EOR :
            </li>

            <li className='flex list-none md:w-[720px] w-full pt-4'>
              <li className='list-none relativeF md:w-[360px] text-[#666666] text-sm font-normal w-full '>
                <p className='relative before:text-3xl before:-top-2 before:content-["\2022"] before:absolute before:-left-5 before:text-[#c7cb46]'> Pay register Calculation as per Law</p>
              </li>
              <li className='list-none md:w-[360px] text-[#666666] text-sm font-normal w-full'>
                Pay register Calculation as per Law
              </li>
            </li>

          </ul>
        </div>

      </div>
    </Container>
  )
}

export default Eor
