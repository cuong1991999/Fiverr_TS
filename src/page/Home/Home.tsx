import React from "react";
import Header from "../../components/Header/Header";
import CategoriesMenu from "../../components/Category/CategoriesMenu";
type Props = {};

const Home = (props: Props) => {
  return (
    <section>
      <Header />
      <CategoriesMenu />
    </section>
  );
};
export default Home;
