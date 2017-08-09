class Negociacao {

  //a função constructor() vai definir os atributos de uma classe
  constructor(dataP, quantidadeP, valorP){//dataP, quantidadeP e valorP, são parametros recebidos.

      this._data = dataP;
      this._quantidade = quantidadeP;
      this._valor = valorP;

      Object.freeze(this);//Congelar Objeto para que não se altere
  }

  get volume(){
    return this._quantidade * this._valor;
  }

  get data(){
    return this._data;
  }

  get quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }

}
