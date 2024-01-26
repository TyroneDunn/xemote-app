import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeActionComponent } from '../home-action/home-action.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-footer-section',
  standalone: true,
   imports: [ CommonModule, RouterLink, MatIconModule, MatButtonModule, HomeActionComponent ],
  templateUrl: './footer.section.html',
  styleUrls: ['./footer.section.scss']
})
export class FooterSection {
   @Input() isMobile$: Observable<boolean> = of(false);
}
