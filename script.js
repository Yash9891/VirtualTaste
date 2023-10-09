let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

document.querySelectorAll('#nav').forEach(function(link) {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});




// Serach button
const clicksearch=document.getElementById("search");
clicksearch.addEventListener('click',function(){
  window.location.href='menu.html';
})


// toogle
// Function to toggle the active class on list items
function toggleActive(event) {
  const listItem = event.target;
  listItem.classList.toggle("active");
}

// Function to toggle the visibility of the navigation list
function toggleNavList() {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("active");
}

// Add click event listeners to list items
const listItems = document.querySelectorAll(".nav-list li a");
listItems.forEach(item => {
  item.addEventListener("click", toggleActive);
});

// Add click event listener to the menu toggle button
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", toggleNavList);










