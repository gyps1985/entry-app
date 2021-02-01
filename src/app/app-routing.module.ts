import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ClubListComponent } from "./clublist/clublist.component";
import { AddListComponent } from "./namelist/addlist.component";
import { NameViewComponent } from "./namelist/nameView/nameView.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "add", component: AddListComponent },
  { path: "view", component: ClubListComponent },
  { path: "detail/:id", component: NameViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
