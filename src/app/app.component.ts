import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input()
  public imgPath = "assets/images/cyberaptor_logo.png";

  @Input()
  public epImgPath = "assets/images/neonslaughtArt.png";

}
