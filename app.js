console.log("hey vue");

const app = Vue.createApp({
	data() {
		return {
			title: `The Final Empire`,
			author: `Stephen King`,
			age: `50`,
		};
	},
});

app.mount(`#app`);
