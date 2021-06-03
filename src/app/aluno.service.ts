import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Aluno } from './aluno';
import { ALUNOS } from './mock-alunos';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class AlunoService {

  constructor(private messageService: MessageService) { }

  getAlunos(): Observable<Aluno[]> {
    const alunos = of(ALUNOS);
    this.messageService.add('AlunoService: fetched alunos');
    return alunos;
  }


  getAluno(id: number): Observable<Aluno> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const aluno = ALUNOS.find(h => h.id === id)!;
    this.messageService.add(`AlunoService: fetched aluno id=${id}`);
    return of(aluno);
  }
}
