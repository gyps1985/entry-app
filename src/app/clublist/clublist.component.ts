import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Club } from "../model/club";
import { ClubService } from "../services/club.service";

@Component({
  selector: "app-clublist",
  templateUrl: "./clublist.component.html",
  styleUrls: ["./clublist.component.css"],
})
export class ClubListComponent implements OnInit {
  clubs$: Observable<Club[]>;
  club: Club;

  constructor(private clubservice: ClubService) {}

  ngOnInit() {
    this.clubs$ = this.clubservice.getClubs();
  }

  showInfo = (club: Club) => {
    this.club = club;
  };

  closeCard = (event: any) => {
    this.club = null;
  };
}
