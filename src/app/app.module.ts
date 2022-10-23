import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ChatWindowComponent } from "./components/chat-window/chat-window.component";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { DeciosionMakerComponent } from "./components/deciosion-maker/deciosion-maker.component";
import { AppRoutingModule } from "./app-routing.module";
import { NgxDomarrowModule } from "ngx-domarrow";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule } from "@angular/forms";
import { ClipboardModule } from "@angular/cdk/clipboard";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NameModalComponent } from './components/name-modal/name-modal.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [AppComponent, ChatWindowComponent, DeciosionMakerComponent, NameModalComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    NgxDomarrowModule,
    DragDropModule,
    FormsModule,
    ClipboardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
