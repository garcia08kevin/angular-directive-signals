import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styles: [`
  li{
    cursor:pointer;
  }
  `
  ]
})
export class SideMenuComponent {

  // Manera Tradicional
  // public menuItems: MenuItem[] = [
  //   { title: 'Contador', router: 'counter' },
  //   { title: 'Usuario', router: 'user-info' },
  //   { title: 'Mutaciones', router: 'properties' },
  // ];

  // Mediante Señales
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', router: 'counter' },
    { title: 'Usuario', router: 'user-info' },
    { title: 'Mutaciones', router: 'properties' },
  ]);
}
