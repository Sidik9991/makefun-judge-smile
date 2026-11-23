// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
// Gate: /output/entry.txt must be UTF-8 text, 1-200 characters, not only
// whitespace. One line about a small good thing that happened today.
// Judge brief, most important first: on subject > warmth > surprise >
// one concrete detail > fresh wording.
//
// PASS 1 — draft candidates, scored 0-5 on warmth / surprise / concrete / fresh:
//
// A. "At dawn my mother called just to say the mangoes are ripe — I could hear
//    her smiling through the phone."                       5 / 2 / 4 / 3 = 14
//    Warm, concrete (mangoes, dawn, the phone), but no turn: the surprise is thin.
// B. "The angkot driver waited while an old man crossed, then waved him on
//    with a grin and charged him nothing."                 5 / 3 / 4 / 3 = 15
//    A real kindness, but the shape is familiar — driver-waves-man-on is a stock scene.
// C. "This morning the neighbour's cat left the sunny step, chose my lap
//    instead, and stayed for two whole cups of coffee."    4 / 4 / 4 / 4 = 16
//    WINNER (pass 1). The cat's choice is the turn; "two whole cups of coffee"
//    is a small true detail that shows the stay, never names the feeling.
// D. "The 5 a.m. rain stopped the moment I reached the gate, and the gecko on
//    the wall blinked like it had arranged it."            3 / 4 / 4 / 4 = 15
//    Fresh telling, but the warmth is a shrug — luck, not kindness.
// E. "The baker pressed the last warm roti into my hands, still crackling,
//    because — she said — it was too good to sell cold."   4 / 3 / 5 / 3 = 15
//    Most concrete detail of the five, but the turn is gentle and the wording
//    leans greeting-card.
//
// PASS 1 pick: C (16/20). Pass 2 re-judges it against new challengers.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "This morning the neighbour's cat left the sunny step, chose my lap instead, and stayed for two whole cups of coffee.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
