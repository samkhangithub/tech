import TopNav from './components/TopNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

const RouterPage = () =>
{
    return (
        <>
  <BrowserRouter>
     <TopNav />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
      </Routes>
     </BrowserRouter>
        </>
    )
}
export default RouterPage;