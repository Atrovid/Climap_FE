import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionComponent } from '../common/section/section.component';
import { CriticComponent } from "../critic/critic.component";
import { FormulaireComponent } from '../formulaire/formulaire.component';
import { MarketComponent } from "../market/market.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { TechniqueComponent } from "../technique/technique.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SectionComponent, MarketComponent, RouterLink, NavBarComponent, CriticComponent, TechniqueComponent, FormulaireComponent]
})
export class HomeComponent {
  // constructor(){}
  // this._router.navigate(['market'], {fragment:'ancre-test'});
}
