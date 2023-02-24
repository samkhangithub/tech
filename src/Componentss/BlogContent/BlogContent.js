import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const BlogContent = ({ blogs }) => {
  const [blog, setBlog] = useState("");
  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const { id } = useParams();

  console.log("blog data :", blog);
  useEffect(() => {
    handle();
  }, []);
  const handle = () => {
    let arr = blogs.blogs.data?.find((elm) => elm.id == id);
    setBlog(arr);

    setFirstImage(arr?.attributes?.coverImg.data?.attributes.url);
    setSecondImage(arr?.attributes.authorImg.data.attributes.url);
  };

  return (
    <>
      <div className="w-full pb-10 bg-[#f9f9f9]">
        <div className="max-w-[1240px] mx-auto">
          <div
            className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black"
          >
            <div className="col-span-2 ">
              <img
                className="h-56 w-full object-cover"
                src={`http://localhost:1337${firstImage}`}
              />
              <h1 className="font-bold text-2xl my-1 pt-5">
                {blog?.attributes?.blogTitle}
              </h1>
              <div className="pt-5">
                <ReactMarkdown className="line-break">
                  {blog?.attributes?.blogContent}
                </ReactMarkdown>
              </div>
            </div>

            <div className="items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px] flex flex-col items-center justify-center">
              <div>
                <img
                  className="p-2 w-32 h-32 rounded-full mx-auto object-cover "
                  src={`http://localhost:1337${secondImage}`}
                />

                <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
                  {blog?.attributes?.authorName}
                </h1>
                <p className="text-center text-gray-900 font-medium">
                  {blog?.attributes?.authorDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogContent;
