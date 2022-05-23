import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'material-component';

  //Progress spinner values
  badgeNum: number = 7;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  spinner = false;
  loadBtn() {
    this.spinner = true;
    setTimeout(() => (this.spinner = false), 5000);
  }
}
