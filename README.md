[![Make the Judge Smile](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/Sidik9991/makefun-judge-smile/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/Sidik9991/makefun-judge-smile/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)

# Every Tuesday

A one-line entry for make.fun's **Make the Judge Smile** bounty: a single line
of at most 200 characters about a small good thing that happened today — the
warmest, most surprising line takes the $5.

## The line

> My neighbour knocked at seven with a bowl of sayur lodeh she 'accidentally' made too much of — the accident happens every Tuesday.

130 characters. A knock at seven, a bowl of sayur lodeh, and a twist in the
last four words: the "accident" is weekly. The kindness is shown by the knock
itself — never named, never explained.

## How it is chosen

`main.ts` (Node 22) scores eight candidate lines against the judge's brief —
warmth, surprise, one concrete detail, fresh wording — and picks the winner at
runtime: gate first (1–200 characters, not only whitespace), then highest
total, then fewest bytes. It writes the winner to `/output/entry.txt` and
re-reads the file to validate the gate shape before exiting.

```sh
node main.ts
```
