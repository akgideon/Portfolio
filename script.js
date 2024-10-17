// Get modal elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Select all images
const images = document.querySelectorAll(".gallery-img");

// Add click event to all images
images.forEach(image => {
    image.addEventListener("click", function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

// Close modal when clicking on the close button
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking anywhere outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
