const h3 = document.getElementById('btn');
const list = document.getElementById('list');


list.style.display = "none";

h3.addEventListener("click", (event) =>{
    if (list.style.display == "none"){
        list.style.display = "block"
    } else{
        list.style.display = "none"
    }
})



$(".owl-carousel").owlCarousel({
    // loop: true,
    // dots: true,
    items: 5,
    nav: true,
    // center:true,
    // responsiveClass: true,
    margin:25,
    navText:["<button><i class='fa fa-arrow-left'></i></button>" ,"<button><i class='fa fa-arrow-right'></i></button>"],
});

 
   

