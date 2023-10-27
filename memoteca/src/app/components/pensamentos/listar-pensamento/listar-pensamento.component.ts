import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../pensamento';
import { PensamentoService } from '../../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  haMaisPensamentos: boolean = true;
  paginaAtual: number = 1;
  filtro: string = '';

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual, this.filtro)
      .subscribe((x) => {
        this.listaPensamentos = x;
      });
  }

  carregarMaisPensamentos() {
    this.service
      .listar(++this.paginaAtual, this.filtro)
      .subscribe((x) => {
        this.listaPensamentos.push(...x);
        if (!x.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service
      .listar(this.paginaAtual, this.filtro)
      .subscribe(x => {
        this.listaPensamentos = x;
      });
  }
}
