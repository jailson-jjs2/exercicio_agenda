const formulario = document.querySelector('#formulario');

const nome = [];
const fone = [];

let linhas = '';

formulario.addEventListener('submit', function(evento){
  evento.preventDefault();

  addLinha();
  atualizaTabela ();
});

function addLinha() {
  const addNome = document.querySelector('#nome');
  const addFone = document.querySelector('#fone');

  if(fone.includes(addFone.value)) {
    alert(`O telefone: ${addFone.value} já foi cadastrado.`);
  } else {
    nome.push(addNome.value);
    fone.push(addFone.value);

    const foneFormatado = formatarFone(addFone.value);

    let linha = `<tr>`;
    linha += `<td>${addNome.value}</td>`;
    linha += `<td>${foneFormatado}</td>`;
    linha += `</tr>`

    linhas += linha;
  }
  addNome.value = '';
  addFone.value = '';
}

function atualizaTabela () {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

function formatarFone(numero) {
  const numeros =  numero.replace(/[^\d]/g, '');

  const regra = /^(\d{2})(\d{1})(\d{4})(\d{4})$/;
  const telefone = numeros.replace(regra, '($1) $2 $3-$4');

  return telefone;
}