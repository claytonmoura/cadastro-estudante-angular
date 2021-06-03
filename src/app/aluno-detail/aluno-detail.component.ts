import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../aluno';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {
  aluno: Aluno | undefined;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAluno();
  }
  getAluno(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.alunoService.getAluno(id)
      .subscribe(aluno => this.aluno = aluno);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.aluno) {
      this.alunoService.updateAluno(this.aluno)
        .subscribe(() => this.goBack());
    }
  }
}