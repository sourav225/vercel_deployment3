import React, { useState, useEffect } from "react";
import Top from "./Top";
import Navbar from "./Navbar";
import axios from "axios";

function Account() {
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/check", { withCredentials: true });
      const isLoggedIn = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("loggedIn="));
      if (isLoggedIn && isLoggedIn.split("=")[1] === "true") {
        setUser(response.data.datap);
      }
    };

    fetchData();
  }, []);
  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/updateUser", { user });
      if (response.data.res === "Success") {
        alert("User data saved successfully!");
        window.location.alert();
      }
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };
  const hadleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };
  console.log(user);
  return (
    <div>
      <Top />
      <Navbar />
      <div className="rounded bg-light mt-4 mb-4 p-4 rounded accountcont" style={{ margin: "20px" }}>
        <h3>Personal Information</h3>
        <form>
          <div class="form-row mt-4 mb-4">
            <div class="form-group col-md-12">
              <label for="inputEmail4">Name</label>
              <input type="text" class="form-control" id="inputName" placeholder="name" value={user?.name} onChange={hadleChange} readOnly />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputPassword4">Mobile Number</label>
              <input type="text" class="form-control" id="inputPassword4" placeholder="number" value={user?.number} onChange={hadleChange} readOnly />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="email" value={user?.email} onChange={hadleChange} readOnly />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="address" placeholder="1234 Main St" value={user?.address} onChange={hadleChange} />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="address2" placeholder="Apartment, studio, or floor" value={user?.address2} onChange={hadleChange} />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="city" value={user?.city} onChange={hadleChange} />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="state" class="form-control" value={user?.state} onChange={hadleChange}>
                <option>Jharkhand</option>
                <option>West Bengal</option>
                <option>Karnataka</option>
                <option>Maharashtra</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="zip" value={user?.zip} onChange={hadleChange} />
            </div>
          </div>
          <div class="row">
            <div class="col text-right">
              <button type="submit" class="btn btn-primary" style={{ backgroundColor: "#0284ba", width: "100px" }} onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </form>
        <br />
        <br />
        <h4>What happens when I update my email address(or mobile number)?</h4>
        Your login email id(or mobile number) changes,likewise.You'll receive all your account related communication on your updated email address(or mobile number).
        <h4>When will my account be updated with the new email adsress(or mobile number)?</h4>
        It happens as soon as you confirm the verification sent to your email(or mobile) and save the changes.
        <h4>What happens to my existing Flipkart account when I update my email address(or mobile number)?</h4>
        Updating your email address(or mobile number) doesn't invalidate your account.Your account remains fully functional.You'll continue seeing your Order history,saved information and personal details.
        <h4>Does my Seller account get affected when I update my email address?</h4>
        Flipkart has a 'single sign-on' policy.Any changes will reflect in your Seller account also.
        <h4>After how much time does my account reflect changed information?</h4>
        Flipkart ensures account information shows on the dashboard as quickly as posible.If any discrepancy or data loss is present,then changes may reflect within a day.
        <h4>What are the advantages of Flipkart seller account?</h4>
        Flipkart gives access to many automation and analytical tools for sellers which they could use to increase their revenue.Flipkart also gives many logistics support to sllers.
        <h4>What are the advantages of customer support to sellers?</h4>
        Flipkart customer support is available to all sellers for 24*7,absolutely free.You can call at 1111 and talk to our customer support representatives.
        <h4>What are the advantages of customer support to customers?</h4>
        Flipkart customer support is available to all sellers for 24*7,absolutely free.You can call at 2222 and talk to our customer support representatives.
        <h4>What are the products banned for selling on Flipkart site?</h4>
        Second hand mobiles or mobile accessories or damaged electronic parts.Any fake products will be rejected and seller will be delisted.
      </div>
    </div>
  );
}

export default Account;
