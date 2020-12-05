function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        if(idade > 18) {
            var thisPromiseCount = 0;

            window.setTimeout(function() {
                resolve('Maior que 18 anos');
            }, Math.random() * 2000);

        } else {
            reject('Menor que 18 anos');
        }
    });
}

checaIdade(20)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });

var inputElement = document.querySelector('input[name=user]');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

function buscaRepositoriosDoUsuario() {
    listElement.innerHTML = '';
    var usuario = inputElement.value;

    if(response === null) {
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(element.description);
    }

    axios.get('https://api.github.com/users/' + usuario + '/repos')
    .then(function (response) {
        console.log(response.data);

        response.data.forEach(element => {
            var liElement = document.createElement('li');
            var textElement = document.createTextNode(element.description);

            liElement.appendChild(textElement);
            listElement.appendChild(liElement);

            console.log(element.description);
        });
    })
    .catch(function (error) {
        console.warn(error);
    });

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
   
    inputElement.value = '';
}

buttonElement.onclick = buscaRepositoriosDoUsuario;