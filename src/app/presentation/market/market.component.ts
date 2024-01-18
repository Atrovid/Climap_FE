import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: 'app-market',
    standalone: true,
    templateUrl: './market.component.html',
    styleUrl: './market.component.css',
    imports: [NavBarComponent]
})
export class MarketComponent {
  constructor(private router: Router) {}
  
  navigateOnMap() {
    this.router.navigate(['/', 'map']);
  }
}
