import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno: Aluno = {
    id: 1,
    nome: 'Felipe Moura',
    idade: 19,
    altura: 175,
    peso: 65,
    esporte: 'Futebol'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}

