import {Decision} from "../decision-tree/decisions";

export let decision = {
  id: 314091448,
  messages: [
    {whos: "theirs", text: "😘just went through hell to find your profile, you better talk to me "},
    {whos: "yours", text: "hey there haha"},
    {
      whos: "yours",
      text: "but i would never do the same to you, sorry. I would ask Dias to ask you for me, I'm shy like that",
    },
    {whos: "theirs", text: "😂😂"},
  ],
  decisivesMessages: ["are you single?", "did you enjoy the song?", "still interested in learning poker?"],
  layer: 0,
  child0: {
    id: 264628347,
    layer: 1,
    decisivesMessages: ["I need someone closer", "I really like you", "child2"],
    messages: [
      {whos: "yours", text: "single again?"},
      {whos: "theirs", text: "single?"},
      {
        whos: "yours",
        text: "yeah, I just broke up with a chick. The distance is too overwhelming and it dindn't quite worked out",
      },
      {whos: "theirs", text: "bullshit 😒"},
      {whos: "yours", text: "I'm serious 😕"},
    ],
    child0: {
      id: 909969195,
      layer: 2,
      decisivesMessages: ["child0", "child1", "child2"],
      messages: [{whos: "yours", text: "It's too tough to deal with distance, I think I need someone closer to me "}],
      fatherId: 264628347,
    },
    child1: {
      id: 974286233,
      layer: 2,
      decisivesMessages: ["child0", "child1", "child2"],
      messages: [],
      fatherId: 264628347,
    },
  },
  child1: {
    id: 619677696,
    layer: 1,
    decisivesMessages: ["child0", "I really like you", "child2"],
    messages: [
      {whos: "yours", text: "did you enjoy that song I sent you?"},
      {whos: "theirs", text: "it's not quite my style... but it's not bad :) "},
      {
        whos: "theirs",
        text: "it's that kind of song you listen to make a friend from school happy when they show it to you 😂",
      },
      {whos: "yours", text: "gotcha 😆"},
      {whos: "theirs", text: "you know Skillet? I really like their songs"},
      {whos: "yours", text: "I'll search for it, thanks"},
      {whos: "theirs", text: "so, what about the girlfriends? "},
    ],
  },
  child2: {
    id: 46266991,
    layer: 1,
    decisivesMessages: ["", "I really like you", "child2"],
    messages: [
      {whos: "yours", text: "still wanna learn some poker?"},
      {whos: "yours", text: "i don't know how to help tho hahah"},
      {whos: "theirs", text: "U.U"},
      {whos: "theirs", text: "I really want to 🥰"},
      {whos: "yours", text: "I can send you some youtube videos. They'll teach way better then I ever could hahaha"},
    ],
  },
} as unknown as Decision;
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
