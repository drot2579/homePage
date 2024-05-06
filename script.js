const elMap = [
["leftCol",".leftCol"],
["buttonLeftCol",".buttonLeftCol"],

["linkProjects",".linkProjects"],
["linkAbout",".linkAbout"],
["linkContact",".linkContact"],

]
const el = Object.fromEntries(elMap.map( ([name,selector]) => [name ,document.querySelector(selector)] ))
const toggleHidden = (element) => {element.classList.toggle("hidden")}


el.buttonLeftCol.addEventListener("click", (e) => {
    el.leftCol.classList.toggle("show")
})


document.body.addEventListener("click", (e) => {
    if (e.target !== el.leftCol  && e.target !== el.buttonLeftCol ) {
        el.leftCol.classList.remove("show")
    }
  
})

document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", (e) => {
        e.target.classList.toggle("largeImg")
    })
})