import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landingApp';
  _router = inject(Router);

  navigateToSales() {
    this._router.navigate(['/sales']);
  }

  navigateToAccounts() {
    this._router.navigate(['/accounts']);
  }
}
