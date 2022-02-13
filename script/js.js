const left=document.querySelector('.left'),
    right=document.querySelector('.right'),
    button=document.querySelector('.button')

left.addEventListener('click',()=>plusSlides(-1))
right.addEventListener('click',()=>plusSlides(1))

let slideIndex = 1
showSlides(slideIndex)

const plusSlides = n=> showSlides(slideIndex += n)
const currentSlide = n=> showSlides(slideIndex = n)

function showSlides(n) {

    let slides = document.querySelectorAll(".slide")
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"  
    }
    slides[slideIndex-1].style.display = "flex" 
  }