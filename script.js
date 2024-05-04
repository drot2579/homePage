const elMap = [
    ["btnLinks","button.links"],
    ["links","div.links"],
    ["leftMenu",".leftMenu"],
    ["leftMenuButton",".leftMenuButton"],
    ["leftMenuCurtain",".leftMenuCurtain"],
    ["topMenu",".topMenu"],
    ["topMenuButton",".topMenuButton"],

]
const el = Object.fromEntries(elMap.map( ([name,selector]) => [name ,document.querySelector(selector)] ))
const toggleHidden = (element) => {element.classList.toggle("hidden")}

// el.btnLinks.addEventListener("click", (e) => {
//     el.links.classList.toggle("close")
// })

el.leftMenuButton.addEventListener("click", (e) => {
    el.leftMenu.classList.toggle("swiped")
    el.leftMenuCurtain.classList.toggle("swiped")
})

el.leftMenuCurtain.addEventListener("click", (e) => {
    el.leftMenuCurtain.classList.add("swiped")
    el.leftMenu.classList.add("swiped")
})

el.topMenuButton.addEventListener("click", (e) => {
    el.topMenu.classList.toggle("shut")
})