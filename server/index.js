const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const products = require("./models/Product"); // Create the Product model
const cart = require("./models/CartModel");
const users = require("./models/Users");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
const corsOptions = {
  origin: "https://vercel-deployment3-client3.vercel.app",
  methods:["GET","POST","PUT","DELETE"],
  credentials: true,
  exposedHeaders: ["Content-Length", "Authorization","Set-Cookie"],
  maxAge: 86400// Allow cookies to be sent with requests
};

app.use(cors(corsOptions));

app.use(express.json());
const PORT = 5000;

mongoose.connect("mongodb+srv://souravlayekjsr100:Sourav%40123@cluster0.yhf674r.mongodb.net/ecommerce?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/api/products", async (req, res) => {
  try {
    const Products = await products.find();
    res.json({ dat: Products });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const Products = await products.findOne({ id: parseInt(req.params.id) });
    res.json({ datap: Products });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
app.get("/api/cart", async (req, res) => {
  const usernameent = req.body.useremail;
  console.log(usernameent);
  try {
    const Cartitems = await cart.find({ username: usernameent });
    if (usernameent) {
      res.json({ datap: Cartitems });
    } else {
      res.json({ datap: "" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
app.get("/api/addtocart/:id", async (req, res) => {
  const usernameent = req.body.useremail;
  try {
    // Assuming you have the username stored in the session

    if (!usernameent) {
      console.log("User not logged in");
      return res.json({ res: "Not Approved" });
    }

    const productId = parseInt(req.params.id);
    let quantity = 0;

    const cartItems = await cart.findOne({ username: usernameent });
    const product = await products.findOne({ id: productId });

    if (!product) {
      console.log("Product not found");
      return res.status(404).json({ error: "Product not found" });
    }

    console.log(product.price);
    console.log(product.title);
    console.log(cartItems);

    let foundProductIndex = -1;
    let finalcart = [];

    if (cartItems) {
      finalcart = cartItems.cartInfo;

      for (let i = 0; i < finalcart.length; i++) {
        if (finalcart[i].productId === productId) {
          foundProductIndex = i;
          quantity = finalcart[i].quantity + 1;
          break;
        }
      }
    }

    const fp = product.price;

    if (foundProductIndex !== -1) {
      finalcart[foundProductIndex] = {
        productId: productId,
        quantity: quantity,
        productUrl: product.url,
        price: fp,
        productTitle: product.title,
      };

      await cart.findOneAndUpdate({ username: usernameent }, { $set: { username: usernameent, cartInfo: finalcart } }, { new: true });

      return res.json({ res: "Approved" });
    }

    // Product not found, add a new entry
    const newProduct = {
      productId: productId,
      quantity: 1,
      productUrl: product.url,
      price: fp,
      productTitle: product.title,
    };

    finalcart.push(newProduct);

    if (cartItems) {
      await cart.findOneAndUpdate({ username: usernameent }, { $set: { username: usernameent, cartInfo: finalcart } }, { new: true });
    } else {
      await cart.create({ username: usernameent, cartInfo: finalcart });
    }

    return res.json({ res: "Approved" });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

app.get("/api/minustocart/:id", async (req, res) => {
  const usernameent = req.body.useremail;
  try {
    const productId = parseInt(req.params.id);
    let quantity = 0;

    let cartItems = await cart.findOne({ username: usernameent });
    const Products = await products.findOne({ id: productId });
    let foundProductIndex = -1;

    let finalcart = cartItems.cartInfo;

    for (let i = 0; i < finalcart.length; i++) {
      if (finalcart[i].productId === productId) {
        foundProductIndex = i;
        quantity = finalcart[i].quantity - 1;
        break;
      }
    }
    let fp = Products.price;
    finalcart[foundProductIndex] = { productId: productId, quantity: quantity, productUrl: Products.url, price: fp, productTitle: Products.title };
    console.log(finalcart);
    if (quantity === 0) {
      finalcart.splice(foundProductIndex, 1);
    }
    const result = await cart.findOneAndUpdate({ username: usernameent }, { $set: { cartInfo: finalcart } }, { new: true });

    res.json({ res: "Approved" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/removefromcart/:id", async (req, res) => {
  const usernameent = req.body.useremail;
  try {
    const productId = parseInt(req.params.id);

    let cartItems = await cart.findOne({ username: usernameent });
    let foundProductIndex = -1;

    let finalcart = cartItems.cartInfo;

    for (let i = 0; i < finalcart.length; i++) {
      if (finalcart[i].productId === productId) {
        foundProductIndex = i;
        break;
      }
    }
    finalcart.splice(foundProductIndex, 1);
    const result = await cart.findOneAndUpdate({ username: usernameent }, { $set: { cartInfo: finalcart } }, { new: true });

    res.json({ res: "Approved" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.post("/signup", async (req, res) => {
  const { name, mobilenumber, email, password, address, address2, city, state, zip } = req.body;
  console.log(name);
  console.log(req.body);
  const existingUser = await users.findOne({ email: email });
  if (existingUser) {
    console.log("hfttffj");
    return res.status(202).json({ dataconfirm: "User with same Email Present" });
  }
  try {
    const result = await users.create({ name: name, email: email, password: password, number: mobilenumber, address: address, address2: address2, city: city, state: state, zip: zip });
    console.log("result", result.address);
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ dataconfirm: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  try {
    // Check if user with provided email and password exists
    const User = await users.findOne({ email, password });

    if (User) {
      res.status(200).json({ message: "Login successful!", username: User.name, useremail: User.email });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/logout", async (req, res) => {
  try {
    res.status(200).json({ message: "Logout successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.post("/search", async (req, res) => {
  const search = req.body.searchTerm;
  try {
    const Products = await products.findOne({ searchTerms: search });
    console.log(Products);
    if (Products) {
      res.status(200).json({ message: "Product Found", datato: Products });
      console.log("guygyg");
    } else {
      res.status(404).json({ message: "Product Not Found" });
      console.log("tdytf");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/check", async (req, res) => {
  try {
    const loggedInCookie = req.body.loggedIn === "true";
    console.log(loggedInCookie);

    if (loggedInCookie) {
      const username = req.body.useremail;
      console.log(username);
      const user = await users.findOne({ email: username });

      if (user) {
        console.log(user.name);
        return res.json({ res: "Approved", namesend: user.name, datap: user });
      }
    }

    // If the user is not logged in or not found, you might want to handle it accordingly.
    return res.json({ res: "Not Found" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ res: "Error occurred" });
  }
});

app.post("/updateUser", async (req, res) => {
  const updatedUser = req.body.user;
  console.log(updatedUser);

  try {
    const User = await users.findOne({ email: req.body.user.email });

    if (!User) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update user data in the database
    const result = await users.findOneAndUpdate({ email: req.body.user.email }, { $set: updatedUser }, { new: true });

    // Check if the update was successful
    if (result) {
      console.log("User data updated successfully");
      return res.json({ res: "Success", updatedUser: result });
    } else {
      console.log("Failed to update user data");
      return res.status(500).json({ error: "Failed to update user data" });
    }
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
