export function injectHeader() {
  const header = document.createElement("header");
  header.className = "divider";
  header.innerHTML = `
    <div class="logo">
      <img src="/images/noun_Tent_2517.svg" alt="tent image for logo" />
      <a href="/index.html"> Sleep<span class="highlight">Outside</span></a>
    </div>
    <div class="cart">
      <a href="/cart/index.html">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path d="M18.9 32.6c1.1 2.4 2.5 3.3 5.4 3.3 1.6 0 3.6-0.3 5.9-0.6 3.2-0.5 6.9-1 11.2-1 2.1 0 4.3 0.1 6.4 0.3 2.1 0.1 4.2 0.3 6.1 0.3 3.2 0 5.2-0.4 5.9-1.2 2.7-2.7 2.8-8.8 2.9-14.6 0.1-6.7 0.2-14.5 4.6-18.7 -0.5 0-1 0-1.6 0 -14.2 0-37.5 0-41.1 0C15.6 6.2 14.9 23.6 18.9 32.6z"/>
          <path d="M24.7 71v5h-5.2v-5.4c-1.4-0.3-2.7-0.6-3.7-0.9 -0.9 6.8-1.1 13.3-0.3 14.5 0.4 0.3 2.9 1.1 8 1.1h0c5 0 8.8-0.7 9.7-1.3 0.8-1.3 0.6-7.7-0.4-14.4C30.7 70.1 27.5 70.8 24.7 71z"/>
          <path d="M58.8 68.9c2.9-0.1 6.4-0.9 8.3-1.4 0.1-0.8 0.3-2.8-0.7-3.5 -0.5-0.2-2.5-0.4-5.9-0.4 -4.9 0-8.6 0.4-9.5 0.7 -0.3 0.5-0.5 1.9-0.5 3.3C52.5 68.1 56 69 58.8 68.9z"/>
          <path d="M24.3 68.4c2.9-0.1 6.4-0.9 8.3-1.4 0.1-0.8 0.3-2.8-0.7-3.5 -0.5-0.2-2.5-0.4-5.9-0.4 -4.9 0-8.6 0.4-9.5 0.7 -0.3 0.5-0.5 1.9-0.5 3.3C18 67.7 21.5 68.6 24.3 68.4z"/>
          <path d="M60.1 71.4v3.3h-5.2v-3.4c-1.7-0.3-3.3-0.7-4.6-1 -0.9 6.8-1.1 13.3-0.3 14.5 0.4 0.3 2.9 1.1 8 1.1h0c5 0 8.8-0.7 9.7-1.3 0.8-1.3 0.6-7.7-0.4-14.4C65.5 70.5 62.7 71.1 60.1 71.4z"/>
        </svg>
      </a>
    </div>
  `;
  document.body.insertBefore(header, document.body.firstChild);
}

export function injectFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `&copy;2025 ⛺ SleepOutside ⛺ WDD 330 ⛺ BYU-Idaho for BYU-Pathway Worldwide Online`;
  document.body.appendChild(footer);
}

export function initLayout() {
  // Remove any static header/footer if present
  const staticHeader = document.querySelector("header");
  if (staticHeader) staticHeader.remove();
  const staticFooter = document.querySelector("footer");
  if (staticFooter) staticFooter.remove();
  injectHeader();
  injectFooter();
} 