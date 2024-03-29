import { Component } from "@angular/core";
import { BoxWithIconComponent } from "../common/boxWithIcon/box-with-icon.component";
import { SectionComponent } from "../common/section/section.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: "app-critic",
    standalone: true,
    templateUrl: "./critic.component.html",
    styleUrl: "./critic.component.css",
    imports: [BoxWithIconComponent, SectionComponent, NavBarComponent]
})
export class CriticComponent {}
