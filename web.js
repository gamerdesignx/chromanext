document.addEventListener("DOMContentLoaded", function() {
    const menubtn = document.getElementById("menubtn")
    const menu = document.getElementById("menu")

    menubtn.addEventListener("click", function() {
        menu.classList.toggle("active")
    })
})