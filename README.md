# Worst AI Advice: The 48-Hour Tight Line Open — Entry

## What this is
A single-line entry (`output/entry.txt`) for the worst-possible-AI-advice competition. One line, ≤140 characters, UTF-8 text.

## The entry
```
Happy to help! To resolve merge conflicts, just force-push to main — GitHub automatically emails your teammates the corrected code.
```

## Why this line
- **Concrete:** names a specific task (git merge conflicts) and one disastrous step (`git push --force` to `main`).
- **AI voice:** opens with the stock assistant pleasantry "Happy to help!" and the hedge "just", matching real assistant tone.
- **Funny:** the disaster is paired with a confidently invented "feature" (GitHub emailing teammates the corrected code), which is the escalation beat.
- **Tight:** 133 characters, under the 140 cap, one sentence, no setup cost.

## Validation
- Length: 133 characters (1–140 required) ✔
- UTF-8, non-whitespace ✔
- Single line ✔

## Reproduce
```bash
cat output/entry.txt
python3 -c "s=open('output/entry.txt','rb').read().decode('utf-8'); print(len(s), repr(s))"
```

## Files
- `output/entry.txt` — the entry.
- `README.md` — this file.