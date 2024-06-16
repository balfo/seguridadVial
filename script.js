document.getElementById('navbar-toggler').addEventListener('click', function() {
    var nav = document.getElementById('navbarNavDropdown');
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
});
