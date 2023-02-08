function home(){
    alert("Are  you Ready to go Home")
}
const element = document.querySelector('.navbar-brand');

element.addEventListener('mouseenter', function() {
  element.style.color = 'green';
});

element.addEventListener('mouseleave', function() {
  element.style.color = 'black';
});
const image = document.getElementById("focusmall1");

image.addEventListener("mouseenter", function () {
  image.style.opacity = 0.5;
});

image.addEventListener("mouseleave", function () {
  image.style.opacity = 1;
});




