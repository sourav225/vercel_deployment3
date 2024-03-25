import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products({ handleClick, isProductPage }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data.dat); // Assuming the data structure is an array
        console.log(response.data.dat);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <div class="my-2 prodcont">
        <div class="row g-3">
          {products.map((pro) => (
            <div class="col-sm-4 px-0">
              <div class="card" style={{ width: 390 }}>
                <Link to={`/productp/${pro.id}`} style={{ textDecoration: "none", color: "black" }}>
                  <img class="card-img-top" src={pro.url} alt="Card image cap5" style={{ width: "100%", height: 150 }} />
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-9 text-left">
                        <h5 class="card-title d-inline">{pro.title}</h5>
                      </div>
                      <div class="col-sm-3 px-0 text-right">
                        <h5 class="pprice d-inline">{pro.price}</h5>
                      </div>
                    </div>
                    <p class="card-text">{pro.description.heading}</p>
                    <div class="row">
                      <div class="col-sm-9 text-left">
                        <h5 class="cardrat d-inline">
                          {(() => {
                            let sum = 0;
                            pro.rating.forEach((mt) => {
                              sum += mt;
                            });
                            const average = sum / pro.rating.length || 0; // Calculate the average rating
                            const maxRating = 5; // Maximum rating (5 stars)
                            const roundedAverage = Math.round(average); // Round the average to the nearest whole number
                            const stars = [];
                            for (let index = 0; index < maxRating; index++) {
                              if (index < roundedAverage) {
                                stars.push(
                                  <span key={index} class="star">
                                    &#9733;
                                  </span>
                                ); // Render a filled star
                              } else {
                                stars.push(
                                  <span key={index} class="star">
                                    &#9734;
                                  </span>
                                ); // Render an empty star
                              }
                            }
                            return stars;
                          })()}
                        </h5>
                      </div>

                      <div class="col-sm-3 px-0 text-right">
                        <h5 class="cardreview d-inline">{pro.reviews.length} reviews</h5>
                      </div>
                    </div>
                  </div>
                </Link>
                {isProductPage && (
                  <button className="btn btn-primary" onClick={() => handleClick(pro.id)} style={{ width: "150px", marginLeft: "15px", backgroundColor: "#0284ba", marginBottom: "10px" }}>
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
