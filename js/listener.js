btn_next.addEventListener("click", function () {
	nextLine(data[0].problem);
});

btn_run.addEventListener("click", function () {
	runProgram(flask.getCode());
});

document.addEventListener("DOMContentLoaded", function () {
	loadProblem();
});

flask.onUpdate((data) => {
	let output;
	let code = flask.getCode();
	output = acorn.parse(code);
	// Debugging
	console.log(data);
	document.getElementById("parse").textContent = JSON.stringify(output);
	console.log(acorn.parse(code));
});
