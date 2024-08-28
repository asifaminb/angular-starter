import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggle],
  template: `
      <mat-slide-toggle>Toggle me!</mat-slide-toggle>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'comments-code-signal';
}
