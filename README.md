# 🍝 Pasta

Pasta is a simple, deterministic text cleaning tool.

It reads raw text from stdin and outputs clean, usable lines.

---

## Behavior

- Removes duplicate lines
- Trims whitespace
- Removes empty lines
- Preserves original content (no rewriting)
- Keeps order of first occurrence

---

## Usage

Pipe any text into Pasta:

```bash
echo -e "a\na\nb" | pasta
```

```bash
cat file.txt | pasta
```

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

It does not understand meaning — only structure.

- No parsing
- No analysis
- No configuration

Just clean text.

---

## Workflow

Pasta works well in pipelines:

```bash
tractor ... | pasta
```

---

## Guarantees

- Deterministic output
- Stable ordering
- No data modification (only noise removal)

---

## License

MIT
