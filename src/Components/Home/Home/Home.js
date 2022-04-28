import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import MannageInventory from "../../MannageInventory/MannageInventory";
import WareHouse from "../../WareHouse/WareHouse";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <WareHouse></WareHouse>
      <MannageInventory></MannageInventory>
    </>
  );
};

export default Home;
