const products = [{
         
    id:1,
    name:"Sofa",
    type:"indoor",
    prce:"1200",
    img: "bedban.jpg"
},
{
 
 id:2,
 name:"Sofa",
 type:"indoor",
 prce:"1200",
 img: "sofa.jfif"
},
{
 
 id:3,
 name:"Sofa",
 type:"indoor",
 prce:"1200",
 img: "sofa2ban3.jpeg"
},
{
 
 id:4,
 name:"Sofa",
 type:"indoor",
 prce:"1200",
 img: "sofban2.jpg"
},
{
 
 id:5,
 name:"Adenium",
 type:"indoor",
 prce:"1200",
 img: "adenium-plant.jpeg"
},
{
 
 id:6,
 name:"Adenium",
 type:"indoor",
 prce:"1200",
 img: "adenium-plant.jpeg"
},
{
 
 id:7,
 name:"Adenium",
 type:"indoor",
 prce:"1200",
 img: "adenium-plant.jpeg"
},{
 
 id:8,
 name:"Adenium",
 type:"indoor",
 prce:"1200",
 img: "adenium-plant.jpeg"
},
{
 
 id:9,
 name:"Adenium",
 type:"indoor",
 prce:"1200",
 img: "adenium-plant.jpeg"
},
{
 
 id:10,
 name:"Adenium",
 type:"indoor",
 prce:"1200",
 img: "adenium-plant.jpeg"
},{
 
 id:11,
 name:"Adenium",
 type:"indoor",
 prce:"1200",
 img: "adenium-plant.jpeg"
},
{
 
 id:12,
 name:"Adenium",
 type:"indoor",
 prce:"1200",
 img: "adenium-plant.jpeg"
},
{
 
 id:13,
 name:"Adenium",
 type:"indoor",
 prce: "1200",
 img: "adenium-plant.jpeg"
},
];

// script.js
document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("product-container");
   
    function loadImage(imgSrc) {
      const img = document.createElement("img");
      img.className = "img";
      // Concatenate the folder path with the image filename
      img.src = `pic/${imgSrc}`;
      img.alt = "Product Image";
      return img;
    }

    function addToCart(product) {
        // Retrieve cart data from local storage (if any)
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
        // Check if the product is already in the cart
        const isProductInCart = cart.some(item => item.id === product.id);
    
        if (!isProductInCart) {
          cart.push(product);
          localStorage.setItem("cart", JSON.stringify(cart));
          alert(`${product.name} added to cart!`);
        } else {
          alert(`${product.name} is already in the cart!`);
        }
      }
  
    // Loop through the products and create HTML elements for each
    for (const product of products) {
      const productDiv = document.createElement("div");
      productDiv.className = "lst1";
  
      const img = loadImage(product.img);
  
      const addToCartBtn = document.createElement("button");
      addToCartBtn.className = "btn";
      addToCartBtn.textContent = "Add to cart";
      addToCartBtn.addEventListener("click", function () {
        addToCart(product);
      });
       
      const productInfoDiv = document.createElement("div");
      productInfoDiv.className = "prd-info";
  
      const h1 = document.createElement("h1");
      h1.id = "h1";
      h1.style.fontSize = "16px";
      h1.textContent = product.name;
  
      const type = document.createElement("h1");
      type.id = "typ";
      type.style.fontSize = "12px";
      type.textContent =  product.type;
  
      const price = document.createElement("h3");
      price.id = "prc";
      price.innerHTML = '&#8377;'+product.prce;
  
      productInfoDiv.appendChild(h1);
      productInfoDiv.appendChild(type);
      productInfoDiv.appendChild(price);
  
      productDiv.appendChild(img);
      productDiv.appendChild(addToCartBtn);
      productDiv.appendChild(productInfoDiv);
  
      productContainer.appendChild(productDiv);
    }
  });


  