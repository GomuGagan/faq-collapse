const btns = document.querySelectorAll(".faq-toggle");


console.log(btns);
btns.forEach((btn) => {

   btn.addEventListener("click", () => {
        btn.parentNode.classList.toggle("active")
        console.log('click')
    })
    
});