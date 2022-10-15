export enum whos {
  yours = "yours",
  theirs = "theirs",
}
export interface Message {
  whos: whos;
  text: string;
}
export interface Decision {
  messages: Message[];
  decisivesMessages: string[];
  child0: Partial<Decision>;
  child1: Partial<Decision>;
  child2: Partial<Decision>;
}
