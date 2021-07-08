let currentImage = document.getElementById("currentImage");
let imageNumber = 1;

function startCarousel() {
    currentImage.src = "images/" + imageNumber + ".jpeg";
    setInterval(changeImage, 2000);
}

function changeImage() {
    imageNumber++;
    if (imageNumber > 6) {
        imageNumber = 1;
    }
    currentImage.src = "images/" + imageNumber + ".jpeg";
}
