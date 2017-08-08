class Negociacao {

  //a função constructor() vai definir os atributos de uma classe
  constructor(dataP, quantidadeP, valorP){//dataP, quantidadeP e valorP, são parametros recebidos.

      this.data = dataP;
      this.quantidade = quantidadeP;
      this.valor = valorP;
  }

  obtemVolume(){

    return this.quantidade * this.valor;

  }
}
