var my_canvas = document.getElementById("mycanvas");
var my_context = my_canvas.getContext("2d");
my_context.fillStyle="black";
my_context.fillRect(10, 10, 1290, 50);
my_context.fillStyle = "blue";
my_context.font = "bold 46px chiller";
my_context.fillText("The Mega Store...", 500, 50);
// Select the element
//const clothing = document.querySelector('.clothing');

// Set the transform property
//clothing.style.transform = 'translate(100px, 100px)';

document.querySelectorAll('.img1, .img2').forEach(function(img) {
    img.addEventListener('click', function() {
        document.querySelector('.cart').appendChild(img);
    });
})

document.querySelectorAll('.img1, .img2').forEach(function(img) {
    img.addEventListener('click', function() {
        document.querySelector('.cart-items').appendChild(img);
    });
});