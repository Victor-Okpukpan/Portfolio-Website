// FIXED NAVIGATION BAR
window.addEventListener('scroll', function(){
    let navBar = document.getElementById("nav-bar");
    navBar.classList.toggle('fixed', this.window.scrollY > 0);
});
// END FIXED NAVIGATION BAR

// PORTFOLIO FILTER
let filterContainer = document.querySelector(".filter");
let portfolioItems = document.querySelectorAll(".portfolio-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        
        
        // deactivates existing filter item
        filterContainer.querySelector(".active").classList.remove("active");
        // activates new filter item
        event.target.classList.add("active");

        let filterValue = event.target.getAttribute("data-filter");
        portfolioItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
}); 
// END PORTFOLIO FILTER

// CONTACT FORM FUNCTIONALITY
const form = document.querySelector("#form");

function sendMail(e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");

    let params = {
        from_name: name.value,
        email_id: email.value,
        subject: subject.value,
        message: message.value
    }

    emailjs.send("service_jwbrf2v", "template_mklkzti", params).then(function (res){
        alert("success! " + res.status);
    })
}

form.addEventListener("submit", sendMail);
// END CONTACT FORM FUNCTIONALITY