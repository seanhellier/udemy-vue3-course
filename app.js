const app = Vue.createApp({
	data() {
		return {
			url: "https://www.thenetninja.co.uk",
			showBooks: true,
			books: [
				{
					title: "name of the wind",
					author: "patrick rothfuss",
					img: "assets/1.jpeg",
				},
				{
					title: "the way of kings",
					author: "brandon sanderson",
					img: "assets/2.jpeg",
				},
				{
					title: "the final empire",
					author: "brandon sanderson",
					img: "assets/3.jpeg",
				},
			],
		};
	},
	methods: {
		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		},
	},
});

app.mount("#app");
