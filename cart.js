// cart.js
document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-container");
  
    // Retrieve cart data from local storage (if any)
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    function renderCart() {
      // Clear previous content
      cartContainer.innerHTML = " ";
  
      // Render each item in the cart
      for (const product of cart) {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
  
        const productName = document.createElement("p");
        productName.textContent = product.name;
        const productPrc = document.createElement("p");
        productName.textContent = product.prce;

        const productImg =document.createElement("img");
        productImg.src = `pic/${product.img}`; // Set the image source
        productImg.alt = product.name; // Set the alternative text
        cartItemDiv.appendChild(productImg);
  
        const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";

      // Pass the product ID to the removeFromCart function
      removeBtn.addEventListener("click", function () {
        removeFromCart(product.id);
      });
        cartItemDiv.appendChild(productName);
        cartItemDiv.appendChild(removeBtn);
  
        cartContainer.appendChild(cartItemDiv);
      }
    }
  
    function removeFromCart(productName) {
      // Remove the item from the cart based on the product ID
      
     const updatedCart = cart.filter(item => item.id !== productName);
    
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      
      //Update the cart display
      renderCart();
     
      //document.getElementById("cart-item").removeChild(productName);
    }
  
    // Initial rendering of the cart
    renderCart();
  });
  