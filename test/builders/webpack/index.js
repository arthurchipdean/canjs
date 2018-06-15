import { Component, DefineMap } from "../../../can";

const HelloWorldVM = DefineMap.extend("HelloWorld", {
	name: "string"
});

Component.extend({
	tag: "hello-world",
	view: `
		<p>Hello <strong id="hw-name">{{name}}</strong>!</p>
	`,
	ViewModel: HelloWorldVM
});

Component.extend({
	tag: "my-app",
	view: `
		<hello-world name:raw="World"></hello-world>
	`
});
