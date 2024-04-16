import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Top from "./Top";
import Navbar from "./Navbar";

function ProductPage() {
  const params = useParams();
  const productId = params.id;
  const [item, setItem] = useState([]);
  const [status, setstatus] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    axios
      .get(`https://vercel-deployment3-server3.vercel.app/api/products/${productId}`)
      .then((response) => {
        setItem(response.data.datap || {}); // Assuming the data structure is an array
      })
      .catch((error) => console.error(error));
  }, [productId]);
  const handleClick = async (idi) => {
    const isuserEmail=document.cookie?.split(";").find((cookie)=>cookie.trim().startsWith("useremail="))?.split("=")[1];
    axios
      .get(`https://vercel-deployment3-server3.vercel.app/api/addtocart/${idi}`,{useremail:isuserEmail})
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
    <>
      <Top />
      <Navbar refresh={refresh} />
      {alertVisible && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert" style={{ margin: "20px" }}>
          Please Login
        </div>
      )}

      <div className="row">
        <div className="col-md-6 px-0">
          <table className="table table-bordered table-striped table-dark table-hover" style={{ margin: "47px", marginRight: "0px", marginTop: "5px", width: "600px" }}>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{item.title}</td>
              </tr>
              <tr>
                <td>Display</td>
                <td>{item.description?.display || "N/A"}</td>
              </tr>
              <tr>
                <td>Processor</td>
                <td>{item.description?.processor || "N/A"}</td>
              </tr>
              <tr>
                <td>Front Camera</td>
                <td>{item.description?.frontcamera || "N/A"}</td>
              </tr>
              <tr>
                <td>Rear Camera</td>
                <td>{item.description?.rearcamera || "N/A"}</td>
              </tr>
              <tr>
                <td>Ram</td>
                <td>{item.description?.ram || "N/A"}</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>{item.description?.storage || "N/A"}</td>
              </tr>
              <tr>
                <td>Battery Capacity</td>
                <td>{item.description?.batterycap || "N/A"}</td>
              </tr>
              <tr>
                <td>OS</td>
                <td>{item.description?.os || "N/A"}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{item.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6 px-0">
          <img src={item.url1} className="img-fluid zoom" style={{ height: "250px", width: "45%", marginTop: "5px", border: "2px solid white", borderLeft: "0px" }} />
          <img src={item.url2} className="img-fluid zoom" style={{ height: "250px", width: "45%", marginTop: "5px", border: "2px solid white" }} />
          <button className="btn btn-primary" style={{ margin: "35px", marginLeft: "250px" }} onClick={() => handleClick(item.id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
