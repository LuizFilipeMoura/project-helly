import { Decision, makeID, whos } from "../decision-tree/decisions";

export let decision = {
  id: makeID(),
  messages: [
    {
      whos: whos.theirs,
      text: "what is your name",
    },
    {
      whos: whos.yours,
      text: "luiz",
    },
  ],
  decisivesMessages: ["what's your age", "what's your number", "what's your addres"],
  layer: 0,
} as Decision;
// decision.child0 = {
//   id: makeID(),
//   father: decision,
//   messages: [
//     {
//       whos: whos.yours,
//       text: "23",
//     },
//   ],
//   layer: 1,
// };
// decision.child1 = {
//   id: makeID(),
//   layer: 1,
//   father: decision,
//
//   messages: [
//     {
//       whos: whos.yours,
//       text: "91",
//     },
//   ],
// };
// decision.child2 = {
//   id: makeID(),
//   layer: 1,
//   father: decision,
//   messages: [
//     {
//       whos: whos.yours,
//       text: "rua",
//     },
//     {
//       whos: whos.theirs,
//       text: "a é?",
//     },
//     {
//       whos: whos.theirs,
//       text: "a é2?",
//     },
//     {
//       whos: whos.theirs,
//       text: "a é3?",
//     },
//     {
//       whos: whos.yours,
//       text: "sim",
//     },
//     {
//       whos: whos.yours,
//       text: "sim4",
//     },
//     {
//       whos: whos.theirs,
//       text: "a é?4",
//     },
//     {
//       whos: whos.theirs,
//       text: "a é5?",
//     },
//     {
//       whos: whos.theirs,
//       text: "a é6?",
//     },
//     {
//       whos: whos.yours,
//       text: "si2m",
//     },
//   ],
// };
// decision.child0.child0 = {
//   id: makeID(),
//   layer: 2,
// } as Decision;
