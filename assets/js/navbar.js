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
