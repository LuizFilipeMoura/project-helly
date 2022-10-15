import { AfterViewInit, Component, HostListener, OnInit } from "@angular/core";
import { Decision, Message, whos } from "src/app/decision-tree/decisions";
import { ChatWindowService } from "./chat-window.service";

@Component({
  selector: "app-chat-window",
  templateUrl: "./chat-window.component.html",
  styleUrls: ["./chat-window.component.css"],
})
export class ChatWindowComponent implements OnInit, AfterViewInit {
  constructor(public service: ChatWindowService) {}
  whos = whos;
  previousMessages: Message[] = [];
  beingTyped: string = "";
  messageIndex = 0;
  fullMessageBeingTyped = "";
  decision: Decision;

  ngOnInit(): void {
    this.decision = {
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
    } as Decision;
    this.decision.child0 = {
      messages: [
        {
          whos: whos.yours,
          text: "23",
        },
      ],
    };
    this.decision.child1 = {
      messages: [
        {
          whos: whos.yours,
          text: "91",
        },
      ],
    };
    this.decision.child2 = {
      messages: [
        {
          whos: whos.yours,
          text: "rua",
        },
        {
          whos: whos.theirs,
          text: "a é?",
        },
        {
          whos: whos.theirs,
          text: "a é2?",
        },
        {
          whos: whos.theirs,
          text: "a é3?",
        },
        {
          whos: whos.yours,
          text: "sim",
        },
        {
          whos: whos.theirs,
          text: "a é?4",
        },
        {
          whos: whos.theirs,
          text: "a é5?",
        },
        {
          whos: whos.theirs,
          text: "a é6?",
        },
        {
          whos: whos.yours,
          text: "si2m",
        },
      ],
    };
    this.previousMessages = this.decision.messages;
  }

  @HostListener("window:keyup", ["$event"])
  typing(event: KeyboardEvent) {
    if (this.fullMessageBeingTyped.length > this.beingTyped.length)
      this.beingTyped += this.fullMessageBeingTyped[this.beingTyped.length];
  }

  decide(decisionIndex: number) {
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
    const currentMessage = leftMessages[0];
    if (!currentMessage) return;
    if (currentMessage.whos === whos.theirs) {
      const { whos, text } = currentMessage;
      setTimeout(async () => {
        await this.sendMessage(whos, text);
      }, 1000);
    } else {
      this.findYoursNextMessage(leftMessages);
    }
  }
  ngAfterViewInit() {
    let objDiv = document.getElementById("chat");
    // @ts-ignore
    objDiv.scrollTop = objDiv.scrollHeight;
  }
}
