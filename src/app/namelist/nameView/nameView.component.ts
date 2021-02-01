import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Club } from "src/app/model/club";

@Component({
  selector: "app-nameview",
  templateUrl: "./nameView.component.html",
  styleUrls: ["./nameView.component.css"],
})
export class NameViewComponent implements OnInit {
  _selectedClub: Club;
  get selectedClub(): Club {
    return this._selectedClub;
  }
  @Input()
  set selectedClub(value: Club) {
    this._selectedClub = value;
  }

  @Output()
  closeCard = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  close = () => {
    this.closeCard.emit(true);
  };
}
