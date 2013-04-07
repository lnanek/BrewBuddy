// TODO brewing company header over brews

var BARS = [ {
	name : "Mulvaney's B&L",
	lat : 38.568166,
	lon : -121.443043,
	stock : ["Sierra Nevada Ovila Abbey Quad | Sierra Nevada",
	         "Scrimshaw Pilsner Style Beer | North Coast Brewing Co",
	         "Heroine India Pale Ale | 101 North Brewing Company"
	         ],
	description: "1215 19th St, Sacramento, CA\n(916) 441-6022\nmulvaneysbl.com"
}, {
	name : "DeVere's Irish Pub",
	lat : 38.576058,
	lon : -121.486729,
	stock : ["Sierra Nevada Pale Ale | Sierra Nevada Brewing Company",
	         "Lagunitas IPA | Lagunitas Brewing Company",
	         "Firestone Walker's Reserve | Firestone Walker Brewing Company"
	         ]	,
	description: "1531 L St, Sacramento, CA\n(916) 231-9947\ndeverespub.com"
}, {
	name : "Old Soul at the Weatherstone",
	lat : 38.589504,
	lon : -121.486816,
	stock : ["West Coast IPA | Green Flash Brewing Company",
	         "Irish Red Ale | Rubicon Brewing Company",
	         ]	,
	description: "812 21st St, Sacramento, CA\n(916) 443-6340\noldsoulco.com"
} ];

var CURRENT_LOCATION_LAT_KEY = "CURRENT_LOCATION_LAT_KEY";

var CURRENT_LOCATION_LON_KEY = "CURRENT_LOCATION_LON_KEY";

var SELECTED_BREW_KEY = "SELECTED_BREW_KEY";

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key, defaultValue) {
    var value = this.getItem(key);
    if ( null === value ) {
    	return defaultValue;
    }
    return JSON.parse(value);
};

function getSelectedBrew() {
    return localStorage.getItem(SELECTED_BREW_KEY);
}

function setSelectedBrew(newValue) {
    return localStorage.setItem(SELECTED_BREW_KEY, newValue);
}

function getCurrentLocationLat() {
    return localStorage.getItem(CURRENT_LOCATION_LAT_KEY);
}

function setCurrentLocationLat(newValue) {
    return localStorage.setItem(CURRENT_LOCATION_LAT_KEY, newValue);
}

function getCurrentLocationLat() {
    return localStorage.getItem(CURRENT_LOCATION_LAT_KEY);
}

function setCurrentLocationLat(newValue) {
    return localStorage.setItem(CURRENT_LOCATION_LAT_KEY, newValue);
}

function getCurrentLocationLon() {
    return localStorage.getItem(CURRENT_LOCATION_LON_KEY);
}

function setCurrentLocationLon(newValue) {
    return localStorage.setItem(CURRENT_LOCATION_LON_KEY, newValue);
}

