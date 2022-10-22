import { Component, OnInit } from "@angular/core";
import { Decision, makeID, Message } from "../../decision-tree/decisions";
import { decision } from "../../data/decision";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-deciosion-maker",
  templateUrl: "./deciosion-maker.component.html",
  styleUrls: ["./deciosion-maker.component.css"],
})
export class DeciosionMakerComponent implements OnInit {
  constructor() {}
  decision: Decision;
  maxLayer = 0;
  relocateArrows = true;
  _editMessageIndex: number = NaN;
  NaN = NaN;

  drop(event: CdkDragDrop<string[]>, messages: any[]) {
    moveItemInArray(messages, event.previousIndex, event.currentIndex);
  }
  ngOnInit(): void {
    this.decision = decision;
  }

  listDecisionsOnLayer(i: any): Decision[] {
    let results: any[] = [];

    const findVal = (object: any, key: string, search: number) => {
      if (key === "father") return;
      Object.keys(object).map((k, i) => {
        if (object[key] == search) {
          results.push(object);
        }
        if (object[k] && typeof object[k] === "object" && k != "father") {
          findVal(object[k], key, search);
        }
      });
    };

    findVal(this.decision, "layer", i);
    results = results.filter((value, index, self) => index === self.findIndex((t) => t.id === value.id));

    return results;
  }

  getLayers() {
    console.log(new Array(this.maxLayer + 1).fill(0).map((item, i) => i));
    return new Array(this.maxLayer + 1).fill(0).map((item, i) => i);
  }

  addChild(decision: Decision, childNumber: number) {
    // @ts-ignore
    if (decision["child" + childNumber]) {
      return;
    }
    this.relocateArrows = false;

    // @ts-ignore
    decision["child" + childNumber] = { id: makeID(), layer: decision.layer + 1 };
    // @ts-ignore
    let child = decision["child" + childNumber];
    if (child.layer > this.maxLayer) {
      this.maxLayer = child.layer;
    }
    setTimeout(() => {
      this.relocateArrows = true;
    }, 10);
  }

  addMessage(decision: Decision, p: { whos: string; text: string }) {
    decision.messages.push(p as Message);
  }

  editMessage(editMessageIndex: number) {
    this._editMessageIndex = editMessageIndex;
    setTimeout(() => {
      const input = document.querySelector("#_input") as HTMLInputElement;
      input?.focus();
      console.log(input);
    }, 10);
  }

  stopEdit() {
    this._editMessageIndex = NaN;
  }

  removeMessage(decision: Decision, editMessageIndex: number) {
    // console.log(decision.messages.splice(editMessageIndex, 1));
    decision.messages.splice(editMessageIndex, 1);
  }
}
