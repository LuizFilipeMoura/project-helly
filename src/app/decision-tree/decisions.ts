export enum whos {
  yours = "yours",
  theirs = "theirs",
}
export interface Message {
  whos: whos;
  text: string;
}
export const makeID = () => {
  return Math.floor(Math.random() * 1000000000); // You can remove the Math.floor if you don't want it to be an integer
};
export interface Decision {
  id: number;
  messages: Message[];
  decisivesMessages: string[];
  layer?: number;
  father: Decision;
  child0: Partial<Decision>;
  child1: Partial<Decision>;
  child2: Partial<Decision>;
}
