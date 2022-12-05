// iniasiasi element
let btnLogin = document.getElementById("login");

// jika button login di klik
btnLogin.addEventListener('click', function(){
    // inisiasi username
    let username = document.getElementById("username").value;
    // inisiasi password
    let password = document.getElementById("password").value;

    // validasi
    if (username == "admin" && password == "123"){
        alert("Login Berhasil !");
        return false;
    } else {
        alert("Username atau password yang anda masukan salah !");
        return false;
    }
})