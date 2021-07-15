const campos = document.querySelectorAll('.formulario input');
const botao = document.querySelector('.formulario button');

botao.addEventListener('click', e => {

    campos.forEach(campo => {
        e.preventDefault();
        let {value, classList, parentNode, nextElementSibling} = campo;
        value = value.trim(value);

        !value ? classList.add('error') : classList.remove('error');

        if (!classList.contains('error') && nextElementSibling.tagName == 'P')
            parentNode.removeChild(nextElementSibling);

        if (!value) {
            e.preventDefault();
            if (nextElementSibling.tagName != 'P') {
                let elError = createElementError(campo.placeholder + ' cannot be empty');
                parentNode.insertBefore(elError, campo.nextSibling);
            }
        }
    });

}, false);

function createElementError(mensagem) {
    let elError = document.createElement('p');
    let mensagemNode = document.createTextNode(mensagem);
    elError.append(mensagemNode);
    elError.classList.add('error');
    return elError;
}
