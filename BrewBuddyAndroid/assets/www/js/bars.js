var BARS = [ {
	name : "Drake's Brewing Co. - 1933 Davis Street, San Leandro",
	lat : 40.7142,
	lon : -74.0064
}, {
	name : "Triple Rock Brewery & Alehouse - 1920 Shattuck Avenue, Berkeley",
	lat : 42.7142,
	lon : -74.0064
}, {
	name : "Hoptown Brewing Company - 3015 Hopyard Road #D, Pleasanton",
	lat : 30.7142,
	lon : -74.0064
} ];

// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
	
	var userLat = getCurrentLocationLat();
	var userLon = getCurrentLocationLon();
	
	for ( var i = 0; i < BARS.length; i++ ) {
		var bar = BARS[i];
		console.log("bar name: " + bar.name);		
		
		var distanceKm = distance(userLat, userLon, bar.lat, bar.lon);
		var distanceMi = kmToMiles(distanceKm);
		var distanceMiRounded = Math.round(distanceMi*10)/10;
		
		var newListItem = '<li data-icon="myarrow">' 
			+ bar.name + ' ' + distanceMiRounded + ' mi. </li>';
		$('#barList').append($(newListItem));
		
	}
	
	$('#barList').listview("refresh");

}	

function distance(lat1, lon1, lat2, lon2) {
	
	var R = 6371; // km
	var dLat = toRad((lat2-lat1));
	var dLon = toRad((lon2-lon1));
	var lat1 = toRad(lat1);
	var lat2 = toRad(lat2);

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;
	
	return d;
}

function kmToMiles(value) {
	return value * 1000 / 1609.344;
}

function toRad(value) {
	return value * Math.PI / 180;
}

