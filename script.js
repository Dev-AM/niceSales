console.log("runing")
btnlogin = document.getElementById("btn_login")
btnlogin.addEventListener("click", function(){
    document.getElementById("feedback_01").innerHTML = "Tentativa de login"
}, false)

function check(usr, key){
    encontrado = false
    for(i=0; i<usuarios.length; i++){
        if(usr == usuarios[i]){
            encontrado = true
        }
    }
}