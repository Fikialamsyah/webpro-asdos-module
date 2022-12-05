// inisiasi element html
let uang = document.getElementById("uang");
let pilihan = document.getElementById("pilihan");
let dolarUs = document.getElementById("dolar_us");
let dolarSgp = document.getElementById("dolar_sgp");
let ringgit_mly = document.getElementById("ringgit_mly");
let yenJpn = document.getElementById("yen_jpn");
let euro = document.getElementById("euro");
let riyal_arab = document.getElementById("riyal_arab");
let hasil = document.getElementById("hasil");

// jika pilihan di klik
pilihan.addEventListener('change', function(){
    // validasi ketika uang bernilai null
    if (uang.value == ""){
        alert("Masukan nilai terlebih dahulu !")
        return false;
    // validasi kurs mata uang     
   }else if (pilihan.value == dolarUs.value){
       let kurs = parseInt(uang.value) * 9915;
       let reverse = kurs.toString().split('').reverse().join('');
       let ribuan = reverse.match(/\d{1,3}/g);
       ribuan = ribuan.join('.').split('').reverse().join('')
       hasil.innerHTML = "Rp. " + ribuan;
   } else if(pilihan.value == dolarSgp.value){
       let kurs = parseInt(uang.value) * 13472;
       let reverse = kurs.toString().split('').reverse().join('');
       let ribuan = reverse.match(/\d{1,3}/g);
       ribuan = ribuan.join('.').split('').reverse().join('')
       hasil.innerHTML = "Rp. " + ribuan;
   }else if(pilihan.value == ringgit_mly.value){
        let kurs = parseInt(uang.value) * 874;
        let reverse = kurs.toString().split('').reverse().join('');
        let ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('')
        hasil.innerHTML = "Rp. " + ribuan;
    }else if(pilihan.value == yenJpn.value){
        let kurs = parseInt(uang.value) * 120;
        let reverse = kurs.toString().split('').reverse().join('');
        let ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('')
        hasil.innerHTML = "Rp. " + ribuan;
    }else if(pilihan.value == euro.value){
        let kurs = parseInt(uang.value) * 15888;
        let reverse = kurs.toString().split('').reverse().join('');
        let ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('')
        hasil.innerHTML = "Rp. " + ribuan;
    }else if(pilihan.value == riyal_arab.value){
        let kurs = parseInt(uang.value) * 3592;
        let reverse = kurs.toString().split('').reverse().join('');
        let ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('')
        hasil.innerHTML = "Rp. " + ribuan;
    }
})