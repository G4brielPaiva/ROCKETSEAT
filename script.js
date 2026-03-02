function toggleMode(){
    const html = document.documentElement

    //if(html.classList.contains('light')){
    //    html.classList.remove('light')
    //} else{
    //    html.classList.add('light')
    //}
    html.classList.toggle("light")

    //pegar a tag img
    const img = document.querySelector("#profile img")
    const p = document.querySelector("#profile p")

    //substituir a imagem
    //se tiver light mode
    if(html.classList.contains('light')){
        img.setAttribute("src", "./assets/avatar-light.png") 
        p.setAttribute("value", "@maykbrito light")
    }else{
        img.setAttribute("src", "./assets/avatar.png")
        p.setAttribute("value", "@maykbrito dark")
    }
}