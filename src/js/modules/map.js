import L from 'leaflet'

export default function map(config) {
	return {
    map: null,
		marker: null,
		init() {
			this.map = L.map(this.$root, {
				center: config.position,
				zoom: config.zoom
			});

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution: '© OpenStreetMap'
			}).addTo(this.map);

			this.marker = L.marker(config.position, {
				icon: L.icon({
					iconUrl: '/assets/map-marker.png',
					iconSize: [26, 42],
					iconAnchor: [13, 42],
					popupAnchor: [0, -50]
				})
			}).addTo(this.map);
			this.marker.bindPopup('Louvre Art Museum, Paris').openPopup();
		}
	};
}
