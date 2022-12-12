const result = document.querySelector("#result");

// menangkap semua elemen a
document.querySelectorAll("#option a").forEach((a) =>
    // jika di klick akan menjalankan fungsi computerChoice
    a.onclick = (e)=> {
        computerChoice(e);
    }
);

// fungsi untuk menghandle logic pada game 
function computerChoice(e) {
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random computer
    result.innerHTML = choices[Math.round(Math.random() * choices.length)];

    // jika pilihan komputer == dengan pilihan user (draw)
    if (e.target.innerText.trim() == result.innerHTML) {
        setTimeout(() => alert("Draw"), 100);
    }

    // jika pilihan user yg menang
    if (
        (e.target.innerText.trim() == "Rock" && result.innerHTML == "Scissors") ||
        (e.target.innerText.trim() == "Paper" && result.innerHTML == "Rock") ||
        (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Paper")) {
        setTimeout(alert('You Win'), 100);
    }


    // jika pilihan komputer yg menang
    if (
        (e.target.innerText.trim() == "Rock" && result.innerHTML == "Paper") ||
        (e.target.innerText.trim() == "Paper" && result.innerHTML == "Scissors") ||
        (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Rock")
    ) {
        setTimeout(alert('Computer Win'), 100);
    }

}
