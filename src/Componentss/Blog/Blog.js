import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = ({ blogs }) => {
  console.log("Blog Object :", blogs);
  // console.log(blogs);

  const [firstImage, setFirstImage] = useState("");
  useEffect(() => {
    handle();
  }, []);
  const handle = () => {
    setFirstImage(blogs.data[0]?.attributes?.coverImg.data?.attributes.url);
  };

  return (
    <div className="w-full bg-[#f9f9f9] py-[50px] mt-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
          {blogs.data.map((blog) => (
            <Link to={`/blogc/${blog.id}`}>
              <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                <img
                  className="h-56 w-full object-cover"
                  src={`http://localhost:1337${blog.attributes?.coverImg.data?.attributes.url}`}
                />
                <div className="p-8">
                  <h3 className="font-bold text-2xl my-1">
                    {blog.attributes.blogTitle}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {blog.attributes.blogDesc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
