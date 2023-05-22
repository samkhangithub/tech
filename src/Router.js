import TopNav from "./Navbar/TopNav";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Componentss/Home/Home";
import About from "./Componentss/About/About";
import Services from "./Componentss/Our Services/Services";
import Contact from "./Componentss/Contacts/Contact";
import Scrolltoup from "./Componentss/Scrool/Scrool";
import Blog from "./Componentss/Blog/Blog";
import BlogContentPage from "./Componentss/BlogContentPage/BlogContentPage";
import useFetch from "../src/hooks/useFetcgh";
// import { BACKEND_URL, BACKEND_URL2 } from "./helper";
const RouterPage = () => {
  let { loading, data, error } = useFetch(
    `${process.env.REACT_APP_STRAPI_URL}/api/blogs?populate=*`
  );
  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;
  console.log("data :", data);
  return (
    <>
      <BrowserRouter>
        <Scrolltoup />
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog blogs={data ? data : ""} />} />
          <Route
            path="/blogc/:id"
            element={<BlogContentPage blogs={data ? data : ""} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RouterPage;
