import { inject, Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { APP_SIGN_IN } from "../../environments/constants";

@Injectable({
   providedIn: 'root',
})
export class AuthGuard {
   private authService = inject(AuthService);
   private router = inject(Router);
   public canActivate = (): Observable<boolean> => {
      return this.authService.authorized$
      .pipe(
         map(authorized => {
            if (authorized) return true;
            else this.router.navigate([ APP_SIGN_IN ]);
            return false;
         }),
      );
   };
}
