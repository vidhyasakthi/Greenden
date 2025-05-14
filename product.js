// Selecting side Navbar, MenuIcon
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// Product Search Functionality

var productContainer = document.getElementById("product-container")
 var Search = document.getElementById("Search")
 var productlist = productContainer.querySelectorAll("div")


 Search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count =0; count<productlist.length; count = count+1)
    {
        var productname = productlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
 })