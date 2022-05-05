const formulario = document.getElementById('lista-add');
const listatarefas = document.getElementById('tarefas');

formulario.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('digitar-tarefa');
    addTarefa(inputField.value);
    formulario.reset();
};

function addTarefa(descricao) {
	const containerTarefa = document.createElement('div');
	const novaTarefa = document.createElement('input');
	const labelTarefa = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(descricao);

	novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', descricao);
	novaTarefa.setAttribute('id', descricao);

	labelTarefa.setAttribute('for', descricao);
	labelTarefa.appendChild(taskDescriptionNode);

	containerTarefa.classList.add('task-item');
	containerTarefa.appendChild(novaTarefa);
	containerTarefa.appendChild(labelTarefa);

	listatarefas.appendChild(containerTarefa);
};