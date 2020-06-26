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
    output = esprima.parseScript(code, { tolerant: true });
	//output = acorn.parse(code);
    //console.log(acorn.parse(code));
    //console.log(parse(code));
    //console.log(walk.simple(acorn.parse(code)));
    //console.log(walk.ancestor(acorn.parse(code)));
    
    // Visualization
    const {createFlowTreeBuilder, createSVGRender} = js2flowchart;

    const flowTreeBuilder = createFlowTreeBuilder(),
    svgRender = createSVGRender();

    const flowTree = flowTreeBuilder.build(code),
    shapesTree = svgRender.buildShapesTree(flowTree);

    const svg = shapesTree.print();

    document.getElementById('svgImage').innerHTML = svg;
}
