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

    //substituir a imagem
    //se tiver light mode
    if(html.classList.contains('light')){
        img.setAttribute("src", "./assets/Gemini_Generated_Image_dja04edja04edja0.png")
    }else{
        img.setAttribute("src", "./assets/eugabs.jpeg")
    }
}