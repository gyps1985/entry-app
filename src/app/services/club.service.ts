import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Club } from "../model/club";
import { Observable } from "rxjs";

@Injectable()
export class ClubService {
  constructor(private http: HttpClient) {}

  getClubUrl: string = environment.getclub;

  getClubs = (): Observable<Club[]> => {
    return this.http.get<Club[]>(this.getClubUrl);
  };

  getClub = (id: number): Observable<Club> => {
    return this.http.get<Club>(this.getClubUrl + "/" + id);
  };

  postClub = (data: Club): Observable<Club> => {
    return this.http.post<Club>(this.getClubUrl, data, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    });
  };
}
