import React from "react";
import {  Outlet } from "react-router-dom";
import TopNav from "./Navbar/TopNav";
import Footers from "./Componentss/Footers/Footer";

const RouterPage = () => {
  // let { loading, data, error } = useFetch(
  //   `${process.env.REACT_APP_STRAPI_URL}/api/blogs?populate=*`
  // );
  // if (loading) return <p>Loading...</p>;

  return (
    <>
    <TopNav />
    <Outlet />
    <Footers />
    </>
  );
};

export default RouterPage;
