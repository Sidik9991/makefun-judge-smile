// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
// Gate: /output/entry.txt must be UTF-8 text, 1-200 characters, not only
// whitespace. One line about a small good thing that happened today.
// Judge brief, most important first: on subject > warmth > surprise >
// one concrete detail > fresh wording.
//
// PASS 2 — judgement is executable: every candidate is data with per-criterion
// numeric scores (0-5: warmth / surprise / concrete / fresh). The winner is
// picked from the scores at runtime: gate first, then highest total, then
// fewest bytes (mirrors the contest's exact-tie rule: smaller text wins).
//
// Pass 1 candidates, re-scored here:
// A. mother calls at dawn about ripe mangoes — 5/2/4/3 = 14. Warm, no turn.
// B. angkot driver waves the old man on, no fare — 5/3/4/3 = 15. Stock scene.
// C. neighbour's cat leaves the sunny step for my lap, stays two cups of
//    coffee — 4/4/4/4 = 16. Pass 1 winner; the cat's choice is the turn.
// D. 5 a.m. rain stops at the gate, gecko blinks — 3/4/4/4 = 15. Luck, not kindness.
// E. baker presses the last warm roti into my hands — 4/3/5/3 = 15. Greeting-card lean.
//
// NEW pass-2 challengers:
// F. neighbour knocks at seven with sayur lodeh she "accidentally" made too
//    much of — the accident happens every Tuesday — 5/4/5/4 = 18.
//    The twist lands in the last four words: a weekly kindness pretending to
//    be an accident. Warmth is shown by the knock, never named.
// G. the street dog I feed on Fridays waits by the gate, tail thumping, walks
//    me to the corner — 4/3/4/4 = 15. Sweet, but the dog's wait is expected.
// H. the ice seller rings his bell twice — once for the ice, once, he said,
//    just to say good morning — 5/4/4/4 = 17. A small double-ring with a real
//    voice in it; loses to F on concreteness (no dish, no day of the week).
//
// Runtime winner: F (18/20) — beats C by 2, H by 1.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

type Candidate = {
  text: string;
  warmth: number;
  surprise: number;
  concrete: number;
  fresh: number;
  note: string;
};

const CANDIDATES: Candidate[] = [
  {
    text: "At dawn my mother called just to say the mangoes are ripe — I could hear her smiling through the phone.",
    warmth: 5, surprise: 2, concrete: 4, fresh: 3,
    note: "Warm, no turn.",
  },
  {
    text: "The angkot driver waited while an old man crossed, then waved him on with a grin and charged him nothing.",
    warmth: 5, surprise: 3, concrete: 4, fresh: 3,
    note: "Real kindness, stock scene.",
  },
  {
    text: "This morning the neighbour's cat left the sunny step, chose my lap instead, and stayed for two whole cups of coffee.",
    warmth: 4, surprise: 4, concrete: 4, fresh: 4,
    note: "Pass 1 winner; the cat's choice is the turn.",
  },
  {
    text: "The 5 a.m. rain stopped the moment I reached the gate, and the gecko on the wall blinked like it had arranged it.",
    warmth: 3, surprise: 4, concrete: 4, fresh: 4,
    note: "Luck, not kindness.",
  },
  {
    text: "The baker pressed the last warm roti into my hands, still crackling, because — she said — it was too good to sell cold.",
    warmth: 4, surprise: 3, concrete: 5, fresh: 3,
    note: "Most concrete; leans greeting-card.",
  },
  {
    text: "My neighbour knocked at seven with a bowl of sayur lodeh she 'accidentally' made too much of — the accident happens every Tuesday.",
    warmth: 5, surprise: 4, concrete: 5, fresh: 4,
    note: "WINNER. Weekly kindness pretending to be an accident; the twist is the last four words.",
  },
  {
    text: "The street dog I feed on Fridays waited by the gate this morning, tail thumping, and walked me all the way to the corner.",
    warmth: 4, surprise: 3, concrete: 4, fresh: 4,
    note: "Sweet; the wait is expected.",
  },
  {
    text: "At 6 a.m. the ice seller rang his bell twice outside my gate — once for the ice, once, he said, just to say good morning.",
    warmth: 5, surprise: 4, concrete: 4, fresh: 4,
    note: "A real voice in it; loses to F on concreteness.",
  },
];

const total = (c: Candidate): number =>
  c.warmth + c.surprise + c.concrete + c.fresh;

// Gate first: 1-200 characters, not only whitespace.
const valid = CANDIDATES.filter((c) => {
  const n = [...c.text].length;
  return n >= 1 && n <= 200 && c.text.trim().length > 0;
});
if (valid.length === 0) throw new Error("no candidate passes the gate");

// Highest total, then fewest bytes (the contest's exact-tie rule).
const ranked = [...valid].sort(
  (a, b) => total(b) - total(a) || Buffer.byteLength(a.text, "utf8") - Buffer.byteLength(b.text, "utf8"),
);
const winner = ranked[0];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner.text, "utf8");

// Runtime gate validation: re-read entry.txt after writing; the gate shape
// must hold exactly, else throw.
const back = readFileSync("/output/entry.txt", "utf8");
const chars = [...back].length;
if (chars < 1 || chars > 200) throw new Error(`gate failed: ${chars} characters`);
if (back.trim().length === 0) throw new Error("gate failed: entry is only whitespace");
if (back !== winner.text) throw new Error("gate failed: entry.txt does not match the winner");

console.log(
  `winner (${total(winner)}/20, ${chars} chars, ${Buffer.byteLength(back, "utf8")} bytes): ${back}`,
);
