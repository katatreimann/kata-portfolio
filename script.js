var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "image/kata19.png"; // Replace with the correct path to your image

    var imgWidth = 70; // Set the desired width
    var imgHeight = 70; // Set the desired height

    var imgX = Math.random() * (canvas.width - imgWidth);
    var imgY = Math.random() * (canvas.height - imgHeight);
    var imgRotation = 0;
    var imgRotationSpeed = 0.01;
    var imgXSpeed = 1;
    var imgYSpeed = 1;

    var animateImage = true; // Flag to control animation

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function drawImage() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (imgX + imgWidth > canvas.width || imgX < 0) imgXSpeed = -imgXSpeed;
        if (imgY + imgHeight > canvas.height || imgY < 0) imgYSpeed = -imgYSpeed;
        imgX += imgXSpeed;
        imgY += imgYSpeed;
        imgRotation += imgRotationSpeed;

        ctx.save();
        ctx.translate(imgX + imgWidth / 2, imgY + imgHeight / 2);
        ctx.rotate(imgRotation);
        ctx.drawImage(img, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
        ctx.restore();

        if (animateImage) {
            requestAnimationFrame(drawImage);
        }
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    // Start animation automatically
    drawImage();

    // Stop and resume animation with the button
    var stopButton = document.getElementById("stopButton");
    stopButton.addEventListener("click", function () {
        var paragraph = stopButton.querySelector("p");
        if (paragraph.textContent === "stop animation") {
            paragraph.textContent = "start animation";
            animateImage = false;
        } else {
            paragraph.textContent = "stop animation";
            animateImage = true;
            drawImage();
        }
    });


// PortfolioLayer


document.addEventListener("DOMContentLoaded", function () {
  // Find the portfolio link element
  var portfolioLink = document.querySelector('.link[href="#portfolioLayer"]');

  // Find the portfolio layer container element
  var portfolioLayer = document.getElementById('portfolioLayer');

  // Add a click event listener to the portfolio link
  portfolioLink.addEventListener('click', function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Show the portfolio layer
    portfolioLayer.style.visibility = 'visible';

    // Add a general mousedown event listener to the document
    document.addEventListener('mousedown', closePortfolioLayer);

    // Add a mousedown event listener to the portfolio layer element to prevent it from closing
    portfolioLayer.addEventListener('mousedown', function (event) {
      event.stopPropagation();
    });
  });

  // Function to close the portfolio layer
  function closePortfolioLayer(event) {
    // If the mousedown is not inside the portfolio layer
    if (!portfolioLayer.contains(event.target)) {
      // Hide the portfolio layer
      portfolioLayer.style.visibility = 'hidden';

      // Remove the mousedown event listener from the document
      document.removeEventListener('mousedown', closePortfolioLayer);
    }
  }
});


// Close warning

function hideWarning() {
  var warning = document.getElementById('warning');
  warning.style.display = 'none';
}

// Hide warning after 10 seconds
setTimeout(hideWarning, 10000);








