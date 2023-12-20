let menuToggle = document.querySelector('.menuToggle'); /*assigin value */
let header = document.querySelector('header');
menuToggle.onclick = function() {
    header.classList.toggle("active");
}