const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
const encryptCode = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encriptar(text) {
  text = text.toLowerCase();
  for (let i = 0; i < encryptCode.length; i++) {
    if (text.includes(encryptCode[i][0])) {
      text = text.replaceAll(encryptCode[i][0], encryptCode[i][1]);
    }
  }
  return text;
}

function btnEncriptar() {
  document.querySelector(".initial-result").style.display = "none";
  // console.log(inputText.value);
  const textEncrypted = encriptar(inputText.value);
  outputText.textContent = textEncrypted;
  document.querySelector(".final-result").style.display = "flex";
  // console.log(textEncrypted);
}

function desencriptar(text) {
  text = text.toLowerCase();
  for (let i = 0; i < encryptCode.length; i++) {
    if (text.includes(encryptCode[i][1])) {
      text = text.replaceAll(encryptCode[i][1], encryptCode[i][0]);
    }
  }
  return text;
}

function btnDesencriptar() {
  document.querySelector(".initial-result").style.display = "none";
  // console.log(inputText.value);
  const textEncrypted = desencriptar(inputText.value);
  outputText.textContent = textEncrypted;
  document.querySelector(".final-result").style.display = "flex";
  // console.log(textEncrypted);
}

document.getElementById("copyButton").addEventListener("click", function () {
  const textToCopy = document.querySelector(".output-text").textContent;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      alert("Error al copiar el texto: ", err);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("autoExpand");

  textarea.addEventListener("input", function () {
    this.style.height = "auto";

    this.style.height = this.scrollHeight + "px";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const autoExpandResult = document.getElementById("autoExpandResult");

  const updateHeight = () => {
    autoExpandResult.style.height = "auto";
    autoExpandResult.style.height = autoExpandResult.scrollHeight + "px";
  };

  const observer = new MutationObserver(updateHeight);
  observer.observe(autoExpandResult, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  updateHeight();
});
