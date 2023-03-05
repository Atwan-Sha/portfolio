
const bgText = document.querySelector(".bg-text");
const nav = document.querySelector("nav");
const icon = document.querySelector(".icon");
const menu = document.querySelector(".expand");


const bgTextStr = '010010010010000001100001011011010010000001100001011011100010000001100001011101110110010101110011011011110110110101100101001000000110010001100101011101100110010101101100011011110111000001100101011100100010000100100000010100000110110001100101011000010111001101100101001000000110100001101001011100100110010100100000011011010110010100100001001000000011110100101001';
let bgTextStrSpace = '';
for(let i=0; i<bgTextStr.length; i++){
    bgTextStrSpace += bgTextStr[i] + ' ';
}
// bgText.innerText = bgTextStrSpace;
for(let i=0; i<15; i++){
    bgText.insertAdjacentText('beforeEnd', bgTextStrSpace);
}

// console.log(bgTextStrSpace);

// * nav hb menu
icon.addEventListener("mouseenter", () => {
    menu.style.display = "inline";
});

nav.addEventListener("mouseleave", () => {
    menu.style.display = "none";
})


