/*When clicking on the nav option, if toggle = close, open it. If toggle = open, close it */
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
    element.addEventListener("click", function() {
        nav.classList.toggle("show")
    })    
}

/* When a nav link is clicked, close the toggle and goes to the respective link*/
const links = document.querySelectorAll("div ul li a")

for(const link of links) {
    link.addEventListener("click", function() {
        nav.classList.toggle("show")
    })
}

