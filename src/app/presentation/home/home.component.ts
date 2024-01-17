import { Component } from '@angular/core';
import { SectionComponent } from '../common/section/section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [SectionComponent],
})
export class HomeComponent {}
