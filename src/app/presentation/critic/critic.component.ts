import { Component } from '@angular/core';
import { BoxWithIconComponent } from '../common/boxWithIcon/box-with-icon.component';

@Component({
  selector: 'app-critic',
  standalone: true,
  imports: [BoxWithIconComponent],
  templateUrl: './critic.component.html',
  styleUrl: './critic.component.css'
})
export class CriticComponent {}
