function login(){
    var user, pass;

    user=document.getElementById("usuario").value;
    pass=document.getElementById("contraseña").value;

     
    if (user > 0 && pass > 0){
        window.location = 'http://www.frsr.utn.edu.ar/';
    }
    else{
        alert('usuario o contraseña incorrectos');
    }
}