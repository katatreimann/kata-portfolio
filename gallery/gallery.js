






// Add an event listener to each image
document.querySelectorAll('.img-1, .img-2, .img-3, .img-4, .img-5, .img-6, .img-7, .img-8, .img-9').forEach(img => {
    img.addEventListener('click', function () {
        expandImage(this.src);
    });
});

// Function to expand the clicked image
function expandImage(src) {
    const expandedContainer = document.getElementById('expanded-container');
    const expandedImg = document.getElementById('expanded-img');

    expandedImg.src = src;
    expandedContainer.style.display = 'flex';

    // Add a click event listener to close the expanded view
    expandedContainer.addEventListener('click', function () {
        expandedContainer.style.display = 'none';
    });
}

