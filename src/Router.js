import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TopNav from "./Navbar/TopNav";
import Home from "./Componentss/Home/Home";
import About from "./Componentss/About/About";
import Services from "./Componentss/Our Services/Services";
import Contact from "./Componentss/Contacts/Contact";
import Scrolltoup from "./Componentss/Scrool/Scrool";
import Blog from "./Componentss/Blog/Blog";
import Portfolio from "./Componentss/Portfolio/portfolio";
import BlogContentPage from "./Componentss/BlogContentPage/BlogContentPage";
import useFetch from "../src/hooks/useFetcgh";
import Post from "./Componentss/Post/Post";

const RouterPage = () => {
  let { loading, data, error } = useFetch(
    `${process.env.REACT_APP_STRAPI_URL}/api/blogs?populate=*`
  );
  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <Scrolltoup />
      <TopNav />
      {/* Frontity Menu Link */}
      

      <Routes>
        {/* React Router Routes */}
        <Route path="/" element={<Home />} /> {/* Frontity's Home route */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/post/:slug" element={<Post />} />
        {/* <Route path="/blog" element={<Blog blogs={data ? data : ""} />} /> */}
        <Route path="/blog" element={<Blog />} />
        {/* <Route
          path="/blogc/:id"
          element={<BlogContentPage blogs={data ? data : ""} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
