import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule,RouterLink],
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
