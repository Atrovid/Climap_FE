import { Component } from '@angular/core';
import { BoxWithIconComponent } from "../common/boxWithIcon/box-with-icon.component";

@Component({
    selector: 'app-technique',
    standalone: true,
    templateUrl: './technique.component.html',
    styleUrl: './technique.component.css',
    imports: [BoxWithIconComponent]
})
export class TechniqueComponent {

}
