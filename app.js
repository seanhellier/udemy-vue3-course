const app = Vue.createApp({
	data() {
		return {
			showBooks: true,
			title: "The Way of Kings",
			author: "Brandon Sanderson",
			age: 45,
		};
	},
	methods: {
		toggleShowBooks() {
			// this.title = 'Words of Radiance'
			this.showBooks = !this.showBooks;
		},
	},
});

app.mount("#app");
