export function clean(text) {
  const seen = new Set();

  return text
    .split("\n")
    .map(line => line.trim())
    .filter(line => line !== "")
    .filter(line => {
      if (seen.has(line)) return false;
      seen.add(line);
      return true;
    })
    .join("\n");
}


