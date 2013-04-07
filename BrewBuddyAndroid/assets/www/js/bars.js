
// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
	
	var userLat = getCurrentLocationLat();
	var userLon = getCurrentLocationLon();
	
	var stock = getSelectedBrew();
	
	var barsWithStock = [];
	for ( var i = 0; i < BARS.length; i++ ) {
		var bar = BARS[i];
		console.log("bar name: " + bar.name);		
		
		if ( -1 != bar.stock.indexOf(stock) ) {
			barsWithStock.push(bar);
			
			var distanceKm = distance(userLat, userLon, bar.lat, bar.lon);
			var distanceMi = kmToMiles(distanceKm);
			var distanceMiRounded = Math.round(distanceMi*10)/10;
			bar.distanceMiRounded = distanceMiRounded;
		}
	}
	
	barsWithStock.sort(function(a,b){return a.distanceMiRounded - b.distanceMiRounded});
	
	for ( var i = 0; i < barsWithStock.length; i++ ) {	
		var bar = barsWithStock[i];
		
		var ll = bar.lat + "," + bar.lon;
		
		var newListItem = '<li data-icon="myarrow"><div><a target="_blank" href="http://maps.google.com/?q=' + ll + '" >' 
			+ bar.name + '</a> ' + bar.distanceMiRounded + ' mi.</div></li>';
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

