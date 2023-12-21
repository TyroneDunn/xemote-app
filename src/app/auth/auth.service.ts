import { inject, Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { catchError, map, Observable, of } from "rxjs";
import { API_PROTECTED_URL } from "../../environments/constants";

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   private readonly http = inject(HttpService);

   public readonly authorized$: Observable<boolean> =
      this.http.getRequest$<object>(API_PROTECTED_URL)
      .pipe(
         map((response) => {
            return response.ok;
         }),
         catchError((): Observable<boolean> => {
            return of(false);
         }),
      );
}
