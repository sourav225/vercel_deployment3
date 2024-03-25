import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar({ refresh }) {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [cartl, setCartl] = useState(0);
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [decision, setDecision] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const isLoggedIn = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("loggedIn="));
      if (isLoggedIn && isLoggedIn.split("=")[1] === "true") {
        setDecision(true);
      }
    };

    fetchData();
  }, [refresh]);
  useEffect(() => {
    axios
      .get("https://vercel-deployment3-server3.vercel.app/api/cart", { withCredentials: true })
      .then((response) => {
        if (response.data.datap !== "") {
          const cartData = response.data.datap || [];
          setCart(cartData);
          setShow(true);
        } else {
          const cartData = response.data.datap || [];
          console.log("chbt");
          setCart(cartData);
          setShow(false);
        }
      })
      .catch((error) => console.error(error));
  }, [refresh]);

  useEffect(() => {
    let total = 0;
    cart[0]?.cartInfo?.forEach((iti) => {
      total = total + iti.quantity;
    });
    setCartl(total);
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    console.log(cartl); // Log the updated cartl value
  }, [cartl]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://vercel-deployment3-server3.vercel.app/search`, { searchTerm });

      const data = response.data;
      console.log(data.message);

      if (response.data.message === "Please Login!!" || response.data.message === "Product Not Found") {
        alert(response.data.message);
      } else {
        let tdata = response.data.datato;
        let tobeused = tdata.id;
        navigate(`/productp/${tobeused}`);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md  navbarpat px-0">
          <div className="container px-0 mx-0 col-sm-8">
            <ul className="navbar-nav">
              <li className="nav-item font-weight-bold active">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item font-weight-bold">
                <NavLink to="/productp/102">What's New</NavLink>
              </li>
              <li className="nav-item font-weight-bold">
                <NavLink to="/productp/103">Specials</NavLink>
              </li>
              <li className="nav-item font-weight-bold">
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className="nav-item font-weight-bold">{decision ? <NavLink to="/account">My account</NavLink> : <NavLink to="/signup">Signup</NavLink>}</li>
            </ul>
          </div>
          <div className="col-sm-4 px-0">
            <form className="form-inline my-2 my-lg-0 searchpat">
              <input className="form-control mr-sm-2 d-inline" type="text" placeholder="Search this website" aria-label="Search" onChange={(e) => setSearchTerm(e.target.value)} />
              <button className="btn btn-light my-sm-0 d-inline navbtn" type="submit" onClick={handleSearch}>
                Search
              </button>
              {decision ? (
                <button className="ml-2 btn btn-primary" onClick={() => navigate("/cart")}>
                  <i class="fa fa-cart-plus" aria-hidden="true">
                    Cart
                  </i>
                </button>
              ) : (
                <div></div>
              )}

              {show ? (
                <span className="rounded mb-4" style={{ background: "red", width: "19px", fontSize: "20px" }}>
                  <sup>
                    <b>{decision ? cartl : ""}</b>
                  </sup>
                </span>
              ) : (
                <span className="rounded mb-4" style={{ background: "red", width: "19px", fontSize: "19px" }}>
                  <sup>
                    <b></b>
                  </sup>
                </span>
              )}
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
