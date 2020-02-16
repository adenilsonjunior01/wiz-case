import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private readonly API_URL = `${environment.apiCadastro}`;
  private readonly HEADERS = new HttpHeaders({
    Authorization: '#ASDFGW#ERWQERTRYT#%$%$@#$%==',
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  constructor(private http: HttpClient) { }

  public submitCaddastroReserva(obj: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/reserva`, obj, {headers: this.HEADERS}).pipe(
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
