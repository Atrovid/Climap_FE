import { Component } from '@angular/core';
import { SectionComponent } from "../common/section/section.component";

@Component({
    selector: 'app-market',
    standalone: true,
    templateUrl: './market.component.html',
    styleUrl: './market.component.css',
    imports: [SectionComponent]
})
export class MarketComponent {

}
