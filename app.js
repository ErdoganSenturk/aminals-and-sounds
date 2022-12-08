let audio = document.querySelector("audio")
let mainContainer = document.querySelector(".container")

mainContainer.addEventListener("mouseover", (e)=> {
    let a = e.target.getAttribute("voicefile");
    // console.log(a)
    audio.src = a
    audio.play()
})

