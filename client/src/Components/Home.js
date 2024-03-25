import React, { useState, useEffect } from "react";
import Top from "./Top";
import Navbar from "./Navbar";
import Pills from "./Pills";
import CarouselOne from "./CarouselOne";
import Products from "./Products";
import axios from "axios";
import Signup from "./Signup";

function Home({ refresh }) {
  return (
    <div>
      <Top />
      <Navbar refresh={refresh} />
      <CarouselOne />
      <Pills />
      <Products />
    </div>
  );
}

export default Home;
