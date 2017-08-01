//1° - Selecionou os campos a serem trabalhados;
var campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor")
];

//8° - selecionou a tabela tbody para poder manipular;
var tbody = document.querySelector('table tbody');

//2° - selecionou o form para adicionar um evento;
var i = document.querySelector(".form").addEventListener('submit', function(event){

  //10° - impede que a página recarregue e não dê as informações;
  event.preventDefault();

  //3° - Criou uma tr vazia
  var tr = document.createElement('tr');

  //4° - criou um laço para capturar os valores data, quantidade e valor;
  campos.forEach(function(campo){

    //5° - criou uma td para dicionar o valor do conteudo de texto capturado e atribuiu como filha do tr;
    var td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);

  });

  //6° - criou uma variavel para volume e atribuiu o seu conteudo de texto o resultado da expressão;
  var tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  //7° - atribuiu tdVolume como uma td filha de tr
  tr.appendChild(tdVolume);

  //9° - atribuiu a tr como filha de tbody;
  tbody.appendChild(tr);

  //11° - atribui esses valores depois de submetido o formulario.
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;

  //12° - torna o primeiro campo do formulátio o target inicial para um novo cadastramento;
  campos[0].focus();

});
