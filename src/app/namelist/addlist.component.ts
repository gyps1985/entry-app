import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Club } from "../model/club";
import { ClubService } from "../services/club.service";

@Component({
  selector: "app-addlist",
  templateUrl: "./addlist.component.html",
  styleUrls: ["./addlist.component.css"],
})
export class AddListComponent implements OnInit {
  clubGroup: FormGroup = this.frmBuilder.group({
    clubNameCtrl: [""],
    clubHomeCtrl: [""],
    clubManagerCtrl: [""],
    descriptionCtrl: [""],
    urlCtrl: [""],
  });
  constructor(
    private frmBuilder: FormBuilder,
    private clubService: ClubService
  ) {}

  ngOnInit() {}

  addClub = () => {
    if (this.clubGroup.valid) {
      const club: Club = {
        name: this.clubGroup.controls["clubNameCtrl"].value,
        homeStadium: this.clubGroup.controls["clubHomeCtrl"].value,
        manager: this.clubGroup.controls["clubManagerCtrl"].value,
        description: this.clubGroup.controls["descriptionCtrl"].value,
        url: this.clubGroup.controls["urlCtrl"].value,
      } as Club;
      this.clubService
        .postClub(club)
        .subscribe((result) => console.log(result));
    }
  };
}
