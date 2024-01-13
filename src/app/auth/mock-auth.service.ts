import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
   providedIn: 'root',
})
export class MockAuthService {
   private isAuthorized : boolean = false;

   public readonly authorized$: Observable<boolean> =
      of(this.isAuthorized);
}
