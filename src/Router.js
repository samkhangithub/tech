import TopNav from './components/TopNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Servises from './Servises/Servises';

const RouterPage = () =>
{
    return (
        <>
  <BrowserRouter>
     <TopNav />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/servises' element={<Servises/>} />
      </Routes>
     </BrowserRouter>
        </>
    )
}
export default RouterPage;