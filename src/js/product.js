import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

// Hardcode the category to 'tents' for debugging
const dataSource = new ProductData("tents");

function addProductToCart(product) {
  let cartItems = getLocalStorage("so-cart") || [];
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
  const button = document.getElementById("addToCart");
  const originalText = button.textContent;
  button.textContent = "Added to Cart!";
  button.style.backgroundColor = "#4CAF50";
  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = "";
  }, 2000);
}

async function addToCartHandler(e) {
  try {
    console.log("Button clicked, data-id:", e.target.dataset.id);
    const product = await dataSource.findProductById(e.target.dataset.id);
    console.log("Product found:", product);
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

document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
