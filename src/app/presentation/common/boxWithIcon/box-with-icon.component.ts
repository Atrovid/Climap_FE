import { Component, Input } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-box-with-icon',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './box-with-icon.component.html',
  styleUrl: './box-with-icon.component.css'
})
export class BoxWithIconComponent {
  @Input('iconSrc')
  iconSrc!: string;
  @Input('color')
  color: 'primary' | 'secondary' = 'primary';
  @Input('position')
  position: 'left' | 'right' = 'left'; 
}
