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
  decision: Decision;
  maxLayer = 0;
  relocateArrows = true;
  _editMessageIndex: number = NaN;
  _editButtonIndex: number = NaN;
  NaN = NaN;
  changeParentInput: number;

  constructor() {}

  drop(event: CdkDragDrop<string[]>, messages: any[]) {
    moveItemInArray(messages, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    const lsDecision = JSON.parse(localStorage.getItem("decision") as string);
    if (lsDecision) {
      // console.log(JSON.parse(JSON.stringify(localStorage.getItem("decision"))) as Decision);
      this.decision = lsDecision;
      this.maxLayer = Number(localStorage.getItem("maxLayer"));
      // this.save()
    } else {
      this.decision = decision;
    }
  }

  save() {
    // console.log(JSON.stringify(this.decision));
    localStorage.setItem("decision", JSON.stringify(this.decision));
    console.log();
  }

  listDecisionsOnLayer(i: any): Decision[] {
    return this.getDecisionBasedOnAtribute("layer", i);
  }

  getDecisionBasedOnAtribute(key: string, value: any) {
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

    findVal(this.decision, key, value);
    results = results.filter((value, index, self) => index === self.findIndex((t) => t.id === value.id));
    return results;
  }

  getLayers() {
    return new Array(this.maxLayer + 1).fill(0).map((item, i) => i);
  }

  addChild(decision: Decision, childNumber: number) {
    // @ts-ignore
    if (decision["child" + childNumber]) {
      return;
    }
    this.relocateArrows = false;

    // @ts-ignore
    decision["child" + childNumber] = {
      id: makeID(),
      // @ts-ignore
      layer: decision.layer + 1,
      decisivesMessages: ["", "", ""],
      messages: [],
      fatherId: decision.id,
    };
    // @ts-ignore
    let child = decision["child" + childNumber];
    console.log(this.decision);
    if (child.layer > this.maxLayer) {
      this.maxLayer = child.layer;
      localStorage.setItem("maxLayer", String(this.maxLayer));
    }
    setTimeout(() => {
      this.relocateArrows = true;
    }, 10);
  }

  async addMessage(decision: Decision, p: { whos: string; text: string }) {
    console.log(decision);
    decision.messages.push(p as Message);
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        let objDiv = document.getElementById("decisionMessage" + decision.id);
        // @ts-ignore
        objDiv.scrollTop = objDiv.scrollHeight;
        resolve();
      }, 10);
    });
    this.save();
  }

  editMessage(editMessageIndex: number) {
    this._editMessageIndex = editMessageIndex;
    setTimeout(() => {
      const input = document.querySelector("#_input") as HTMLInputElement;
      input?.focus();
      console.log(input);
      this.save();
    }, 10);
  }

  stopEdit() {
    this._editMessageIndex = NaN;
    this._editButtonIndex = NaN;
  }

  removeMessage(decision: Decision, editMessageIndex: number) {
    // console.log(decision.messages.splice(editMessageIndex, 1));
    decision.messages.splice(editMessageIndex, 1);
    this.save();
  }

  editButton(j: number) {
    console.log(j);
  }

  changeParent(childIndex: string, parentId: string, _decision: Decision) {
    this.relocateArrows = false;

    const decision = this.getDecisionBasedOnAtribute("id", parentId)[0];
    decision["child" + childIndex] = _decision;
    if (!_decision.fatherId) {
      _decision.fatherId = decision.id;
    }
    setTimeout(() => {
      this.relocateArrows = true;
    }, 10);
  }

  stringfydecision() {
    return JSON.stringify(this.decision);
  }

  removeDecision(decision: Decision) {
    this.relocateArrows = false;
    const father = this.getDecisionBasedOnAtribute("id", decision.fatherId)[0];
    if (father.child0?.id === decision.id) {
      // @ts-ignore
      delete father.child0;
    }
    if (father.child1?.id === decision.id) {
      // @ts-ignore
      delete father.child1;
    }
    if (father.child2?.id === decision.id) {
      // @ts-ignore
      delete father.child2;
    }
    setTimeout(() => {
      this.relocateArrows = true;
    }, 10);
  }
}
