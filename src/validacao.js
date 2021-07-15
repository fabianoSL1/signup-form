const campos = document.querySelectorAll('.formulario input');
const botao = document.querySelector('.formulario button');

botao.addEventListener('click', e => {

    campos.forEach(campo => {
        e.preventDefault();
        let {value, classList, parentNode, nextElementSibling} = campo;
        let emailInvalid = (campo.type == 'email' && !validarEmail(value));
        value = value.trim(value);

        !value || emailInvalid ? classList.add('error') : classList.remove('error');

        if (!classList.contains('error') && nextElementSibling.tagName == 'P')
            parentNode.removeChild(nextElementSibling);

        if (!value || emailInvalid) {
            e.preventDefault();
            if (nextElementSibling.tagName != 'P') {
                let mensagem = emailInvalid ? 'Looks like this is not an email' : campo.placeholder + 'cannot be empty';
                let elError = createElementError(mensagem);
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

function validarEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}
