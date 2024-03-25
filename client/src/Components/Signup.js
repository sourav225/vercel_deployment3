import axios from "axios";
import React, { useState } from "react";
import Top from "./Top";
import Navbar from "./Navbar";

function Signup() {
  const [name, setName] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const handlesignup = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(mobilenumber);
    console.log(email);
    console.log(password);
    console.log(address);
    console.log(city);
    console.log(state);
    console.log(zip);

    axios
      .post("https://vercel-deployment3-server3.vercel.app/signup", { name: name, mobilenumber: mobilenumber, email: email, password: password, address: address, address2: address2, city: city, state: state, zip: zip })
      .then((response) => {
        if (response.status === 202) {
          alert("User with same email exists");
          console.log("hi.I am present");
        }
        if (response.status === 200) {
          alert("Signup succesful.Now please Login");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Top />
      <Navbar />
      <div className="container bg-light mt-4 mb-4 p-4 rounded">
        <form onSubmit={handlesignup}>
          <div class="form-row mt-4 mb-4">
            <div class="form-group col-md-6">
              <label for="inputName">Name*</label>
              <input type="text" class="form-control" id="inputName" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
            </div>
            <div class="form-group col-md-6">
              <label for="inputMobileNumber">Mobile Number*</label>
              <input type="number" class="form-control" id="inputPassword4" placeholder="Number" onChange={(e) => setMobilenumber(e.target.value)} required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email*</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password*</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address*</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={(e) => setAddress2(e.target.value)} required />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City*</label>
              <input type="text" class="form-control" id="inputCity" onChange={(e) => setCity(e.target.value)} required />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State*</label>
              <select id="inputState" class="form-control" onChange={(e) => setState(e.target.value)} required>
                <option value="none" selected disabled hidden>
                  Select an Option
                </option>
                <option>Jharkhand</option>
                <option>West Bengal</option>
                <option>Karnataka</option>
                <option>Maharashtra</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip*</label>
              <input type="text" class="form-control" id="inputZip" onChange={(e) => setZip(e.target.value)} required />
            </div>
          </div>
          <input type="submit" name="submit" value="Signup" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
