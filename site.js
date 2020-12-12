const form = document.forms[0];

function checkIp(ip) {
    var reg = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ip != "" && reg.test(ip);
}

function checkIfNotNull(str) {
    return str !== '';
}

function showMessage(type, text) {
    Swal.fire({
        text: text,
        icon: type,
        showConfirmButton: false
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

	let formData = new FormData(form);
	for (var value of formData.values()) {
		console.log(value); 
	}

    if (!checkIfNotNull(formData.get('serverName'))) return showMessage('error', 'Заполните поле Название');
    if (!checkIp(formData.get('serverIp'))) return showMessage('error', 'Неправильно заполнено поле Ip');
    if (!checkIfNotNull(formData.get('minecraftVersion'))) return showMessage('error', 'Заполните поле Версии');
    if (!checkIfNotNull(formData.get('gameModes'))) return showMessage('error', 'Заполните поле Режимы');
    if (!checkIfNotNull(formData.get('mods'))) return showMessage('error', 'Заполните поле Моды');

    showMessage('success', 'Сервер успешно добавлен');
});