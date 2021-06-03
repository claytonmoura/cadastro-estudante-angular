import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Aluno } from './aluno';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AlunoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private alunosUrl = 'http://localhost:3000/alunos';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.alunosUrl)
      .pipe(
        tap(_ => this.log('fetched alunos')),
        catchError(this.handleError<Aluno[]>('getAlunos', []))
      );
  }

  getAluno(id: number): Observable<Aluno> {
    /** GET hero by id. Will 404 if id not found */
    const url = `${this.alunosUrl}/${id}`;
    return this.http.get<Aluno>(url).pipe(
      tap(_ => this.log(`fetched aluno id=${id}`)),
      catchError(this.handleError<Aluno>(`getAluno id=${id}`))
      );
  }

  /** PUT: update the hero on the server */
updateAluno(aluno: Aluno): Observable<any> {
  const url = `${this.alunosUrl}/${aluno.id}`;
  return this.http.put(url, aluno, this.httpOptions).pipe(
    tap(_ => this.log(`updated aluno id=${aluno.id}`)),
    catchError(this.handleError<any>('updateAluno'))
  );
}

/** POST: add a new hero to the server */
addAluno(aluno: Aluno): Observable<Aluno> {
  return this.http.post<Aluno>(this.alunosUrl, aluno, this.httpOptions).pipe(
    tap((newAluno: Aluno) => this.log(`added aluno w/ id=${newAluno.id}`)),
    catchError(this.handleError<Aluno>('addAluno'))
  );
}

/** DELETE: delete the hero from the server */
deleteAluno(id: number): Observable<Aluno> {
  const url = `${this.alunosUrl}/${id}`;

  return this.http.delete<Aluno>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted aluno id=${id}`)),
    catchError(this.handleError<Aluno>('deleteAluno'))
  );
}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AlunoService: ${message}`);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
