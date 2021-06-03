import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService, private messageService: MessageService) { }

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos(): void {
    this.alunoService.getAlunos()
      .subscribe(alunos => this.alunos = alunos);
  }

  add(nome: string): void {
    nome = nome.trim();
    if (!nome) {
      return;
    }
    this.alunoService.addAluno({ nome } as Aluno)
      .subscribe(aluno => {
        this.alunos.push(aluno);
      });
  }
  
  delete(aluno: Aluno): void {
    this.alunos = this.alunos.filter(h => h !== aluno);
    this.alunoService.deleteAluno(aluno.id).subscribe();
  }
}

