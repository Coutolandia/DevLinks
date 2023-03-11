function togglemode() {
    const html = document.documentElement

    // if(html.classlist.contains('light')) {
    //    html.classList.remove('ligth')}
    //    else {
    //        html.classList.add('ligth')}
    //    }
    //}

    html.classList.toggle("light")

    //pegar a tag img
    const img = document.querySelector("#profile img")

    // substitiur a imagem
    if (html.classList.contains("light")) {
        // se tiver mode adicionar a imagem light 
        img.setAttribute("src", "./assets/avatar-light.png")
    }   else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png")
    }
}