import React, { useState, useEffect } from "react";
import Top from "./Top";
import Navbar from "./Navbar";
import Products from "./Products";
import axios from "axios";

function ProductNavbar() {
  const [refresh, setRefresh] = useState(true);
  const [status, setstatus] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const handleClick = async (idi) => {
    axios
      .get(`https://vercel-deployment3-server3.vercel.app/api/addtocart/${idi}`)
      .then((response) => {
        setstatus(response.data.res || {}); // Assuming the data structure is an array
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    if (status === "Approved") {
      setRefresh((prevState) => !prevState);
      setstatus("");
    }
    if (status === "Not Approved") {
      setAlertVisible(true);
      setstatus("");
    }
    setTimeout(() => {
      setAlertVisible(false);
    }, 4000);
  }, [status]);
  return (
    <div>
      <Top />
      <Navbar refresh={refresh} />
      {alertVisible && (
        <div className="alert alert-danger fade show" role="alert" style={{ margin: "20px" }}>
          Please Login to use the cart.
        </div>
      )}
      <Products handleClick={handleClick} isProductPage={true} />
    </div>
  );
}

export default ProductNavbar;
