import ProductData from "./ProductData.mjs";

// Helper to create product card HTML
function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="product_pages/${product.Id.toLowerCase()}.html">
      <img src="${product.Image}" alt="${product.NameWithoutBrand}" />
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

document.addEventListener("DOMContentLoaded", renderProductList);
