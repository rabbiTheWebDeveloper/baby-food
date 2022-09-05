import React from "react";
import Banner from "../components/Banner";
import Description from "../components/Description";
import DiscountPrice from "../components/DiscountPrice";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MedicalItem from "../components/MedicalItem";
import OrderCall from "../components/OrderCall";
import OrderForm from "../components/OrderForm";
import ProductItem from "../components/ProductItem";
import Video from "../components/Video";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      {/* section gaps */}
      <div className="section_gaps" />
      <div className="section_gaps" />
      <DiscountPrice></DiscountPrice>
      {/* section gaps */}
      <div className="section_gaps" />
      <div className="section_gaps" />
      <MedicalItem></MedicalItem>
        {/* section gaps */}
        <div className="section_gaps" />
        <ProductItem></ProductItem>
        {/* section gaps */}
        <div className="section_gaps" />
        <Description></Description>
        <OrderCall></OrderCall>
         {/* section gaps */}
         <div className="section_gaps" />
         <Video></Video>
        
          {/* section gaps */}
          <div className="section_gaps" />
          <OrderForm></OrderForm>
          <Footer></Footer>
    </>
  );
};

export default Home;
