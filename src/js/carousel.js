import Splide from "@splidejs/splide";

export default function carousel(config) {
	return {
    splide: null,
		init() {
			this.splide = new Splide(this.$root, config);
			this.splide.mount()
		}
	};
}
