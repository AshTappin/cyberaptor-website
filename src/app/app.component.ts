import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input()
  private imgPath = "assets/images/cyberaptor_logo.png";

  @Input()
  private epImgPath = "assets/images/neonslaughtArt.png";

  @Input()
  private topNavigationButtons: Array<string>;

  constructor() {
    this.topNavigationButtons = ["News", "About", "Listen", "Contact"]
  }

}
