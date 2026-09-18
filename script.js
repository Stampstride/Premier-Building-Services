const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const partnerGrid = document.getElementById("partner-grid");
const partners = SITE_CONFIG?.featuredPartners || [];

if (partners.length) {
  partnerGrid.innerHTML = partners.map(partner => `
    <article class="partner-card">
      <div class="partner-logo-wrap">
        <img class="partner-logo" src="${escapeHtml(partner.logo || "")}" alt="${escapeHtml(partner.logoAlt || partner.name || "Partner logo")}" loading="lazy" />
      </div>
      <div class="partner-card-copy">
        <p class="eyebrow">${escapeHtml(partner.label || "Commercial Service Partner")}</p>
        <h3>${escapeHtml(partner.name)}</h3>
        <p class="partner-year">Contracted for ${escapeHtml(partner.year || "2027")}</p>
        <p>${escapeHtml(partner.description || "")}</p>
      </div>
    </article>
  `).join("");
} else {
  partnerGrid.innerHTML = `
    <div class="partner-placeholder">
      <strong>Future partnerships and accomplishments can be featured here.</strong>
      <div>Add them in <code>site-config.js</code> when they're ready to announce.</div>
    </div>
  `;
}

const form = document.getElementById("booking-form");
const success = document.getElementById("form-success");

form?.addEventListener("submit", event => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());
  data.savedAt = new Date().toISOString();

  localStorage.setItem("pbs-service-request", JSON.stringify(data));
  success.hidden = false;
  form.reset();
  success.scrollIntoView({ behavior: "smooth", block: "center" });
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
