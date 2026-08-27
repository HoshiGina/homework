const sound = document.createElement("audio");
sound.src = "./mater/1.mp3";

const cot = document.createElement("div");

cot.id = "cot";
cot.style.display = "none";

cot.innerHTML = `
    <img src="./mater/2.jpg">
    <button onclick="hideImage()">X</button>
`;

document.body.appendChild(sound);
document.body.appendChild(cot);

function showImage() {
  sound.play();
  cot.style.display = "block";
}

function hideImage() {
  cot.style.display = "none";
}
