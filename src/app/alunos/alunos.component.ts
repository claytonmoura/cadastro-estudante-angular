import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { ALUNOS } from '../mock-alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos = ALUNOS;
  selectedAluno?: Aluno;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSelect(aluno: Aluno): void {
    this.selectedAluno = aluno;
  }

}

