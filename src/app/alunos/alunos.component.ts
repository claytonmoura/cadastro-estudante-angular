import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { ALUNOS } from '../mock-alunos';
import { AlunoService } from '../aluno.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  selectedAluno?: Aluno;

  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService, private messageService: MessageService) { }

  ngOnInit() {
    this.getAlunos();
  }
  
  onSelect(aluno: Aluno): void {
    this.selectedAluno = aluno;
    this.messageService.add(`AlunosComponent: Selected aluno id = ${aluno.id}`);
  }

  getAlunos(): void {
    this.alunoService.getAlunos()
        .subscribe(alunos => this.alunos = alunos);
  }

}

