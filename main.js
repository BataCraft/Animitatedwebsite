const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



document.querySelector("#elm")


const elemC = document.querySelector(".element")
const elmD = document.querySelector("#fixed_img")
elemC.addEventListener("mouseenter", ()=>{
    elmD.style.display = "block"
})
elemC.addEventListener("mouseleave", ()=>{
    elmD.style.display = "none"
})

var elems = document.querySelectorAll(".el")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        elmD.style.backgroundImage = `url(${image})`
    })
})