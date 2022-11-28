var option ={
    animation: true,
    delay: 3000
}
document.getElementById('toastbtn').onclick=function(){
    var meuAlerta = document.getElementById('toastnotice');
    var bsAlerta = new bootstrap.Toast(meuAlerta);
    bsAlerta.show();
};