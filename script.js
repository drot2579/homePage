const toggleHidden = (element) => { element.classList.toggle("hidden") }

const elMap = [
    ["leftCol", ".leftCol"],
    ["buttonLeftCol", ".buttonLeftCol"],

    ["linkProjects", ".linkProjects"],
    ["linkAbout", ".linkAbout"],
    ["linkContact", ".linkContact"],
    ["btnDark", ".btnDark"]
]
const el = Object.fromEntries(elMap.map(([name, selector]) => [name, document.querySelector(selector)]))
const elsMap = [
    ["img", "img"],

]
const els = Object.fromEntries(elsMap.map(([name, selector]) => [name, document.querySelectorAll(selector)]))


el.buttonLeftCol.addEventListener("click", (e) => {
    el.leftCol.classList.toggle("show")
})


document.body.addEventListener("click", (e) => {
    if (e.target !== el.leftCol && e.target !== el.buttonLeftCol) {
        el.leftCol.classList.remove("show")
    }

})

els.img.forEach((img) => {
    img.addEventListener("click", (e) => {
        e.target.classList.toggle("largeImg")
    })
})
document.body.addEventListener("click", (e) => {
    els.img.forEach((img) => {
        if (e.target !== img) { img.classList.remove("largeImg") }
    })
})


el.btnDark.addEventListener("click", (e) => {
    document.querySelectorAll("*").forEach((element) => {
        element.classList.toggle("dark")
    })
})