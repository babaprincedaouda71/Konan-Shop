import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  parfumes : Array<any> = [
    {id : 1, name : "One Million", description : "", price : 50},
    {id : 2, name : "Savage", description : "", price : 50},
    {id : 3, name : "Jean Paul Gauthier", description : "", price : 50},
    {id : 4, name : "Invictus", description : "", price : 50},
    {id : 5, name : "Ultra Male", description : "", price : 50},
  ]

  showDetails(parfume: any) {
  }
}
