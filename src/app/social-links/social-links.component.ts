import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SocialIconComponent } from '../social-icon/social-icon.component';

@Component({
  selector: 'app-social-links',
  standalone: true,
   imports: [ CommonModule, MatButtonModule, SocialIconComponent ],
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent {

}
