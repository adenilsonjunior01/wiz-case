import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, take, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CepApiService {
  private readonly API_CEP = `${environment.apiCep}`; // POR O '/json' NO FIM DA URL

  constructor(private http: HttpClient) { }

  public getEnderecoPorCep(cep: any): Observable<any> {
    return this.http.get(`${this.API_CEP}/${cep}/json`).pipe(
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
