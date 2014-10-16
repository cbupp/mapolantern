/*jslint browser: true*/
/*global L */

(function (window, document, L, undefined) {
	'use strict';

	/* create leaflet map */
	var map = L.map('map', {
		center: [52.5377, 13.3958],
		zoom: 4
	});

	/* add default stamen tile layer */
	new L.tileLayer('http://{s}.sm.mapstack.stamen.com/($ff5f00[@p],(parks,$126600[source-in]),(mapbox-water,$00b688[source-in]),(terrain-lines,$99000f[source-in]),(terrain-labels,$662600[source-in])[soft-light])/{z}/{x}/{y}.png', {
		minZoom: 0,
		maxZoom: 18,
		attribution: 'Tiles by <a href="http://stamen.com/">Stamen Design</a>, under CC-BY 3.0. Data © <a href="http://www.openstreetmap.org">OpenStreetMap contributors</a>'
	}).addTo(map);

}(window, document, L));