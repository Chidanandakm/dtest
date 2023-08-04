"use client";
import React from "react";
import BeansImage from "./BeansImage";
import ProductAndService from "./ProductAndService";
import ProductsInfo from "./ProductsInfo";
import ManamChocolates from "../Home/ManamChocolates";
import Experience from "./Experience";

const Products = () => {
  return (
    <>
      <BeansImage />
      <ProductsInfo />
      <Experience />
      <ProductAndService />
      <ManamChocolates />
    </>
  );
};

export default Products;
