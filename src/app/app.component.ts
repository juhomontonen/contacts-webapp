import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contacts App';
  message = '';


  onButtonClick() {
    console.log('heippa');
    this.message = 'Heippa';

  }
}
