class Negociacao {

  //a função constructor() vai definir os atributos de uma classe
  constructor(dataP, quantidadeP, valorP){//dataP, quantidadeP e valorP, são parametros recebidos.

      this._data = new Date(dataP.getTime);//Protege a informação para impedir uma manipulação e alteração da data
      this._quantidade = quantidadeP;
      this._valor = valorP;

      Object.freeze(this);//Congelar Objeto para que não se altere
  }

  get volume(){
    return this._quantidade * this._valor;
  }

  get data(){
    return new Date(this._data.getTime());//cria uma data atual baseado na data do contrato
    }

  get quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }

}
