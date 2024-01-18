import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'climap';

  // constructor(private router: Router) {
  // }

  // goToHome() {
  //   this.router.navigate(['/', '']);
  // }
  // goToCritic() {
  //   this.router.navigate(['/', 'critic']);
  // }
  // goToTechnic() {
  //   this.router.navigate(['/', 'technic']);
  // }
}
