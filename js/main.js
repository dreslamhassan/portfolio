var navbar = document.getElementById("navbar");
var homeSection = document.getElementById("home");

window.onscroll = function () {
    var sticky = homeSection.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};



var images = document.querySelectorAll('.img-fluid');
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('modalImg');
var currentIndex = 0;

images.forEach(function(image, index) {
  image.addEventListener('click', function() {
    currentIndex = index;
    modalImg.src = this.src;
    modal.style.display = 'flex';
    showArrows(true);
  });
});

function closeModal() {
  modal.style.display = 'none';
  showArrows(false);
}

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

function navigateGallery(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  modalImg.src = images[currentIndex].src;
}

document.addEventListener('keydown', function(event) {
  if (modal.style.display === 'flex') {
    if (event.key === 'ArrowLeft') {
      navigateGallery(-1);
    } else if (event.key === 'ArrowRight') {
      navigateGallery(1);
    } else if (event.key === 'Escape') {
      closeModal();
    }
  }
});

function showArrows(show) {
  var arrows = document.querySelectorAll('.arrow');
  arrows.forEach(function(arrow) {
    arrow.style.display = show ? 'block' : 'none';
  });
}




