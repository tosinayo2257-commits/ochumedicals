import React from "react";
import Applayout from "../Layout/Applayout";
import About from "../Component/About"

import Hero from "../Component/HomePageComponent/Hero";
import CategorySection from "../Component/HomePageComponent/Category";

export default function Homepage() {
  return (
    <Applayout>
      <Hero/>
      <CategorySection/>
      <About/>
    </Applayout>
  );
}
