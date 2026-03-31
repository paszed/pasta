const input = document.getElementById("input");
const output = document.getElementById("output");
const cleanBtn = document.getElementById("cleanBtn");
const copyBtn = document.getElementById("copyBtn");

cleanBtn.addEventListener("click", () => {
  const text = input.value;

  const cleaned = text
    .split("\n")
    .map(line => line.trim())
    .filter(line => line !== "")
    .filter((line, index, arr) => arr.indexOf(line) === index)
    .join("\n");

  output.value = cleaned;
});

copyBtn.addEventListener("click", () => {
  output.select();
  document.execCommand("copy");
});
