import React from "react";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  className="d-block w-100"
                  src="./Images/samsung_smartphone_transparante_behuizing_1024x747.jpg"
                  alt="Third slide"
                />
              </div>
              <div
                className="col-md-6 crtext text-center"
                style={{ color: "white" }}
              >
                <b>fdxxxxxdxffxdfxffdsdsfrsfszrgfsgr</b>
                <br />
                <br />
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  className="d-block w-100"
                  src="./Images/rishabh-malhotra-83ypHTv6J2M-unsplash.jpg"
                  alt="Third slide"
                />
              </div>
              <div
                className="col-md-6 crtext text-center"
                style={{ color: "white" }}
              >
                <b>
                  Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit.fdxxxxxdxffxdfxffdsdsfrsfszrgfsgr
                </b>
                <br />
                <br />
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  className="d-block w-100"
                  src="./Images/gradient-black-background-with-realistic-elements_23-2149154116.avif"
                  alt="Third slide"
                />
              </div>
              <div
                className="col-md-6 crtext text-center"
                style={{ color: "white" }}
              >
                <b>
                  Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit.fdxxxxxdxffxdfxffdsdsfrsfszrgfsgr
                </b>
                <br />
                <br />
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
