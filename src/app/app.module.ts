import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AddListComponent } from "./namelist/addlist.component";
import {
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
} from "@angular/material";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ClubListComponent } from "./clublist/clublist.component";
import { ClubService } from "./services/club.service";
import { HttpClientModule } from "@angular/common/http";
import { NameViewComponent } from "./namelist/nameView/nameView.component";

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    HomeComponent,
    AboutComponent,
    ClubListComponent,
    NameViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [ClubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
