const app = Vue.createApp({
	data() {
		return {
			showBooks: true,
			books: [
				{
					title: "name of the wind",
					author: "patrick rothfuss",
					img: "assets/1.jpeg",
					isFav: true,
				},
				{
					title: "the way of kings",
					author: "brandon sanderson",
					img: "assets/2.jpeg",
					isFav: false,
				},
				{
					title: "the final empire",
					author: "brandon sanderson",
					img: "assets/3.jpeg",
					isFav: true,
				},
			],
		};
	},
	methods: {
		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		},
		toggleFav(book) {
			book.isFav = !book.isFav;

			// if (book.isFav) {
			//   book.isFav = false;
			// } else {
			//   book.isFav = true;
			// }
		},
	},
	computed: {
		filteredBooks() {
			return this.books.filter((book) => book.isFav);
		},
	},
});

app.mount("#app");

// Challenge - Add to Favs
//   - attach a click event to each li tag (for each book)
//   - when a user clicks an li, toggle the 'isFav' property of that book
