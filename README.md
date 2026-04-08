# 🍝 Pasta

Pasta is a deterministic text cleaning tool.

It removes duplicates, trims whitespace, and outputs clean lines — with zero configuration.

---

## CLI Usage

Pipe any text into Pasta:

```bash
echo -e "a\na\nb" | pasta
```

```bash
cat file.txt | pasta
```

---

## Web Version

Use Pasta instantly in your browser:

https://pasta-one.vercel.app

---

## Behavior

- Removes duplicate lines
- Trims whitespace
- Removes empty lines
- Preserves original content (no rewriting)
- Keeps order of first occurrence

---

## Example

Input:

```
 a  

b
a

c
```

Output:

```
a
b
c
```

---

## Philosophy

Pasta is intentionally dumb and predictable.

- No parsing  
- No analysis  
- No configuration  

It only cleans text.

---

## Workflow

Pasta fits into pipelines:

```bash
tractor ... | pasta
```

---

## Guarantees

- Deterministic output  
- Stable ordering  
- No data interpretation  

---

## License

MIT
