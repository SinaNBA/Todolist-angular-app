import { Component } from '@angular/core';
import { Model } from 'src/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todolist-angular-app';
  model=new Model();

  getName(){
    return this.model.user;
  }
}
