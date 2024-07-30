import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-class';
  descricao = 'Descricao';

  clientePremium = true;

  nome ='';
  texto='';
  id = 0;

  valores= [{
    descricao: 'teste',
    nome: 'nome',
    id: 1
  },
  {
    descricao: 'teste2',
    nome: 'nome2',
    id: 2
  }]

  adicionar(){
    this.valores.push({descricao: this.texto, nome: this.nome, id: this.id})
  }

}
