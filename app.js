const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["#603782", "#242875", "#244d75", "#247530", "#c8d64b", "#d6954b", "#cc2d2d" ];

button.addEventListener("click", changeBackground);

function changeBackground() {
    /* rastgele bir renk */
    const rastgeleSayÄ± = Math.floor(Math.random() * colors.length);
    const secilenRenk =  colors[rastgeleSayÄ±];
    console.log(rastgeleSayÄ±, secilenRenk);
    body.style.backgroundColor = secilenRenk;
}
