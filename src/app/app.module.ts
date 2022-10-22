import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ChatWindowComponent } from "./components/chat-window/chat-window.component";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { DeciosionMakerComponent } from './components/deciosion-maker/deciosion-maker.component';
import {AppRoutingModule} from "./app-routing.module";
import {NgxDomarrowModule} from "ngx-domarrow";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ChatWindowComponent, DeciosionMakerComponent],
    imports: [BrowserModule, MatIconModule, BrowserAnimationsModule, MatButtonModule, AppRoutingModule, NgxDomarrowModule, DragDropModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
