var data = {
	type: "Program",
	start: 0,
	end: 92,
	body: [
		{
			type: "FunctionDeclaration",
			start: 0,
			end: 82,
			id: { type: "Identifier", start: 9, end: 14, name: "hello" },
			expression: false,
			generator: false,
			async: false,
			params: [],
			body: {
				type: "BlockStatement",
				start: 16,
				end: 82,
				body: [
					{
						type: "VariableDeclaration",
						start: 22,
						end: 56,
						declarations: [
							{
								type: "VariableDeclarator",
								start: 26,
								end: 55,
								id: {
									type: "Identifier",
									start: 26,
									end: 37,
									name: "hello_world",
								},
								init: { type: "Literal", start: 40, end: 55, value: "Hello, World!", raw: '"Hello, World!"' },
							},
						],
						kind: "var",
					},
					{
						type: "ReturnStatement",
						start: 61,
						end: 80,
						argument: {
							type: "Identifier",
							start: 68,
							end: 79,
							name: "hello_world",
						},
					},
				],
			},
		},
		{
			type: "ExpressionStatement",
			start: 83,
			end: 91,
			expression: {
				type: "CallExpression",
				start: 83,
				end: 90,
				callee: {
					type: "Identifier",
					start: 83,
					end: 88,
					name: "hello",
				},
				arguments: [],
			},
		},
	],
	sourceType: "script",
};
