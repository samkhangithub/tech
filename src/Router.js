import TopNav from './components/TopNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './Componentss/Home/Home';
import About from './Componentss/About/About';
import Services from './Componentss/Our Services/Services';
import Contact from './Componentss/Contacts/Contact';

const RouterPage = () =>
{
    return (
        <>
  <BrowserRouter>
     <TopNav />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact'  element={<Contact />}/>
      </Routes>
     </BrowserRouter>
        </>
    )
}
export default RouterPage;