import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private username:string;

  constructor(){}

  submit()
  {
    console.log(this.username);
  }
}
