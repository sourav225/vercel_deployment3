import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
function CarouselOne() {
  const navigate = useNavigate();
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" style={{ borderRadius: "50%", height: "10px", width: "10px" }}></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" style={{ borderRadius: "50%", height: "10px", width: "10px" }}></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" style={{ borderRadius: "50%", height: "10px", width: "10px" }}></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="d-block w-100" src="./Images/samsung_smartphone_transparante_behuizing_1024x747.jpg" alt="Third slide" />
              </div>
              <div className="col-md-6 crtext text-center" style={{ color: "white" }}>
                <b>Samsung Galaxy S23</b>
                <br />
                <br />
                Fingerprint (under display, ultrasonic), accelerometer,
                <br /> gyro, proximity, barometer
                <br />
                <br />
                <button className="btn btn-primary" onClick={() => navigate("/productp/101")} style={{ backgroundColor: "#0284ba" }}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="d-block w-100" src="./Images/rishabh-malhotra-83ypHTv6J2M-unsplash.jpg" alt="Third slide" />
              </div>
              <div className="col-md-6 crtext text-center" style={{ color: "white" }}>
                <b>Apple IPhone 15</b>
                <br />
                <br />
                Face ID, accelerometer, gyro, proximity, compass,
                <br />
                barometer,Ultra Wideband 2 (UWB) support",
                <br />
                <br />
                <button className="btn btn-primary" onClick={() => navigate("/productp/102")} style={{ backgroundColor: "#0284ba" }}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="d-block w-100" src="./Images/gradient-black-background-with-realistic-elements_23-2149154116.avif" alt="Third slide" />
              </div>
              <div className="col-md-6 crtext text-center" style={{ color: "white" }}>
                <b>Nothing Phone (1)</b>
                <br />
                <br />
                Fingerprint (under display, optical), accelerometer, <br />
                proximity, gyro, compass
                <br />
                <br />
                <button className="btn btn-primary" onClick={() => navigate("/productp/103")} style={{ backgroundColor: "#0284ba" }}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarouselOne;
