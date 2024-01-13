import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
   selector: 'app-login-page',
   standalone: true,
   imports: [ CommonModule, MatButtonModule ],
   templateUrl: './login.page.html',
   styleUrls: [ './login.page.scss' ],
})
export class LoginPage {

}
