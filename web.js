document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("title").classList.toggle("active")
    document.getElementById("desc").classList.toggle("active")

    const menubtn = document.getElementById("menubtn")
    const menu = document.getElementById("menu")

    menubtn.addEventListener("click", function() {
        menu.classList.toggle("active")
        menubtn.textContent = menu.classList.contains("active") ? "notes" : "menu"
    })
})