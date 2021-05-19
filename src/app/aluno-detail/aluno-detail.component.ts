import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {
  @Input() aluno?: Aluno;

  constructor() { }

  ngOnInit(): void {
  }

}
