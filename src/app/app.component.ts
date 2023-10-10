import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'konan';

  actions : Array<any> = [
    {title : "Accueil", "route" : "/home", icon : "bi bi-house"},
    {title : "Catalogue", "route" : "/catalog", icon : ""},
    {title : "Panier", "route" : "/cart", icon : "bi bi-basket-fill"},
    {title : "A Propos", "route" : "/about", icon : "bi bi-question"},
  ]

  currentAction : any

  setCurrentAction(action: any) {
    this.currentAction = action;
  }
}
