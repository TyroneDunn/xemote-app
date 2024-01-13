import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
   selector: 'app-sign-in-page',
   standalone: true,
   imports: [ CommonModule, MatButtonModule ],
   templateUrl: './sign-in-page.component.html',
   styleUrls: [ './sign-in-page.component.scss' ],
})
export class SignInPageComponent {

}
