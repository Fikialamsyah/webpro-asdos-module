// inisiasi element
let chatBox = document.getElementById("box");
let pesan = document.getElementById("pesan");
let btnKirim = document.getElementById("kirim");
 
// jika button kirim di klik
btnKirim.addEventListener("click", function(){
    let p = document.createElement("P");
    chatBox.appendChild(p);
    p.innerHTML = pesan.value;
})
