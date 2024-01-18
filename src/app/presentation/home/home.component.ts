import { Component } from '@angular/core';
import { SectionComponent } from '../common/section/section.component';
import { MarketComponent } from "../market/market.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SectionComponent, MarketComponent]
})
export class HomeComponent {}
