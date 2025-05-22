// Code to render the NavBar component
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";

import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis, quos, quas, quia rrrrrr",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Kam tp 28 Jan",
  image: smartwatch2,
  title2: "S,art Spçp",
  title3: "Winter Sale",
  title4:
    "Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis, quos, quas, quia",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handlerOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <NavBar handlerOrderPopup={handlerOrderPopup} />
      <Hero handlerOrderPopup={handlerOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handlerOrderPopup={handlerOrderPopup} />
    </div>
  );
};

export default App;
