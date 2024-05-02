const elMap = [
    ["btnLinks","button.links"],
    ["links","div.links"]
]
const el = Object.fromEntries(elMap.map( ([name,selector]) => [name ,document.querySelector(selector)] ))
const toggleHidden = (element) => {element.classList.toggle("hidden")}

el.btnLinks.addEventListener("click", (e) => {
    el.links.classList.toggle("close")
})