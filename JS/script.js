const titulo = document.getElementById('titulo');
console.log(titulo.innerText) ;
console.log(titulo.innerHTML) ;
console.log(titulo) ;

const p = document.querySelector('.texto');
console.log(p.innerText);

const paragrafos = document.querySelectorAll('.texto');


paragrafos.forEach(p => {
  console.log(p.innerHTML);
});
paragrafos.forEach(p => {
  console.log(p.innerText);
});
paragrafos.forEach(p => {
  console.log(p);
});

titulo.innerText = 'Texto alterado com JS';
console.log(titulo.innerText) ;
p.innerHTML = '<span>Texto com <strong>tag</strong></span>';
console.log(p.innerHTML) ;

titulo.style.color = 'red';
titulo.style.fontSize = '40px';

titulo.classList.add('ativo');
titulo.classList.remove('ativo');



const botao = document.getElementById('btn');

botao.addEventListener('click', function () {
  alert('Botão clicado!');
  titulo.classList.toggle('ativo');
});

const novoP = document.createElement('p');
novoP.innerText = 'Parágrafo criado pelo JS';

document.body.appendChild(novoP);
titulo.appendChild(novoP)

novoP.remove();

document.addEventListener('DOMContentLoaded', function () {
  const titulo = document.querySelector('h1');
  console.log(titulo);
});