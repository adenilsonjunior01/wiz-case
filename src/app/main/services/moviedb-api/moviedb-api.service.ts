import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { MovieDbConfig } from './moviedb-config';
import { catchError, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviedbApiService {
  private readonly API_MOVIE = `${environment.apiMovie}`;

  constructor(private http: HttpClient) { }

  public getMovies(params: HttpParams): Observable<any> {
    return this.http.get<any>(`${this.API_MOVIE}`, {params}).pipe(
      catchError(err => this.handleError(err)),
      take(1));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Error do client: ', errorResponse.error.message);
      return throwError(errorResponse.error.message);
    } else {
      console.error('Erro na comunicação com o servidor: ', errorResponse);
      return throwError(errorResponse);
    }
  }

}
