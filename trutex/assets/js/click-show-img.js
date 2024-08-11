document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-img");
    var closeBtn = document.querySelector(".modal .close");

    // Open modal when an image is clicked
    document.querySelectorAll('.single-project-item').forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var imgSrc = this.getAttribute('data-image');
            modalImg.src = imgSrc;
            modal.style.display = "block";
        });
    });

    // Close the modal when the "X" button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
