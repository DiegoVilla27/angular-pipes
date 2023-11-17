import { Component } from "@angular/core";
import { IUser } from "./interfaces/user.interface";
import { TitleCasePipe } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [TitleCasePipe]
})
export class AppComponent {
  title: string = "pipes";
  users: IUser[] = [
    { name: "Diego", age: 31, salary: 1000000 },
    { name: "Carlos", age: 32, salary: 1500000 },
    { name: "Laura", age: 25, salary: 3000000 },
    { name: "Andres", age: 30, salary: 4000000 },
    { name: "Daniela", age: 28, salary: 5000000 }
  ];

  constructor(private titleCasePipe: TitleCasePipe) {}

  ngOnInit(): void {
    this.title = this.titleCasePipe.transform(this.title);
  }
}
