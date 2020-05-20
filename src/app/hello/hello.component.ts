import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  nome = 'Cristian';
  idade = 40;
  cidade = 'Curitiba'
  adicionado = false;
  funcionarios[];

  getIdade() {
    return this.idade;
  }

  adicionar() {

    const numero = Math.round(Math.random() * 100);

    console.log(`Adicionando ${numero}`)
    this.nome = 'Mietlicki ' + numero;
  }

  adicionar2() {

    this.adicionado = true;

    console.log(`Adicionando ${this.nome}`);
  }

  alterarNome(event: any) {
    // console.log(event);
    this.nome = event.target.value;
  }

  alterarIdade(event: any) {
    this.idade = event.target.value;

  }

  adicionarEndereco(enderecoInput: any) {
    console.log(enderecoInput);
    this.nome = enderecoInput;

  }

}
