import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, retry } from "rxjs";

@Injectable({
   providedIn: 'root',
})
export class HttpService {
   private readonly http = inject(HttpClient);
   private readonly options = {
      observe: 'response' as const,
      withCredentials: true,
      headers: new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("credentials", "true"),
   };

   public getRequest$ = <T>(url: string) : Observable<HttpResponse<T>> =>
      this.http.get<T>(url, this.options)
      .pipe(retry(2));

   public postRequest$ = (url: string, payload: object) : Observable<HttpResponse<object>> =>
      this.http.post(url, payload, this.options)
      .pipe(retry(2));

   public deleteRequest$ = (url: string) : Observable<HttpResponse<object>> =>
      this.http.delete(url, this.options)
      .pipe(retry(2));

   public patchRequest$ = <T>(url: string, payload: object) : Observable<HttpResponse<T>> =>
      this.http.patch<T>(url, payload, this.options)
      .pipe(retry(2));
}
