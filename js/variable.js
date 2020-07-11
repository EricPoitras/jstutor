const editorElem = document.getElementById("main-editor");
const flask = new CodeFlask(editorElem, { language: "js", lineNumbers: true, readonly: true });
const editorElem2 = document.getElementById("node-editor");
const flask2 = new CodeFlask(editorElem2, { language: "js", lineNumbers: false });
