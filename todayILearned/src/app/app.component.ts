import { Component } from "@angular/core";
import { AmplifyService } from "aws-amplify-angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Today I Learned";

  constructor(private amplify: AmplifyService) {}

  getTILs() {
    console.log(this.amplify.api());
  }
}
