(function () {
  function navItem(label, href, key, activePage) {
    var isActive = key === activePage;
    return (
      '<li class="nav-item">' +
      '<a class="nav-link text-white' +
      (isActive ? ' active' : '') +
      '" ' +
      (isActive ? 'aria-current="page" ' : '') +
      'href="' +
      href +
      '">' +
      label +
      "</a>" +
      "</li>"
    );
  }

  function renderNavbar(activePage, basePath) {
    var mount = document.getElementById("site-navbar");
    if (!mount) return;
    var base = basePath || "";

    // ==========================================
    // 🛠️ OTOMATIS GENERATE FAVICON & APPLE ICON
    // ==========================================
    var head = document.head;

    // Bersihkan favicon lama bawaan HTML (jika ada) supaya tidak duplikat
    var existingIcons = head.querySelectorAll("link[rel*='icon']");
    existingIcons.forEach(function (icon) { icon.remove(); });

    // Buat element link untuk Favicon standard di tab browser
    var favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = base + "assets/images/Logo.png";

    // Buat element link untuk Apple Touch Icon (shortcut di layar HP)
    var appleIcon = document.createElement("link");
    appleIcon.rel = "apple-touch-icon";
    appleIcon.href = base + "assets/images/Logo.png";

    // Suntikkan keduanya ke dalam <head>
    head.appendChild(favicon);
    head.appendChild(appleIcon);
    // ==========================================

    mount.innerHTML =
      '<nav class="navbar navbar-expand-lg navbar-dark bg-body-transparent fixed-top">' +
      '<div class="container-fluid site-nav-inner">' +
      '<a class="navbar-brand text-white" href="' +
      base +
      'index.html">' +
      '<img src="' +
      base +
      'assets/images/Logo.png" alt="Logo" class="site-logo" />' +
      "</a>" +
      '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
      '<span class="navbar-toggler-icon"></span>' +
      "</button>" +
      '<div class="collapse navbar-collapse" id="navbarNav">' +
      '<ul class="navbar-nav ms-auto gap-5">' +
      navItem("Home", base + "index.html", "home", activePage) +
      navItem("Contact", base + "contact.html", "contact", activePage) +
      navItem("Commission", base + "commission.html", "commission", activePage) +
      "</ul>" +
      "</div>" +
      "</div>" +
      "</nav>";
  }

  window.renderNavbar = renderNavbar;
})();

(function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // Bail out on pages that don't have a lightbox
  if (!lightbox || !lightboxImg) return;

  function openLightbox(src, alt) {
    if (!src) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('active');
  }

  // Handler for .portfolio-img (div with --img1 CSS variable)
  document.querySelectorAll('.portfolio-img').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const img1 = getComputedStyle(el).getPropertyValue('--img1').trim();
      const match = img1.match(/url\(["']?(.+?)["']?\)/);
      if (match) openLightbox(match[1], '');
    });
  });

  // Handler for .card-img and .thumb-img (actual <img> elements)
  document.querySelectorAll('.card-img, .thumb-img').forEach(img => {
    img.addEventListener('click', () => {
      openLightbox(img.src, img.alt);
    });
  });

  // Close on click anywhere
  lightbox.addEventListener('click', () => lightbox.classList.remove('active'));

  // Close on ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.classList.remove('active');
  });
})();