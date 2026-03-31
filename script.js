const input = document.getElementById("input");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

const cleanText = (text) => {
  return text
    .split("\n")
    .map(line => line.trim())
    .filter(line => line !== "")
    .filter((line, index, arr) => arr.indexOf(line) === index)
    .join("\n");
};

input.addEventListener("input", () => {
  output.value = cleanText(input.value);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
  copyBtn.innerText = "Copied!";
  setTimeout(() => {
    copyBtn.innerText = "Copy";
  }, 1000);
});
