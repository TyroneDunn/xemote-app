import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
   selector: 'app-home-action',
   standalone: true,
   imports: [ CommonModule, RouterLink, NgOptimizedImage ],
   templateUrl: './home-action.component.html',
   styleUrls: [ './home-action.component.scss' ],
})
export class HomeActionComponent {
   public readonly xemoteLogo : string = "https://xemoteiot.co.za/wp-content/uploads/2022/01/Xemote_Remote-Sensing-and-Control-white-letters-290x83.png";

}
