import ProductData from "./ProductData.mjs";
import { initLayout } from "./layout.js";

// Helper to create product card HTML
function productCardTemplate(product) {
  let imgSrc = product.Image.startsWith("../") ? product.Image.replace("../", "/") : product.Image;
  return `<li class="product-card">
    <a href="?product=${product.Id}">
      <img src="${imgSrc}" alt="${product.NameWithoutBrand}" />
      <h3 class="card__brand">${product.Brand?.Name || ""}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p>
    </a>
  </li>`;
}

async function renderProductList() {
  const dataSource = new ProductData("tents");
  const products = await dataSource.getData();
  const productList = document.querySelector(".product-list");
  if (!productList) return;
  productList.innerHTML = products.map(productCardTemplate).join("");
}

function checkForProductView() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("product");
  
  const hero = document.getElementById("hero");
  const products = document.getElementById("products");
  const productDetail = document.getElementById("product-detail");
  
  if (productId) {
    // Show product detail, hide main content
    if (hero) hero.style.display = "none";
    if (products) products.style.display = "none";
    if (productDetail) productDetail.style.display = "block";
  } else {
    // Show main content, hide product detail
    if (hero) hero.style.display = "block";
    if (products) products.style.display = "block";
    if (productDetail) productDetail.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initLayout();
  checkForProductView();
  renderProductList();
});

// Listen for browser back/forward buttons
window.addEventListener("popstate", () => {
  checkForProductView();
});
