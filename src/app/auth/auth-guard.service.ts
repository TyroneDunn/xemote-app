import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
   providedIn: 'root',
})
export class AuthGuardService {
   private authService = inject(AuthService);
   public canActivate = (): Observable<boolean> => this.authService.authorized$;
}
