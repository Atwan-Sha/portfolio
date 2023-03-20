const bgText = document.querySelector(".bg-text");
const nav = document.querySelector("nav");
const icon = document.querySelector(".icon");
const menu = document.querySelector(".expand");

const body = document.querySelector("body");
const bgWrapper = document.querySelector(".bg-wrapper");
const fgWrapper = document.querySelector(".fg-wrapper");
// console.log(bgWrapper, fgWrapper);


let bgTextStr = '010010010010000001100001011011010010000001100001011011100010000001100001011101110110010101110011011011110110110101100101001000000110010001100101011101100110010101101100011011110111000001100101011100100010000100100000010100000110110001100101011000010111001101100101001000000110100001101001011100100110010100100000011011010110010100100001001000000011110100101001';
bgTextStr = bgTextStr.repeat(15).split('').join(' ');
bgText.insertAdjacentText('beforeEnd', bgTextStr);

// * nav hb menu
icon.addEventListener("mouseenter", () => {
    menu.style.display = "inline";
});

nav.addEventListener("mouseleave", () => {
    menu.style.display = "none";
});


// * sticky nav
bgWrapper.addEventListener("scroll", () => {
    // console.log('navOffset: ', nav.offsetTop);
    console.log('offset: ', fgWrapper.offsetTop);

    if (bgWrapper.pageYOffset >= nav.offsetTop) {
        // nav.classList.add("sticky");
        // console.log('add sticky');
    } else {
        // nav.classList.remove("sticky");
        // console.log('remove sticky');
    }

});




