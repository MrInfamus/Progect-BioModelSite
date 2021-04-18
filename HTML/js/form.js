/*
function isCheck(name) {
    return document.querySelector('input[name="' + name + '"]:checked');
}

// пример использования:

var form = document.getElementById("MyForm")

form.onSubmit = function(evnt) {
    // Do some asyncrhnous stuff, that will later on submit the form
    alert(isCheck('q1').id);
}*/

function testing(event) {
	var c = document.querySelector('#q11');
	var logq1 = document.getElementById('logq1');
	if (c.checked) {
	  	logq1.textContent = "Верно!";
	} else {
		logq1.textContent = "Неверно!";
	}

	c = document.querySelector('#q22');
	logq1 = document.getElementById('logq2');
	if (c.checked) {
		logq1.textContent = "Верно!";
	} else {
		logq1.textContent = "Неверно!";
	}

	c = document.querySelector('#q31');
	logq1 = document.getElementById('logq3');
	if (c.checked) {
		logq1.textContent = "Верно!";
	} else {
		logq1.textContent = "Неверно!";
	}
	event.preventDefault();

	c = document.querySelector('#q43');
	logq1 = document.getElementById('logq4');
	if (c.checked) {
		logq1.textContent = "Верно!";
	} else {
		logq1.textContent = "Неверно!";
	}
	event.preventDefault();

	c = document.querySelector('#q52');
	logq1 = document.getElementById('logq5');
	if (c.checked) {
		logq1.textContent = "Верно!";
	} else {
		logq1.textContent = "Неверно!";
	}
	event.preventDefault();
}

var form = document.getElementById('MyForm');

form.addEventListener('submit', testing);

