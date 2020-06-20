function nextLine(code) {
	line++;
	let array = code.split(/\r?\n/),
		codefilter = "";
	for (let i = 0; i < line; i++) {
		codefilter += array[i] + "\n";
	}
	if (line >= array.length) {
		btn_next.disabled = true;
		btn_run.disabled = false;
	}
	flask.updateCode(codefilter);
}

function runProgram(program) {
	text_output.textContent = eval(String(program));
}

function loadProblem() {
	flask.updateCode(data[0].problem);
}
