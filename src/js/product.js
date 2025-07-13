import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

// Determine the category from the current page URL or default to "tents"
function getCategoryFromPage() {
  const path = window.location.pathname;
  if (path.includes('tent')) {
    return "tents";
  } else if (path.includes('backpack')) {
    return "backpacks";
  } else if (path.includes('sleeping')) {
    return "sleeping-bags";
  }
  // Default to tents for now since all current product pages are tents
  return "tents";
}

const dataSource = new ProductData(getCategoryFromPage());

function addProductToCart(product) {
  // Get existing cart items or initialize empty array
  let cartItems = getLocalStorage("so-cart") || [];
  
  // Add the new product to the cart
  cartItems.push(product);
  
  // Save the updated cart back to localStorage
  setLocalStorage("so-cart", cartItems);
  
  // Provide user feedback
  const button = document.getElementById("addToCart");
  const originalText = button.textContent;
  button.textContent = "Added to Cart!";
  button.style.backgroundColor = "#4CAF50";
  
  // Reset button after 2 seconds
  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = "";
  }, 2000);
}

// add to cart button event handler
async function addToCartHandler(e) {
  try {
    const product = await dataSource.findProductById(e.target.dataset.id);
    if (product) {
      addProductToCart(product);
    } else {
      console.error("Product not found");
      alert("Product not found. Please try again.");
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
    alert("Error adding product to cart. Please try again.");
  }
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
