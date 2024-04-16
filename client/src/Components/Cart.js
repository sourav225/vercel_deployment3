import React, { useState, useEffect } from "react";
import axios from "axios";
import Top from "./Top";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Cart() {
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [status, setstatus] = useState("");
  const [refresh, setRefresh] = useState(true);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    getCart();
    if (status === "Approved") {
      setRefresh((prevState) => !prevState);
      setstatus("");
    }
  }, [status, price]);

  const getCart = async () => {
      const isuserEmail=document.cookie.split(";")?.find((cookie)=>cookie.trim().startsWith("useremail="))?.split("=")[1];
      
    axios
      .get("https://vercel-deployment3-server3.vercel.app/api/cart", { useremail: isuserEmail })
      .then((response) => {
        setCart(response.data.datap || []); // Assuming the data structure is an array
        console.log(response.data.datap);
      })
      .catch((error) => console.error(error));
  };
  const handleClick = async (idi) => {
    const isuserEmail=document.cookie?.split(";").find((cookie)=>cookie.trim().startsWith("useremail="))?.split("=")[1];
    axios
      .get(`https://vercel-deployment3-server3.vercel.app/api/addtocart/${idi}`, { useremail:isuserEmail })
      .then((response) => {
        setstatus(response.data.res || {}); // Assuming the data structure is an array
      })
      .catch((error) => console.error(error));
  };
  const handleMinusClick = async (idi) => {
    const isuserEmail=document.cookie.split(";")?.find((cookie)=>cookie.trim().startsWith("useremail="))?.split("=")[1];
    axios
      .get(`https://vercel-deployment3-server3.vercel.app/api/minustocart/${idi}`, { useremail:isuserEmail })
      .then((response) => {
        setstatus(response.data.res || {}); // Assuming the data structure is an array
      })
      .catch((error) => console.error(error));
  };
  const handleRemove = async (idi) => {
    const isuserEmail=document.cookie?.split(";").find((cookie)=>cookie.trim().startsWith("useremail="))?.split("=")[1];
    axios
      .get(`https://vercel-deployment3-server3.vercel.app/api/removefromcart/${idi}`, { useremail: isuserEmail })
      .then((response) => {
        setstatus(response.data.res || {}); // Assuming the data structure is an array
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getPrice();
  }, [cart]);

  const getPrice = () => {
    let total = 0;
    for (let i = 0; i < cart[0]?.cartInfo?.length; i++) {
      let a = cart[0]?.cartInfo[i].price;
      total = total + cart[0]?.cartInfo[i].quantity * parseInt(a.replace("$", ""), 10);
    }
    setPrice(total);
  };

  return (
    <div>
      <Top />
      <Navbar refresh={refresh} />

      <div className="container mt-4">
        <div className="row">
          {cart[0]?.cartInfo.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card" style={{ height: "300px" }}>
                <Link to={`/productp/${item.productId}`} style={{ textDecoration: "none", color: "black" }}>
                  <img src={item.productUrl} className="card-img-top" alt={item.productTitle} style={{ height: "200px" }} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{item.productTitle}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <button className="btn btn-sm btn-secondary" onClick={() => handleClick(item.productId)}>
                        +
                      </button>
                      <button className="btn btn-sm btn-light mx-2">{item.quantity}</button>
                      <button className="btn btn-sm btn-secondary" onClick={() => handleMinusClick(item.productId)}>
                        -
                      </button>
                    </div>
                    <div>
                      <span className="mr-2">{item.price}</span>
                      <button className="btn btn-sm btn-danger" onClick={() => handleRemove(item.productId)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 d-flex justify-content-between align-items-center container row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 pl-4" style={{ backgroundColor: "rgb(105,105,105)", color: "white" }}>
            <span>Total Price of your Cart-$</span>
            <span>{price}</span>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
