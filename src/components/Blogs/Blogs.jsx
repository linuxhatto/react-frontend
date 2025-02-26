import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    id: 1,
    title: "How to build a website",
    published: "12th June 2021",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.",
    image: Img1,
    aosDelay: "0",
  },
  {
    id: 2,
    title: "How to build a website",
    published: "12th June 2021",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.",
    image: Img2,
    aosDelay: "200",
  },
  {
    id: 3,
    title: "How to build a website",
    published: "12th June 2021",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.",
    image: Img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Heading Section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
        {/* Blogs Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="bg-white dark:bg-gray-900"
            >
              {/* image selection */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 transition duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
