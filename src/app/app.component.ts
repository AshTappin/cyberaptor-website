import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input()
  private imgPath = "assets/images/cyberaptor_logo.png";
  public bandLogo = require("../assets/images/cyberaptor_logo.png");
  title = 'Cyberaptor site coming soon...';
}
