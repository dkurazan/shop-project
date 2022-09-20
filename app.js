// slider
$(document).ready(function(){
    $('.slider-block').slick({
        dots: true,
    });
  });

// Add to cart button
let productsCountEl = document.getElementById("products-count")
let addToCartButtons = document.querySelectorAll(".button-add")

addToCartButtons.forEach(item => {
    item.addEventListener("click", function(event){
        event.preventDefault();
        productsCountEl.textContent = +productsCountEl.textContent + 1;
        console.log(bb)
    })
})


//modal
let modal = document.querySelector(".modal")
let moreDetailsBtn = document.querySelectorAll(".more-details")
let closeBtn = document.querySelector('.btn-close div')

function closeModal(){
    modal.classList.remove("show-modal")
    modal.classList.add("hide-modal")
}

function openModal(){
    modal.classList.add("show-modal")
    modal.classList.remove("hide-modal")
}

moreDetailsBtn.forEach(item =>{
    item.addEventListener("click", function(event){
        event.preventDefault();
        openModal()
    })
})

modal.addEventListener("click", function(event){
    if(event.target === modal){
        closeModal()
    }
})

closeBtn.addEventListener("click", closeModal)

// show modal window on the half of page
function showModalByScroll(){
    if(window.pageYOffset > document.documentElement.scrollHeight/2){
        openModal()
        window.removeEventListener("scroll", showModalByScroll)
    }
}

window.addEventListener("scroll", showModalByScroll)



// cange like button state
let likeButton = document.querySelectorAll(".like-icon")

likeButton.forEach(item =>{
    item.addEventListener("click", function(){
        item.classList.toggle("like-icon-fill")
    })
})


//counter
let quantityValue = document.querySelectorAll(".product-quantity__inner input");
let fatherElement = document.querySelectorAll(".product-quantity__inner")

function Counter(incrementButton, decrementButton, inputField){
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField
    }

    this.increment = function(){
        if(this.domRefs.inputField.value < 10){
            this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        } 
    }

    this.decrement = function(){
        if(this.domRefs.inputField.value > 1){
            this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        } 
    }

    this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this))
    this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this))
}
fatherElement.forEach(item => {
    let decrementButtons = item.firstElementChild;
    let quantityValue = item.firstElementChild.nextElementSibling;
    let incrementButtons = item.lastElementChild;
    
    let counter1 = new Counter(incrementButtons, decrementButtons, quantityValue)
})




