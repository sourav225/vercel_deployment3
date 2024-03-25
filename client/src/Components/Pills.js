import React from "react";
import { useNavigate } from "react-router-dom";

function Pills() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex align-items-start" style={{ margin: 20 }}>
        <div className="nav flex-column nav-pills col-sm-3 px-0" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ height: 200 }}>
          <button className="nav-link active" id="v-pills-home-tab" data-toggle="pill" data-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" style={{ height: 40 }}>
            Featured Item
          </button>
          <button className="nav-link" id="v-pills-profile-tab" data-toggle="pill" data-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" style={{ height: 40 }}>
            Bestseller
          </button>
          <button className="nav-link" id="v-pills-messages-tab" data-toggle="pill" data-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" style={{ height: 40 }}>
            Summer Discount
          </button>
          <button className="nav-link" id="v-pills-settings-tab" data-toggle="pill" data-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" style={{ height: 40 }}>
            Premium Product
          </button>
          <button className="nav-link" id="v-pills-fifth-tab" data-toggle="pill" data-target="#v-pills-fifth" type="button" role="tab" aria-controls="v-pills-fifth" aria-selected="false" style={{ height: 40 }}>
            Gift Idea
          </button>
        </div>
        <div
          className="tab-content col-sm-9"
          id="v-pills-tabContent"
          style={{
            background: "#0284ba",
            height: "198px",
          }}
        >
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <div className="row">
              <div className="col-sm-7 text-left px-5 py-3" style={{ color: "white" }}>
                {" "}
                <b>Samsung Galaxy S23</b>
                <br /> Fingerprint (under display, ultrasonic), accelerometer, gyro, proximity, barometer
                <br />
                <br />
                <button className="btn btn-light" style={{ color: "rgb(105,105,105)" }} onClick={() => navigate("/productp/101")}>
                  Read More
                </button>
              </div>
              <div className="col-sm-5 text-left py-4 pb-0">
                <img src="../Images/download__1_-removebg-preview.png" style={{ width: 325, height: 175 }} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <div className="row">
              <div className="col-sm-7 text-left px-5 py-3" style={{ color: "white" }}>
                {" "}
                <b>Apple IPhone 15</b>
                <br /> Face ID, accelerometer, gyro, proximity, compass, barometer,Ultra Wideband 2 (UWB) support
                <br />
                <br />
                <button className="btn btn-light" style={{ color: "rgb(105,105,105)" }} onClick={() => navigate("/productp/102")}>
                  Read More
                </button>
              </div>
              <div className="col-sm-5 text-left py-4 pb-0">
                <img src="../Images/images-removebg-preview.png" style={{ width: 325, height: 175 }} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            <div className="row">
              <div className="col-sm-7 text-left px-5 py-3" style={{ color: "white" }}>
                {" "}
                <b>Nothing Phone (1)</b>
                <br /> Fingerprint (under display, optical), accelerometer, proximity, gyro, compass
                <br />
                <br />
                <button className="btn btn-light" style={{ color: "rgb(105,105,105)" }} onClick={() => navigate("/productp/103")}>
                  Read More
                </button>
              </div>
              <div className="col-sm-5 text-left py-4 pb-0">
                <img src="../Images/images__2_-removebg-preview.png" style={{ width: 325, height: 175 }} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-fifth" role="tabpanel" aria-labelledby="v-pills-fifth-tab">
            <div className="row">
              <div className="col-sm-7 text-left px-5 py-3" style={{ color: "white" }}>
                {" "}
                <b>Oppo Reno10</b>
                <br /> Fingerprint (under display, optical), accelerometer, gyro, proximity, compass
                <br />
                <br />
                <button className="btn btn-light" style={{ color: "rgb(105,105,105)" }} onClick={() => navigate("/productp/105")}>
                  Read More
                </button>
              </div>
              <div className="col-sm-5 text-left py-4 pb-0">
                <img src="../Images/download(12).png" style={{ width: 325, height: 175 }} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
            <div className="row">
              <div className="col-sm-7 text-left px-5 py-3" style={{ color: "white" }}>
                {" "}
                <b>Xiaomi Redmi 14</b>
                <br /> Fingerprint (under display, optical), accelerometer, proximity, gyro, compass
                <br />
                <br />
                <button className="btn btn-light" style={{ color: "rgb(105,105,105)" }} onClick={() => navigate("/productp/104")}>
                  Read More
                </button>
              </div>
              <div className="col-sm-5 text-left py-4 pb-0">
                <img src="../Images/download(9).png" style={{ width: 325, height: 175 }} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pills;
