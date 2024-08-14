import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {}