// Criando a array para os amigos
let amigos = [];


function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    if (amigo.value == 0){
        alert('Digite o nome do seu amigo corretamente.');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    // Verifica se o nome já está na lista
     if (amigos.includes(amigo.value)) {
        alert('Este nome já foi adicionado à lista de amigos.');
        return;
     } 

    
    // Adicionando o amigo dentro da array 
    amigos.push(amigo.value);

    // Adicionando amigo a lista de amigos
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';

    atualizarLista();
    atualizarSorteio();
}


function sortear() {
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    // Verificar se foi adicionado 4 ou mais amigos
    if (amigos.length < 4) {
        alert('Você precisa adicionar pelo menos quatro amigos para realizar o sorteio.');
        return;
    }

    // Fazendo as setas da lista do sorteio
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}


function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

// Embaralhando a array 
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

// Reiniciando o jogo
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

