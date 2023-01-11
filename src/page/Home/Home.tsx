import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import CategoriesMenu from "../../components/Category/CategoriesMenu";
import Carousel from "./Carousel";
type Props = {};

const Home = (props: Props) => {
  useEffect(() => {
    const handleScroll = () => {
      let headers = window.document.querySelector(".header");
      let categories = window.document.querySelector(".category");
      headers?.classList.toggle("sticky", window.scrollY > 0);
      categories?.classList.toggle("sticky", window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <Header />
      <CategoriesMenu />
      <Carousel />
    </section>
  );
};
export default Home;
