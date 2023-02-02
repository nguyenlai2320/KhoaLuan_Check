
document.getElementById("check").onclick = function(){
    let passWord = document.getElementById('password');
    passWord.type = passWord.type == 'password' ? 'text' : 'password';
}

document.getElementById("checkv2").onclick = function(){
    let passWordv2 = document.getElementById('passv2');
    passWordv2.type = passWordv2.type == 'password' ? 'text' : 'password';
}
