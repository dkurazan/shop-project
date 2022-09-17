// Add to cart button
let productsCountEl = document.getElementById("products-count")
let addToCartButtons = document.querySelectorAll(".button-add")

addToCartButtons.forEach(item => {
    item.addEventListener("click", function(event){
        event.preventDefault();
        productsCountEl.textContent = +productsCountEl.textContent + 1;
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


// fill like button
let likeButton = document.querySelectorAll(".like-icon")

likeButton.forEach(item =>{
    item.addEventListener("click", function(){
        item.classList.toggle("like-icon-fill")
    })
})