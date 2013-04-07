
var CURRENT_LOCATION_LAT_KEY = "CURRENT_LOCATION_LAT_KEY";

var CURRENT_LOCATION_LON_KEY = "CURRENT_LOCATION_LON_KEY";

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

