function nextLine(code) {
	//let array = code.split(/\r?\n/),
	//	codefilter = "";
	//for (let i = 0; i < line; i++) {
	//	codefilter += array[i] + "\n";
	//}
	if (line >= chunks.length - 1) {
		btn_next.disabled = true;
		btn_run.disabled = false;
	}
	flask.updateCode(chunks[line]);
    line++;
}

function runProgram(program) {
	text_output.textContent = eval(String(program));
}

function loadProblem() {
	flask.updateCode(chunks[0]);
    let code = flask.getCode();
	output = acorn.parse(code);
}
