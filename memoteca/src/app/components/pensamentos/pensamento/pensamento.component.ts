import { PensamentoService } from '../../pensamento.service';
import { Pensamento } from './../../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Victor Ribeiro',
    modelo: 'modelo3',
    favorito: false
  };

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  constructor(
    private service: PensamentoService
  ) {}

  ngOnInit(): void {}

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito == false){
      return 'coracao.svg'
    }else{
      return 'coracao_rosa.png'
    }
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe();
    console.log(this.pensamento.favorito)
  }
}
