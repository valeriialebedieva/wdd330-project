import { initLayout } from "./layout.js";
import ProductData from "./ProductData.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";

function getProductIdFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("product");
}

function productDetailTemplate(product) {
  let imgSrc = product.Image.startsWith("../") ? product.Image.replace("../", "/") : product.Image;
  return `
    <h3>${product.Brand?.Name || ""}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img class="divider" src="${imgSrc}" alt="${product.NameWithoutBrand}" />
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors?.[0]?.ColorName || ""}</p>
    <p class="product__description">${product.DescriptionHtmlSimple || ""}</p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>
  `;
}

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

async function renderProductDetail() {
  const id = getProductIdFromQuery();
  if (!id) return;
  
  const dataSource = new ProductData("tents");
  const product = await dataSource.findProductById(id);
  const detailSection = document.getElementById("product-detail");
  
  if (!product) {
    detailSection.innerHTML = `<p>Product not found.</p>`;
    return;
  }
  
  detailSection.innerHTML = productDetailTemplate(product);
  
  // Add event listener for the add to cart button
  const addToCartButton = document.getElementById("addToCart");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", () => addProductToCart(product));
  }
}

// Only run if we're on a product page
if (getProductIdFromQuery()) {
  document.addEventListener("DOMContentLoaded", () => {
    renderProductDetail();
  });
} 