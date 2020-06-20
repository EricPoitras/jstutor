var btn_next = document.getElementById("btn_next"),
	btn_run = document.getElementById("btn_run");

var text_output = document.getElementById("text_output");

var line = 0;

const editorElem = document.getElementById("editor");
const flask = new CodeFlask(editorElem, { language: "js", lineNumbers: true });
