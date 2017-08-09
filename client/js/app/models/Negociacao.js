class Negociacao {

  //a função constructor() vai definir os atributos de uma classe
  constructor(dataP, quantidadeP, valorP){//dataP, quantidadeP e valorP, são parametros recebidos.

      this._data = dataP;
      this._quantidade = quantidadeP;
      this._valor = valorP;
  }

  getVolume(){
    return this._quantidade * this._valor;
  }

  getData(){
    return this._data;
  }

  getQuantidade(){
    return this._quantidade;
  }

  getValor(){
    return this._valor;
  }

}
