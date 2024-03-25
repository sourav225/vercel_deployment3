**Project Intro**

This is my DCX-App Store Ecommerce Website.I have tried to replicate the project as close to what was provided in the document.

I have tried to make the website as dynamic as possible by fetching data from database.Most of the data being shown here is through api calls with the help of axios.I have dealt with those api calls in my server file.I have used Mongoose Schema too to fetch my data properly and defined the datatypes of my fields.I have used cookies for my login and logout.So,the site can survive the refresh.Also,most of my components have been made through Bootstrap 4.6.My Server Backend is running on port 5000 and my React Project is running on port 3000.

My product catalog consists of mobile phones.I have used React routing,button routing and dynamic routing.

**> Home Component**

**Navbar:-**

I have five nav-items in my Navbar Component.These are Home,What's New,Specials,Products and Signup.

For,What's New,Specials I have done Dynamic Routing towards Product Page which accepts a Id and displays the Product Information.Now,for the Id to be handled I have used UseParams from React-Router-Dom.With the incoming Id I have made axios.get request to my backend server and returned a json from backend.Now with the incoming Json I have printed the information in a Bootstrap Table.I have also displayed the images in the the product page and also applied my some animation to it.

**Carousel-**
For Carousel I have used Bootstrap 4.6.For the Carousel to work properly I have installed jquery,popper and font-awesome.

Below,are the Carousel Indicators which are made with li tag.I have made the width and height of indiactor li tag equal and then applied a 50% border-radius.For navigating to the Next and Previous Carousel Item,I have the arrow buttons in place which I have used to navigate to the desired Carousel Item respectively.I have adjusted the margin and padding accordingly to make the Carousel UI look good.The Carousel has a black background and the image background is also black which give give it a nice effect.The Button inside each Carousel Item also directs me to the Product Page dynamically with an Id.

**Bootstarp Pills**

Over here I have used Bootstrap pills where I have five pills,whenever I am clicking on any pill,some content is being shown. In all the Pills the Read More button takes me to the Product Page dynamically with the help of an Id.I have applied proper padding and margin show that my Pill Content and and Pill Image respectively are shown properly for my UI too look good.

**Product Component**

For my Product Component I have dynamically fetched all the products.I have taken a div and within the div I am displaying the Bootstrap Cards.The Cards consist of the product name,price,description,rating,and no. of reviews.The Image url is set with respect to index.html in the public folder because everything we nedd renders there.

I also have a Add to Cart button functionality within these cards but in the home component they are disabled as shown in the document.In my Products Page,Add to Cart is enabled.
