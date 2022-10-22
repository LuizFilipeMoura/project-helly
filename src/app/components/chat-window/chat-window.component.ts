import { AfterViewInit, Component, HostListener, OnInit } from "@angular/core";
import { Decision, Message, whos } from "src/app/decision-tree/decisions";
import { ChatWindowService } from "./chat-window.service";
import { decision } from "../../data/decision";
import { HttpClient } from "@angular/common/http";

class Timer {}

@Component({
  selector: "app-chat-window",
  templateUrl: "./chat-window.component.html",
  styleUrls: ["./chat-window.component.css"],
})
export class ChatWindowComponent implements OnInit, AfterViewInit {
  constructor(public service: ChatWindowService, private http: HttpClient) {}
  whos = whos;
  previousMessages: Message[] = [];
  beingTyped: string = "";
  messageIndex = 0;
  fullMessageBeingTyped = "";
  decision: Decision;
  canType = false;
  interval: any;
  hasToDecide = false;

  async ngOnInit() {
    this.http.get("assets/decision.json").subscribe((data) => {
      this.decision = data as Decision;
      console.log(decision);
      this.sendMessage(this.decision.messages[0].whos, this.decision.messages[0].text);
    });
  }

  @HostListener("window:keyup", ["$event"])
  typing(event?: KeyboardEvent) {
    if (this.fullMessageBeingTyped.length > this.beingTyped.length && this.canType) {
      this.beingTyped += this.fullMessageBeingTyped[this.beingTyped.length];
      if (this.fullMessageBeingTyped[this.beingTyped.length])
        this.beingTyped += this.fullMessageBeingTyped[this.beingTyped.length];
    } else if (event?.key == "Enter") {
      this.sendMessage();
    }
  }

  decide(decisionIndex: number) {
    this.canType = true;
    this.hasToDecide = false;
    this.messageIndex = 0;
    switch (decisionIndex) {
      case 0:
        this.decision = this.decision.child0 as Decision;
        break;
      case 1:
        this.decision = this.decision.child2 as Decision;
        break;
      case 2:
        this.decision = this.decision.child2 as Decision;
        break;
    }
    this.findYoursNextMessage(this.decision.messages);
  }
  findYoursNextMessage(leftMessages: Message[]) {
    this.fullMessageBeingTyped = (leftMessages.find((message) => message.whos === whos.yours) as Message).text;
  }
  async sendMessage(_whos: whos = whos.yours, text = this.beingTyped) {
    console.log("entrou");
    this.previousMessages?.push({ whos: _whos, text });
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        let objDiv = document.getElementById("chat");
        // @ts-ignore
        objDiv.scrollTop = objDiv.scrollHeight;
        resolve();
      }, 10);
    });
    this.messageIndex++;
    this.beingTyped = "";
    let leftMessages = [...this.decision.messages];
    leftMessages = leftMessages.splice(this.messageIndex);
    if (leftMessages.length == 0) {
      this.canType = false;
      this.hasToDecide = true;
      return;
    }
    const currentMessage = leftMessages[0];
    if (!currentMessage) return;
    if (currentMessage.whos === whos.theirs) {
      this.canType = false;
      const { whos, text } = currentMessage;
      setTimeout(async () => {
        await this.sendMessage(whos, text);
      }, 1000);
    } else {
      this.canType = true;
      this.findYoursNextMessage(leftMessages);
    }
  }
  ngAfterViewInit() {
    // let objDiv = document.getElementById("chat");
    // // @ts-ignore
    // objDiv.scrollTop = objDiv.scrollHeight;
  }

  continuousTyping() {
    this.interval = setInterval(() => this.typing(), 180);
  }

  clearInterval(interval: Timer) {
    clearInterval(this.interval);
  }

}
