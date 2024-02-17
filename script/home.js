function displayMenu() {
    let menuLinks = document.querySelector(".navLinks");

    if (menuLinks.style.display === "block") {
        menuLinks.style.display = "none";
    } else {
        menuLinks.style.display = "block";
    }
}

