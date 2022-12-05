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
    if(imgPick.value == ubuntu.value){
        img.setAttribute("src", ".../assets/img/ubuntu.png")
        alert("ini gambar ubuntu.png")
    } else if(imgPick.value == pop_os.value){
        img.setAttribute("src", "../assets/img/pop_os.png")
        alert("ini gambar pop_os.png")
        return false;
    }if(imgPick.value == kali.value){
        img.setAttribute("src", "../assets/img/kali_linux.png")
        alert("ini gambar kali_linux.png")
        return false;
    }if(imgPick.value == mint.value){
        img.setAttribute("src", "../assets/img/linux_mint.png")
        alert("ini gambar linux_mint.png")
        return false;
    }if(imgPick.value == fedora.value){
        img.setAttribute("src", "../assets/img/fedora_linux.png")
        alert("ini gambar fedora_linux.png")
        return false;
    }if(imgPick.value == open_suse.value){
        img.setAttribute("src", "../assets/img/open_suse.png")
        alert("ini gambar open_suse.png")
        return false;
    }
})