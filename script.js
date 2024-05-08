const toggleHidden = (element) => {element.classList.toggle("hidden")}

const elMap = [
["leftNav",".leftNav"],
["buttonLeftNav",".buttonLeftNav"],

["linkProjects",".linkProjects"],
["linkAbout",".linkAbout"],
["linkContact",".linkContact"],

]
const el = Object.fromEntries(elMap.map( ([name,selector]) => [name ,document.querySelector(selector)] ))
const elsMap = [
["img","img"],

]
const els = Object.fromEntries(elsMap.map( ([name,selector]) => [name ,document.querySelectorAll(selector)] ))


el.buttonLeftNav.addEventListener("click", (e) => {
    el.leftNav.classList.toggle("show")
})


document.body.addEventListener("click", (e) => {
    if (e.target !== el.leftNav  && e.target !== el.buttonLeftNav ) {
        el.leftNav.classList.remove("show")
    }
  
})

els.img.forEach((img) => {
    img.addEventListener("click", (e) => {
        e.target.classList.toggle("largeImg")
    })
})
document.body.addEventListener("click", (e) => {
    els.img.forEach((img) => {
        if(e.target !== img){img.classList.remove("largeImg")}
    })
})