// iniasiasi element
let ubuntu = document.getElementById("ubuntu");
let popOs = document.getElementById("pop_os");
let kali = document.getElementById("kali");
let mint = document.getElementById("mint");
let fedora = document.getElementById("fedora");
let openSuse = document.getElementById("open_suse")
let imgPick = document.getElementById("img_pick");
let img = document.getElementById("img")

imgPick.addEventListener('change', function(){
  // validasi nama
  if (name.value == ""){
    error = "Nama pelanggan harus di isi !";
    document.getElementById("error_name").innerHTML = error;
    return false;
} else if (name.value.length > maxChar){
    error = "Maksimum 30 karakter !";
    document.getElementById("error_name").innerHTML = error;
    return lse;
// validasi email
} else if(email == ""){
    error = "Email harus di isi !";
    document.getElementById("error_email").innerHTML = error;
    return false;
} else if(!polaEmail.test(email.value)){
    error = "Penulisan email tidak benar !";
    document.getElementById("error_email").innerHTML = error;
    return false;
// validasi jam    
}else if(jam.value == ""){
    error = "Jam keberangkatan harus di isi !";
    document.getElementById("error_jam").innerHTML = error;
    return false;
}else if(!polaJam.test(jam.value)){
    error = "Format Jam tidak benar !";
    document.getElementById("error_jam").innerHTML = error;
    return false;
}else if(jam.value > 23.00){
    error = "Jam melebih batas normal !";
    document.getElementById("error_jam").innerHTML = error;
    return false;
// validasi tujuan    
}else if(tujuan == ""){
    error = "Tujuan harus di isi !";
    document.getElementById("error_tujuan").innerHTML = error;
    return false;
// validasi ticket    
}else if(tiket.value == ""){
    error = "Tiket harus di isi !";
    document.getElementById("error_tiket").innerHTML = error;
    return false;
}else if (tiket.value > 10){
    error = "Tiket melebihi batas normal !";
    document.getElementById("error_tiket").innerHTML = error;
    return false;
} else {
    document.getElementById("hasil").innerHTML = "Data";
    document.getElementById("hasil_nama").innerHTML = "Nama : " + name.value;
    document.getElementById("hasil_email").innerHTML = "Email : " + email.value;
    document.getElementById("hasil_jam").innerHTML = "Jam Keberangkatan : " + jam.value;
    document.getElementById("hasil_tujuan").innerHTML = "Tujuan Keberangkatan : " + tujuan.value;
    document.getElementById("hasil_tiket").innerHTML = "Jumlah Tiket : " + tiket.value;
    return false;
}
})