function load() {
    var message = window.document.getElementById('message')
    var photo = window.document.getElementById('teste')
    var data = new Date()
 /*    var hora =  data.getHours()  */
    var hora = 14

    message.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        photo.src = 'img/manhã.png'
        document.body.style.background = "rgb(220, 200, 181)";
    } else if (hora < 18){
        photo.src = 'img/tarde.png'
        document.body.style.background = "rgb(164, 98, 82)";
    } else {
        photo.src = 'img/noite.png';
        document.body.style.background = "rgb(9, 11, 23)";
    }
}