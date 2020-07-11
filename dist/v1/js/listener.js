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
    output = esprima.parseScript(code, { tolerant: true });
	//output = acorn.parse(code);
	// Debugging
	//console.log(data);
	document.getElementById("parse").textContent = JSON.stringify(output);
	//console.log(acorn.parse(code).body[0].body.body[0].declarations[0].init);
       console.log(esprima.parseScript(code, { tolerant: true }));
       console.log(esprima.parseScript(code, { tokens: true }));
       console.log(esprima.parseScript(code, { comment: true }));
       console.log(esprima.parseScript(code, { range: true }));
       console.log(esprima.parseScript(code, { loc: true }));
    
      // Visualization
    const {createFlowTreeBuilder, createSVGRender} = js2flowchart;

    const flowTreeBuilder = createFlowTreeBuilder(),
    svgRender = createSVGRender();

    const flowTree = flowTreeBuilder.build(code),
    shapesTree = svgRender.buildShapesTree(flowTree);

    const svg = shapesTree.print();

    document.getElementById('svgImage').innerHTML = svg;

});
